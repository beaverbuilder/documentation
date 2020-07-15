---
id: where-do-menu-colors-come-from
title: Where do menu colors come from
sidebar_label: Where do menu colors come from
---

Menu background color and link colors are set in two different locations in Beaver Builder Theme's Customizer, depending on the header layout and screen size. Here are the details of how menu colors work, with screenshots for all of the header layouts at all device sizes.

  * The two types of header layouts
  * Menu color sources when menu appears in header area
  * Menu color sources when menu appears outside header area

## The two types of header layouts

How menu colors are set depends mainly on which of the following two types of header layouts you are using, as shown in this table.

**Table 1: Nav menus according to whether they appear inside or outside the header area**

Menu appears in header area  |  Menu appears outside header area
---|---
Nav Left  |  Nav Centered
Nav Right  |  Nav Bottom
Nav Centered + Inline  |
Nav Vertical Left  |
Nav Vertical Right  |


## 1\. Menu color sources when menu appears in header area

  * Menu background is transparent and the menu links appear over the background color or image of the header, which is set in **Customize > Header > Header Style**.  
  ![](/img/where-do-menu-colors-come-from-cb6ed974.png)
  * Menu text colors are set in **Customize > Header > Header Style**. Here's how we set the colors for the examples that appear below.  
  ![](/img/where-do-menu-colors-come-from-9ce381df.png)
  * The following table has a more detailed breakdown of menu color sources at each device size for the following nav layouts: Nav Right, Nav Left, Nav Centered + Inline, Nav Right Vertical, Nav Left Vertical.

**Table 2: Color sources when nav layout is inside header**

Menu item  |  Large screen  |  Medium device  |  Small device
---|---|---|---
Menu background color  |  Transparent, appears in header  |  Header background color, sits below header  |  Header background color, sits below header
Default menu links  |  Header Style, Link Color  |  Header Style, Link Color  |  Header Style, Link Color
Active page or mouse hover  |  Header Style, Hover Color  |  Header Style, Hover Color  |  Header Style, Hover Color
Hamburger icon or MENU  text color  |  n/a  |  n/a  |  Header Style, Link Color

### Examples: Nav Left/Right, Nav Centered + Inline Logo, Nav Vertical Left/Right

On medium devices, Nav Left and Nav Right header layout changes to look more like Nav Centered, but the menu colors come from **Header Style** at all screen sizes.

**Nav Left:**

![](/img/where-do-menu-colors-come-from-8d1c10ee.png)

**Nav Right** is the mirror image of Nav Left on large devices, but the medium device and small device views are identical.

![](/img/where-do-menu-colors-come-from-7a6b2ebf.png)

**Nav Centered + Inline Logo** layout is identical to the Nav Left and Nav Right views on medium and small devices.

![](/img/where-do-menu-colors-come-from-9a3d969c.png)

**Nav Vertical Left** and **Nav Vertical Right** still treat the menu as part of the header area. The view on medium and small devices is identical to the other header layouts in which the menu is inside the header area.

![](/img/where-do-menu-colors-come-from-d730e2ad.png)

![](/img/where-do-menu-colors-come-from-3f5cbf11.png)

## 2. Menu color sources when menu appears outside header area

  * Menu background color or image is set separately in **Customize > Header > Nav Style**.  
  ![](/img/where-do-menu-colors-come-from-12265024.png)
  * Depending on screen size, the menu text colors come from either **Header Style** or **Nav Style**, as shown in the table below.  
  Here's how we set the **Nav Style** colors for the examples below, so you can easily see where the menu colors are coming from:  
  ![](/img/where-do-menu-colors-come-from-a2335363.png)

The following table has a more detailed breakdown of the menu color sources for each header layout at each device size. Note the change in the source of the menu colors on small devices.

**Table 2: Nav Centered, Nav Bottom by menu category and device size**

Menu category  |  Large screen  |  Medium screen  |  Small screen
---|---|---|---
Menu background color  |  Nav Style  |  Nav Style  |  Header Style
Default menu links  |  Nav Style, Link Color  |  Nav Style, Link Color  |  Header Style, Link Color
Active page or mouse hover  |  Nav Style, Hover Color  |  Nav Style, Hover Color  |  Header Style, Hover Color
Hamburger icon or MENU text color  |  n/a  |  n/a  |  Header Style, Link Color

### Examples: Nav Centered and Nav Bottom

Nav Centered and Nav Bottom are the two header layouts in which the menu appears outside the header area.

![](/img/where-do-menu-colors-come-from-5b741017.png)

![](/img/where-do-menu-colors-come-from-4c03e413.png)
