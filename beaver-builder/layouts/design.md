---
title: Design Tab
sidebar_label: Design Tab
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Style any element in a row, column, or module visually with the Design tab, writing plain CSS into the node's own code settings.

The Design tab is enabled by default only on new installations. If you upgraded to Beaver Builder 2.12 from an earlier version, go to **Settings → Advanced** and turn on **Enable Design and Code Tabs**.

## Usage

The Design tab adds visual CSS styling to the settings of rows, columns, and modules, including third-party modules. Open a node's settings, click the paintbrush icon tab, and click any element inside that node on the canvas to style it: colors, typography, spacing, layout, effects, or any CSS property, with changes previewed live as you work.

Everything you do in the Design tab is written as plain CSS into that row, column, or module's own CSS code setting, the same field you can edit by hand on the [Code tab](/beaver-builder/essentials/code-tab) or through custom CSS. Nothing is hidden in separate settings, so you can start visually and continue in code, or the other way around.

The Design and Code tabs appear for users who can edit Beaver Builder's CSS and JavaScript code settings. Other users do not see the tabs.

## Open the Design tab

1. **Enable the feature.** In the WordPress admin, go to **Settings > Beaver Builder > Advanced** and enable **Enable Design and Code Tabs**.
2. **Open a node's settings.** Launch Beaver Builder and open the settings for any row, column, or module.
3. **Click the Design tab.** Click the paintbrush icon in the settings panel's tab bar. The Design and Code tabs sit just before the Advanced tab.

## Select an element to style

With the Design tab open, hovering the canvas highlights the elements you can select. The selection header at the top of the panel names the current target, such as **Row**, **Column**, the module's name, or a selector for an element inside the node.

- Click any element inside the open row, column, or module to style it.
- Click the up arrow in the selection toolbar to move to the parent element.
- Click an element in a different row, column, or module and that node's settings open on the Design tab, keeping your selection.

Styling an inner element applies to every matching element in that row, column, or module, not only the one you clicked. For example, styling one list item in a module styles all of its list items.

:::note
Global rows and modules cannot be styled where they are placed. Open the saved template to edit a global node's styles.
:::

## Style controls

The panel organizes CSS properties into five sections. The section you were last using stays selected as you move between elements and nodes during a session.

Every control writes one CSS property, and clearing a control removes that declaration rather than writing a zero value. Values you type by hand are kept exactly as written, so a `calc()`, a `var()`, or a keyword the control does not list survives untouched.

### Basic

The most common properties in one place, grouped as color, typography, edges, and box shadow.

#### Color

The lead group covers the element's text color, its background, and how opaque the whole element is.

<details>
<summary>Color</summary>

- **Color** (`color`): Sets the text color for the element and anything inside it that inherits color. The row pairs a swatch that opens the color picker with a value field you can type into.
- **Background** (`background-color`, `background-image`): Builds the background as a stack of layers over a base color. Add gradient or image layers and reorder them, or set only the color for a flat fill. If the element already has a `background` shorthand, the control shows it as a read-only row with a **Convert to layers** action that expands it into longhand.
- **Opacity** (`opacity`): Fades the element and its contents. Enter a percentage from 0 to 100, or a unitless value from 0 to 1. Drag the leading icon to scrub the value.

</details>

#### Typography

Four typography controls laid out as two rows, family with weight, then size with line height.

<details>
<summary>Typography</summary>

- **Family** (`font-family`): Sets the font stack. Type any font name, or pick from the menu of generic families such as `serif`, `sans-serif`, and `monospace`, and platform families such as `system-ui` and `ui-monospace`.
- **Weight** (`font-weight`): Sets the weight, either as a keyword such as `normal` or `bold`, or as a numeric value from `100` to `900`.
- **Size** (`font-size`): Sets the font size in any length unit. Drag the leading icon to scrub the value, which steps by 1 in `px` and by 0.1 in `em` and `rem`.
- **Line** (`line-height`): Sets the line height as a unitless multiplier or a length. Unitless and `em` values scrub between 0 and 10 in steps of 0.1.

</details>

#### Edges

Spacing and border controls, each one a shorthand row that opens to reveal its individual sides or corners.

<details>
<summary>Edges</summary>

