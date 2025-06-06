---
id: beaver-builder-not-working-after-upgrading
title: Beaver Builder not working after upgrading?
sidebar_label: Beaver Builder not working after upgrading?
---

You've upgraded to the latest version of Beaver Builder. Now you open a page
for editing and find the editor is not working. Or you can edit, but there are
some odd things going on.

Ultimately the best course of action is to [submit a Support ticket](https://www.wpbeaverbuilder.com/beaver-builder-support/), but it will save time in the support discussion if you can take a few steps to be more
precise about the issue. In the process, you might find a resolution. Also,
see the [list of known incompatibilities with
Beaver Builder](/beaver-builder/troubleshooting/debugging/known-beaver-builder-incompatibilities.md).

## 1. Clear your caches

This includes:

  * Beaver Builder cache
  * Browser cache
  * Caching plugins
  * Other performance caches, such as CloudFlare Rocket Loader or caches running on your hosting server.

This may solve the problem.

## 2. Test with site language set to English

We've seen some problems with sites in other languages. Try setting the site
language to English. If that fixes the problem, contact Support with that
information.

## 3. Deactivate other plugins

Deactivate your other plugins one at a time and check after each one to see if
the issue is resolved. If you have a lot of plugins, you may prefer to try
some of the items in Step 4 first.

If you identify the plugin that was causing the problem, file a Beaver Builder
Support ticket and also contact the developer of the other plugin causing the
incompatibility. Then both sides are aware of the problem and can assess what
needs to be fixed. Plugin developers are usually willing to fix
incompatibilities.

Normally when you deactivate a plugin, the settings persist when you
reactivate the plugin, but it's always a good idea to make a backup of your
site before starting.

If you have all your plugins deactivated and you're still seeing an issue,
contact Support.

## 4. Try other sites/browsers/machines

If you have a bazillion plugins installed and want to try something else first
before deactivating all of them, here are some other things you can try.

### 4a. Test your site in another browser

Some browsers can be noticeably reluctant to let go of their caching, even
when you clear the cache. Or, there could be a browser-specific conflict. Try
accessing your site from a different browser.

### 4b. Test another site with the same version of WordPress and Beaver Builder

If you maintain more than one site, it's helpful to see if you experience the
same problem with WordPress and Beaver Builder on a different installation
with a different set of plugins. Also, some staging sites offered by hosting
companies can cause quirky problems that don't occur with production hosting.

If you find the same problem, make a note of which plugins are shared by your
two sites and start with those in Step 2.

### 4c. Test your site from another machine/network

If you have another computer available, or even another network, it might be
useful to test your site there. This ensures that the problem has nothing to
do with any issue specific to your local environment. This would be the least
likely source of an issue with Beaver Builder editing, but it's part of any
rigorous troubleshooting on a site.
