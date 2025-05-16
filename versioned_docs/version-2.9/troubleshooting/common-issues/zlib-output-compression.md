---
id: zlib-output-compression
title: zlib Output Compression
sidebar_label: zlib Output Compression
---

> Notice: ob_end_flush(): failed to send buffer of zlib output compression (0)

If you encounter this error, it means your server doesn't have the PHP zLib extension enabled. Contact your web host provider and ask them to enable it for you.

If you manage the server yourself, you can modify the **zlib.output_compression** setting in your server **php.ini** file, such as `zlib.output_compression = On`.