- **Padding** (`padding`): Sets space inside the element's border. The shorthand row accepts up to four values, such as `10px 20px 30px 40px`, and expands to separate top, bottom, left, and right fields. Padding cannot go below zero.
- **Margin** (`margin`): Sets space outside the element's border, with the same shorthand and per-side fields as padding. Margin accepts negative values so an element can pull toward its neighbor, and accepts the `auto` keyword for centering.
- **Border** (`border`): Sets the border shorthand as free text, such as `1px solid #333`. A toggle reveals four per-edge width fields for top, bottom, left, and right. Setting the first edge width on an element with no border seeds `0px solid currentColor` so the edge renders.
- **Radius** (`border-radius`): Rounds the element's corners. The shorthand row accepts up to four values and the elliptical `/` form, such as `10px 20px / 5px 10px`, and expands to a field per corner. Radius cannot go below zero.

</details>

#### Box Shadow

Adds one or more shadows to the element, edited as a row of fields rather than as a shorthand string.

<details>
<summary>Box Shadow</summary>

- **X, Y, Blur, and Spread** (`box-shadow`): Position the shadow and control how it falls off. X and Y offset it horizontally and vertically and accept negative values, Blur softens the edge, and Spread grows or shrinks the shadow before blurring.
- **Color** (`box-shadow`): Sets the shadow color from the color picker, or binds it to a color token.
- **Inset** (`box-shadow`): Draws the shadow inside the element's box instead of outside it.
- **Additional shadows** (`box-shadow`): Use the add button in the control's label bar to stack more shadows. Once a second shadow exists, the control becomes a list whose rows you can reorder, duplicate, and delete.

</details>

### Text

The full set of text properties, with text color first.

#### Color and typography

The Text tab opens with the same color and typography controls as the Basic tab. Both tabs read and write the same declarations, so a change on one appears on the other.

<details>
<summary>Color and typography</summary>

- **Color** (`color`): Sets the text color. Identical to the Color control on the Basic tab.
- **Family, Weight, Size, and Line** (`font-family`, `font-weight`, `font-size`, `line-height`): The same four typography controls described under the Basic tab, in the same two-row layout.

</details>

#### Text formatting

Five further controls that the Basic tab does not carry, covering alignment, casing, decoration, slant, and tracking.

<details>
<summary>Text formatting</summary>

- **Align** (`text-align`): Aligns text with `left`, `center`, `right`, and `justify` segments. The logical keywords `start` and `end` sit in the caret menu.
- **Transform** (`text-transform`): Changes the casing of the rendered text with `none`, `uppercase`, `lowercase`, and `capitalize`. The source text is unchanged.
- **Decoration** (`text-decoration`): Adds `underline`, `overline`, or `line-through`, or removes an inherited decoration with `none`. The field also accepts full shorthand values such as `underline dotted red`.
- **Style** (`font-style`): Sets `normal`, `italic`, or `oblique`.
- **Letter Spacing** (`letter-spacing`): Adjusts the tracking between characters in any length unit, and accepts negative values to tighten it. Leave it empty for the browser default of `normal`.

</details>

### Layout

Display mode, container behavior, sizing, and positioning. The Flex and Grid groups appear only when the element's own rule sets a matching **Display** value.

#### Display

**Display** (`display`): Sets how the element generates boxes, with `block`, `flex`, and `grid` segments plus a leading Default segment that removes the declaration. Less common values such as `inline`, `inline-block`, `contents`, and `none` sit in the caret menu. Choosing `flex` or `grid` reveals the matching group of container controls below.

#### Flex

Container controls for a flex layout, shown when **Display** is set to `flex`.

<details>
<summary>Flex</summary>

- **Direction** (`flex-direction`): Lays children out in a `row` or a `column`. The `row-reverse` and `column-reverse` variants sit in the caret menu.
- **Wrap** (`flex-wrap`): Chooses whether children stay on one line with `nowrap` or flow onto new lines with `wrap`. The `wrap-reverse` variant sits in the caret menu.
- **Justify** (`justify-content`): Distributes children along the main axis with `flex-start`, `center`, `flex-end`, and `space-between`. The segment icons rotate to follow the direction you set, so they point along the real main axis in a column.
- **Align** (`align-items`): Aligns children across the cross axis with `stretch`, `flex-start`, `center`, and `flex-end`. Values such as `baseline` can be typed and are kept as written.
- **Gap** (`gap`): Sets the space between children. The shorthand row expands to separate row gap and column gap fields.

</details>

#### Grid

Container controls for a grid layout, shown when **Display** is set to `grid`.

<details>
<summary>Grid</summary>

