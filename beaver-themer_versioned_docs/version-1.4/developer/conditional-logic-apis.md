---
id: conditional-logic-apis
title: Conditional logic APIs
sidebar_label: Conditional logic APIs
---

This document covers APIs for writing custom rules for the Beaver Themer conditional logic feature in third-party plugins.

:::note **Notes**

  * Add these rules via a plugin as `bb_logic_init` is fired during the `plugins_loaded` WordPress action, which occurs before the theme is loaded.

  * Beaver Themer’s conditional logic feature does not currently support dynamic rules that are specific to each unique visitor of your website, such as cookies and geotargeting. Caching prevents those rules from working, because a single cached copy of the page is returned and cannot be modified using conditional logic. In the future, we will be working on making dynamic rules possible with caching.

:::

## What is a rule?

A rule is a set of data edited by a simple form and evaluated into a true or false boolean value to decide if a particular action should happen or not. For example, in Beaver Builder we use conditional logic to decide if a piece of content should render. In Beaver Themer we use conditional logic to decide if entire layouts should render. The following screenshot shows an example of a conditional rule form in the Beaver Themer UI.

![](/img/conditional-logic-apis-50280878.png)

## Add a Custom Rule

There are two steps to adding a custom rule:

  * Frontend rule registration in JavaScript
  * Server-side rule processing in PHP.

