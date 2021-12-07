---
id: themer-footer-layout-type
title: Footer layout type
sidebar_label: Footer layout type
---

The Footer-type Themer layout in Beaver Themer overrides your theme's footer and footer widget area at the bottom of a page, as shown in the following diagram.

![Diagram of a typical web page structure, highlighting the footer area](/img/themer-footer-layout-type-1abdc414.png)

## Choose a Themer Footer layout template

After you create a new Footer-typeThemer layout and launch Beaver Builder, the initial layout contains the **Footer 1**  layout template, shown in the following screenshot.

![Screenshot of the default Themer Footer 1 layout template](/img/themer--layout-types-modules--footer-layout-type--1.png)

There are several Themer Footer layout templates to choose from. Open the Content panel and click the **Templates** tab:

![Screenshot of all Themer Footer layout templates](/img/themer--layout-types-modules--footer-layout-type--2.png)

You can start with any template and modify or delete whatever you like.

### Footer 1 template

![Screenshot of Themer Footer 1 layout template with modules identified](/img/themer--layout-types-modules--footer-layout-type--3.png)

The structure of the Footer 1 template is shown in the following screenshot of the Outline panel:

![Outline panel for Themer Footer 1 layout template](/img/themer--layout-types-modules--footer-layout-type--4.png)

**Layout**

  * Two rows, one that resembles a footer widget area but uses a Beaver Builder layout instead, and one for what's normally thought of as the footer.

**Modules**

In the first row:
* The first column has a Heading module and three Icon modules.
* The second column has a Heading module and a Text Editor module.
* The third column has a Heading module and a Text Editor module.

In the second row, the single column has a Text Editor module, which contains the copyright symbol plus two [field connection shortcodes](/beaver-themer/field-connections/field-connection-shortcodes-overview-themer.md): one for the current year and the other for the site title. If you look on the **Text** tab of the Text Editor module, it has the following markup:

```markup
<p style="text-align: center;">© [wpbb site:year format=Y] [wpbb site:title]. All Rights Reserved.</p>
```
### Footer 2 template

![Screenshot of Themer Footer 2 layout template with modules identifie2](/img/themer--layout-types-modules--footer-layout-type--5.png)

The structure of the Footer 2 template is shown in the following screenshot of the Outline panel:

![Outline panel for Themer Footer 2 layout template](/img/themer--layout-types-modules--footer-layout-type--6.png)

**Layout**

* One row with two column layers, with three columns in the first column layer and two columns in the second.

**Modules**

In the first column layer:
* A Photo module pointing to the site logo image in the Media Library.
The **Link type** setting is **None**.
* Icon Group module
* Subscribe Form module

In the second column layer:
* Text editor module
If you want to insert a copyright year that dynamically supplies the current year,  see the [Themer Footer 1 template](#footer-1-template).
* A Menu module
There are some custom margins set on the **Advanced** tab and custom padding set in various sections on the **Style** tab.

### Footer 3 template

![Screenshot of Themer Footer 3 layout template with modules identified](/img/themer--layout-types-modules--footer-layout-type--7.png)

The structure of the Footer 3 template is shown in the following screenshot of the Outline panel:

![Outline panel for Themer Footer 3 layout template](/img/themer--layout-types-modules--footer-layout-type--8.png)

**Layout**

* One row with three column layers and two or more columns in each layer, as described below.

**Modules**

In the first column layer, there are two columns:
* Column 1: Photo module pointing to the site logo image in the Media Library. The **Link type** setting is **None**.
* Column 2: Subscribe Form module

In the second column layer, there are four columns:
* Column 1:
  * Heading module
  * Menu module
* Column 2:
  * Heading module
  * Menu module
* Column 3:
  * Heading module
  * Posts module
* Column 4:
  * Heading module
  * Text editor module
  * Icon Group module

In the third column layer, there are two columns:
* Text Editor module
**Tip:** If you want to insert a copyright year that dynamically supplies the current year,  see the [Themer Footer 1 template](#footer-1-template).
* Menu module
There are some custom margins set on the **Advanced** tab and custom padding set in various sections on the **Style** tab.

### Footer 4 template

![Screenshot of Themer Footer 4 layout template with modules identifie2](/img/themer--layout-types-modules--footer-layout-type--9.png)

The structure of the Footer 4 template is shown in the following screenshot of the Outline panel:

![Outline panel for Themer Footer 4 layout template](/img/themer--layout-types-modules--footer-layout-type--10.png)

**Layout**

* One row with two column layers, as described below.

**Modules**

The first column layer has three columns:

* Column 1:
  * A Photo module pointing to the site logo image in the Media Library.
The **Link type** setting is **None**.
  * Text Editor module
  * Icon Group module
* Column 2:
  * Heading module
  * Menu module
* Column 3:
  * Heading module
  * Text Editor module

The second column layer has two columns:

* Column 1: Text editor module
If you want to insert a copyright year that dynamically supplies the current year,  see the [Themer Footer 1 template](#footer-1-template).
* Column 2: Menu module
There are some custom margins set on the **Advanced** tab and custom padding set in various sections on the **Style** tab.

### Footer 5 template

![Screenshot of Themer Footer 5 layout template with modules identifie2](/img/themer--layout-types-modules--footer-layout-type--11.png)

The structure of the Footer 5 template is shown in the following screenshot of the Outline panel:

![Outline panel for Themer Footer 5 layout template](/img/themer--layout-types-modules--footer-layout-type--12.png)

**Layout**

* One row with two column layers, as described below.

**Modules**

The first column layer has three columns:

* Column 1:
  * A Photo module pointing to the site logo image in the Media Library.
The **Link type** setting is **None**.
  * Text Editor module
  * Icon Group module
* Column 2:
  * Heading module
  * Menu module
* Column 3:
  * Heading module
  * Contact Form module

The second column layer has two columns:

* Column 1: Text editor module
If you want to insert a copyright year that dynamically supplies the current year,  see the [Themer Footer 1 template](#footer-1-template).
* Column 2: Menu module
There are some custom margins set on the **Advanced** tab and custom padding set in various sections on the **Style** tab.

## Edit Themer Layout settings

The **Edit Themer layout** screen has the following settings for Footer layouts:

![Themer Footer layout overlay example](/img/themer--layout-types-modules--footer-layout-type--13.png)

* The [locations](/beaver-themer/locations/themer-locations-reference.md) on your site where the header applies.
* Optional [conditional logic](/beaver-themer/conditional-logic/beaver-themer-conditional-logic.md) rules.
