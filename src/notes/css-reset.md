---
title: "CSS Reset"
created: 2023-05-31
last_modified: 2023-05-31
slug: css-reset
description: "Une base pour des reset CSS propres"
status: 🌱
directory:
share: true
---

source youtube Kevin Powell

https://www.youtube.com/watch?v=h3bTwCqX4ns&t=945s

```css
/*
Reset CSS based on Andy Bell's reset: https://andy-bell.co.uk/a-modern-css-reset/
end the follow Kevin powell's modifictaions on youtube:
https://www.youtube.com/watch?v=h3bTwCqX4ns&t=945s
*/

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
	padding: 0;
	font: inherit;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html, body {
	height: 100%;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: block;
}


/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

```

