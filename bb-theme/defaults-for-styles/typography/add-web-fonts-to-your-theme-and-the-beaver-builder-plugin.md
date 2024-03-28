---
id: add-web-fonts-to-your-theme-and-the-beaver-builder-plugin
title: Add web fonts to your theme and the Beaver Builder plugin
sidebar_label: Add web fonts to your theme and the Beaver Builder plugin
---

The Beaver Builder Theme and plugin both have built-in system fonts and Google fonts, but you can also add any other web fonts for which you have a license to generate and use web fonts.

These instructions should work with most themes, but instructions are also included on how to add the fonts to the font selection fields in Beaver Builder Theme's Customizer and the Beaver Builder plugin.

:::info
This article applies to web fonts other than [Google fonts](/bb-theme/defaults-for-styles/typography/use-a-google-font-in-headings-and-text.md) and [Adobe Typekit fonts](/bb-theme/defaults-for-styles/typography/load-and-use-adobe-fonts.md).
:::

There are three steps to using web fonts:

1. Prepare the web fonts and upload them to your website
2. Load the fonts with CSS
3. Define where the fonts will be used

You don't need to be a developer to accomplish these tasks, but you should know how to upload files and feel up to modifying your site's CSS and your child theme's _functions.php_ file with code and modifications provided here. You should also have some basic familiarity with fonts and font file types.

:::tip **Tip**
Make sure you have a [child theme](/bb-theme/getting-started/do-i-need-to-install-the-beaver-builder-child-theme.md) installed and activated. If you use the main theme, you'll lose your changes with the next theme update.
:::

This article contains the basic set of steps to load and use a web font, using a simple example of adding a single font with one style. See also the [complex example of adding a font with multiple styles and weights](/bb-theme/defaults-for-styles/typography/add-web-fonts-complex-example.md).

## 1 Prepare and upload the set of web fonts

1. If you don't already have a web font file set ( _.woff_ and _.woff2_ files) for the font you want to use, you can create one from desktop fonts ( _.otf_ or _.ttf_ ) using the [Font Squirrel Web Font Generator](https://www.fontsquirrel.com/tools/webfont-generator) or various web font converter apps.
   Make sure you have an appropriate license to use your font this way.
2. After you have generated the kit, upload the _.woff_ and _.woff2_ files from it to your website.
   You can upload your font files anywhere, but a good place to put them is in a folder called _fonts_ in your child theme folder. For the Beaver Builder child theme, this is the path:
   _wp-content/themes/bb-theme-child/fonts_
   We'll use this location in the next procedure.

:::tip
Older web font file formats like _.eot_ , _.svg_ , and _.ttf_ are not required with current browsers, but if you are in a situation where your site will be accessed by older browsers, you can add them as well.
:::

## 2 Load the font files with CSS

The `@font-face` rule in CSS3 specifies the location of web fonts and loads them.

1. Go to the location on your site where you can add CSS rules that apply site-wide.
   In this example, we'll use file paths that will work for code placed in the following location:

   **Appearance > Editor > style.css** (in the child theme)

See this article about [where to add custom CSS rules](/beaver-builder/basics/custom-code).

2. If your web fonts kit includes a CSS stylesheet, open that file an copy all the `@font-face` rules, and paste into the location where you're putting the CSS rules for your site.
   Otherwise, start with the following example.

```css
/* Add your custom styles here */
@font-face {
  font-family: "forza-book";
  src:
    url("https://example.com/wp-content/themes/bb-theme-child/fonts/forza-book.woff2") format("woff2"),
    url("https://example.com/wp-content/themes/bb-theme-child/fonts/forza-book.woff") format("woff");
  font-weight: normal;
}
```

3. In the code you've inserted, modify the `url` lines in the `src` attribute to include the URLs for all and only the file types that you uploaded, with the correct file names.

4. Change the value of `font-family` to what you want to appear in the font selection list in Customizer or the Beaver Builder plugin. It's also what you'll see listed as the font when you inspect the element in your browser.
   In the example here you could change `'forza-book'` to `'Forza Book'`.

:::info
If you plan to include the font in the Customizer font lists, don't use hyphens for the `font-family` value.
:::

## 3 Specify where the font will be used

There are several options to specify where the font will appear. For the Beaver Builder Theme, you can add the font to the font selection list in the Customizer, where it appears in the list of system fonts. You can also add the font to the Beaver Builder modules that allow font section, such as the Heading module.

For other themes, or to have more control about exactly where the fontappears, you can use CSS rules.

Here are the options. You can implement any or all at the same time.

