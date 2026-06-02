---
id: field-connections
title: The Events Calendar Field Connections
sidebar_label: Field Connections
description: The article covers all available field connections for The Events Calendar plugin.
---

The article covers all available field connections for [The Events Calendar](https://wordpress.org/plugins/the-events-calendar/) plugin.

The field connections listed in this article supports both the free and the premium versions of The Events Calendar plugin with the [Event Field](#event-field) becoming available only when the premium version is installed.

:::tip
Some of the date field connections allow you to configure the date format using PHP `date()` function. You can learn more from the [WordPress formatting date and time](https://wordpress.org/support/article/formatting-date-and-time/) article.
:::

## Event Date and Time

Outputs an event's date and time e.g. August 1st @ 12:00 am - 9:00 am UTC+0. All day events return only the date e.g. August 1st.

The field connection uses [`tribe_events_event_schedule_details()`](https://docs.theeventscalendar.com/reference/functions/tribe_events_event_schedule_details/) function and has no format options. The date format can be adjusted from **Events > Settings > Display** within your WordPress dashboard.

```markup
[wpbb post:the_events_calendar_date_and_time]
```

## Event Start Date

Outputs an event's start date e.g. August 1st with the option to set the date format using the `format=''` attribute.

```markup
[wpbb post:the_events_calendar_start_date format='']
```

If `format=''` remains empty the format will default to what is configured in **Events > Settings > Display** within your WordPress dashboard.

## Event Start Time

Outputs an event's start time e.g. 12:00am.

```markup
[wpbb post:the_events_calendar_start_time]
```

## Event End Date

Outputs an event's end date e.g. August 2nd with the option to set the date format using the `format=''` attribute.

```markup
[wpbb post:the_events_calendar_end_date format='']
```

## Event End Time

Outputs an event's end time e.g. 13:00pm.

```markup
[wpbb post:the_events_calendar_end_time]
```

## Event Cost

Outputs an event's cost e.g. 100. A value of "Free" is returned when "0" is entered as the event cost.

```markup
[wpbb post:the_events_calendar_cost]
```

## Event Website URL

Outputs the event's website URL e.g. `https://www.my-event-website.com/`.

```markup
[wpbb post:the_events_calendar_website_url]
```

:::tip
You can wrap the field connection shortcode with `<a>` tags to make a link.

```markup
<a href="[wpbb post:the_events_calendar_website_url]" title="My Event URL">My Event URL</a>
```
:::

## Event Website Link

Outputs the event's website URL as a HTML link and uses "View Event Website" as link text.

```markup
[wpbb post:the_events_calendar_website_link]
```

## Event Full Address

Outputs the event's full address which includes address, city, country, state or province, and postal code.

For example, `Hoover Dam, Boulder City, NV 89005 United States`.

```markup
[wpbb post:the_events_calendar_address]
```

## Event Map URL

Outputs an event's map URL. For example:

```markup
https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Hoover+Dam+Boulder+City+NV+86445+United+States
```

Similar to the [website URL](#event-website-url) field connection you can wrap this in `<a>` tags to create a link.

```markup
[wpbb post:the_events_calendar_map_url]
```

## Event Map Link

Outputs an event's URL as a HTML link and uses "**+ Google Map**" as link text. 

```markup
[wpbb post:the_events_calendar_map_link]
```

## Event Address

Outputs an event's address first line e.g. Hoover Dam.

```markup
[wpbb post:the_events_calendar_address_first_line]
```

## Event City

Outputs an event's address city e.g. Boulder City.

```markup
[wpbb post:the_events_calendar_address_city]
```

## Event State

Outputs an event's address state. US states are abbreviated e.g. NV instead of Nevada.

```markup
[wpbb post:the_events_calendar_address_state]
```

## Event Region

Outputs an event's address region e.g. NV (effectively the same as Event State).

```markup
[wpbb post:the_events_calendar_address_region]
```

## Event Zip

Outputs an event's zip code e.g. 89005.

```markup
[wpbb post:the_events_calendar_address_zip]
```

## Event Phone

Outputs an event's phone number e.g. +1 702-494-2517.

```markup
[wpbb post:the_events_calendar_phone]
```

## Event Venue

Outputs an event's venue e.g. Hoover Dam.

```markup
[wpbb post:the_events_calendar_venue]
```

## Event Venue Content

Outputs an event's venue content i.e. the content added to the [WordPress editor when creating or editing a venue](https://theeventscalendar.com/knowledgebase/k/venue-and-organizer-pages/).

```markup
[wpbb post:the_events_calendar_venue_content]
```

## Event Venue URL

Outputs an event's venue URL e.g. `https://my-event-website.com/venue/hoover-dam/`.

```markup
[wpbb post:the_events_calendar_venue_url]
```

## Event Venue Link

Outputs an event's venue URL as a HTML link and uses the venue name as link text.

```markup
[wpbb post:the_events_calendar_venue_link]
```

## Event Venue Website URL

Outputs an event's venue website URL.

```markup
[wpbb post:the_events_calendar_venue_website_url]
```

## Event Venue Website Link

Outputs an event's website URL as a HTML link and uses "View Venue Website" as link text.

```markup
[wpbb post:the_events_calendar_venue_website_link]
```

## Event Organizer

Outputs an event's organizer name.

```markup
[wpbb post:the_events_calendar_organizer]
```

## Event Organizer Content

Outputs an event's organizer content i.e. the content added to the [WordPress editor when creating or editing a venue](https://theeventscalendar.com/knowledgebase/k/venue-and-organizer-pages/).

```markup
[wpbb post:the_events_calendar_organizer_content]
```

## Event Organizer URL

Outputs an event's organizer URL e.g. `https://my-event-website.com/organizer/name/`.

```markup
[wpbb post:the_events_calendar_organizer_url]
```

## Event Organizer Link

Outputs an event's organizer URL as a HTML link and uses organizer title as link text.

```markup
[wpbb post:the_events_calendar_organizer_link]
```

## Event Organizer Website URL

Outputs an event's organizer website URL.

```markup
[wpbb post:the_events_calendar_organizer_website_url]
```

## Event Organizer Website Link

Outputs an event's organizer website URL as a HTML link and uses "View Organizer Website" as link text.

```markup
[wpbb post:the_events_calendar_organizer_website_link]
```

## Event Organizer Phone

Outputs an event's organizer phone number.

```markup
[wpbb post:the_events_calendar_organizer_phone]
```

## Event Organizer Email

Outputs an event's organizer email address.

```markup
[wpbb post:the_events_calendar_organizer_email]
```

## Event Field

:::info
This field connection is only available when you have the Pro version of [The Events Calendar plugin](https://theeventscalendar.com/products/wordpress-events-calendar/) installed.
:::

The Event field outputs any [custom fields](https://theeventscalendar.com/knowledgebase/k/pro-additional-fields/) created from the **Events > Settings > Additional Fields** tab within your WordPress dashboard.

The field connection supports all field types which are Text, Text Area, URL, Radio, Checkbox, and Dropdown. Add the **Field Label** into the shortcodes `name=''` attribute for the field you wish to display.

```markup
[wpbb post:the_events_calendar_field name='']
```

## Events Back Link

Outputs an event's back url as a HTML link and uses "« All Events" as link text.

Outputs an event's organizer website URL as a HTML link and uses "View Organizer Website" as link text.

```markup
[wpbb post:the_events_calendar_back_link]
```

## Events Back URL

Outputs an event's back url e.g. `https://my-event-website.com/events/`.

```markup
[wpbb post:the_events_calendar_back_url]
```
