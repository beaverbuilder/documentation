---
id: load-and-use-adobe-fonts
title: Load and use Adobe fonts
sidebar_label: Load and use Adobe fonts
---

<div className="embed-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0V9pLhtZn88" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>

Setting up Adobe fonts to work with Beaver Builder involves the following steps:

- Ensure that Google fonts don't load in order to maximize page load time;
- Construct a web project for the font at the Adobe Fonts site;
- Copy the embed code in your Adobe fonts web project and paste it into the appropriate Customizer location;
- Add CSS rules that will determine where the Adobe font is used.

These instructions assume that you have the Beaver Builder Theme, but you should be able to follow similar steps for most other themes.

## Get rid of Google fonts

If your theme is currently using a Google Font for your heading or body font, it will still be loaded even after being overridden with an Adobe font, which can slow down your page load time. Here's how to stop the Google font from loading..

1. Go to **Appearance > Customize > General**.
2. If you plan to use an Adobe font for the headings, click **Headings**, then for **Font Family** select one of the system fonts, such as Verdana.
3. If you plan to use an Adobe font for body text, click **Text**, then for **Font Family** select one of the system fonts, such as Verdana.
4. Click **Save and Publish**.

## Create a web project and get the embed code

1. [Create your web project in Adobe fonts](https://helpx.adobe.com/fonts/using/add-fonts-website.html).
2. [Choose which form of embed code](https://helpx.adobe.com/fonts/using/embed-codes.html) you want to use.
   If you want to load an East Asian font, copy the embed code following the instructions in the section called "JavaScript embed code." Otherwise, copy the embed code following the instructions in the section called "Default embed code."

## Add the embed code to Customizer

1. From the WordPress admin pamel, go to **Customize > Code > Head code**.
   This ensures the code is pasted into the `<head>` area of the web page.
2. Paste in the Adobe embed code, either the Default code or the JavaScript code.
   Make sure the JavaScript is wrapped in `<script>` tags when you paste it into the **Head code** location.

## Add CSS rules to determine where the font is used

There are [several places you can add custom CSS](/beaver-builder/basics/custom-code). The [Adobe Fonts site](https://helpx.adobe.com/fonts/using/css-selectors.html) has some information about how to construct the CSS rules, and here are a couple of examples.

### Heading Font CSS example

The following example rule selects the headings to which the font applies, in this example a font called proxima-nova. It also specifies a fallback font if proxima-nova isn't found. In this example, the fallback is the generic family sans-serif. The exact sans-serif font is left to the user's browser to decide.

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "proxima-nova", sans-serif;
}
```

### Body font CSS example

The following code shows an example CSS rule where the font applies anywherein the body of the page.

```css
body {
  font-family: "proxima-nova", sans-serif;
}
```
