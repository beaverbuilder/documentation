---
id: releases-versioning
title: Releases & Versioning
sidebar_label: Releases & Versioning
---

When you purchase a subscription for a Beaver Builder product, you not only receive software updates throughout your subscription period but also gain access to dev, alpha, and beta releases.

## Semantic Versioning

Beaver Builder product updates adhere to a semantic version numbering system consisting of four number positions, where each position corresponds to a particular type of release.

Using Beaver Builder version `2.5.4.3` as an example:

```bash
2[major-milestone].5[major].4[minor].3[patch]
```

* The **Major Milestone** is represented by the number `2`.
* The **Major** version is denoted by `.5`.
* The **Minor** version is indicated by `.4`.
* The **Patch** version is symbolized by `.3`.

### Major Milestone

Mark a substantial improvement in the product. They contain significant new features, redesign of the user interface, or new developer features, while maintaining backward compatibility. Beaver Builder major milestone releases go through [alpha and beta testing](#alpha-beta--dev-releases).

The production release date depends on the point at which the version is considered stable enough to use and support.

:::info

During a **Major Milestone** or **Major Update** releases, remote updates within your WordPress Admin Dashboard are temporarily unavailable. To update to the latest major version, you must manually download the corresponding zip file from your Beaver Builder account. Once downloaded, you can install the new version by replacing the existing one on your website.

This manual update process ensures that any bugs or issues can be resolved before enabling remote updates in the WordPress Admin Dashboard. Typically, remote updates become available a few weeks after the initial **Major Milestone** or **Major Update** releases.

:::

### Major Update

Contain enhancements (such as new settings or new actions and filters for developers) plus bug fixes. Beaver Builder major releases also go through [alpha and beta testing](/general/alpha-and-beta-releases.md), and the production release date depends on the point at which the product is considered stable enough to use and support.

### Minor Updates

Contain bug fixes and possibly minor enhancements. The need for a minor update is reviewed at the beginning of each month and, if deemed necessary, the release occurs at the end of the month.

### Patches

Contain important bug fixes that affect product functionality or security and warrant an immediate release. Patches are released as needed.

Each new release increases its version number position sequentially while
resetting the following numbering positions to zero. For example, the next
release after 2.1 could be 2.1.1 (a new minor update), 2.2 (a new major update) or 3.0 (a new major milestone release). Or, if the current version is patch 2.1.1.5, the next release could be 2.1.1.6 (another patch), 2.1.2 (a
minor update), 2.2 (a major update), or 3.0 (a new major milestone release).

## Alpha, Beta, & Dev Releases

The development process for major updates to the Beaver Builder plugin and theme includes an alpha release, beta release, and the final stable release. If you are interested in trying out the new features for the next release and want to test and provide feedback, we encourage you to try out alpha and beta releases.

If you like to live on the edge and want to try out dev builds on your test site, see the last section of this article. These builds are even rougher than alpha builds and are for purposes of giving users a chance to try out features and provide feedback while they're still in the development stage. They are

:::warning warning

**We strongly recommend that you do not install alpha and beta releases on live sites.** Use them in a test environment so you can try out the new features, see what breaks without worrying about the consequences, and give us feedback.

No Support is provided for alpha releases. Features may change without notice. Use at your own risk.

:::

:::info
Both the alpha and beta releases may contain multiple minor updates (for example 2.0-alpha.3 and 2.0-alpha.4) until we are comfortable moving forward to the next stage in the release cycle.

Before you decide to test out an alpha or beta release, please read the following sections so you know what to expect.
:::

### Alpha Releases

Alpha releases are *very* early versions of the next major update. They may be made available months before the beta release. They typically receive minimal testing by our team and have the potential to be unstable or be missing features planned for the first stable release.

When you report bugs and provide feedback on new features during the alpha release, we can catch bugs more quickly and improve features based on user feedback before the final stable release. Look at [the change log](https://www.wpbeaverbuilder.com/change-logs/) during the alpha release stage for a list of what is available in each alpha version.

### Beta Releases

Beta releases are early versions of the next major update. They follow the alpha release and are typically made available 2 to 4 weeks before the final stable release. They have been thoroughly tested by our team, but may still contain bugs that need to be fixed.

During the beta release stage, there is a freeze on any new code, aside from what’s needed to fix remaining bugs. This means that aside from bugs, any feedback on new features during the beta stage will be held until the next major update.

There will typically be a post on our blog announcing the first beta release.

### Install Alpha or Beta Releases

Beaver Builder alpha or beta releases can be installed by enabling the [Prerelease Updates](settings/tools.md#prerelease-updates) option in the Beaver Builder settings.

:::tip Install via FTP
1. Download the alpha/beta zip file from your [My Account](https://www.wpbeaverbuilder.com/my-account/) page via Alpha/Beta Testing Downloads section.

2. FTP to your site and delete the `/wp-content/plugins/bb-plugin/` folder. Then unzip the alpha/beta plugin on your local system and upload the `/bb-plugin` folder to the same location.  

3. Activate the plugin.

This installation procedure works for Beaver Themer & BB Theme alpha/beta releases also.

* The **Beaver Themer** folder location is `/wp-content/plugins/bb-theme-builder/`.
* The **BB Theme** folder location is `/wp-content/plugins/bb-theme/`.
:::

### Bug Reports & Feedback

If you run into any bugs or notice something that can be improved during your testing, please [submit a Support ticket](https://www.wpbeaverbuilder.com/beaver-builder-support/) under the category Alpha/Beta Feedback.

### Dev Releases (Pre-Alpha)

The dev releases use the `-dev` suffix and are earlier and rougher than an alpha releases, in that they can contain incomplete features for testing, may introduce breaking changes, and almost certainly contain bugs. It's a great chance for early adopters to try out new features in a dev environment and give us early feedback. 

In contrast, the alpha/beta releases are better documented, don’t introduce any breaking changes, and contain most if not all of the features the final release will have.

:::info
We expect you to know your way around WordPress and be able to install Beaver Builder into test environments. Dev releases are available for download in the same location as alpha and beta releases on the [My Account](https://www.wpbeaverbuilder.com/my-account/) page. Once you manually install a dev release, it will automatically update when new versions are issued.
:::

Since early feedback is what we are after with dev releases, we've tried to make that easy by providing a **Dev feedback** button in the upper right corner of the editing page in Dev versions. Clicking that automatically opens a contact form with the topic **Pre-release Feedback**. As an alternative, you can go to the [contact form at the Beaver Builder site](https://www.wpbeaverbuilder.com/contact/) yourself and choose the topic **Pre-Release Feedback**.

We're interested in all your feedback: bugs, usability issues, how you like the feature and what you'd like to add or change. Please try to be as detailed as possible about reporting your testing environment (for bugs) or the improvements you'd like to see and for what end result. We don't promise to implement everything you suggest, but we do promise to pay attention to it.

:::warning warning
It bears repeating that dev releases are not expected to perform reliably and should only be used in a dev environment. Don't create anything on a dev site that you'd want to preserve or use elsewhere.
:::

