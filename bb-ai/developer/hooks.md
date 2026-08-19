---
title: Hooks
description: WordPress action and filter hooks provided by Beaver Builder AI for extending plugin behavior.
---

WordPress action and filter hooks provided by Beaver Builder AI for extending plugin behavior.

## Plugin hooks

Beaver Builder AI provides WordPress action and filter hooks that let you extend plugin behavior from your own plugin or theme.

### `fl_design_system_booted`

Fires after the plugin has finished registering all providers. Use this action to access plugin services or run initialization code that depends on the plugin being fully loaded.

```php
add_action( 'fl_design_system_booted', function ( $plugin, $settings, $chat_store ) {
    // $plugin      — the Plugin instance
    // $settings    — the settings store instance
    // $chat_store  — the chat store instance
}, 10, 3 );
```

## Form hooks

These hooks extend what happens when a form is submitted.

### `fl_ds_form_action_registry` (filter)

Filters the `FormActionRegistry` instance that resolves form submission actions. The registry arrives seeded with the built-in `email`, `webhook`, `custom`, and `redirect` handlers. Use this filter to register custom action types or replace built-in ones.

```php
add_filter( 'fl_ds_form_action_registry', function ( $registry ) {
    $registry->register( 'my-action', new MyCustomFormAction() );
    return $registry;
} );
```

The handler class implements `FL\DesignSystem\Form\FormActionInterface`:

```php
use FL\DesignSystem\Form\FormActionInterface;

class MyCustomFormAction implements FormActionInterface {

    public function handle( array $submission, array $action_config ): array {
        // $submission    — the full submission payload:
        //   'fields'   => submitted values keyed by field name
        //   'form_id'  => the form element's id attribute
        //   'form_key' => the stable key of the form's settings entry
        //   'block_id' => the containing block
        //   'post_id'  => the page the form was submitted from
        //   'context'  => [ 'admin_email', 'site_url', 'form_title' ]
        // $action_config — this action's settings as configured on the form

        return [
            'success'  => true,
            'redirect' => null,
            'error'    => null,
        ];
    }
}
```

Actions run independently per submission; returning `'success' => false` reports this action as failed without stopping the others.

### Custom form action hooks

When a form uses the **Custom handler** action type, the plugin fires a dynamic WordPress action. The hook name is the prefix `fl_ds_form_custom/` followed by the hook slug entered in the action's settings.

```php
add_action( 'fl_ds_form_custom/my-hook', function ( array $fields, array $context ) {
    // $fields  — submitted form values keyed by field name
    // $context — [ 'form_key' => ..., 'form_id' => ..., 'block_id' => ..., 'post_id' => ... ]
}, 10, 2 );
```

If you only need the submitted values, you can omit the `$context` parameter:

```php
add_action( 'fl_ds_form_custom/my-hook', function ( array $fields ) {
    $email = $fields['email'] ?? '';
    // ...
} );
```

## Capability hooks

These filters control who can use the plugin's content creation and AI features.

### `fl_ds_user_can_create_content` (filter)

The central access gate for creating and editing raw design system content: block templates, CSS, and JavaScript. By default it returns `current_user_can( 'unfiltered_html' )`, which covers administrators and, on single-site installs, editors.

This filter applies everywhere raw content is written or shown: the chat in both editors, the block code editors, REST write routes, MCP abilities, kit imports, and the admin page's visibility.

```php
add_filter( 'fl_ds_user_can_create_content', function ( bool $can ) {
    if ( current_user_can( 'my_custom_role_cap' ) ) {
        return true;
    }
    return $can;
} );
```

### `fl_ds_can_send_messages` (filter)

Controls whether the AI chat is available. Defaults to `true`; return `false` to hide the chat send UI for specific conditions. The filter receives no user argument, so use `current_user_can()` or environment checks inside your callback.

```php
add_filter( 'fl_ds_can_send_messages', function ( bool $can ) {
    // Disable chat on staging environments.
    if ( defined( 'WP_ENV' ) && 'staging' === WP_ENV ) {
        return false;
    }
    return $can;
} );
```

### `fl_ds_can_generate` (filter)

Controls whether AI generation may start for a user. It receives the current decision and the user ID, and runs at the start of every generation job. The plugin's own per-user credit quota is enforced through this filter, so your callback can tighten or relax it.

```php
add_filter( 'fl_ds_can_generate', function ( bool $can, int $user_id ) {
    // Restrict generation to specific users.
    if ( ! in_array( $user_id, [ 1, 5 ], true ) ) {
        return false;
    }
    return $can;
}, 10, 2 );
```

## Webhook destination allowlist

One filter adjusts the plugin's outbound URL protection.

### `fl_ds_url_guard_allowlist` (filter)

Form webhook destinations are rejected when they resolve to private or internal network addresses. If you need to deliver webhooks to a known-internal host, for example an internal automation service, add its hostname to the allowlist.

```php
add_filter( 'fl_ds_url_guard_allowlist', function ( array $hosts ) {
    $hosts[] = 'automation.internal.example.com';
    return $hosts;
} );
```

## Capabilities

Design systems are stored in a custom post type with its own capability set (`edit_design_systems`, `edit_others_design_systems`, `delete_design_systems`, and so on). The plugin grants these to roles automatically:

- Roles with `unfiltered_html` receive the base design system capabilities.
- Roles that also have `edit_others_posts` additionally receive the `*_others_*` capabilities, letting them manage design systems created by other users.

Day-to-day access is not gated on these capabilities directly. The plugin's surfaces check `fl_ds_user_can_create_content` (which defaults to `unfiltered_html`), while the Beaver Builder AI settings page and other admin-only endpoints require `manage_options`. To open the plugin to a custom role, use the `fl_ds_user_can_create_content` filter above.
