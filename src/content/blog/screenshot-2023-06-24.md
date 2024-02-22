---
title: "High-resolution Screenshots"
linktext: "How-to"
description: "Taking screenshots of all or parts of web pages is super useful."
pubDate: "Jul 24 2023"
heroImage: "/screenshot-unsplash.jpg"
---

Taking screenshots of all or parts of web pages is super useful. But sometimes, the resulting screenshots aren't high-resolution enough for your needs.

It turns you can make DevTools take high-resolution screenshots of your web pages too!
From the Console in Firefox

Firefox has a super handy :screenshot command you can use in the Console tool to take screenshots. It takes a few options, including `--dpr` to specify the device pixel ratio. The default value is 1, but you can set it to 2, 3, or any other number to take screenshots at higher resolutions.

For example: `:screenshot --dpr 3 --fullpage` will take a screenshot of the full page at three times the resolution.

Find out more about the :screenshot command and its other options in at [devtoolstips](https://devtoolstips.org/tips/en/take-high-res-screenshots/).

<small><i>Picture by Dayne Topkin</i></small>