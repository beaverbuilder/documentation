---
id: beaver-themer-conditional-logic
title: Beaver Themer conditional logic
sidebar_label: Beaver Themer conditional logic
---

Beaver Themer's conditional logic feature gives you the power to fine-tune Beaver Builder layouts in ways that previously required code.

With Beaver Themer installed, you can set conditions that control the visibility of:

  * Themer layouts  
  For example, you could display one Singular Themer layout when the post contains a featured image and a different Singular layout when the post doesn't have a featured image.
  * Rows, columns or modules in both regular and Themer layouts
  For example, you could hide a row or column when an ACF field has no value, or display a row only when a user has a specific user capability.  
  In particular, conditional logic has the following functionality:
  * Conditional logic system with rules and rule groups.
  * Rule operators
  * Conditional logic for Themer layout layouts.
  * Visibility settings for rows, columns, and modules.
  * Conditional logic examples

Let's unpack these conditional logic features one at a time, and then see the examples for some common ways you can use this new feature.

## Conditional logic system with rules and rule groups

You can add one or more rules to form a rule group. You can add as many rule groups as you want. Rules operate with AND logic. Rule groups operate with OR logic.

For example, you could have two rule groups with two rules each for the following conditions:

>  Display this module if a particular ACF custom field isn't empty AND the post category is "news"  
>  OR  
>  Display this module if a particular ACF custom field isn't empty AND the post category is "events"

## Rule operators

You can set rules for various aspects of posts, archives, authors, users, and ACF custom fields. The items – for example, Post Title, Post Excerpt, Post Featured Image – have some or all of the following operators:

  * Is set/exists or is not set/doesn't exist  
  Used to show or hide rows, columns, or modules if the value is set (such as a featured image) or exists (such as a custom field)
  * Equals or does not equal, starts with, ends with, contains, doesn't contain  
  Used to evaluate text values for a particular item.

## Conditional logic for Themer layouts

When you edit a Themer layout the conditional logic is in the **Rules** field, as shown in the following screenshot. The selections that appear depend on the type of Themer layout. In most cases, you can select not only logged-in vs. logged-out and user status, but also user properties such as user capability or even a specific username, as shown in the following screenshot.

![](/img/beaver-themer-conditional-logic-60a0bbc2.png)

In Singular-type Themer layouts, you can also set conditions that control whether layouts appear depending on the value or status or items in the post, as shown in this screenshot.

![](/img/beaver-themer-conditional-logic-fc83f077.png)

In Archive-type layouts, you can set conditions based on the archive properties of title, description, or meta, as shown in the following screenshot.

![](/img/beaver-themer-conditional-logic-8d1c438d.png)

## Visibility setting for rows, columns, and modules

In a standard Beaver Builder layout without Beaver Themer activated, there's a **Display** field on the **Advanced** tab where you can choose to display the module **Never**, only to logged-out users, or only to logged-in users, as shown in this screenshot. The default display choice is **Always**.

![](/img/beaver-themer-conditional-logic-ab689e66.png)

With Beaver Themer installed, in either a standard Beaver Builder layout or a Themer layout, the Display field has an additional **Conditional Logic** choice, as you can see in this screenshot.

![](/img/beaver-themer-conditional-logic-dbd8a972.png)

The rules you set there determine the conditions under which the row, column, or module is visible.

:::note **Note**
You can use conditional logic in any Beaver Builder layout, but conditional logic is only available when Beaver Themer is installed.
:::

Rows, columns, and modules have the following categories of conditional logic.

### Posts

  * Post
  * Post parent
  * Post type
  * Post title
  * Post excerpt
  * Post content
  * Post featured image
  * Post comments number
  * Post template
  * Post taxonomy term
  * Post status
  * Post custom field

### Archive

  * Archive
  * Archive title
  * Archive description
  * Archive taxonomy term
  * Archive term meta

### Author

  * Author
  * Author bio
  * Author meta
  * Author login status

### User

  * User
  * User bio
  * User meta
  * User login status
  * User role
  * User capability
  * User registered

### Browser

  * Cookie  
  You can base the visibility on a particular key in your cookie.
  * Referer  
  Referer means to the page that contains a link that the user follows to get to the page containing the conditional logic, such as a link from the layout or a menu link. [Here's some more information about HTTP Referers.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)  
  **Note:** This misspelling of `referer` is built into WordPress.
  * URL variable

### 3rd party integrations

The following conditional rules appear when the following third-party plugins are installed.

#### WooCommerce

  * Customer products purchased
  * Customer first ordered
  * Customer last ordered
  * Customer total orders
  * Customer total products
  * Customer total spent
  * Customer billing address
  * Customer shipping address
  * Cart
  * Cart products
  * Cart total

#### Advanced Custom Fields

These choices refer to the source or destination of the ACF field on your site. For more information, see [the article about ACF field connections](/beaver-themer/field-connections/connections-to-acf/connect-to-acf-fields-themer.md).

  * ACF Archive field
  * ACF Post field
  * ACF Post Author field
  * ACF User field
  * ACF Option field

## Conditional logic examples

There are a huge number of ways that you can use conditional logic, but here are a few common use cases.

### Display a Themer layout only when users are Editors and they are logged in

Suppose you want to provide special instructions to Editors when they are logged in, such as how to open the page they are viewing for editing in Beaver Builder. You could add these instructions to a Part-type Themer layout that appears at the top of the page, for example.

In this case, you can set the rule in the Themer layout editing screen, as follows.

  1. Create the Themer layout that you want to display.
  2. Click **Edit** to open the layout for editing.
  3. In the **Rules** field, set two rules in a single rule group: one for **User Role** and the other for **User login status**, as shown in the following screenshot.  
  ![](/img/beaver-themer-conditional-logic-17426b0d.png)
  4. Click **Update** to save the edits.

### Display a button only when a specific ACF custom field has a value

Suppose you have created an Advanced Custom Fields (ACF) field for posts so that you can display the company title below the Author's name in the post title row. But company title is not a required field, and you want to display the row or column containing it only when the company title field has a value. For example, here's a screenshot of a post that has the company title in a column layer below the author name:

![](/img/beaver-themer-conditional-logic-74fe4598.jpg)

And here's the same page when the ACF field is blank:

![](/img/beaver-themer-conditional-logic-2f30569a.jpg)

While the difference is subtle, the column layer containing the custom field without a value is no longer displayed, and the rest of the text has recentered vertically. The need to hide a row is much more obvious in the following case, where the lack of the custom field value would leave an empty blue band.

![](/img/beaver-themer-conditional-logic-9cd20ed7.png)

The solution is to set a normal field connection to the custom field in the module and then add conditional logic to the row or column containing it to display the row or column only when the custom field value exists. Here's how.

:::note **Note**
With this procedure, if you have any other content in the row or column in addition to the custom field, it will also be hidden when the custom field has no value. Plan your rows and columns so you'll be showing and hiding what you want.
:::

**To hide a row or column containing an ACF custom field that doesn't have a value:**

  1. Create a module to display your ACF custom field.  
  For example, add a Heading module, and in the **Heading** field, add a field connection to the ACF field.
  2. Open the row or column containing that module for editing and go to the **Advanced** tab.
  3. Go to the **Visibility** section, and in the **Display** field, choose **Conditional logic**, then click **Open Conditional logic settings.**
  4. Click **Choose**, scroll down to the **Advanced Custom Fields** section, and choose **ACF post field**.
  5. In the second column, enter the field name of your custom field.
  6. In the third column, scroll down and choose **is set**.  
  This means that this row or column will display when this custom field has a value.
  7. Click **Save**.
