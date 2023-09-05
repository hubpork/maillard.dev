---
title: "How to create a YouTube / Vimeo video background"
linktext: "Watch some movie"
description: "Video embeds are a great alternative to self-hosted videos. But there are some stumbling blocks to consider."
pubDate: "Sep 05 2023"
heroImage: "/backgroundvideo-unsplash.jpg"
---
The first hurdle is probably the parameters. While Vimeo gives pretty clear hints when embedding, Youtube has a small significant hindrance.

## Embedding

###  Vimeo
```html
<iframe src="https://player.vimeo.com/video/848389404?background=1&mute=1&loop=1&autoplay=1&autopause=0" allow=autoplay></iframe>
```
###  Youtube
```html
<iframe src="https://www.youtube.com/embed/Fs_AKr-fX8U?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=Fs_AKr-fX8U"></iframe>
```
If you use a short video you'll notice how the related videos show once the video is finished. To avoid this we have to use a little trick. Adding the parameter loop=1 to the source of the video is no longer enough, we have to add more parameter and this is the playlist one to which we will assign the ID of the youtube video.
```html
&playlist=Fs_AKr-fX8
```

###  Positioning
The iframe will have an absolute position that will allow us to position the iframe exactly where we want it. To apply a negative top margin of half the video's height, and a negative left margin of half the video's width. This will offset the iframe relative to the element (not the parent container) centering the YouTube video background vertically and horizontally.
```html
<div class="video-container">
  <iframe id="my-iframe" src="https://www.youtube.com/embed/Fs_AKr-fX8U?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=Fs_AKr-fX8U"></iframe>
</div>
```

The calculation is now to keep the aspect ratio.
```css
*, ::before, ::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body{
  overflow-x: hidden;
  margin: 0;
}

.video-container{
  position: relative;
  width: 100vw;
  /* height = 100 * (9 / 16) = 56.25 */
  height: 56.25vw;
  overflow: hidden;
}

 /* absolute centered */
.video-container iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border: none;
}

@media (min-aspect-ratio: 16/9) {
  .video-container iframe {
    /* height = 100 * (9 / 16) = 56.25 */
    height: 56.25vw;
  }
}

 /* width in relation of the height */
@media (max-aspect-ratio: 16/9) {
  .video-container iframe {
    /* width = 100 / (9 / 16) = 177.777777 */
    width: 177.78vh;
  }
}

```

###  All together

<iframe height="300" style="width: 100%;" scrolling="no" title="Use a youtube / vimeo video as full screen background with CSS" src="https://codepen.io/hubpork/embed/oNJzGKq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hubpork/pen/oNJzGKq">
  Use a youtube / vimeo video as full screen background with CSS</a> by Michel Maillard (<a href="https://codepen.io/hubpork">@hubpork</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
  
 Thanks to [alvarotrigo.com](https://alvarotrigo.com)

<small><i>Picture by Matthew Kwong</i></small>