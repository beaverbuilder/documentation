---
id: expressions
title: Expressions
sidebar_label: Expressions
---

Expressions enhance the capabilities of conditional field connection shortcodes, allowing you to showcase content depending on the value retrieved from the field. For instance, you can create an expression where if the field's value is **less** than `2`, it will display the text *"This field has a value less than 2"*. If the value is **greater** than `2`, it will show the text *"This field has a value greater than 2"*.

By utilizing expressions, you gain the ability to dynamically manage the content displayed, tailoring it based on the specific field values. This approach offers a more versatile and adaptable way to present your content, making it responsive to different scenarios.

## Syntax

The syntax for expressions involves an [Operator](#operators) and a [Comparison Value](#comparison-value), both added as parameters to the conditional field connection shortcode. The `exp=` parameter is used to specify the operator, while the `value=` parameter is used to indicate the comparison value.

```markup
[wpbb-if some-field-connection exp='<operator>' value='<comparison value>']
    
  Display this text when the value test is True.

[wpbb-else]
  
  Display this text when the value test is False.

[/wpbb-if]
```

## Operators

Expression operators offer the ability to execute logical operations on comparison values, enabling you to display content based on the field's returned value.

When dealing with **Strings** (Text), you have the option to utilize the following operators:

* `equals`
* `notequals`
* `contains`

When working with **Integers** (Numbers), you have access to the following operators:

* `equals`
* `notequals`
* `contains`
* `greater`
* `greaterequals`
* `less`
* `lessequals`

### Equals

The **Equals** operator (`exp='equals'`) compares the exact text or number provided as the comparison value and verifies if it is identical to the value obtained from the field.

**Field Value:** Beaver Builder

```markup
[wpbb-if post:author_name type='display' link='no' exp='equals' value='Beaver Builder']

  TRUE: The author's name is Beaver Builder!

[wpbb-else]
      
  FALSE: The author's name is <strong>not</strong> Beaver Builder!
    
[/wpbb-if]
```

**Output:**

> TRUE: The author's name is Beaver Builder!

### Not Equals

The **Not Equals** operator (`exp='notequals'`) compares the exact text or number provided as the comparison value and verifies if it is **not equal** to the value obtained from the field.

**Field Value:** Justin Busa

```markup
[wpbb-if post:author_name type='display' link='no' exp='notequals' value='Beaver Builder']

  TRUE: The author's name is not Beaver Builder!

[wpbb-else]
      
  FALSE: The author's name is not Beaver Builder!
    
[/wpbb-if]
```

**Output:**

> FALSE: The author's name is not Beaver Builder!

### Contains

The **Contains** operator (`exp='contains'`) verifies if the comparison value includes similar characters or numbers. For example, if a field has a value of **Hello World** and the comparison value you're testing for is **ello** this will be `TRUE`.

**Post Title:** Hello World

```markup
[wpbb-if post:title exp='contains' value='ello']

  TRUE: The post title is Hello World.
    
[wpbb-else]

  FALSE: The post title is not Hello World.
    
[/wpbb-if]
```

**Output:**

> TRUE: The post title is Hello World.

### Greater

The **Greater** operator (`exp='greater'`) verifies if the comparison value is greater than the value obtained from the field.

**Field Value:** 1001

```markup
[wpbb-if post:custom_field key='my-number-field' exp='greater' value='1000']
    
  TRUE: my-number-field is greater than comparison value "1000".

[wpbb-else]
  
  FALSE: my-number-field is not greater than comparison value "1000".

[/wpbb-if]
```

**Output:**

> True: my-number-field is greater than test value "1000".

### Greater Equals

The **Greater Equals** operator (`exp='greaterequals'`) verifies if the comparison value is greater than or equal to the value obtained from the field.

**Field Value:** 1000

```markup
[wpbb-if post:custom_field key='my-number-field' exp='greaterequals' value='1000']
    
  TRUE: my-number-field is greater than or equals comparison value "1000".

[wpbb-else]

  FALSE:  my-number-field isn't greater than or equals comparison value "1000".

[/wpbb-if]
```

**Output:**

> TRUE: my-number-field is greater than or equals comparison value "1000".

### Less

The **Less** operator (`exp='less'`) verifies if the comparison value is less than the value obtained from the field.

**Field Value:** 999

```markup
[wpbb-if post:custom_field key='my-number-field' exp='less' value='1000']
  
  TRUE: my-number-field is less than comparison value "1000".
  
[wpbb-else]

  FALSE: my-number-field is not less than comparison value "1000".

[/wpbb-if]
```

**Output:**

> TRUE: my-number-field is less than comparison value "1000".

### Less Equals

The **Less Equals** operator (`exp='lessequals'`) verifies if the comparison value is less than or equal to the value obtained from the field.

**Field Value:** 1000

```markup
[wpbb-if post:custom_field key='my-number-field' exp='lessequals' value='1000']
  
  TRUE: my-number-field is less than or equals than test value "1000".
  
[wpbb-else]
  
  FALSE: isn't less than or equals test value "1000"

[/wpbb-if]
```

**Output:**

> TRUE: my-number-field is less than or equals to the comparison value "1000".

## Comparison Value

The comparison value represents the value you wish to test against the value of your field. It can be either a string (text) or an integer (number). The `value=""` parameter is used to specify this comparison value.

:::caution
The `value=''` attribute **is case-sensitive**.
:::

:::warning warning
When performing a comparison value test, it is essential to ensure that the fields being evaluated contain a value. If a field is empty, the comparison value test will always yield a `FALSE` result.

For instance, if you are testing whether a field `equals` the string "abc" and the field happens to be empty, both an `equals` and a `notequals` test will produce a `FALSE` outcome. To guarantee that the field has a value, the most effective approach is to make it a required field.
:::

### Dates

You can perform a comparison value test for a date value as long as it is using the data format `YYYYMMDD`. This allows the value to be compared as an integer (number).

### Numbers

When using operators such as `greater`, `greaterequals`, `less`, or `lessequals`, both the Number field value and the value specified in the comparison value parameter are converted to integers before comparison. However, for `equals` and `notequals`, the comparison is made using the exact strings as they are.

For instance, if you are testing whether **377.78** is `lessequals` **377.77**, the result is `TRUE` because both values are converted to **377** before the comparison occurs, making them equal. Conversely, if you test whether **377.77** `equals` **377.78**, the result is `FALSE` because the two strings are compared as they are without any conversions.

### URLs

When conducting **URL** tests, any trailing slash is disregarded in both the field value and the comparison value. For instance, whether the URL is provided as `https://my-website.com` or `https://my-website.com/`, the result will be `TRUE` as the trailing slash is ignored in the comparison.
