---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

This article serves as a comprehensive guide to help you get started with field connections. We will walk you through the process of adding, editing, and deleting field connections, as well as explain the distinctions between "connect" and "insert" functions and field connection limitations.

## Access Field Connections

To gain access to field connections, ensure Beaver Themer is installed on your website. After the plugin installation, you will see the field connection toggle denoted by a plus (+) icon positioned on the right-hand side of specific row, column, and module options, as depicted in the screenshot below. This toggle provides access to the field connection menu, allowing you to explore the various available field connections.

:::caution
Please be aware that any row, column, or module option lacking a plus (+) icon does not support field connections.
:::

![Access Field Connections](/img/beaver-themer/field-connections--getting-started--1.png)

## Field Connection Menu

When you click the field connection toggle, it activates the field connection menu, which presents a comprehensive list of available field connections tailored specifically for the layout you are currently editing. Additionally, the inclusion of a search feature further streamlines the process, enabling you to quickly find the exact field connection you want to use without having to scroll through a long list.

![Field Connection Menu](/img/beaver-themer/field-connections--getting-started--2.png)

## Add Field Connection

To add a field connection, mouse over the connection you want to use and click either **Connect** or **Insert**. If the field connection has parameters (options), a window of settings for that field connection may pop up. Configure the settings and click **Save**.

![Add Field Connections](/img/beaver-themer/field-connections--getting-started--3.png)

## Connect vs Insert

Connect and Insert both apply the field connection to the chosen option. However, they do have subtle differences in their function.

### Connect

When you choose to "Connect," the field connection is applied directly to the option, and it effectively locks the option to the field connection. This means that no additional content can be added to the option, and it remains linked exclusively to the field connection.

![Connect Field Connections](/img/beaver-themer/field-connections--getting-started--4.png)

### Insert

When you opt for "Insert," the field connection is applied to the option as a field connection shortcode. This approach allows you to incorporate additional content, such as plain text, HTML, or other shortcodes, both before and after the field connection within the option.

![Insert Field Connections](/img/beaver-themer/field-connections--getting-started--5.png)

## Field Connection Parameters (Options)

Some field connections, such as Post Date or Post Excerpt, have parameters (options) that you can configure. For example, you can choose the date format for the Post Date field connection or the number of words for the Post Excerpt field connection.

These parameters (options) are available when you first apply the field connection to the option, and they can be edited later.

![Field Connection Parameters](/img/beaver-themer/field-connections--getting-started--6.png)

## Edit/Modify Field Connections

Field connections applied to row, column, and module options can be edited or modified. The process, however, varies slightly depending on how you initially applied the field connection to the option.

- **Connect**  
  If you selected the **Connect** option while adding your field connection, you can easily modify it by hovering your mouse over the connection and clicking the <i className="fa-solid fa-wrench"></i> Wrench icon. This will provide you with access to the field connection options once again, allowing you to reconfigure it.

  However, keep in mind that if you want to switch to a different field connection, you will need to delete the current field connection first before making the switch.

  ![Delete Field Connections](/img/beaver-themer/field-connections--getting-started--7.png)

  :::info
  If the field connection has no parameters (options), the <i className="fa-solid fa-wrench"></i> Wrench icon will not appear.
  :::

- **Insert**  
  When adding your field connection using the **Insert** option, the process to modify it differs slightly. Knowing the field connection parameters (options) enables you to add them to the shortcode, replacing the existing ones. However, if you're not familiar with the parameters, you'll have to remove the field connection shortcode from the option and then add the field connection again.

## Delete Field Connections

When a field connection is applied to a row, column, or module option using **Connect**, it can be deleted by hovering your mouse over the connection and clicking the (<i className="fa-solid fa-times"></i>) X icon. This will remove the field connection from the option, allowing you to add a new one.

![Delete Field Connections](/img/beaver-themer/field-connections--getting-started--8.png)

When a field connection is applied to a row, column, or module option using **Insert**, it can be deleted by removing the field connection shortcode from the option. This will remove the field connection from the option, allowing you to add a new one.
