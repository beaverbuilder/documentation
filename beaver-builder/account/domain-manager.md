---
id: domain-manager
title: Domain Manager
sidebar_label: Domain Manager
description: Learn what the Domain Manager is, and how to use it.
---

In this article, we will provide a comprehensive explanation of the Domain Manager and its usage.

## What is the Domain Manager?

The Domain Manager is a tool that displays a list of all domains utilizing your license key, along with the products installed on those domains and their respective versions.

With this feature, you can remotely deactivate and remove a domain, effectively preventing it from using your license key or receiving updates. Additionally, you have the ability to reactivate any previously deactivated domain.

## Accessing the Domain Manager

To access the Domain Manager, follow these steps:

1. Log in to your Beaver Builder [My Account](https://www.wpbeaverbuilder.com/my-account/) page.
2. Navigate to the **Domain Manager** section.
3. Click on **Manage Domains**.

## Notifications

By enabling the Notifications option, you will receive an email notification whenever a new website is added to the Domain Manager.

## Product & PHP Version

Within the Domain Manager, you can obtain information about the products currently installed on each domain, including their version numbers and the PHP version being used.

![Domain Manager product info and version](/img/beaver-builder/account--domain-manager--1.jpg)

:::info
Domains running the latest product version will display the version info text in <span style={{ color: "green", fontWeight: "bold" }}>Green</span>, while out-of-date products will be highlighted in <span style={{ color: "red", fontWeight: "bold" }}>Red</span>.
:::

## Search

Utilizing the search function in the Domain Manager allows you to filter the list of domain names, making it easier to locate a specific website. You can search by domain name, product name, or version to identify domains with outdated products.

For example, if you are interested in finding websites using Beaver Themer version 1.0, you can search using the term `Beaver Themer: 1.0`. Domains not using Beaver Themer version 1.0 will be excluded from the list.

## Deactivate a Domain

Deactivating a domain disables the site from receiving remote updates from our server. However, the existing version of Beaver Builder will continue to function normally.

Deactivation prevents the activation of the Beaver Builder license on the local site via **Settings > Beaver Builder > License**. If you wish to restrict a client from using your Beaver Builder license, this option should be chosen.

:::tip
The Domain Manager stores deactivated sites for future reactivation. You can delete deactivated domains from the Domain Manager by clicking the Remove button.
:::

## Reactivate a Domain

The Reactivate option allows previously deactivated domains to once again receive remote updates from our servers.

## Remove a Domain

The Remove option provides the ability to delete a domain from the Domain Manager.

:::warning Warning

The Remove option **does not** result in the removal of the license key from the website. Beaver Builder does not possess the functionality to remotely delete license keys from websites.

If the license key remains active and you choose to proceed with the Remove feature, the specific domain will be reintegrated into the Domain Manager when it performs its subsequent check for Beaver Builder updates.

:::

:::tip

In scenarios where you intend to prevent former clients from utilizing your license key to update their website(s), the recommended course of action involves deleting your license key from the website and then utilizing the Remove option. If you lack access to the website of a former client, the [Deactivate](#deactivate-a-domain) option is more suitable.

:::

## Restore Removed Domain

1. Visit the **WordPress Admin Dashboard** of the website whose domain you want to restore.
2. Go to **Settings > Beaver Builder > License**.
3. Enter or paste your license key and click the **Save License Key** button.
4. Return to the Domain Manager, and the domain should be listed again.
