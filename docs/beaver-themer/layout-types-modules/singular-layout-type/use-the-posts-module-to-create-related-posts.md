---
id: use-the-posts-module-to-create-related-posts
title: Create a Related Posts section
sidebar_label: Create a Related Posts section
---

In  Beaver Builder layouts, you can add a Related Posts section (posts, products, pages, custom post types, etc.) by adding one of the Posts modules and using **Match these categories** to filter content. However, this doesn't work in a Themer layout, because the category of the post  depends on the post you're viewing. 

There's another option for the settings to filter posts on the **Content** tab that works in Themer layouts: the **Match all related categories except** option. This option displays all posts that share whatever categories or parent categories assigned to whatever post is being viewed, with optional exceptions.

We'll show you the general procedure for adding this filter, then show examples of it in use. If you find you're getting unexpected results, see [the final section](#how-related-categories-and-exceptions-work) with details about related categories and how the exceptions work.

## How to add a Related Posts section

Here's the basic procedure, with examples in the next section.

:::note **Note**
The **Match all related categories except** option comes with the Beaver Builder plugin. You don't need to have Beaver Themer installed to use it but it's particularly useful for Themer layouts. The [third example](#example-3-related-items-in-a-saved-layout-template-for-pages) shows how it can also be useful for saved layout templates.
:::

1. Add a Posts, Posts Slider, or Posts Carousel module to your layout.  
This will become the Related Posts section.
2. Click the **Content** tab and make sure the **Source** field is set to **Custom query**.
3. If you don't want to include the current post as a related post, set **Exclude Current Post** to **Yes**.  
![](/img/use-the-posts-module-to-create-related-posts-f4b29a40.png)
4. In the **Filter** section, set **Categories** to **Match all related categories except**.  
This setting includes all posts in the same category or ancestor category as the current post.
5. If you want to exclude one or more categories, start typing a category name in the field below this option.  
You'll see a list of matching categories as you type.  

:::tip **Tip**
The **Match all related \[items\] except** option can be used with any of the settings listed in the **Filter** section: post types, categories, tags, authors, and custom taxonomies. The list of settings you see can change with the post type you select.

![](/img/related-post-filters.png)

:::

## Examples

The first two examples use a Posts/Carousel/Slider module to set up a related posts section in a Singular-type Themer layout. The third example sets up a related posts section in a saved layout template that is applied to standard pages.

### Example 1: Standard post, display related items except for one category

You have a news blog with a category called **News** but those posts are also assigned to a category called **Archived** after a certain period of time. You want to display a section called "Other news" that shows other posts in the **News** category except when they are also categorized as **Archived**. 

To accomplish this, in the **Categories** section on the **Content** tab, choose **Match all related except** and add the category **Archived** to the selection box, as shown in the screenshot. 

![](/img/related-news-not-archived.jpg)

The module will display all posts that are in the **News** category unless they are also categorized as **Archived**.

### Example 2: Custom post type, custom taxonomy, posts assigned to multiple terms

Here's a single item from a portfolio, created with a custom post type (CPT) and a custom taxonomy. The custom taxonomy terms (human, oils) are shown here so you can see how they apply in the final section called Related Items.

![](/img/portfolio-singular-layout_800.jpg)

The following screenshot shows the relevant **Content** tab settings of the Posts Carousel module. The **Exclude Current Post** option is set to **Yes**. In the **Filters** section, the custom taxonomy called **Portfolio categories** is set to **Match all related portfolio categories except**. The exceptions box is left blank.

![](/img/portfolio-posts-category-matching_800.jpg)

This post is assigned to two categories, **human** and **oils**, so the result includes all the portfolio items categorized as EITHER **human** OR **oils**. So, for example, you can see an oil painting called Palette, which is not a human subject, but it is an oil painting. If you use the filter **Match all related portfolio categories except oils**, all of the items categorized as **oils** are eliminated, including all items categorized as both **human** and **oils**. See the [section about exclusions](#how-related-categories-and-exceptions-work) for details and an alternate architecture that lets you eliminate **oils** that aren't human instead of all **oils**.

### Example 3: Related items in a saved layout template for pages

This example shows a Related Posts section in a custom layout template that is applied to static pages. Each page to which the template is applied summarizes one of the client's business projects. The project pages are related through a custom taxonomy called **Projects**, for which each term is the name of one project. 

![](/img/related-post-saved-layout.png)

Why use a layout template and pages instead of a Themer layout with a custom post type to display each project summary? The client wanted a consistent content layout on every project page but the projects themselves have enough variation that there needed to be more flexibility in the layout and content than a custom post type could easily accommodate. The client also wanted the flexibility to change the layout template moving forward to apply to new projects without affecting previous project pages. 

The following  screenshot shows portions of one of the project pages. 

<hr/>

![](/img/related-pages-3.jpg)

<hr/>

The layout template has sections where the client enters static information about the project but also has sections that use Themer field connections and Themer custom post layouts to pull in existing information. For example, in the header, the project title uses the **Post Title** field connection and the columns of bulleted information in the header are heading modules with field connection shortcodes to custom properties. The News, Related Documents, and Related Projects sections all use Posts modules with various filters.

:::note **Note**
Even though this example uses a Themer layout, Beaver Themer must be installed to make use of the field connections and custom post layouts in a layout template. 
:::

For the Related Projects section, the **Match all related Projects except** filter pulls all of the project summary pages and the **Exclude Current Post** setting excludes the current project. When the layout template is applied to each new page, this Related Projects section, as well as the News and Related Documents sections, work without modification.

## How related categories and exceptions work

Any category that shares a node in the hierarchy is considered related. Here are a couple of diagrams showing examples of related categories how exception categories work. This also applies to custom taxonomies.

### Sister categories (nonhierarchical)

Here's a diagram that uses the two categories from Example 2: **human** and **oils**. Let's suppose these two categories are siblings in a flat structure, so we'll call them A1 and A2 in the following diagram. Posts 1 and 2 are assigned to **human** and Posts 2 and 3 are assigned to **oils**.

![](/img/match-all-related-except-2-cats.png)

If you specify **Match all related categories except** with no exceptions, the diagram shows which items appear in the Related Posts list on each page. (If you've set the option to exclude the current post, the current post is eliminated from the list.) 

If you specify one category as an exception, such as **Match all related categories except oils**, any post assigned to **oils** is discarded as a related post, even if it's also assigned to **human**. 

:::tip **Tip**
If you prefer to display all posts categorized as **human** and exclude any non-human art done in oil, a better design is to create two different custom taxonomies: one for **Art subjects**, with terms such as **human**, and one for **Art Media**, with terms such as **oils**. Then in the Posts module, you can choose **Match all related categories except** for the **Art subjects** taxonomy with no exceptions, as shown in this screenshot. You don't need to make any changes to the **Art media** taxonomy.

![](/img/portfolio-two-taxonomies.jpg)
::: 

### Hierarchical categories

In a more complex and realistic example, let's suppose that the **human** category has a parent called **Subject** and the **oils** category has a parent called **Medium**. The parent categories are labeled A and B in the following diagram. 

![](/img/match-all-related-except-subcats.png)

If you know that the Related Posts section is an important part of your site, you can plan for the posts you want to show as related when you create your category architecture.