- **Columns and Rows** (`grid-template-columns`, `grid-template-rows`): Define the grid's tracks. When the value is empty or reads as a plain track list, the field holds a track count you can step, and the leading icon opens an editor for sizing each track individually. Values the count cannot represent, such as `subgrid` or `repeat(auto-fill, 200px)`, are edited as raw text and never rewritten.
- **Auto flow** (`grid-auto-flow`): Controls how items without an explicit placement fill the grid, with `row` and `column` segments. The dense packing variants sit in the caret menu.
- **Justify** (`justify-items`): Aligns items within their tracks along the inline axis with `start`, `center`, `end`, and `stretch`.
- **Align** (`align-items`): Aligns items within their tracks along the block axis, using the same four keywords.
- **Gap** (`gap`): Sets the space between tracks, expanding to separate row gap and column gap fields.

</details>

#### Size

Six box-dimension fields, always available regardless of the display mode.

<details>
<summary>Size</summary>

- **Width and Height** (`width`, `height`): Set the element's dimensions in any length unit, or with keywords such as `auto` and `fit-content`.
- **Min Width and Min Height** (`min-width`, `min-height`): Set a floor the element cannot shrink below, which is what usually keeps a fluid element readable on small screens.
- **Max Width and Max Height** (`max-width`, `max-height`): Set a ceiling the element cannot grow past. Both fields show a placeholder of `none`, their default.

</details>

#### Position

Placement controls for taking an element out of the normal flow. The offset and stacking fields appear once you choose a positioning value.

<details>
<summary>Position</summary>

- **Position** (`position`): Sets `relative`, `absolute`, or `fixed`, with `sticky` and `static` in the caret menu, behind a leading Default segment that removes the declaration.
- **Inset** (`inset`): Sets the element's offsets from its containing block. The shorthand row expands to separate top, bottom, left, and right fields, and every field accepts negative values and the `auto` keyword.
- **Z-Index** (`z-index`): Sets the stacking order against other positioned elements, from -9999 to 9999. Drag to scrub whole levels. The placeholder reads `auto`, the default.

</details>

### FX

Filters and transforms, in two groups.

#### Filters

Two rows that each build a list of filter functions, one applied to the element and one applied to what sits behind it. Each row offers the full function set as suggestions at their no-op values, so you can scrub one to see what it does. Reorder the list to change the order the functions apply in.

<details>
<summary>Filters</summary>

- **Filters** (`filter`): Filters the element itself. Available functions are Blur, Brightness, Contrast, Saturate, Grayscale, Sepia, Invert, Opacity, Hue Rotate, and Drop Shadow.
- **Backdrop Filters** (`backdrop-filter`): Filters whatever shows through the element, which is how frosted-glass panels are built. It offers the same function set and needs a partly transparent background to be visible.

</details>

#### Transform

Five transforms plus the origin they pivot around. Each writes its own property, so they combine without overwriting one another.

<details>
<summary>Transform</summary>

- **Translate** (`translate`): Moves the element along the X and Y axes without affecting the layout around it. Both fields take any length and accept negative values, and either can bind to a spacing token.
- **Rotate** (`rotate`): Rotates the element in `deg`, `turn`, `rad`, or `grad`. Negative values rotate the other way.
- **Scale** (`scale`): Resizes the element by a unitless multiplier, where 1 is its normal size. Negative values flip it.
- **Skew** (`transform`): Slants the element by an angle on the X and Y axes. This is the one control here that writes the `transform` shorthand, since CSS has no individual skew property. It edits only its own `skewX()` and `skewY()` functions and leaves any other function in the value untouched.
- **Zoom** (`zoom`): Magnifies the element by a unitless factor, where 1 is 100%. Unlike Scale, zoom affects the surrounding layout and grows from the top left corner. The value cannot go below 0.1.
- **Transform Origin** (`transform-origin`): Sets the point the transforms above pivot around, as an X and Y pair. Percentages lead the unit list, since `50% 50%` is the default, and the keywords `left`, `center`, `right`, `top`, and `bottom` are available. Negative values put the origin outside the element's box.

</details>

### Custom

Free-form property and value rows for anything the other sections do not cover.

#### Property rows

Rows keep the order you add them in, and each one becomes a single declaration in the node's CSS. Drag the divider between the name and value columns to widen either one.

<details>
<summary>Property rows</summary>

