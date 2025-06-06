---
id: accessibility
title: Accessibility
sidebar_label: Accessibility
---

This article contains general information about accessibility requirements and
specific information about Beaver Builder plugin and Beaver Builder Theme
accessibility.

## Why care about accessibility?

Even if you're not required to make your website accessible, it's a good idea
to follow at least high-level accessibility principles. Why?

* Your site will be more readable
  For example, the site has appropriately sized print.

* Your site will be more searchable  
  For example, there are text alternatives for content graphics.

* Your site will reach a larger audience  
  Your site becomes more accessible for the estimated 20% of people with
disabilities, but it also becomes easier to use in general, because the basic
principles of accessibility hold true for everyone.

* Your site's SEO will benefit.  
  For example, [Google's Mobile-Friendly Test](https://search.google.com/search-console/mobile-friendly), which judges your site on criteria that contribute to Google Search rankings, will fail for some of the same reasons, such as the
text being too small and horizontal scrolling required because the viewport wasn't set.

* If you're an agency, it's a benefit to say you test for basic accessibility, even when you can't guarantee that the site is fully accessible, for all of the reasons above.

## WCAG 2.0 accessibility standard

The current standard for web content accessibility is the [Web Content
Accessibility Guidelines](https://www.w3.org/TR/WCAG20/), or WCAG 2.0,
maintained by the World Wide Web Consortium (W3C). The WCAG 2.0 specification
is based on four _principles_ :

* Perceivable  
Users must be able to perceive the information with at least one of their
senses.

* Operable  
The interface cannot require interaction that a user cannot perform.

* Understandable  
Users must be able to understand the information as well as the operation of
the user interface.

* Robust  
Content must be interpreted reliably by a wide variety of user agents,
including assistive technologies.

Each of these principles has both _guidelines_ , which define goals to achieve
the principles, and _success criteria_ , which are measurable outcomes. In
addition, the WCAG 2.0 specification assigns one of three levels of
conformance to each of their success criteria: A (lowest), AA, and AAA
(highest). Here's a page that lists the guidelines, success criteria, and
conformance level for each:

[https://www.w3.org/WAI/WCAG20/quickref/](https://www.w3.org/WAI/WCAG20/quickref/)

## The WAI-ARIA standard

The [WAI-ARIA standard](https://www.w3.org/TR/wai-aria/#aria-label) is a set of specifications on how to use "aria labels" to provide semantic information about widgets, structures, and behaviors to assistive devices. Beaver Builder adds default ARIA labels and some modules have an aria setting that lets you assign your own ARIA label.

Here's an example of HTML output from a [Menu module](/beaver-builder/layouts/modules/menu/menu.md), which has the custom ARIA label set to "primary menu":

```html
<nav aria-label="primary menu" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement" class="focus">
```

## Make your sites accessible

Full accessibility is rarely achieved, and meeting accessibility criteria is
an ongoing effort, requiring new testing with each website revision and each
authoring tool release. For this reason, meeting accessibility requirements at
any level makes creating and maintaining a website significantly more costly.

On the other hand, checking a site for basic conformance, and learning how to
meet basic accessibility conformance when you construct a site, are best
practices, for all the reasons laid out above.

Most of the basic accessibility guidelines are met by standard practices you
follow when you design the page, such as the following:

* Ensure there is good contrast between text and background.

* Make link text contextual. Rather than this language:  
To view our brochure _click here_.  
use this:  
_View our brochure_.  
Screen readers read the link text, and "click here" gives people no context as
to what they're clicking or why they should do it.

* Make sure you have descriptions for non-text media that contain content (i.e., are not just decorative). This means filling in the **Alt** field for images in your media library that convey content, or making sure your image is described in the text preceding or following the image, or linking to an external text file that describes the image.

* Ensure you have at least one `<h1>` tag, and use heading tags in order: `<h1>`, `<h2>`, `<h3>` and so on, so the structure of your page is obvious to search bots and screen readers. Note that [the use of the section tag in HTML 5 has blurred the requirement of sequential headings a bit](http://www.brucelawson.co.uk/2009/headings-in-html-5-and-accessibility/).

* Check the HTML rendering of icons and form fields. For anything interactive without an `alt` attribute, or text inside, or a label, such as an icon's `<I>` tag, you can [add hidden text specifically targeted for screen readers](https://make.wordpress.org/accessibility/2015/02/09/hiding-text-for-screen-readers-with-wordpress-core/). Beaver Builder has met accessibility requirements for form fields and icons, but check the HTML output of any plugins you use.

* Changing the stacking order of items to accommodate different device sizes (using any technical method) doesn't change the DOM order, so screen readers will continue to see the original stacking order, which can be confusing. If you're designing for accessibility it's a best practice to design the page such that changing stacking order is unnecessary. See [this Mozilla article](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#The_order_property_and_accessibility) and [this best practice](https://www.webaccessibility.com/best_practices.php?best_practice_id=894).

It's also a best practice to start testing your site early and throughout the
design/development process, rather than wait until you have what you think is
a perfect site, only to find out that there are a number of basic
accessibility issues that should have been addressed at the design stage, such
as color contrast.

For testing, you could try the [WP Accessibility Plugin](https://make.wordpress.org/accessibility/handbook/which-tools-can-i-use/wp-accessibility-plugin/) recommended by WordPress, or there are other tools that you can use to test rendered pages that are web-based or can be installed as browser extensions.

Whether you want to make your own site more accessible or do it for a client
at their request, decide in advance what level of the standard you will meet.
Agreeing on a particular WCAG 2.0 conformance level is a good way for you and
the client to reach a very specific agreement, since each conformance level is
associated with a set of measurable outcomes. Another way is to agree on a
certain testing tool. For example, you might agree to address all issues
listed on the Known Problems tab of the [AChecker](https://achecker.ca/checker/index.php) web accessibility checking
tool.

## ATAG 2.0 accessibility standard

The W3C also has a specification for [Authoring Tool Accessibility
Guidelines](https://www.w3.org/WAI/intro/atag.php), ATAG 2.0, which are
guidelines for two aspects of web authoring tools:

* Making the tool accessible when using it for authoring
* Helping authors create accessible sites

[WordPress has its own accessibility team](https://make.wordpress.org/accessibility/), which monitors and reports
accessibility of the admin UI. Some of the Beaver Builder editor's user interface (UI) accessibility comes from and is limited by WordPress accessibility.

## Beaver Builder accessibility

### Beaver Builder plugin (includes Beaver Themer)

Beaver Builder modules are accessible at a basic level on both the authoring
side (keyboard navigation, color contrast) and on the HTML rendering side
(attributes useful to screen readers).

Beaver Builder has made the following fixes for specific modules
that previously failed to meet accessibility standards:

* Menu module  
You can tab through submenu items, in addition to main menu items.  
The Menu module also has a **Menu label** setting so you can assign a custom ARIA label to the output.

* Slideshow Module  
Images use `alt` tags.  
Arrows pass the accessibility check.

* Map Module  
Added the ability to enter a title for accessibility in the Map module
settings, which results in a  `title` attribute being rendered in the `iFrame`
tag.

### Beaver Builder Theme

Beaver Builder Theme has the following accessibility
improvements:

  * Navigation search has keyboard tabbing support and an ARIA label.
  * Search widgets have ARIA labels (created through the Beaver Builder Theme's _searchform.php_ ).
  * The Comments form fields have ARIA labels.
  * The Scroll-to top icon (when enabled) has nonvisible "Scroll to Top" text for screenreaders.
  * Submenus allow keyboard tabbing.
  * At the top of each web page there is a nonvisible "Skip to content" label with a link to the content area for use by screenreaders.
  * Thumbnail images, comment counts, and social icons have ARIA labels.

### Changes to HTML output

Here are some examples of how the modules implement [ARIA design practices](https://w3c.github.io/using-aria/) to improve accessibility for assistive devices such as screen readers.

  * Content Slider, Posts Carousel, Posts Slider modules: There are additional ARIA`label` and `role` attributes to clarify the **Previous** and **Next** arrow controls.
  * Contact Form and Subscribe form modules: The input tag for each field has an added `id` attribute that connects the input to the label for that field. This meets the requirement that form fields have the proper labels associated with them.
  * Icon and Icon Group modules: The link has added ARIA attributes that relate the link to the icon and any accompanying text.
