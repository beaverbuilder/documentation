---
id: relationship
title: Relationship
sidebar_label: Relationship
---

You can use the Advanced Custom Fields (ACF) Relationship field in a Posts, Posts Slider, or Posts Carousel module in Beaver Themer layouts. It is used to create a related items section in Themer Singular layouts. For example, you could use the ACF Relationship field to connect posts with related posts, or related products for your shop products, and display them with one of the Posts modules.

## Getting started

1. To get started, create your [Relationship field](https://www.advancedcustomfields.com/resources/relationship/) in ACF and assign the field to your preferred location such as posts, pages or custom post types.

2. In your WordPress Admin Dashboard, create or edit a post or page for the post type you assigned the relationship field to.

3. On the edit screen, scroll down to the ACF Relationship field and click the posts you want to add the relationship field then publish the changes.
  
  ![](/img/beaver-themer/integrations--acf--relationship--1.jpg)

4. Create a new Themer layout or edit an existing one and open it in the Beaver Builder editor.

5. Add one of the Posts modules to your page (Posts, Post Slider or Post Carousel) to the location where you want to display the related posts.
   
6. Click the **Content** tab, and in the **Source** field choose **ACF Relationship**.

7. In the **Type** field, choose **Relationship**.

8. In the **Key** field, enter the ACF Relationship field name.

9. Save the changes and the module should display the related posts you added to the field on the edit page, post screen.

:::info Shortcode
The ACF Relationship field has no field connection shortcode support. Instead, you must use a Post, Post Slider or Post Carousel module to display the relationship content field on your page, posts or custom post types.
:::

## Ordering

You can order your related items using the ordering options available in any of the Posts modules. The **Selection Order** option allows you to order your related items by dragging the items into position in the relationship field on the edit page, post or custom post type screen.

<video autoPlay muted loop>
  <source src="/video/integrations--acf--relationship.mp4" type="/video/mp4" />
  <source src="/video/integrations--acf--relationship.webm" type="video/webm" />
</video>
