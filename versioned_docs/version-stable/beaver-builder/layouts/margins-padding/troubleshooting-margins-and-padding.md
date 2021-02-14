---
id: troubleshooting-margins-and-padding
title: Troubleshooting responsive margins and padding
sidebar_label: Troubleshooting Margins and Padding
---

While basic margin and padding spacing is very easy in Beaver Builder, it can
get complicated when you want to exert finer control over individual settings.
If you can't figure out why one of your settings doesn't seem to be showing on
the published page, it may be helpful to read the technical information here
about how settings, propagation, overrides, and auto spacing interact to
settle on a final value.

## Factors that influence the final margin or padding value

There are a number of factors that affect the final margin and padding value
for each row, column, or module on each side (top, bottom, left, right) and at
each device size, including what happens when a value is not explicitly set,
or when there's more than one value competing to be the winner.

Here are the factors that determine each final margin and padding value:

  * Built-in defaults for margin and padding settings.
  * Custom defaults for some margin and padding settings.
  * Margin and padding settings for individual rows andcolumns, and margin settings for modules, for each side (top, bottom, left, right) at each device size.
  * Auto spacing, which automatically reduces spacing on mobile devices.
  * Propagation rules for when a value is not explicitly set by the user.
  * Overrides when these various types of settings and propagations conflict.

##  Built-in defaults

Out of the box, Beaver Builder adds the following margins and padding:

  * 0px margin on each side of all rows and columns
  * 20px padding on each side of all rows, 0 px padding for columns
  * 20px margin on each side of all modules  
Note that modules don't have padding.

If you didn't change a single margin or padding anywhere, these defaults would
apply on every device, though mobile devices may be different if auto spacing
is enabled, which is is by default. See the section below on auto spacing.

## Custom defaults

If you want to override the built-in defaults site-wide, you can make the
following changes in **Tools > Global settings**:

  * Change default margins of rows or columns on all sides for each device size
  * Change default padding of rows or columns on all sides for each device size
  * Change default margins of modules on all sides for each device size.

For example, you could set the default row margin to 30px on desktop, 20px on
tablets, and 10px on mobile. This custom default would apply to all sides of
every row.

You can also use the responsive toggle icon to set a different global margin
or padding at each device size, as shown in the following screenshot.

![](/img/troubleshooting-margin-padding.svg)

You can also change the global unit from absolute (pixels) to relative
(percent).

## Individual settings

