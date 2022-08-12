---
id: add-yoast-breadcrumbs-with-beaver-themer
title: Add Yoast breadcrumbs
sidebar_label: Add Yoast breadcrumbs
---

Here’s how to use a Beaver Themer Part-type layout to add a breadcrumb provided by the Yoast SEO plugin to any page of your site. This procedure also works with any other other shortcode from a plugin or that you've created.

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VZ_ntbMt2pw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

1. Enable Yoast breadcrumbs by clicking **SEO > Advanced** on the WordPress admin panel, then on the **Breadcrumbs** tab click **Enabled** in the **Breadcrumbs settings** section.

2. On the WordPress admin panel, click **Beaver Builder > Themer Layouts**.

3. Create a new Themer layout, and for **Layout** choose **Part**.  
![](/img/add-yoast-breadcrumbs-with-beaver-themer-d863ac48.png)

4. For **Position** choose where you want the breadcrumb to be located. In the following screenshot, the position has been set to **Content Open**, which means this part will appear at the top of the post or page content area.

5. For **Location** choose which types of pages you want the breadcrumb to appear on.  
![](/img/add-yoast-breadcrumbs-with-beaver-themer-4e6ab245.png)

6. Click **Launch Beaver Builder**.

7. Add an HTML module to your layout and add the Yoast breadcrumb shortcode:  
`[wpseo_breadcrumb]`

8. Click **Done > Publish**.  
The Yoast breadcrumb should now appear in the location you specified.
