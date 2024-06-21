---
id: contact-form
title: Contact form
sidebar_label: Contact Form module
description: The Contact Form module displays a basic contact form. Form information is sent by email to an address you specify.
---

The Contact Form module displays a basic contact form with the following properties:

- The form can display **Name**, **Subject**, **Email**, **Phone**, and **Message** fields.
  The labels and placeholder text for these fields can be customized.
- By default, the **Name** and **Email** fields are displayed, and the **Subject** and **Phone** fields are hidden.
  Any fields that are displayed are required.
- There's an optional **Terms and Conditions** checkbox.
  You can add custom text above the checkbox and customize the checkbox label, as in the following screenshot.
  If you enable the checkbox, users must select the checkbox to submit the form successfully. If they don't, they receive the message "You must accept the Terms and Conditions." One use for this checkbox is to meet GDPR requirements if you feel users must
  explicitly accept terms and conditions.
  ![](/img/contact-1.png)
- You can [add a Google reCaptcha button](/beaver-builder/layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form.md) to the form to deter spam.
- The user can submit the form with either the spacebar or the Enter key.
- You can choose whether the person who submits the form sees a confirmation message or is redirected to a URL you specify.
- Email notifications are automatically sent to the designated recipient upon form submission.

:::info
Entries from this form are not stored in the database or added to your website files. If you need a
more central or permanent record of contacts than the email notifications, use a third-party form
plugin.
:::

## Settings

### General tab

| Section     | Field                             | Description                                                                                                                                                                                                                           |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|             | **Send to Email**                 | The person who will receive the notification of the form submission. Note that this is the only record that will exist that the form was submitted.                                                                                   |
| **Fields**  | **Name field**                    | (Default is **Show**.) If set to **Hide**, the **Name** field does not appear in the contact form.                                                                                                                                    |
|             | **Name field placeholder**        | (Default is "Your name.") Modify if you want to customize the field's placeholder text.                                                                                                                                               |
|             | **Subject field**                 | (Default is **Hide**.) If set to **Hide**, the **Subject** field is not displayed in the form.                                                                                                                                        |
|             | **Email subject**                 | (Default is "Contact Form Submission.") Modify if you want to customize the subject line in the notification email.                                                                                                                   |
|             | **Email field**                   | (Default is **Show**.) If set to **Hide**, the **Email** field is not displayed in the form. **Note:** If you set this option to **Hide** you will have no way to contact the person who submits the form.                            |
|             | **Email field placeholder**       | (Default is "Your email.") Modify if you want to customize the field's placeholder text.                                                                                                                                              |
|             | **Phone field**                   | (Default is **Hide**.) If set to **Hide**, the **Phone** field is not displayed in the form.                                                                                                                                          |
|             | **Your Message placeholder**      | (Default is "Your message.") Modify if you want to customize the placeholder text for the message.                                                                                                                                    |
|             | **Show labels/placeholders**      | (Default is **Show placeholders only**.) Determines whether placeholders and not labels are shown for each field, or labels and not placeholders are shown, or both are shown. See the screenshot below this table.                   |
|             | **Terms and Conditions checkbox** | (Default is **Hide**.) If set to **Show**, new settings appear to customize the text label and to enter the terms and conditions. If you enable this setting, users are required to accept them for form submission to be successful. |
| **Success** | **Success action**                |                                                                                                                                                                                                                                       |

![](/img/contact-form-1cf4996c.png)

### Button tab

| Section               | Field                             | Description                                                                                                                                                                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                       | **Button text**                   | (Optional) Enter custom text for the **Contact** button. (Default text is "Send")                                                                                                                                                             |
| **Button icon**       | **Button icon**                   | (Optional) Select an icon for the button.                                                                                                                                                                                                     |
| **Button style**      | **Button width**                  | **Auto** means no width is set for the button. **Full width** means the button takes up the full width of the container (minus any margin settings).                                                                                          |
|                       | **Button align**                  | The [standard toggles](basics/typography.md#align) for horizontal alignment. This can be set individually for each device size.                                                                                                               |
|                       | **Button padding**                | (Optional) Specify the number of pixels of space between the button edge and the button text.                                                                                                                                                 |
| **Button text**       | **Button text color**             | (Optional) Choose the color of the button. **Note:** If you're using the Beaver Builder Theme, the default button and button hover colors come from **Customize > General > Buttons**, but you override the default colors with this setting. |
|                       | **Button text hover color**       | (Optional) Enter a hover color.                                                                                                                                                                                                               |
|                       | **Button typography**             | The [standard typography section](basics/typography.md) to style the button text.                                                                                                                                                             |
| **Button background** | **Button background color**       | Set the fill color for the button in the resting state.                                                                                                                                                                                       |
|                       | **Button background hover color** | Set the button's fill color on hover. If this setting is left blank, the **Background color** setting applies to hover also.                                                                                                                  |
|                       | **Button background style**       | **Flat**: consistent fill color. **Gradient**: gradient of the background color, lighter on top and darker on the bottom.                                                                                                                     |
|                       | **Button background animation**   | **Disabled** by default. If set to **Enabled**, there's a 0.2-second linear transition from resting state to hover state.                                                                                                                     |
| **Button border**     | **Button border**                 | (Optional) The [standard border settings](basics/border.md).                                                                                                                                                                                  |

### Captcha tab

See [this article](/beaver-builder/layouts/modules/contact-form/add-a-google-recaptcha-checkbox-to-a-form.md) for instructions on how to implement Google reCaptcha.

### Advanced tab

There are all the usual [**Advanced** tab settings](/beaver-builder/layouts/advanced-tab/index.md) for margins, visibility, animations, and advanced HTML settings.

## Accessibility

For the contact form input fields, the `aria-describedby` attribute is used to indicate the IDs of the elements that describe the object. The label and placeholder text can be shown, hidden, or customized, so the value of the `aria-describedby` attribute for each input field in the form is the ID of the error that appears if the field is not filled in.

For example, the following code is the HTML output produced for the **Name** field in a contact form with the default labels, placeholders, and the **Show placeholders only** setting.

```html
<div class="fl-input-group fl-name">
  <label for="fl-name" class="hidden">Your name</label>
  <span class="fl-contact-error" id="name-error">Please enter your name.</span>
  <input
    type="text"
    id="fl-name"
    name="fl-name"
    aria-describedby="name-error"
    value=""
    placeholder="Your name"
  />
</div>
```

Because the setting is **Show placeholders only**, the `label` tag is assigned the CSS class `hidden`, and the CSS rule for that class is `display:none`, which causes most screen readers ignore the content of that tag.

In contrast, here's the output when **Show labels/placeholders** is set to **Show labels only**:

```html
<div class="fl-input-group fl-name">
  <label for="fl-name">Your name</label>
  <span class="fl-contact-error" id="name-error">Please enter your name.</span>
  <input
    type="text"
    id="fl-name"
    name="fl-name"
    aria-describedby="name-error"
    value=""
    placeholder=""
  />
</div>
```

In this case, the content in the `<label>` tag is visible to the screen reader, the `<input>` tag's `placeholder` attribute has no value, and the `aria-describedby` value is still the ID of the error message.
