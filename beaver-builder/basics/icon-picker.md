---
title: Icon Picker
sidebar_label: Icon Picker
keywords: [icon picker, icons, font awesome, dashicons, icon sets, icon search, custom icons, recent icons]
---

Use the Beaver Builder icon picker to browse, search, and insert icons from Font Awesome, Dashicons, Foundation, and your uploaded icon sets.

## Usage

The Beaver Builder icon picker opens from any Icon field in module settings, such as the Icon, Icon Group, Button, Callout, and List modules. Click **Select Icon** to open the picker. After an icon is chosen, the field shows a preview of the icon with a **Replace** link to open the picker again and, where the module allows an empty value, a **Remove** link to clear it.

The picker is a dialog with a sidebar on the left for choosing an icon set and category, a toolbar for search and view options, a results area, and a footer that shows the selected icon. Choose an icon in the results, then click **Insert** to apply it to the field. The stored value is the icon's class string, which is the same value shown in the footer. The format depends on the set, for example `fas fa-user` for Font Awesome Solid, `fa-brands fab fa-wordpress` for Font Awesome Brands, and `dashicons dashicons-before dashicons-admin-site` for Dashicons.

Which icon sets appear in the picker is controlled on the [Icons settings](/beaver-builder/settings/icons) tab. Pro-only Font Awesome styles become available when Font Awesome Pro is enabled through the [Font Awesome integration](/beaver-builder/integrations/font-awesome), and custom kit icons appear when a kit with uploaded icons is connected.

## Sidebar

The sidebar lists the available icon sets and, for Font Awesome sets, the categories within the active set.

### Icon Set

Lists every icon set enabled on the Icons settings tab, plus two built-in entries at the top.

- **All:** The default view. Shows one representative of every Font Awesome icon across the enabled styles, and is the widest scope for search.
- **Recent:** Icons inserted recently anywhere on the site. The list is shared by every user, not kept per user. Appears only after the picker has been used at least once. Icons from a set whose font is not loaded are hidden from this list.
- **Font Awesome styles:** One entry per enabled style, labeled with the full set name, such as **Font Awesome Solid**, **Font Awesome Regular**, and **Font Awesome Brands**. Pro-only styles are labeled **(pro only)** and appear when Font Awesome Pro is enabled. **Font Awesome Light** and **Font Awesome DuoTone** need only Pro enabled. **Font Awesome Thin** and the **Sharp** and **Sharp Duotone** families also require the official Font Awesome plugin to be active. Every set must be enabled on the Icons settings tab before it appears.
- **Other sets:** WordPress Dashicons, Foundation Icons, custom sets uploaded as IcoMoon or Fontello zip files, and custom icons from a Font Awesome kit.

Selecting a set clears the active category but keeps the current search term, so you can narrow the same search by set.

### Categories

Lists the Font Awesome categories present in the active set, each with a count of matching icons. Click a category to show only its icons, or click **All categories** to return to the full set. The counts reflect the active set, so a single-style set such as Brands shows lower counts than **All**.

This section appears only for **All** and the Font Awesome style sets. Dashicons, Foundation, and uploaded sets carry no category data and show a flat list of icons instead.

## Toolbar

The toolbar runs along the top of the results area.

### Search

Filters the results as you type. Press `Cmd+K` on macOS or `Ctrl+K` on Windows and Linux to focus the search field from anywhere in the picker.

Without the official Font Awesome plugin, search matches against the icon name and label within the active set and category. With the plugin active, search runs against the plugin's live icon search, which also covers your kit's custom icons, and the results are then narrowed to the active set and category. A short delay after you stop typing is applied before a live search runs.

### View toggle

Switches the results between grid view, which shows each icon with its name beneath it, and list view, which shows one icon per row with its name alongside.

### Category chips

A row of quick filters for the most populated categories in the active set. Click a chip to filter by that category, and click it again to clear the filter. Chips appear only when the active set has categories.

## Results

The results area shows the icons that match the active set, category, and search term. Every icon displays its name, so you can confirm a match without hovering.

### Category sections

When you browse **All** or a Font Awesome style set with no search term or category selected, icons are grouped into category sections. Each section shows a preview of up to 18 icons. When a category holds more than 18 icons, a **View all** button follows the preview, labeled with the total count, for example **View all 42**. Click it to switch to that category and see every icon in it. Categories with 18 or fewer icons show all of them in the section and have no button.

### Flat list

When a search term or category is active, or when the active set has no category data, icons appear in a single list. The picker shows a loading indicator while a live search is running, and **No icons found** when nothing matches.

### Kit subset notice

If your Font Awesome kit is configured to include only a hand-picked subset of icons, the picker shows only those icons and displays a notice with the number available in your kit. The generic Font Awesome style sets are removed from the sidebar in this case because the kit's font does not include the other icons.

## Footer

The footer shows the current selection and the actions for closing the picker.

### Selected icon

Shows the selected icon and its class string, or **No icon selected** when nothing is chosen. Click a different icon in the results to change the selection before inserting.

### Insert

Applies the selected icon to the field and closes the picker. The button is disabled until an icon is selected.

### Cancel

Closes the picker without changing the field. Pressing `Esc` or clicking the close button in the header does the same.
