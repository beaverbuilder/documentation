---
id: add-a-google-recaptcha-checkbox-to-a-form
title: Add a Google reCAPTCHA checkbox to a form
sidebar_label: Add a Google reCAPTCHA checkbox to a form
description: Here's how to add a Google reCAPTCHA to your Contact form or Subscribe Form.
---

You can add [Google reCAPTCHA](https://support.google.com/recaptcha/?hl=en) to
your Contact Form or Subscribe Form module to deter spam.

## reCAPTCHA Examples

Here's an example of a form generated by a Contact module with an "I'm not a
robot" v2 reCAPTCHA checkbox. Checking the box may be sufficient, or in some
cases, the user has to solve a captcha after checking the box.

![](/img/how-to-tips-recaptcha-1.png)

You can also choose a dark checkbox, which appears in the following
screenshot.

![](/img/how-to-tips-recaptcha-2.png)

If you choose a V2 or V3 invisible checkbox, a small reCAPTCHA box pinned to
the right side of the browser screen. When you hover over it, the box expands
to display "protected by reCAPTCHA," as shown in the following animation. You
can choose either a light or dark version for this icon.

![](/img/how-to-tips-recaptcha-3.gif)

With the v2 invisible reCAPTCHA, users may in questionable cases still have to
solve a captcha.

The v3 reCAPTCHA requires no action from users and returns scores, based on
seeing both legitimate and abusive behavior on your site, with the ability for
you to tailor your own action to suit your site, as [described in this Google blog](https://webmasters.googleblog.com/2018/10/introducing-recaptcha-v3-new-way-to.html). Because of this, we recommend that you thoroughly review the [v3
reCAPTCHA docs](https://developers.google.com/recaptcha/docs/v3) before using.

## Register your site for a reCAPTCHA license key pair

Register your site at the [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin). You must choose one of the
following reCAPTCHA types to generate the appropriate keys:

* reCAPTCHA v3 
Verifies requests with a score

* reCAPTCHA v2  

  * "I'm not a robot" checkbox  
  Validate requests with the "I'm not a robot" checkbox

  * Invisible reCAPTCHA badge  
  Validate requests in the background

For more information about these types and how they work, see the [Google
developer reCAPTCHA
documentation](https://developers.google.com/recaptcha/intro).

:::info
If you change your mind about which type of reCAPTCHA to use, you'll
have to get a new key pair for that type.
:::

##  Set up reCAPTCHA in a Contact Form or Subscribe Form module:

  1. Open either module for editing and click the **Captcha** tab.
  2. For the  **reCAPTCHA field**  setting, click **Show**.
  3. For  **Validate type**, choose the validation type you want.
  4. (v3 only) If you're an advanced user and want to sort your reCAPTCHA results by action in your Google admin console, enter an action name here.
  5. Enter the **Site key** and **Secret key** from your Google reCAPTCHA registration.  
Be sure to use keys that match the validation type.

  6. For Theme, choose whether you want the “I'm not a robot” box or the reCAPTCHA icon to have a light background or dark background.
