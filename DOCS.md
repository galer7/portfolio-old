# Notes

## Refs:
- [DesignCourse: From Prototype UI Design to HTML, CSS & JS Tutorial
](https://www.youtube.com/watch?v=GTyMUjhA-o4)
## CSS
- when adding margin to child element moves the parent, use `overflow: hidden;` on the parent: [SO link](https://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element)
- setting fractions of screen size for the element's width/height can create conflict with `max-height/width` properties. Better use the latter, then see if you need anything extra
- tailwind's (initial) breakpoints care only about widths, not heights
- DO MOBILE FIRST
- `linear-gradient` keyword
- `pointer-events: none` when some dynamic CSS changes (through JS) e.g. transform changes, do not run properly
- `clip-path` -> creates a clipping region that sets what part of an element should be shown
- `will-change` directive to inform the browser to prepare hardware accelerating elements
- to disable JS for some media queries:
  ```js
    let element1 = document.querySelector('.element');
    element1.addEventListener('resize', function () {
        if (window.innerWidth > 568) {
            // execute script
        }
    });
  ```

## Tailwind
- use `group-*`, `peer-*` for parent and/or sibling state conditions [link](https://tailwindcss.com/docs/hover-focus-and-other-states)
- don't extract in a component yet: [link](https://tailwindcss.com/docs/reusing-styles#loops)
- tailwind's arbitrary variants feature: [link](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants)
  - SO comment explaining syntax: [link](https://stackoverflow.com/a/73667926)

## Design
- first, create the design, then implement it. These are 2 different mindsets

## HTML
- [absolute, relative and fixed](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)