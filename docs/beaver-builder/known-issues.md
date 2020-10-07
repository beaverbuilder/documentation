---
id: known-issues
title: Known Issues
sidebar_label: Known Issues
---

This is a partial list of high-priority issues we're chipping away at.


<p><span class="badge badge--secondary">Status: Pending</span> = Issue has been reviewed but not fixed yet.</p>
<p><span class="badge badge--primary">Status: Fixed</span> = Issue has been fixed internally, waiting for the next release.</p>
<p><span class="badge badge--success">Status: Released</span> = Issue has been fixed and released.</p>

## Beaver Builder

### ACF Conflict: Launch Beaver Builder button does not work

<p><span class="badge badge--success">Status: Released</span> in version 5.9.1 of ACF</p>

**Description:** With ACF active, the Launch Beaver Builder button does not function.  Page hangs after clicking.

`IR: 647`


### Button Group module
<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** For a Button Group with Horizontal layout with several buttons, the space between the first and second button is missing on smaller screen size.

`IR: 570`

### Callout Module: Icon links do not work
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Links on icons are not functional

`IR: 683`



### Text Editor module

<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** With HappyFox plugin active and connected to the API, the Add Media button in the Text Editor module does not function.

`IR: 445`

### Posts Module buttons broken with jQuery 3.5.1
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Due to a markup issue, the buttons are out of place and not functional with jQuery 3.5.1

`IR: 611`

### Post Carousel module
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Post carousel has loading issues with WordPress 5.5 and especially FireFox

`IR: 611`

### Post Slider module
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Post slider has loading issues with WordPress 5.5 and especially FireFox

`IR: 602`

### Responsive Preview issue in Chrome
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Due to a Chrome bug, if you toggle through the sizes, the styling then breaks.  We've implemented a fix until Chrome can address it.

`IR: 676`

### Row Background Video JS error when using Vimeo and audio is enabled
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  This causes a JS error that doesn't affect the builder but affects the row background video and other things that use javascript on the pages (Examples include animations not firing, Accordion not opening)
`IR: 680`

### Slideshow module alt tag issue
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Slideshow module does not render alt tag for images

`IR: 604`

## Beaver Themer

### BigCommerce

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** When Yoast and BigCommerce are active on a site and a post module is used on a page to display BC products, when you try to edit that page in the WP admin, a fatal error occurs

`IR: 187`

### The Events Calendar

### Event description module shows too much information
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** It displays all of the Event content instead of just the description when Gutenberg content editor is in use

`IR: 176`

### Event notices module not working

<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** Module displays empty even when there should be content

`IR: 154`

### Multi-Day events do not always display when they should
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** If the start date has passed the event does not show even if the end date hasn't passed.

`IR: 121`

### Applying a Singular layout to Organizer results in a loading gif
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** Applying a singular Themer layout shows a loading GIF above the content area

`IR: 152`

### LearnDash

LearnDash has indicated to us that they are working on a fix as it's not just an issue with Beaver Builder but all Page Builders that use/offer custom Templates.  

**Description:** After updating LearnDash, much of the LearnDash content is missing.


### WooCommerce

#### Product sorting does not work with multiple posts modules on the page
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** It seems like it is sorting by price, for example, but it is not accurate

`IR: 141`

## Beaver Builder Theme

### Customizer Slider does not update text
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** The slider to change values does not update text when used.

### Sub-Menu indicator does not display if Font Awesome Pro is enabled in the BB Plugin
<p><span class="badge badge--primary">Status: Fixed</span></p>

`IR: 146`

### Full Width post template doesn't go full width when using a nav vertical layout
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Full Width post template doesn't go full width when using a nav vertical layout.

`IR: 40`

### Submenu can't be accessed on iPad Safari
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** In some cases, the submenu can't be accessed or can't be closed on iPad Safari.

`IR: 107`

### WooCommerce: Column issue on My Account > Addresses Page with Bootstrap 4 enabled
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** When shipping is set to none in the WooCommerce settings and Bootstrap 4 is enabled, the column displays very small/squished.

`IR: 127`
