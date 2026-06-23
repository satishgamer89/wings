// ==UserScript==
// @name         Bypass Disable-Devtool iOS
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Spoof device metrics to block the layout-based devtool detection
    Object.defineProperty(window, 'devicePixelRatio', { value: 1, writable: false });
})();