You can follow along by [downloading the example plugin here](https://www.wpbeaverbuilder.com/downloads/beaver-themer-example-rules.zip).

### 1 Frontend Rule Registration

1. Create a new JavaScript file in your plugin.  
  In this example, a file called _rules.js_ in the example plugin is created and enqueued on the `bb_logic_enqueue_scripts` action, as follows.  
  ```php
  add_action( 'bb_logic_enqueue_scripts', function() {
    wp_enqueue_script(
      'bb-logic-example-rules',
      BB_LOGIC_EXAMPLE_URL . 'js/rules.js',
      array( 'bb-logic-core' ),
      '1.0',
      true
    );
  } );
  ```
2. Add a new rule type in your _rules.js_ file using the `BBLogic.api.addRuleType` function.   
  The following example shows a rule created to match the number of posts the current user has authored. See the section below on the Frontend API for more information about using the functions in the API object `BBLogic` for creating new rule types.  

  ```javascript
  // Frontend rule registration step2
  var addRuleType = BBLogic.api.addRuleType
  var __ = BBLogic.i18n.__

  addRuleType( 'bb-logic-example/user-post-count', {
      label: __( 'User Post Count' ),
      category: 'user',
      form: {
        operator: {
          type: 'operator',
          operators: [
            'equals',
            'does_not_equal',
            'is_less_than',
            'is_greater_than',
          ],
        },
        count: {
          type: 'number',
          defaultValue: '0',
        },
      },
  } )
  ```

### 2 Server-side rule processing

  1. Create a new PHP file in your plugin. In this example, a file called _rules.php_ in the example plugin is included on the `bb_logic_init` action.  
  ```php
  add_action( 'bb_logic_init', function() {
    require_once BB_LOGIC_EXAMPLE_DIR . 'includes/rules.php';
  } );
  ```

  2. Register a callback function for processing your rule using `BB_Logic_Rules::register`.  
  See the section below on the backend API for more information about using the `BB_Logic_Rules` methods for processing rules.

  ```php
  BB_Logic_Rules::register( array(
    'bb-logic-example/user-post-count' => 'bb_logic_example_user_post_count',
  ) );

  function bb_logic_example_user_post_count( $rule ) {
      $user = wp_get_current_user();
      return BB_Logic_Rules::evaluate_rule( array(
        'value' => count_user_posts( $user->ID ),
        'operator' => $rule->operator,
        'compare' => $rule->count,
      ) );
  }
  ```

That’s it! You’ve successfully created your first rule.

## Frontend API

To make it easy to work with the rules API, there's an object on the global window object called `BBLogic`. That object provides the following functions for your convenience.

### BBLogic.api

This API object contains the following functions for working with rules and rule categories. This is the main object you'll use to create new rule types.

#### addRuleType( id, props )

Adds a new rule to the conditional logic form. It accepts two arguments: a rule ID and a `props` configuration object.

**id** string  
  A unique value assigned to each rule. The value should follow the format of _namespace_ / _rule_ , where namespace is the name of your plugin, theme, or other identifying information. For example, if my company name was Acme Co. and my rule was for movies, my rule I would be `acme-co/movies`.

**props** object  
  The required properties that must be defined on the `props` object for a rule to be added.

  * **label** string  
  The human-readable label for each rule that is shown in the conditional logic form.

  * **category** string  
  The ID of a registered rule category. See the `addRuleTypeCategory` function for information about adding custom rule categories.

  * **form** object | function  
  Specifies the conditional logic form field config for a rule. Each property on the `form` object must be the key for a field as well as an object for the field’s config. This is similar to but much simpler than Beaver Builder’s module form API, written in JavaScript. See the Form Field API section below for details about each type of field that you can register.

Examples of `addRuleType()`:

```js
// Example of BBLogic.api.addRuleType()
BBLogic.api.addRuleType( 'my-plugin/my-rule', {
  label: BBLogic.i18n.__( 'My Rule' ),
  category: 'my-category',
  form: {
    operator: {
      type: 'operator',
        operators: [
          'equals',
          'does_not_equal',
        ],
      },
      compare: {
        type: 'text',
      },
    },
} )
```

The `form` property may also be a function that returns a form config object, as described above. That function receives an object with the current form’s data, which is useful for modifying your form config based on user input, as in the following example.

```php
// Example of BBLogic.api.addRuleType()
BBLogic.api.addRuleType( 'my-plugin/my-rule', {
  label: BBLogic.i18n.__( 'My Rule' ),
  category: 'my-category',
  form: function( props ) {
    var operator = props.rule.operator
    return {
      operator: {
        type: 'operator',
        operators: [
          'equals',
          'does_not_equal',
          'is_set',
          'is_not_set',
        ],
      },
      compare: {
        type: 'text',
        visible: 'is_set' !== operator || 'is_not_set' !== operator,
      },
    }
  },
} )
```

The `form` property can also be populated by using the `getFormPreset` function. That function lets you utilize common form configurations without having to define them yourself. See the `getFormPreset` function for more info on how that works.

```php
// Example of BBLogic.api.addRuleType()
BBLogic.api.addRuleType( 'my-plugin/my-rule', {
  label: BBLogic.i18n.__( 'My Rule' ),
  category: 'my-category',
  form: BBLogic.api.getFormPreset( 'string' ),
} )
```

#### removeRuleType( id )

Removes a registered rule type with the provided ID. This must be called after the rule has been added. Calling it before will have no effect.

**id** string  
  The ID of the rule to remove.

Example of `removeRuleType()`:

```php
BBLogic.api.removeRuleType( 'my-plugin/my-rule' )
```

#### addRuleTypeCategory( id, props )

The `addRuleTypeCategory` function allows you to add a new rule category to the conditional logic form. It accepts two arguments, a rule category `id` and a `props` configuration object.

**id** string  
  A value assigned to that must be unique and cannot be defined for another category.

**props** object  
  The required properties that must be defined on the `props` object for a category.

  * **label** string  
  The human-readable label for each category that is shown in the conditional logic form.

Example of `addRuleTypeCategory()`:

```php
// Example of BBLogic.api.addRuleTypeCategory()
BBLogic.api.addRuleTypeCategory( 'my-category', {
  label: BBLogic.i18n.__( 'My Category' )
} )
```

#### getFormPreset( id )

Defines the form value of the `props` object for the `addRuleType` function. This function lets you utilize common form configurations without having to define them yourself.

**id** string  
  The ID for the form preset. The following form presets are currently available as `id` values.
  * **address** \- for matching the various parts of an address
  * **date** \- for matching complex date rules such as on, over, before or after
  * **key-value** \- for matching key/value pairs
  * **number** \- for matching a specific number
  * **string** \- for matching a specific string

Example of `getFormPreset()`:

```php
BBLogic.api.getFormPreset( 'string' )
```

### BBLogic.i18n

The i18n object contains methods for making your rules available for translation.

#### `__( string )`

Makes a string available for translation.

**string** string  
The string to make available for translation.

Example of `BBLogic.i18n`:

```php
BBLogic.i18n.__( 'My Label' )
```

## Form Field API

The form field API provides a basic set of fields that you can register for your rule forms when calling `BBLogic.api.addRuleType`.

### date

A text input that displays a date picker when focused.

```js
// A text input that displays a date picker when focused.
my_date: {
  type: 'date',
},
```

### datetime

A text input that displays a date and time picker when focused.

```js
// A text input that displays a date and time picker when focused.
my_datetime: {
  type: 'datetime',
},
```

### number

An input for entering a number.

```js
// An input for entering a number.
my_number: {
  type: 'number',
  defaultValue: 0,
  placeholder: '0',
},
```

### operator

A select input for picking one of the provided core operators for your rules.

Instead of using the `operator` field, you can create a select field with custom operators. However, the `operator` field provides common operators that can be used with the `evaluate_rule` method on the server side, saving you the hassle of having to write that logic yourself.

Here’s the complete list of operators. Include only the ones needed for your rule.

```js
// Complete list of operators.
my_operator: {
  type: 'operator',
  operators: [
    'equals',
    'does not equal',
    'is less than',
    'is less than or equal to',
    'is greater than',
    'is greater than or equal to',
    'starts with',
    'ends with',
    'contains',
    'does not contain',
    'include',
    'includes',
    'do not include',
    'does not include',
    'is set',
    'is not set',
    'is empty',
    'is not empty',
    'on',
    'is on',
    'not on',
    'is not on',
    'before',
    'is before',
    'on or before',
    'is on or before',
    'after',
    'is after',
    'on or after',
    'is on or after',
    'within',
    'is within',
    'not within',
    'is not within',
    'between',
    'is between',
    'not between',
    'is not between',
    'in the past',
    'over',
  ],
},
```

### select

A select input for picking one of the provided values.

```js
// A select input for picking one of the provided values.
my_select: {
  type: 'select',
  options: [
    {
      label: 'Option 1',
       value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
  ]
},
```

In addition to providing an array of predefined options, you can also specify a REST API route that will request the options from the server. This is useful when you need dynamically generated options such as the taxonomies available on a site. See the REST API Routes section for more information about the core routes that are available.

```js
// Example of specifying a REST API route that will dynamically generate form options from the server.
my_select: {
  type: 'select',
  route: 'bb-logic/v1/wordpress/taxonomies',
},
```

You can also use a function to define your form and modify the route based on user input. For example, you can change the route form terms based on the selected taxonomy, as in the following example.

```js
// Example of modifying the REST API route based on user input.
form: function( props ) {
  var taxonomy = props.rule.taxonomy
  return {
    operator: {
      type: 'operator',
      operators: [
        'equals',
        'does_not_equal',
      ],
    },
    taxonomy: {
      type: 'select',
      route: 'bb-logic/v1/wordpress/taxonomies',
    },
    term: {
      type: 'select',
      route: taxonomy ? 'bb-logic/v1/wordpress/terms?taxonomy=' + taxonomy : null,
      visible: taxonomy,
    },
  }
},
```

### suggest

A text input that shows a list of suggestions based on the text that was entered. Suggestions are populated using a REST API route as shown in the following example.

```js
// A text input that shows a list of suggestions based on the text that was entered.
username: {
  type: 'suggest',
  placeholder: 'Username',
  route: 'bb-logic/v1/wordpress/users?suggest={search}',
},
```

:::info
The `{search}` string will be replaced with the user’s current search string.
:::

### text

An input for entering text.

```js
// An input for entering text.
my_text: {
  type: 'text',
  defaultValue: 'My Text',
  placeholder: 'My Text',
},

```

### time

A text input that displays a time picker when focused.

```js
// A text input that displays a time picker when focused.
my_time: {
  type: 'time',
},
```

## Form Field Visibility

Using the **visible** property on a field’s configuration object lets you determine if a field should be visible to the user or not. This is useful when you have rules that require an additional field that should only be visible when other fields have a specific value. For example, below we are showing that the `compare` field is only visible when the operator field does not equal `is_set`.

```js
// Example showing that the compare field is only visible when the operator field does not equal is_set.
form: function( props ) {
  var operator = props.rule.operator
  return {
    key: {
      type: 'text',
      placeholder: 'Key',
    },
    operator: {
      type: 'operator',
      operators: [
        'equals',
        'does_not_equal',
        'is_set',
      ],
    },
    compare: {
      type: 'text',
      placeholder: 'Value',
      visible: 'is_set' !== operator,
    },
  }
}
```

## Backend API

While the frontend APIs deal with registering rules, the backend APIs primarily deal with processing rules.

### BB_Logic_Rules::register( $rules )

This method registers an array of rule callback functions that will be called to evaluate each instance of a rule.

The callback function receives a rule object (shown below) that contains all of the data from the rule form that was registered on the frontend. You must use that data to decide whether a rule callback function should return true or false. That is typically done with the `evaluate_rule` method, but it doesn’t have to be. You can use any custom logic you want with the provided rule data to decide whether a callback function should return true or false for a rule.

**$rules** array  
  An array of rule callback functions to register. The key is the rule ID and the value is the callback function.

Example of `BB_Logic_Rules::register()`:

```js
// Example of BB_Logic_Rules::register()
BB_Logic_Rules::register( array(
  'my-plugin/my-rule' => 'my_plugin_rule_callback',
) );

function my_plugin_rule_callback( $rule ) {
  return BB_Logic_Rules::evaluate_rule( array(
    'value' => 'my-value',
    'operator' => $rule->operator,
    'compare' => $rule->compare,
  ) );
}
```

### BB_Logic_Rules::evaluate_rule( $data )

Helper method that helps to decide whether a rule is true or false. This method is not required to evaluate a rule. Any custom logic that returns true or false based on rule data will do. However, this method provides logic for common operations such as equals, does not equal, greater than or less than, and it can save you the hassle of having to write that logic yourself.

**$data** array  
  An array of rule data that will be evaluated as either true or false.
  * **value** mixed  
  A value to test other data (such as compare) against.
  * **operator** string  
  A registered core operator string from the operator field such as equals, does_not_equal, starts_with or ends_with.
  * **compare** mixed (optional)  
  Used to compare against the provided value. This is only required for operators that use a compare value such as `equals` or `does_not_equal`. Operators such as `is_set` or `is_empty` do not require a compare value.
  * **isset** boolean (optional)  
  Used for the `is_set` and `is_not_set` operators to check if a value is set or not.
  * **start** integer (optional)  
  Used as the start value for `within`, `not_within`, `between` or `not_between` operators to check if an integer is within a range or not.
  * **end** integer (optional)  
  Used as the end value for `within`, `not_within`, `between` or `not_between` operators to check if an integer is within a range or not.

Example of `BB_Logic_Rules::evaluate_rule`:

```js
// Example of BB_Logic_Rules::evaluate_rule to help decide whether a rule is true or false
BB_Logic_Rules::evaluate_rule( array(
  'value' => 'my-value',
  'operator' => $rule->operator,
  'compare' => $rule->compare,
  'isset' => isset( $my_var ),
  'start' => strtotime( $my_date ),
  'end' => strtotime( $my_date ),
) );
```

## REST API Routes

The core REST API Routes are available for populating your fields with data for the user to choose from. If one of these routes doesn’t fit your needs, you can create a custom route for your fields.

**Archives**  
  Returns an array of `select` options for selecting a type of archive.

```js
    bb-logic/v1/wordpress/archives
```

**Capabilities**  
  Returns an array of `select` options for selecting a user capability.

```js
bb-logic/v1/wordpress/capabilities
```

**Posts**  
  Returns an array of `select` options for selecting a post.

```js
bb-logic/v1/wordpress/posts?post_type=<post_type>
```

**Post Stati**  
  Returns an array of `select` options for selecting a post status.

```js
bb-logic/v1/wordpress/post-stati
```

**Post Templates**  
  Returns an array of `select` options for selecting a post template.  
  ```js
  bb-logic/v1/wordpress/post-templates
  ```
**Post Types**  
  Returns an array of `select` options for selecting a post type.

```js
bb-logic/v1/wordpress/post-types
```

**Roles**  
  Returns an array of `select` options for selecting a user role.

```js
bb-logic/v1/wordpress/roles
```

**Taxonomies**  
  Returns an array of `select` options for selecting a taxonomy.

```js
bb-logic/v1/wordpress/taxonomies
```

**Terms**  
  Returns an array of `select` options for selecting a taxonomy term.  
  ```js
bb-logic/v1/wordpress/terms?taxonomy=<taxonomy>
  ```

**User**  
  Returns an array of `suggest` options for selecting a username.  
  ```
bb-logic/v1/wordpress/users?suggest=<text>
  ```