- **Property rows** (any CSS property): The list holds every declaration on the selected element for the current state and breakpoint, including the ones the other sections wrote, so it doubles as a flat view of the rule you are building.
- **Add new property** (property name): The field below the rows creates a declaration. Type a property name, press Enter, then set the value in the row that appears. It suggests properties as you type and takes standard names, vendor-prefixed names such as `-webkit-line-clamp`, and custom properties such as `--card-accent`. Naming a property that already has a row focuses that row rather than adding a second one.
- **Value** (any value): The value field offers the same caret menu of units and keywords as the other sections, built from the property name in that row.
- **Clear Value** (row menu): Removes the whole row rather than just its value. Emptying the value by hand leaves the row in place.

</details>

## Property menus and design tokens

Each property row has controls beyond typing a value:

- The caret menu on a value field lists the units and keywords valid for that property, and you can drag a numeric value to scrub it.
- The **⋯** menu on each property offers **Design Tokens**, an **Open Documentation** link to that property's MDN reference, and **Clear Value**.

If the page uses a Beaver Builder AI design system, its tokens appear in the menus filtered by type, so color fields offer color tokens and spacing fields offer space tokens. Choosing a token writes a CSS `var()` reference and shows it as a token chip, so the element restyles automatically when the token changes.

## States and breakpoints

A condition bar above the controls scopes your styles to an interaction state, a breakpoint, or both. Click the bar to open it, and it expands in place to show the two lists side by side. Everything you set afterward is saved against the condition you picked, and the base condition of Normal at All sizes is what you get when you have picked nothing.

### Interaction states

The left list scopes your styles to a moment in the visitor's interaction with the element. Each state other than Normal is written as a pseudo-class rule in the node's CSS, so it inherits everything you set on Normal and overrides only the properties you change.

<details>
<summary>Interaction states</summary>

- **Normal** (base rule): The element's resting appearance, with no pseudo-class applied. This is the base every other state builds on, so start here and treat the rest as overrides.
- **Hover** (`:hover`): Applies while the pointer is over the element. Touch devices have no true hover, so avoid putting anything essential here.
- **Focus** (`:focus`): Applies while the element has focus, whether it was reached by keyboard or clicked with a pointer. Useful on links, buttons, and form fields.
- **Focus visible** (`:focus-visible`): Applies only when the browser decides a focus indicator should be shown, which in practice means keyboard navigation rather than a mouse click. Use this for focus rings you want keyboard users to see without them appearing on every click.
- **Focus within** (`:focus-within`): Applies while focus is anywhere inside the element, including its children. Use it to highlight a whole card or form group when a field inside it is focused.
- **Active** (`:active`): Applies while the element is being pressed, between the press and the release. Use it for the pressed appearance of a button.

</details>

### Breakpoints

The right list scopes your styles to a screen width. The list is built from the widths set in **Global Settings > Responsive Layout**, so the sizes below are Beaver Builder's defaults rather than fixed values. The widths are read when the tab opens, so save Global Settings and reload the builder before a changed width appears here.

<details>
<summary>Breakpoints</summary>

- **All sizes** (base rule): Applies at every width, with no media query. Beaver Builder is desktop-first, so this is where your full-size design belongs and the three breakpoints below override it as the screen narrows.
- **Large** (default: `1200px`): Applies at the **Large Device Breakpoint** width and below, written as `@media (max-width: 1200px)` at the default setting. This is the range Beaver Builder treats as large devices.
- **Medium** (default: `992px`): Applies at the **Medium Device Breakpoint** width and below, written as `@media (max-width: 992px)` at the default setting. This is the range Beaver Builder treats as medium devices such as tablets.
- **Small** (default: `768px`): Applies at the **Small Device Breakpoint** width and below, written as `@media (max-width: 768px)` at the default setting. This is the range Beaver Builder treats as small devices such as phones.

</details>

Because the breakpoints are `max-width` rules that stack, a style you set on Large also applies at Medium and Small unless you override it there. Picking a breakpoint switches the canvas to that device size so you always see what you are styling, and it stays active as you select other elements and nodes. The switch is one-way: changing the size from Beaver Builder's own device toolbar does not move the picker.

Picking from both lists scopes a style to both at once, such as hover at the Small breakpoint only. Combined conditions are written with the media query on the outside and the pseudo-class rule inside it.

A dot on the condition bar means the current combination has styles saved against it. Open the picker and click the dot to clear only that combination, which leaves every other state and breakpoint untouched.
