---
layout: default
title: 关于
permalink: /about-zh.html
slug: zh
about: 关于
versions: 所有版本
---
猜猜我说了什么
===============
输入你想要说的，然后它会生成一个 “盐”，并反复计算哈希值，通过 Web Cryptography API。你所说的内容不会被传输，非常安全，因为它只会在你自己的浏览器中生成。

## 算法

所有的算法使用一个 Key 作为 salt，并生成内容的 hash。每次都会计算内容（或上一个 hash）和 salt 的 hash。

格式：`[algorithm](-short)-v[N]`

例子：SHA-256-short-v4

+ `algorithm` 代表用来算 hash 的算法.
+ `short` 代表 salt 只包含 8 位数，最终算出来的 hash 也只保留 8 位数。否则使用 64 位的 hash 和 salt。
+ `vN` 代表重复的次数。次数是 16 ^ N。例子：v3 代表重复 4096 次。

## 使用的 JavaScript 库

+ [jQuery](https://github.com/jquery/jquery) v2.2.2
+ [text-encoding](https://github.com/inexorabletash/text-encoding) v0.5.5
