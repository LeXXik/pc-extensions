// ==UserScript==
// @name        LeXXik - Hotkeys
// @namespace   LeXXik Extensions
// @match       https://playcanvas.com/editor/*
// @grant       none
// @version     1.0
// @author      -
// @description Additional hotkey functionality
// ==/UserScript==

/**
 * ESC to clear any current selection
 */
editor.once('load', function () {
    'use strict';
    
    editor.call('hotkey:register', 'viewport:no-select', {
        key: 'esc',
        callback: function () {
            editor.selection.clear();
        }
    });
    
});
  