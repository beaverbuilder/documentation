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

### Fixed Background Images on iPadOS

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Fixed background images show up zoomed in on iPadOS.

`IR: 686`


### Accordion Module
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Issues with labels when using RTL

`IR: 414`

### Button Group module
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** For a Button Group with Horizontal layout with several buttons, the space between the first and second button is missing on smaller screen size.

Button Spacing not working on Safari

Responsive alignment not working

### Content Slider module
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Button padding is not working

`IR: 625`

### Text Editor module

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** With HappyFox plugin active and connected to the API, the Add Media button in the Text Editor module does not function.

`IR: 445`

### Posts Module buttons broken with jQuery 3.5.1
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Due to a markup issue, the buttons are out of place and not functional with jQuery 3.5.1

`IR: 611`

### Compatibility Issues

#### Happy Fox
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  BB UI does not work with HappyFox plugin active

#### Klaviyo
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  BB UI does not open when editing a Header layout with the Klaviyo plugin active

#### Polylang
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Fix pagination on a Polylang translated page when more than 1 Posts module appears on the layout

#### WooCommerce
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Fix pagination on WooCommerce archives when more than 1 Posts module appears on the layou

#### WOOF WooCommerce Products Filter 
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Markup broken underneath the Posts module when this plugin is active

#### Yoast SEO
<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Yoast is unable to read BB content


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

### Sub-Menu indicator does not display if Font Awesome Pro is enabled in the BB Plugin
<p><span class="badge badge--primary">Status: Fixed</span></p>

`IR: 146`


### Submenu can't be accessed on iPad Safari
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** In some cases, the submenu can't be accessed or can't be closed on iPad Safari.

`IR: 107`
