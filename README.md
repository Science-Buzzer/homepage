# homepage
Let's make the website's [homepage](https://www.outre.ml) the best.
###### Contents
1. [Basic Idea](#basic-idea)
2. [S1](#s1)
3. [S2](#s2)
4. [S3](#s3)
    1. [featured-post](#featured-post)
    2. [stamp-posts](#stamp-posts)
5. [navbar](#navbar)
6. [footer](#footer)
7. [Miscellaneous](#miscellaneous)
8. [Resources](#resources)
    1. [Accent Colors](#accent-colors)
    2. [Accent Gradient](#accent-gradient)
    3. [Accent Shadow](#accent-shadow)
    4. [Animated](#animated)
    5. [No Dec](#no-dec)
    6. [Continue Arrow](#continue-arrow)
## Basic Idea
The homepage consists of three sections besides the *navbar* and *footer*. Currently, those sections are simply named *S1*, *S2* and *S3*. The three sections have a sort of snapping enabled which we call **scroll-snapping**.
## S1
S1 consists of a fullscreen background-image. On the top, there is a *quote* below of which is the *cure* button which directs to the *issues* page.
## S2
S2 shows off the latest publication, usually the latest issue, of Science Buzzer. It consists of the cover image on the left side, a title on the right side and description below the title.
## S3
This section is for featuring posts. A *featured-post* is at the top covering the entire width of the screen. Below that, two *stamp-posts* exist.
#### featured-post
- Consists of *featured-image* at left and *featured-text* at right.
- Has a background made up of linear gradient and a box-shadow, both made from accent colors(we call these accent gradient and shadow).
- Is kept adjusted using *flex*.
#### stamp-posts
- Consists of two *stamp-post*.
- *stamp-post* consists of a div with the background as featured post image. Div has the post title as *title*.
- *title* is also made of *accent gradient* and *accent shadow*. It is aligned bottom.
## navbar
A ribbon colored with the lighter accent color with 0.9 opacity. For supported browsers it also has `backdrop-filter: saturate(180%) blur(20px)`. It consists of *Logo*(`animated` and `no-dec`), *Issues* and *Random Cure* which is currently powered a WordPress plugin.
## footer
A simple HTML-only black ribbon at the bottom of the webpage. It currently consists of licensing data.
## Miscellaneous
- The *navbar* loses its opacity at S1, thus allowing the background to be replaced by the sky of the background-image.
-  Instead of using `position: sticky`, *navbar* uses `position: fixed; top: 0;`.
- The scrollbar is also customised for supported browsers. It is given *accent gradient*, `border-radius: 10px`, `width: 10px`, `background-color: #225` and `box-shadow: inset 3px -3px 5px -2px #0004;`.
- `::selection` is customised with `background-color: #fff`, `color: #fff` and `text-shadow: none`.
## Resources
#### Accent Colors
Currently Science Buzzer uses these two colors as accent. `#0bf` and `#066bff`.
#### Accent Gradient
Although the gradient can be directed any way, this is most common `linear-gradient(to bottom,#0bf,#066bff)`.
#### Accent Shadow
`box-shadow: 0 12px 45px -8px #066bff`.
#### Animated
Elements with class *animated* will be give this animation by default on hover: `animation: color_change 1s infinite` where `color_change` points to 
```
@keyframes color_change {
  0% {color: #fff}
  25% {color: #ff6a82}
  50% {color: #ff0}
  75% {color: #75d8ff}
  100% {color: #fff}
}
```
We recommend using this for *continue-arrows*.
#### No Dec
By default, links will get `text-decoration: underline`. Adding class `no-dec` to any element overrides this rule.
#### Continue Arrow
It is recommended to include this arrow after links. `\2192`.
