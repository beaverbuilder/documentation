---
id: remove-rename-tools-menu-items
title: Rename or remove Tools menu items
sidebar_label: Rename or remove Tools menu items
---

This tutorial gives you details of how to customize the [Tools menu](/beaver-builder/getting-started/bb-editor-basics/tools-menu.md), such as removing or renaming menu items.


## Remove menu items

The code example below shows how to remove menu items and includes some of the main Tools menu items. You can find all Tools menu `$views` item ID's by searching for `// Tools` in the */bb-plugin/classes/class-fl-builder.php* file. 

```php
add_filter( 'fl_builder_main_menu', function( $views ) {

	unset( $views['main']['items'][04] ); //Publish Layout
	unset( $views['main']['items'][05] ); //Separator Line
	unset( $views['main']['items'][10] ); //Save Layout
	unset( $views['main']['items'][20] ); //Duplicate Layout
	unset( $views['main']['items'][30] ); //Preview Layout
	unset( $views['main']['items'][31] ); //Responsive Editing
	unset( $views['main']['items'][35] ); //Revisions
	unset( $views['main']['items'][40] ); //Separator Line
	unset( $views['main']['items'][50] ); //Layout CSS & Javascript
	unset( $views['main']['items'][60] ); //Global Settings
	unset( $views['main']['items'][65] ); //Themer Layouts (Beaver Themer required)
	unset( $views['main']['items'][70] ); //Separator Line
	unset( $views['main']['items'][80] ); //Change UI Brightness
	unset( $views['main']['items'][100] ); //WordPress Admin
	unset( $views['main']['items'][110] ); //Help
	unset( $views['main']['items'][120] ); //Keyboard Shortcuts
	
	return $views;
});
```

## Rename menu items

The code example below renames **Save Layout** to **Save My Layout**. 

```php
add_filter( 'fl_builder_main_menu', function( $views ) {

	$views['main']['items'][10]['label'] = 'Save My Layout';
	
	return $views;

});
```

