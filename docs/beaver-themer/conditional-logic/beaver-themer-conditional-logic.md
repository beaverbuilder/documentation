---
id: beaver-themer-conditional-logic
title: Beaver Themer conditional logic
sidebar_label: Beaver Themer conditional logic
description: Conditional logic lets you create rules that determine when to display a Themer layout or a Beaver Builder row, column, or module.
---

Beaver Themer's conditional logic feature gives you the power to fine-tune when Themer layouts or parts of Beaver Builder layouts are displayed.

## The conditional logic if-then statement

The basic logic is an if-then statement, but with Beaver conditional logic, you only specify the if-expression. The form of the statement is always:

*If {my expression is true} then display this item*

The if-expression can contain both rules and rule groups. Rules in the same group use AND logic, while rules groups use OR logic. See the examples in the following section and more details further below.

## Where you can apply conditional logic

You can apply conditional logic in two different locations:

* In the **Rules** section of the Beaver Themer editing panel:  
   ![](/img/conditional-logic-themer-edit-panel_800.png)
  This screenshot shows the editing panel for a Part layout. In addition to the **Position** and the **Location** of the part, there's a **Rules** section where you can set up a complex conditional logic rule. See the first example in the next section.  
* In the **Display** setting on the **Advanced** tab of any row, column, or module in a Beaver Builder layout:  
  ![](/img/conditional-logic-module_800.png)  

:::note **Note**
The **Display** setting is always available in Beaver Builder layouts, but the **Conditional Logic** choice only appears when Beaver Themer is installed.
:::

There are a huge number of ways that you can use conditional logic, but here are a couple of examples, followed by more details about the rules and lists of choices and comparison operators for the if-expressions.

## Conditional logic examples

### Display a Themer layout only when users are Editors

Suppose you want to display a banner at the top of the page with special instructions to editors when they are logged in, showing how to open a page for editing in Beaver Builder, as in this screenshot:
 
![](/img/conditional-logic-themer-editing-banner_800.png)
 
This is easy to accomplish with a Part-type Themer layout and conditional logic, following the steps here.

1. Create a Part-type Themer layout.
2. In the editor panel for the Themer layout, set **Position** to **Before header**.
3. Set **Location** to **Page > All pages**.
4. In the **Rules** section, create a rule for **User Role** **equals** **Editor**, as shown in the following screenshot.  
   ![](/img/conditional-logic-themer-banner-setup_800.png)
5. Click **Update** to save the edits.

In other words, this banner will display above the header whenever the user is logged into the site with the role of Editor.

### Display a button only when a specific ACF custom field has a value

Suppose you have created an Advanced Custom Fields (ACF) field for posts so that you can display the company title below the Author's name in the post title row. But company title is not a required field, and you want to display the row or column containing it only when the company title field has a value. For example, here's a screenshot of a post that has the company title in a column group below the author name:

![](/img/beaver-themer-conditional-logic-74fe4598.jpg)

And here's the same page when the ACF field is blank:

![](/img/beaver-themer-conditional-logic-2f30569a.jpg)

While the difference is subtle, the column group containing the custom field for company title is no longer displayed, and the rest of the text has recentered vertically. The need to hide a row is much more obvious in the following case, where the lack of the custom field value would leave an empty blue band.

![](/img/beaver-themer-conditional-logic-9cd20ed7.png)

The solution is to set a normal field connection to the custom field in the module and then add conditional logic to the row or column containing it to display the row or column only when the custom field value exists. Here's how.

:::note **Note**
With this procedure, if you have any other content in the row or column in addition to the custom field, it will also be hidden when the custom field has no value. Plan your rows, columns, and modules so you'll be showing and hiding what you want.
:::

**To hide a row or column containing an ACF custom field that doesn't have a value:**

1. Create a module to display your ACF custom field.  
   For example, add a Heading module, and in the **Heading** field, add a field connection to the ACF field.
2. Open the settings for the row or column containing that module and go to the **Advanced** tab.
3. Go to the **Visibility** section, and in the **Display** field, choose **Conditional logic**, then click **Open Conditional logic settings.**
4. Click **Choose**, scroll down to the **Advanced Custom Fields** section, and choose **ACF post field**.
5. In the second column, enter the field name of your custom field.
6. In the third column, scroll down and choose **is set**.  
   This means that this row or column will display when this custom field has a value.
7. Click **Save**.
  
## Conditional logic details

### Rules and rule groups

You can add one or more rules to form a rule group. You can add as many rule groups as you want. Rules operate with AND logic. Rule groups operate with OR logic.

For example, you could have two rule groups with two rules each for the following conditions:

>  Display this module if a particular ACF custom field isn't empty AND the post category is "news"  
>  OR  
>  Display this module if a particular ACF custom field isn't empty AND the post category is "events"

### Comparison operators

You can set rules for various aspects of posts, archives, authors, users, and ACF custom fields. The items you choose for the rule determine which comparison operators are available. For example, **Post title**, **Post excerpt**, **Post featured image** have some or all of the following comparison operators:

* **is set** or **exists**, **is not set** or **doesn't exist**  
Used to show or hide rows, columns, or modules if the value is set (such as a featured image) or exists (such as a custom field)
* **equals** or **does not equal**, **starts with**, **ends with**, **contains**, **doesn't contain**  
Used to evaluate text values for a particular item.

### Conditional logic for Themer layouts

The conditional logic selections that appear in Themer layouts depend on the type of layout. In most cases, you can select not only logged-in vs. logged-out and user status, but also user properties such as user role, user capability, or even a specific username, as shown in the following screenshot.

![](/img/beaver-themer-conditional-logic-60a0bbc2.png)

In Singular-type Themer layouts, you can also set conditions that control whether layouts appear depending on the value or status of items in the post, as shown in this screenshot.

![](/img/beaver-themer-conditional-logic-fc83f077.png)

In Archive-type layouts, you can set conditions based on the archive properties of title, description, or meta, as shown in the following screenshot.

![](/img/beaver-themer-conditional-logic-8d1c438d.png)

### Visibility setting for rows, columns, and modules

In a standard Beaver Builder layout without Beaver Themer activated, there's a **Display** field on the **Advanced** tab where you can choose to display the module **Never**, only to logged-out users, or only to logged-in users, as shown in this screenshot. The default display choice is **Always**.

![](/img/beaver-themer-conditional-logic-ab689e66.png)

With Beaver Themer installed, in either a standard Beaver Builder layout or a Themer layout, the Display field has an additional **Conditional Logic** choice, as you can see in this screenshot.

![](/img/beaver-themer-conditional-logic-dbd8a972.png)

The rules you set there determine the conditions under which the row, column, or module is visible.

:::note **Note**
You can use conditional logic in any Beaver Builder layout, but conditional logic is only available when Beaver Themer is installed.
:::

### Conditional logic categories

Rows, columns, and modules have the following conditional logic selections for rules.

#### Posts

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

#### Archive

  * Archive
  * Archive title
  * Archive description
  * Archive taxonomy term
  * Archive term meta

#### Author

  * Author
  * Author bio
  * Author meta
  * Author login status

#### User

  * User
  * User bio
  * User meta
  * User login status
  * User role
  * User capability
  * User registered

#### Browser

* Cookie  
  You can base the visibility on a particular key in your cookie.
* Referer  
**Referer** means the page that contains a link that the user follows to get to the page containing the conditional logic, such as a link from the layout or a menu link. [Here's some more information about HTTP Referers.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)  
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

