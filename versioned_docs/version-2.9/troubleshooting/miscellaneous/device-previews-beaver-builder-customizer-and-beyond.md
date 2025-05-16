---
id: device-previews-beaver-builder-customizer-and-beyond
title: 'Device previews: Beaver Builder, Customizer, and beyond'
sidebar_label: 'Device previews: Beaver Builder, Customizer, and beyond'
---

There are so many different devices of every size out there that it's much
easier to preview your site using a device simulator or emulator, and there
are many of those around. The following list is ordered in terms of the
likelihood of your pages being accurately rendered with all their
customizations, and why in technical terms.

## Beaver Builder Tools > Preview and WordPress Customizer device preview

In the Beaver Builder editor, using the keyboard shortcut **P** or clicking
**Preview** in the **Tools** menu opens a preview of the page rendered in an
iframe. This is the same as clicking the WordPress device preview icons at the
bottom of the Customizer panel.

Rendering in an iframe means the preview is as accurate as resizing a browser
window. However, resizing a browser window isn't always an accurate
representation of what you'll see on smaller devices.

##  Using Beaver Builder preview on the Advanced tab

In the Beaver Builder editor, for margin and padding settings on the
**Advanced** tab of rows, columns, and modules, there is an icon to toggle the
views from large to medium to small screen. This preview is not rendered in an
iframe and may not be as accurate as using **Tools > Preview**, but it may be
adequate for a quick look, and you can change the settings for each device
size.

As an alternative, from the **Tools** menu you can enter Responsive Design
editing to view and edit the layouts for medium and small screen widths. See
[this article for a detailed example of Responsive Design editing](/beaver-builder/layouts/responsive-design/editor.md).

## Browser preview

Most browsers have preview-by-device simulation capabilities. For example, in
Google Chrome in the Developer Tools panel, you can toggle Device Mode on or
off. Once in Device Mode, you can choose specific device brands or customize
the display height and width.

Note the warning in the Google Chrome Device Mode documentation:

> Warning: Device Mode gives you a close approximation as to how your site
will look on a mobile device, but to get the full picture you should always
test your site on real devices. DevTools can't emulate the performance
characteristics of mobile devices, for example.

## Other device simulators and emulators

If you search the internet for device simulators and emulators you'll find a
number of solutions. Sauce Labs has a good [description of the difference between simulators and emulators](https://saucelabs.com/blog/mobile-device-emulator-and-simulator-vs-real-device).

Device emulators provide the most faithful virtual results but can be
expensive and time-consuming. There are professional services that provide
device simulators and emulators in the Cloud for a fee, which can be a big
time saver.

If you're very serious about device testing, it's worthwhile to develop a
device testing plan to decide in advance which devices you will test and how
that testing will be done. If you certify specific devices as part of your
client contract, it's also helpful to provide a clause about what you will do
if there are problems in spite of certification and also set a time limit on
the certification. Devices and software change so quickly that the situation
can be quite different a month down the road.

If you're a developer, it's also worthwhile to decide at what point you will
start your testing program to test your code. For example, you might not want
to start tweaking custom CSS for mobile devices on the basis of the Beaver
Builder preview, but you should decide how far you're going to go up the
testing ladder before you decide how to change your code.
