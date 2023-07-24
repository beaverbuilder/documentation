---
id: put-thrive-leads-shortcode-into-a-button-module
title: Put Thrive Leads shortcode into a Button module
sidebar_label: Put Thrive Leads shortcode into a Button module
---

You can integrate Thrive Leads shortcode into a Button module as follows. Once
you've entered the shortcode and set the button text, the Thrive Leads plugin
does all the rest of the work in opening the lightbox and displaying the form.

In these instructions, first you'll get the button and Thrive Leads popup
functional, and then change the button text and style the button in a second
pass.

1. Follow the Thrive Leads documentation to create your popup lead form.
2. Use Thrive Leads to generate a two-step shortcode. It should look something like this:

  ```markup
  [thrive_2step id='1854']Trigger goes here[/thrive_2step]
  ```

3. Open a Button module for editing.
4. Insert the shortcode into the **Text** field.  
You can tweak the text and styles later.

5. Leave the **Click action** setting as **Link**.  
The Thrive Leads plugin takes care of creating the lightbox.

6. In the URL field, enter a hashtag symbol (#).  
Leave **Link target** set to **Same window**.

7. Save the button and preview or view the web page. The button should open the lightbox when clicked.
8. Now you can go back to the Button module and change the text in the shortcode from "Trigger goes here" to whatever you want your button text to say, and style the button as you like.
