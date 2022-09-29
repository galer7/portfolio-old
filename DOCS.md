# CSS stuff
- when adding margin to child element moves the parent, use `overflow: hidden;` on the parent: [SO link](https://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element)
- setting fractions of screen size for element's width/height can create conflict with `max-height/width` properties. Better use the latter, then see if you need anything extra
- tailwind's (initial) breakpoints care only about widths, not heights