Individual settings (we'll also call them explicit individual settings) are
values set by the user on the **Advanced** tab of individual rows, columns,
and modules. You can set a different value for every side (top, bottom, left,
right) of every single row, column, and module, at every device size (large,
medium, small). Luckily, you don't have to if you're satisfied with the
spacing that's applied automatically.

## Auto spacing

Auto spacing is a Beaver Builder feature that makes your mobile layouts look
better without needing to change individual mobile spacing settings, but if
you want more control over spacing on small devices, you can override it or
disable it entirely.

Auto spacing is enabled when you install Beaver Builder, and it works as
follows:

  * All margins for rows, columns, and modules are set to the default margin value.  
See Example 1 below.

  * Left and right padding for rows and columns is set to the default padding value. The top and bottom padding is not affected by auto spacing.
  * If a custom default is explicitly set for small devices, auto spacing uses the custom default value instead of the built-in default value.  
See Examples 4 and 8 below.

Auto spacing interacts with propagation and overrides, as described in the
next section.
[You can](/beaver-builder/layouts/margins-padding/disable-auto-spacing-on-mobile-devices.md) disable auto spacing, but this is not generally advised, because it
means that you will have to make many more individual settings on your site.

## Propagation

Propagation occurs when a specific value isn't entered by the user into a
particular field. Here are the propagation rules:

  * Custom defaults: Margin and padding values set for large devices (desktop) propagate custom default values to medium devices (tablets) and small (mobile) devices. Values set for tablets don't propagate. See Example 2 below.
  * Individual settings: A margin or padding value for large devices set on the top, bottom, left, or right side of a row, column, or module propagates to the identical setting on medium and small devices. Values explicitly set for tablets don't propagate.  
See Examples 3 and 5 below.

**Propagation is subject to overrides.** See the next section.

## Overrides

When explicit individual settings and/or propagation rules are in conflict,
override rules take over. Rather than trying to understand each rule, it may
be easier to first look at the examples in the next section.

  * Individual values explicitly set by the user always override propagation and auto spacing.  
See Example 7 below.

  * Propagation from explicitly set individual values for a specific device overrides propagation from custom default values for that device.   
See Example 6 below.

  * An explicitly set custom default for a particular device overrides a propagated individual setting.  
See Example 8 below.

  * Auto spacing overrides propagation from desktop custom defaults and individual settings and uses the built-in default.  
See Examples 2, 3, and 6 below.

##  Examples

Here's a table of examples, with a description of each example below the
table.

  * Parentheses () indicate propagated values.
  * Square brackets [] in the mobile column indicate auto spacing values.
  * In the mobile column, the first value in each row indicates the final value when auto spacing is enabled. The second value indicates the final value when auto spacing is disabled.
  * A verbal description of each example appears underneath the table.

#### Examples of row margin settings

Example number  |  Built-in default  |  Custom default (desktop / tablet / mobile)  |  Individual desktop / tablet / mobile  |  Individual mobile [+/- auto spacing]  
---|---|---|---|---  
1  |  0px  |  \--  |  (0) / (0)  |  (0) / (0)  
2  |  0px  |  10 / (10) / (10)  |  (10) / (10)  |  [0] / (10)  
3  |  0px  |  \--  |  20 / (20)  |  [0] / (20)  
4  |  0px  |  12 / 10 / 5  |  (12) / (10)  |  [5] / (5)  
5  |  0px  |  \--  |  20 / 15  |  [0] / (20)  
6  |  0px  |  10 / (10) / (10)  |  20 / (20)  |  [0] / (20)  
7  |  0px  |  \--  |  20 / (20)  |  5 / 5  
8  |  0px  |  25 / 20 / 15  |  10 / (20)  |  (15) / (15)  

Here's an explanation of each example.

  * **Example 1**  
  **Propagation of built-in defaults.**  
  With no explicit custom default or individual settings, the built-in defaults propagate to all individual row margins. Auto spacing sets the mobile value to the built-in default of 0px.

  * **Example 2**  
**Propagation of custom defaults, auto spacing override.**  
A custom default margin is set to 10px for desktop only. That value propagates
to the tablet and mobile custom defaults. That value also propagates to
individual desktop and tablet settings. However, since there's no specific
default or individual value set for mobile, auto spacing sets the individual
mobile value to the built-in default of 0px. If auto spacing is disabled, the
mobile value is the custom desktop default value.

  * **Example 3**  
  **Propagation of individual settings, auto spacing override.**  
  An individual margin setting is entered for large devices. It propagates to tablet. Auto spacing sets the mobile margins to the built-in default of 0 px.  
  If auto spacing is disabled, the mobile value is the propagated individual desktop value.

  * **Example 4**  
  **Propagation of explicitly set custom defaults, auto spacing to custom default.**  
  Explicit custom default values are set for desktop, tablet, and mobile.
  Individual desktop and tablet settings propagate from the custom default desktop and tablet settings respectively. Auto spacing sets the mobile value to the custom default mobile value. With auto spacing disabled, the value is the propagated custom default mobile value.

  * **Example 5**  
  **Propagation of individual settings, auto spacing override.**  
  Individual margins are set for desktop and tablet. There was no custom setting
  for mobile, so auto spacing sets the mobile value to the built-in default 0px.
  With auto spacing disabled, the mobile value is the propagated desktop value.

  * **Example 6**  
  **Propagation of individual settings, auto spacing override.**  
  A custom default margin is set to 10px for desktop, and a custom individual
  margin is set to 20px for desktop. The value for tablet propagates from the
  individual desktop setting. Since there's no explicit setting for mobile
  devices, auto spacing uses the built-in default value of 0px. With auto
  spacing disabled, the individual desktop setting propagates to mobile.

  * **Example 7**  
  **Explicit and propagated individual values override auto spacing.**  
  Explicit individual values are set for desktop and mobile. The tablet
  value is propagated from the individual desktop value. Because the mobile
  value is explicitly set, the value is the same whether or not auto spacing is
  enabled.

  * **Example 8**  
  **Explicit custom default value overrides individual propagation.**  
  A custom default value is set separately for desktop, tablet, and mobile. An
  individual value is set for desktop only. The individual tablet value
  propagates from the custom default tablet setting. For the mobile value, auto
  spacing sets the value to the custom default set for mobile. If auto spacing
  is disabled, the mobile value propagates from the custom default mobile value.