- Option 1: Add code so the font appears In all of the font selection lists in Beaver Builder Theme's Customizer
- Option 2: Add code so the font appears in all of the module font selection lists in Beaver Builder
- Option 3: Add CSS rules to specify that the font is used for particular HTML elements, IDs, or classes

:::tip

- You may need to publish and clear your browser cache to see the web font as you complete these steps. Some browsers are particularly tenacious in holding onto fonts even when the cache is cleared. If you suspect that, try looking at the published page in another browser.
- The fonts will appear at the end of the system fonts list, not in alphabetical order.
  :::

### Options 1 and 2: Add code so the font appears in Customizer and Beaver Builder modules

Add a single function, then use filters to add the font to Beaver Builder Theme's Customizer or Beaver Builder modules or both. This procedure shows how to add the code for either or both options.

1. Open the Beaver Builder child theme's _functions.php_ file in a text editor on in the WordPress admin panel at **Appearance > Editor**.
   For Beaver Builder Theme, this file is located at _wp-content/themes/bb-theme-child/_
2. Add the following code at the end of the file.

```php
function my_bb_custom_fonts ( $system_fonts ) {

  $system_fonts[ 'Forza Book' ] = array(
    'fallback' => 'Verdana, Arial, sans-serif',
    'weights' => array(
      '400',
    ),
  );

return $system_fonts;

}
//Add to Beaver Builder Theme Customizer
add_filter( 'fl_theme_system_fonts', 'my_bb_custom_fonts' );

//Add to Beaver Builder modules
add_filter( 'fl_builder_font_families_system', 'my_bb_custom_fonts' );
```

3. Change the `$system_fonts` key to match the `font-family` value you used in the CSS rule in the previous procedure. In this example, it's `forza-book`, or `Forza book` if you changed it to a user-friendly name.
   If your CSS has more than one font family, see [the complex example of installing web fonts](/bb-theme/defaults-for-styles/typography/add-web-fonts-complex-example.md).
4. Change the fallback font list if you want. For example, if you're adding a serif web font, you might want to change the fallback to the following:

```php
"fallback" => "'Times New Roman',Times, serif",
```

5. Change the font weight to match the weight of your web font. For example, the CSS for Forza Book in the previous procedure has only one weight: `font-weight: normal;`, which corresponds to a font weight of 400. Here's a list of the standard correspondence with font weight names and their numerical weight value from the [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) site.

| Value | Common weight name        |
| ----- | ------------------------- |
| 100   | Thin (Hairline)           |
| 200   | Extra Light (Ultra Light) |
| 300   | Light                     |
| 400   | Normal                    |
| 500   | Medium                    |
| 600   | Semi Bold (Demi Bold)     |
| 700   | Bold                      |
| 800   | Extra Bold (Ultra Bold)   |
| 900   | Black (Heavy)             |

:::tip

- These font weight correspondences are not set in stone, and you may want to experiment with numerical values to get the font weight and fallback font weight looking the way you want. If you do a web search for font weight, you'll find some interesting articles on the subject.

- Usually fonts with more than one weight are delivered in a separate web font file for each weight, with a different `@font-face` CSS rule for each weight. If you only have one font file, you can still add more than one weight to the code above, and you will see a difference in the display, but in general that's not a good idea, for the reason that the font weights will be generated by the browser, and they won't look the same as a font weight that the font developer created. See the [complex web fonts example](/bb-theme/defaults-for-styles/typography/add-web-fonts-complex-example.md) for information about how to incorporate fonts with separate files for each weight.
  :::

### Option 3: Add CSS rules to determine where the web font is used

1. Go to the location on your site where you can add CSS rules that apply site-wide, in our examples here it's the _style.css_ file for your child theme in **Appearance > Editor**.
   See the article about [where to add custom CSS rules](/beaver-builder/basics/custom-code).

2. Add rules to show where you want the font to be used, as in this example. Substitute the name of your custom font family from the previous rule. You can use different fallback fonts besides Verdana, Arial, and sans-serif.

```css
/* Use this rule to make the custom font the default font */
body {
  font-family: "Forza Book", Verdana, Arial, sans-serif !important;
}

/* Use this rule to apply the custom font to menu items */
.fl-page-nav .navbar-nav,
.fl-page-nav .navbar-nav a {
  font-family: "Forza Book", Verdana, Arial, sans-serif;
}

/* Use this rule to apply the custom font to headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Forza Book", Verdana, Arial, sans-serif;
}

/* Use this rule to apply the custom font to paragraphs */
p {
  font-family: "Forza Book", Verdana, Arial, sans-serif;
}
```
