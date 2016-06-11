---
layout: default
title: Update your Browser
---

## Your browser is out-of-date. Please download one of these up-to-date, free and excellent browsers:

+ [Mozilla Firefox](https://www.mozilla.org/firefox/)
+ [Google Chrome](https://www.google.com/chrome/browser/)
+ [Opera Browser](https://www.opera.com/)

## Why do I need an up-to-date browser?

This site use Web Cryptography API to encrypt and decrypt everything on your own device. But the browser you are using doesn’t support this feature, so you have to update your browser.

### Security

Newer browsers protect you better against scams, viruses, trojans, phishing and other threats. They also fix security holes in your current browser!

### Speed

Every new browser generation improves speed

### Compatibility

Websites using new technology will be displayed more correctly

### Comfort & better experience

With new features, extensions and better customisability, you will have a more comfortable web-experience

## What browser is supported?

### Desktop

+ Mozilla Firefox 34 and above
+ Google Chrome 37 and above
+ Opera Browser 27 and above
+ Safari 7.1 and above
+ Microsoft IE 11 (Untested)
+ Microsoft Edge

### Mobile

+ Android 5.0 WebView and above
+ Chrome for Android 49 and above
+ iOS 8 and above

<script>
if(typeof(crypto.webkitSubtle) == "object"){
	window.location.href='{{ site.baseurl }}/index.html';
}
if(typeof(crypto.subtle) == "object"){
	window.location.href='{{ site.baseurl }}/index.html';
}
</script>
