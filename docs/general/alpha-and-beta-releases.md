---
id: alpha-and-beta-releases
title: Alpha, beta, and dev releases
sidebar_label: Alpha, beta, and dev releases
---

The development process for major updates to the Beaver Builder plugin and
theme includes an alpha release, beta release, and the final stable release.
If you are interested in trying out the new features for the next release and
want to test and provide feedback, we encourage you to try out alpha and beta
releases.

If you like to live on the edge and want to try out dev builds on your test
site, see the last section of this article. These builds are even rougher than
alpha builds and are for purposes of giving users a chance to try out features
and provide feedback while they're still in the development stage. They are
expected to be buggy and need experienced handlers.

## Alpha/beta releases

**We strongly recommend that you do not install alpha and beta releases on
live sites.** Use them in a test environment so you can try out the new
features, see what breaks without worrying about the consequences, and give us
feedback.

:::warning
No Support is provided for alpha releases. Features may change
without notice. Use at your own risk.
:::

Both the alpha and beta releases may contain multiple minor updates (for
example 2.0-alpha.3 and 2.0-alpha.4) until we are comfortable moving forward
to the next stage in the release cycle.

Before you decide to test out an alpha or beta release, please read the
following sections so you know what to expect.

### Alpha releases

Alpha releases are _very_ early versions of the next major update. They may be
made available months before the beta release. They typically receive minimal
testing by our team and have the potential to be unstable or be missing
features planned for the first stable release.

When you report bugs and provide feedback on new features during the alpha
release, we can catch bugs more quickly and improve features based on user
feedback before the final stable release. Look at [the change log](https://www.wpbeaverbuilder.com/change-logs/) during the alpha release stage for a list of what is available in each alpha version.

### Beta releases

Beta releases are early versions of the next major update. They follow the
alpha release and are typically made available 2 to 4 weeks before the final
stable release. They have been thoroughly tested by our team, but may still
contain bugs that need to be fixed.

During the beta release stage, there is a freeze on any new code, aside from
what’s needed to fix remaining bugs. This means that aside from bugs, any
feedback on new features during the beta stage will be held until the next
major update.

There will typically be a post on our blog announcing the first beta release.

### Install Alpha or Beta Releases

Beaver Builder alpha or beta releases can be installed by enabling the [Prerelease Updates](/beaver-builder/management-migration/settings-overview.md) option in the Beaver Builder settings.

:::info
Once you have installed an alpha or beta release, the automatic update feature will keep your plugin updated to the latest version of the alpha or beta.
:::

:::tip Install via FTP
1. Download the alpha/beta zip file from your [My Account](https://www.wpbeaverbuilder.com/my-account/) page via Alpha/Beta Testing Downloads section.

2. FTP to your site and delete the `/wp-content/plugins/bb-plugin/` folder. Then unzip the alpha/beta plugin on your local system and upload the `/bb-plugin` folder to the same location.  

3. Activate the plugin.

This installation procedure works for Beaver Themer & BB Theme alpha/beta releases also.

* The **Beaver Themer** folder location is `/wp-content/plugins/bb-theme-builder/`.
* The **BB Theme** folder location is `/wp-content/plugins/bb-theme/`.
:::

## Install an alpha or beta theme release

If you have the child theme installed, it will not be touched by either of
these procedures. Once you have installed an alpha or beta release of the
theme, the automatic update feature will keep your theme updated to the latest
version.

If you already have a version of the Beaver Builder Theme installed and active
with Customizer settings you want to keep, the easiest and safest way to
install a new alpha or beta version is by FTP. If you're installing an alpha
or beta version when you don't have any previous version of the Beaver Builder
Theme installed, you can use FTP or the second WordPress admin panel
procedure.

### Using FTP:

  1. Download the installer zip file from the **Alpha/Beta Testing Downloads** section on the [My Account](https://www.wpbeaverbuilder.com/my-account/) page at wpbeaverbuilder.com.
  2. Extract the files from the zip file.   
This will produce a folder called _bb-theme_.

  3. FTP to your site.
  4. Go to _wp-content/themes_.
  5. Delete the _bb-theme_ folder and its contents.
  6. Upload the bb-theme folder that you extracted.
  7. Go to the WordPress admin panel and click **Appearance > Themes**.
  8. Mouse over the Beaver Builder Theme and verify that the version is correct.  
Also verify that your child theme is still the active theme if you're using
it.

**Using the WordPress admin panel when Beaver Builder Theme isn't already
installed:**

Follow [these instructions for installing the theme and child theme](/bb-theme/getting-started/install-the-bb-theme-and-child-theme.md).

##  Bug Reports and Feedback for alpha/beta releases

If you run into any bugs or notice something that can be improved during your
testing, please [submit a Support ticket](https://www.wpbeaverbuilder.com/beaver-builder-support/) under the category Alpha/Beta Feedback.

Happy testing and thanks for your participation!

## Dev releases (pre-alpha)

Have you wished you could have more input into new Beaver Builder features as
they're being developed?

We're issuing a new type of pre-release, using the `-dev` suffix. The dev
releases are earlier and rougher than an alpha release, in that they can
contain incomplete features for testing, may introduce breaking changes, and
almost certainly contain bugs. It's a great chance for early adopters to try
out new features in a dev environment and give us early feedback.

In contrast, the alpha/beta releases are better documented, don’t introduce
any breaking changes, and contain most if not all of the features the final
release will have.

We do expect you to know your way around WordPress and be able to install
Beaver Builder into test environments. Dev releases are available for download
in the same location as alpha and beta releases on  the  [My Account](https://www.wpbeaverbuilder.com/my-account/) page. Once you manually install a dev release, it will automatically update when new versions are
issued.

Since early feedback is what we are after with dev releases, we've tried to
make that easy by providing a **Dev feedback** button in the upper right
corner of the editing page in Dev versions. Clicking that automatically opens
a contact form with the topic **Pre-release Feedback**. As an alternative, you
can go to the [contact form at the Beaver Builder site](https://www.wpbeaverbuilder.com/contact/) yourself and choose the topic
**Pre-Release Feedback**.

We're interested in all your feedback: bugs, usability issues, how you like
the feature and what you'd like to add or change. Please try to be as detailed
as possible about reporting your testing environment (for bugs) or the
improvements you'd like to see and for what end result. We don't promise to
implement everything you suggest, but we do promise to pay attention to it.

**Note:** It bears repeating that dev releases are not expected to perform
reliably and should only be used in a dev environment. Don't create anything
on a dev site that you'd want to preserve or use elsewhere.
