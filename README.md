Guess What I Said
===============
[![build status](https://git.tlo.xyz/TLOxyz/Guess-What-I-Said/badges/master/build.svg)](https://git.tlo.xyz/TLOxyz/Guess-What-I-Said/builds)

Enter what you want to say and it will generate salt, calculate the hash over and over again via Web Cryptography API. What you said is never transmitted and very save, because it only generate in your own browser.

## Algorithm

All algorithm use a Key as a salt, and calculate the content by hash. Each time will caclulate the hash of the content(or the previous hash) and salt.

Digits means the digits in sexadecimal number system.

Format: `[algorithm](-short)-v[N]`

Example: SHA-256-short-v4

+ `algorithm` means use it as hash.
+ `short` means the salt is only for 8 digits, and the hash will be sliced to last 8 digits at last. Otherwise use 64 digits of salt and hash.
+ `vN` means repeat times. It’s about 16 ^ N times. Example: v3 means it will repeat 4096 times.

## Using JavaScript Library

+ [jQuery](https://github.com/jquery/jquery) v2.2.2
+ [text-encoding](https://github.com/inexorabletash/text-encoding) v0.5.5
