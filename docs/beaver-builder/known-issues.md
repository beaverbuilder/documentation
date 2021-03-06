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

### UI Dark mode syntax highlighting is missing

<p><span class="badge badge--success">Status: Released</span></p>

**Description:**  Syntax highlighting goes away when using Dark Mode in the UI

`IR: 926`

### Callout Module HTML Error

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** There's an HTML error when using a link and an icon

`IR: 906`

### Button Group Module

<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** Some individual border styles do not override the global styles

`IR: 689`

### Content Slider

#### Mobile Layout JS error

<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** JS error on mobile if you click a link

#### Button Padding is not responsive

<p><span class="badge badge--primary">Status: Fixed</span></p>

**Description:** Button padding is not fully responsive

`IR: 868`

### Posts Module

#### Issue with images not loading on Safari 13 and below

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** When using the load more option for Pagination, in Safari 13 and below, images can not show due to how Safari handles srcset with AJAX.

`IR: 980`

### Video Module

#### Video Module not specified error

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** "video embed not specified" error notice shows when using connect field connection and the field is empty

`IR: 913`


## Beaver Themer


### The Events Calendar

### Event description module shows too much information
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** It displays all of the Event content instead of just the description when Gutenberg content editor is in use.  

`IR: 176`

### Event notices module not working

<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Module displays empty even when there should be content

`IR: 154`

### Multi-Day events do not always display when they should
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** If the start date has passed the event does not show even if the end date hasn't passed.

`IR: 121`

### Applying a Singular layout to Organizer results in a loading gif
<p><span class="badge badge--success">Status: Released</span></p>

**Description:** Applying a singular Themer layout shows a loading GIF above the content area

`IR: 152`

### LearnDash

LearnDash has indicated to us that they are working on a fix as it's not just an issue with Beaver Builder but all Page Builders that use/offer custom Templates.  

**Description:** After updating LearnDash, much of the LearnDash content is missing.


## Beaver Builder Theme

### Sub-Menu indicator does not display if Font Awesome Pro is enabled in the BB Plugin
<p><span class="badge badge--success">Status: Released</span></p>

`IR: 146`


### Submenu can't be accessed on iPad Safari
<p><span class="badge badge--secondary">Status: Pending</span></p>

**Description:** In some cases, the submenu can't be accessed or can't be closed on iPad Safari.  This may require a refactor of our menu.

`IR: 107`
