---
id: list-related-posts-using-acf-relationship-field-themer
title: List Related Posts using the ACF Relationship field
sidebar_label: List Related Posts with the Relationship field
---

You can create a Related Posts section in any Themer layout by using the Posts, Post Slider, and Post Carousel modules and the Advanced Custom Fields (ACF) Relationship field type.

The basic procedures described in this article involve setting up a Relationship Field in ACF and then you can edit each post or page to manually add the related posts or pages to that field.

Then, in most cases, you'd add a Related Posts section on a single page or post in either of the following ways:

  * Integrate the Posts module into a Singular-type Themer layout.
  * Create a Part-type Themer layout to insert the Related Posts section in a particular location, such as after page or post content.


##  1. Create an ACF Relationship field type

1. From the WordPress admin panel, do one of the following:  
   * **Advanced Custom Fields free plugin**: Click **Custom Fields > Custom Fields**.
   * **ACF Pro**: Click **Custom Fields > Field Groups**.
2. Click **Add new** to create a new field group.
3. Add a title for the field group.  
In this example, we’ll use **Related Movies**.
4. Click **Add Field**.
5. Add a field label, such as **Related Movies**.  
The label automatically populates the **Field Name**, in this case, **related_movies**.
6. For **Field type**, choose **Relationship**.  
This adds some extra fields to the UI so you can filter by post type and taxonomy. Learn more [in this ACF documentation](https://www.advancedcustomfields.com/resources/relationship/).
7. Click **Publish** to save the field group.

## 2. Configure the related posts on each page or post

  1. Navigate to the page, post or custom post type to which you want to add a Related Posts section and open it in the WordPress editor.  
  The editing screen has a new section with the field label you added previously.
  2. Choose the pages or posts that you want to appear as related posts.
  3. Click **Update** to save the page or post.

## 3. Add a Posts module to the Themer layout to display the related posts

  1. Create a new Themer layout or edit an existing one and open it in the Beaver Builder editor.
  2. Add one of the Posts modules to your page (Posts, Post Slider or Post Carousel) to the location where you want to display the related posts.
  3. Click the **Content** tab, and in the **Source** field choose **ACF Relationship**.
  4. In the **Type** field, choose **Relationship**.
  5. In the **Key** field, enter the ACF Relationship field name.  
  In our example, it’s **related_movies**.
  6. Click **Save**.
  7. In the **Preview as** field at the top of the page, choose a page or post for which you configured the related posts so you can preview the Related Posts section on the page.
