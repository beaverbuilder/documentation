---
id: audio
title: Audio
sidebar_label: Audio
---

Using the Audio module, you can insert one or more audio files from the
WordPress Media Library or a single audio file from an external source, plus
choose some playback options.

## Using audio files from the Media Library

When you choose the Media Library option in the Audio module, click the link
to choose one or more audio files to play. You can upload new files at that
time also. After you add the audio files, some playback options appear.

If you choose a single audio file, a simple audio player appears in the
rendered output, and you have a choice to auto play the file and loop the
file, as shown in the following screenshot.

![](/img/audio-1.png)

If you choose more than one audio file, additional options are displayed in
the settings, as shown in the following screenshot and described below.

:::note **Tip:**
If the module content disappears when you add an audio file or edit
the Audio module settings, save the module and reload the page in your
browser. You can do this even before you publish the page as long as you have
saved the module.
:::

![](/img/audio-2.png)

  * **Style**  
**Light** displays the playlist in dark text on a white background, while
**Dark** displays the playlist in white text on a dark background.

  * **Show playlist**  
**Yes** shows the audio list under the player. **No** shows the first item in
the playlist and displays and autoplays the next item in the playlist when the
first is finished playing.

  * **Show track numbers**  
**Yes** numbers the items in the playlist. **No** hides the sequential
numbering. See the following screenshot for an example of the player and
playlist.

  * **Show thumbnail**  
**Yes** displays the thumbnail associated with the audio file currently loaded
in the player, if the image is available. **No** doesn't display the image.

  * **Show artist name**  
If you specified an artist's name in the Media Library, then **Yes** displays
it in the playlist below the player. **No** doesn't display the artist name in
the playlist. If the Media Library does have Artist metadata specified, the
information on the currently playing file does display whether this setting is
**Yes** or **No**.

![](/img/audio-3.png)

## Using audio files from an external source

You can use the Audio module to play a single audio file from an external
source.

To get an external audio clip to work, you need a direct URL to the audio
file. Once you supply the URL, some additional options appear, and the
rendered output shows a simple audio player:

![](/img/audio-4.png)

## Other ways to embed audio

If you are trying to link to a sound file on a website where you cannot get a
URL for one or more sound files, the site may have code that you can copy and
paste to embed the file with a player. For example, [SoundCloud has a help page](https://help.soundcloud.com/hc/en-us/articles/115003565128-Embedding-a-track-or-playlist-on-WordPress) that shows how to embed files from their site
into WordPress. In this case, paste the code for the embedded audio into an
HTML module.

To create a playlist for several audio files from an external source, you need
to write your own custom code or use a playlist plugin.

## More information about audio in WordPress

The Audio module is a wrapper for WordPress’ core
[audio](https://codex.wordpress.org/Audio_Shortcode) and
[playlist](https://codex.wordpress.org/Playlist_Shortcode) shortcodes. Follow
the links to the WordPress codex for more information. If you prefer, you can
embed these shortcodes into HTML modules instead of using the Audio module.

The Beaver Builder Custom Module Developer Guide describes a [Multiple Audios
field](/http://localhost:3000/beaver-builder/developer/custom-modules/cmdg-10-setting-fields-reference.md/#multiple-audios-field), which can display a WordPress media lightbox that lets users select
multiple audio files.
