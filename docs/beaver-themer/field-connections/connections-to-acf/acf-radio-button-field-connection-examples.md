---
id: acf-radio-button-field-connection-examples
title: ACF Radio Button field connection examples
sidebar_label: Radio Button field connection examples
---

You can use the Advanced Custom Field (ACF) plugin's Radio button field type as a field connection, as a conditional shortcode, and as conditional shortcode testing for a value.

## Examples

These examples are based on a Radio Button ACF field with the label **Event rating** and the name `event_rating`, with three values for the radio buttons:

  * 1 star
  * 2 stars
  * 3 stars

![](/img/acf-radio-button-field-connection-examples-84b58a30.png)

See also the variation below in which the notation for the values is given as `value : label`, as follows:

  * 1 : 1 star
  * 2 : 2 stars
  * 3 : 3 stars

Be sure to leave a space between the value and the label.

![](/img/acf-radio-button-field-connection-examples-8bdfef2b.png)

Then be sure to select what you want to be returned as the value in the **Return value** field. This will affect how you set up conditional shortcode that tests for a value in your Beaver Builder layout.

![](/img/acf-radio-button-field-connection-examples-5356154e.png)

### Example 1: Field connection for an ACF Radio Button field

The field connection has to be the only value in the field. In this example, the field connection is added to the **Heading** field of a Heading module in a Singular Themer layout.

**To add a field connection for an ACF Radio button field:**

  1. Open the Themer layout for editing and add a module to display the field.
  2. Click the Plus icon next to the module field.
  3. Scroll down in the list to **Advanced Custom Fields**, mouse over **ACF Post field**, and click **Connect**.
  4. Change **Field type** to **Radio** and for **Field name** enter event_rating, then click **Save**.

The field connection displays in the **Heading** field, as in the following screenshot.

![](/img/acf-radio-button-field-connection-examples-edf6663f.png)

The field value 3 stars displays in the Heading module, as in the following screenshot.

![](/img/acf-radio-button-field-connection-examples-89fc8cb5.png)

:::note **Note**
If you choose to distinguish the value from the label with the notation `value : label`, the label will appear on the post's editing page where the author chooses a rating, but by default, the value `3` will be displayed on the published page with this field connection. You can change what is returned in the ACF **Return value** setting.
:::

### Example 2: Field connection shortcode example

Suppose you want to add the prefix **Rating:** in the **Heading** field along with the ACF Radio Button value. In this case, you'd use the shortcode. You can add the shortcode by following the previous procedure and choose **Insert** rather than **Connect**, but we'll just provide the shortcode here that would go into the **Heading** field.

```markup
Rating: [wpbb post:acf type='radio' name='event_rating']
```

The result is shown in the following screenshot:

![](/img/acf-radio-button-field-connection-examples-f80b60f9.png)

If you use the notation `value : label` for your custom field values and set **Value** as the **Return value** selection in ACF, the value returned is 3, and the **Heading** field would need the following entry to produce the same result:

```markup
Rating: [wpbb post:acf type='radio' name='event_rating'] stars
```

### Example 3: Conditional field connection shortcode for an ACF Radio button field

Suppose you want to write some other text depending on the value of the Radio Button field. In the following example of a conditional shortcode, if the rating is three stars the result is the text "A perfect 3!" and otherwise the text "Less than perfect."

```markup
Rating: [wpbb-if post:acf type='radio' name='event_rating' exp='equals' value='3 stars']A perfect 3![wpbb-else]Less than perfect[/wpbb-if]
```

If you used the `value : label` pair for the ACF custom field and set **Value** as the **Return value** selection in ACF, then the value option would be:

```markup
value='3'
```

Note that this value is still a Text string by virtue of the fact that the shortcode is in a **Heading** field.

## Notes on other ACF Radio Button field settings

  * If you add a default value, the Themer field connection will only display the default value for new posts or when an existing post is updated. This is true whether or not you make the field required.
  * If you set **Allow null** to **Yes**, the radio button group can be blank, so the field will not display in the published page but there will be a vertical space in the published page where that field value should appear, because the HTML markup is there but the content isn't.
  * If you allow the user to set other values by setting the **Other** field to **Yes**, the field connection and shortcodes will display user-assigned values without a problem.
