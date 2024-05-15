---
id: user
title: User
sidebar_label: User
---

The Advanced Custom Fields (ACF) User field can be used in a Posts, Posts Slider, or Posts Carousel module in Beaver Themer layouts to display posts from a specific user or output a specific user when using the field connection shortcode.

## Getting started

To get started, create your [User field](https://www.advancedcustomfields.com/resources/user/) in ACF and use the shortcode to display the Taxonomy field on your pages or posts. You can use the shortcode inside any module that supports HTML such as a HTML or Text modules.

## Field Connection List Panel

To use the User field to output a user in a page or post, after you click the plus **(+)** icon to connect or insert the field connection shortcode, select **ACF Relational** in the Field Connection list panel.

![](/img/beaver-themer/integrations--acf--user-field--1.jpg)

## Shortcode

Here is an example of the Beaver Themer User field connection shortcode.

```markup
[wpbb post:acf_relational type='user' name='' display_type='display' link='yes' link_type='archive']
```

The `name=''` attribute is where you enter your Taxonomy field name.

* Options

	* **Display Type** - Choices are display (default), first name, last name, first last, last first, nickname, and username.
	* **Link** - Yes or No.
	* **Link Type** - Enable/Disable a link to the user's post archive or to the website in the users's profile (if Link is set to Yes).


:::info
The User field connection **does not** work on **ACF Option Pages**.
:::

## Post Modules

The Post modules (Posts, Posts Slider, or Posts Carousel) can be used with the User field to output posts from a specific user.

1. Add one of the Posts modules to your page (Posts, Post Slider or Post Carousel) to the location where you want to display the user posts.

2. Click the **Content** tab, and in the **Source** field choose **ACF Relationship**.

3. In the **Type** field, choose **User**.

4. In the **Key** field, enter the ACF User field name.

5. Save the changes and the module should display posts from the user you selected.

