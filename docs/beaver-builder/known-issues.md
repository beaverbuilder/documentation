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

<p><span class="badge badge--primary">Status: Pending</span></p>

**Description:** With ACF active, the Launch Beaver Builder button does not function.  Page hangs after clicking.

`IR: 647`


### Button Group module
<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** For a Button Group with Horizontal layout with several buttons, the space between the first and second button is missing on smaller screen size.

`IR: 570`

### Contact Form module

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** In some cases, labels display when set to placeholder only

`IR: 529`

### Content Slider module
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Content slider has loading issues with WordPress 5.5 and especially FireFox

`IR: 602`

### Image Cropping broken on Flywheel Hosting

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** On some configurations, Flywheel changes how `ABSPATH` works which interferes with cropping in image modules using that.

`IR: 564`

### Text Editor module

<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** With HappyFox plugin active and connected to the API, the Add Media button in the Text Editor module does not function.

`IR: 445`

### Post Carousel module
<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:**  Post carousel has loading issues with WordPress 5.5 and especially FireFox

`IR: 611`

### Post Slider module
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Post slider has loading issues with WordPress 5.5 and especially FireFox

`IR: 602`

### Slideshow module
<p><span class="badge badge--primary">Status: Fixed</span></p>

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

### WooCommerce

#### Product sorting does not work with multiple posts modules on the page
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** It seems like it is sorting by price, for example, but it is not accurate

`IR: 141`

## Beaver Builder Theme

### Full Width post template doesn't go full width when using a nav vertical layout
<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** Full Width post template doesn't go full width when using a nav vertical layout.

`IR: 40`

### Submenu can't be accessed on iPad Safari
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** In some cases, the submenu can't be accessed or can't be closed on iPad Safari.

`IR: 107`

### WooCommerce: Column issue on My Account > Addresses Page with Bootstrap 4 enabled
<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** When shipping is set to none in the WooCommerce settings and Bootstrap 4 is enabled, the column displays very small/squished.

`IR: 127`
