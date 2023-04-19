---
id: add-a-css-id-or-class-name-to-a-module
title: Add a CSS ID or class name to a module
sidebar_label: Add a CSS ID or class name to a module
---

In [Beaver Builder](https://wpbeaverbuilder.com) you can enter a custom ID or
class name for any row, column, or module, and that name can be used as a
selector in any custom CSS rules that you write.

**To assign a custom CSS ID or class value to a row, column, or module:**

1. Open a row, column, or module for editing.

2. Click the **Advanced** tab and scroll down to the **HTML Element** section.

3. Add a unique ID or a class name or both, depending on how you plan to use it.   
  Don't use a pound sign or period in the value.  
  The following sections describe ID and class selectors in more detail.  

  :::tip
  Multiple CSS classes can be entered by separating them with spaces.
  :::

See [this article](/beaver-builder/styles/custom-code.md) about where to add custom CSS code.

## About the `ID` selector

An ID selector must be unique, meaning it should only be used for one element
(meaning a row, column, or module).

IDs are used for two purposes:

* To write custom CSS rules that apply to a single element.
* To create an anchor so you can link to that element, for purposes such as [scrolling down a page](/beaver-builder/advanced-builder-techniques/smooth-scrolling-links.md) to a particular spot.

Here are the rules for ID selectors:

* They must start with a letter
* They cannot contain spaces
* The only characters they can use are letters, numbers, dashes, or underscores

The symbol used to refer to an ID selector in a CSS rule is the pound sign
(#). For example, if you assign an ID named `my-element` to a module, you can
target that ID by writing a CSS rule for `#my-element`. The following rule
says that the element with the ID `my-element` will be right-aligned:

```markup
#my-element {
  text-align: right;
}
```

:::note
You should use the pound sign to name IDs in your CSS rule, but you should not use the pound symbol when you assign the ID name to the row, column, or module.
:::

##  About the `Class` selector

The same class selector can be used with as many elements as you want your CSS
rule to apply to.

A class selector has the same constraints as IDs in terms of the letters,
numbers, and symbols it can contain.

Suppose you have several Text Editor modules with text that you want to be
centered horizontally and red in color. Assign the same class name, such as
`my-custom-text`, to each of the modules. The CSS symbol to refer to a class
is a period (.), so your CSS rule would look like this:

```markup
.my-custom-text {
  text-align: center;
  color: red;
}
```

Keep in mind that classes in the CSS rule should start with a period, but the
value you enter into the CSS setting for an element should not include the
period.
