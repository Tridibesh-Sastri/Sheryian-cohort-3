
## Constructive Distraction
### System thinking
- need easy invocation of extra note, thought managemnt 
- we can vizualize this kind of note taking as skelilton dwaing of lecture (like HTML) styling is connections details describe letter
- node connection implementation needed
- so that during note taking something extra given by the lecturar we can invoke extra field or container to hold the data if any constructive thought came in then we can invoke constructive distraction container so that we can hold them seperately without breaking the flow of main contant 
- every data node will time stamp attached (ceation time) automatically so that we can get the ful data flow and extract main content flow by skiping other data nodes and also analyz when oter data nodes came
- channel visualization 
    - main content channel
    - constructive Distraction channel
    - special or extra channel 
    - AI Querries
    - Prompt
    - AI for categorization and sub channel creation
- should have option for extra/specials as revisse tagging 

### Other project
### Onging Task

## Specials / Extra (revise taging)
- white-space: nowrap; // stops wrping of text in the container or box or div
- Blok Elements
- Inline Elements
- inline blockElement 

## General Discussion
- Guidance discussion suggestion 
- Doubt discussion suggestion

## Core Content Responsiveness [24:06]
- What is Responsiveness and Why we need it.
- Notes
- Targets
    - Units
        - px
        - % depends on parrent
        - vw 
        - vh
        - vmax
        - vmin
        - em
        - rem
    - conditional
        - min
        - max
        - clamp
    - media queries

## Units
### Pixels
    - comparison of CSS pixel vs Screen Pixel
    - demo of CSS pixel 
    - parent child relation with pixel and %
    - Spcl(blk-> inline -> inline block)
    - block element
        - height width
        - transform prop aplicable
    - inline element
        - no height width
        - transform prop not applicable
    - inline block element (blend of block and inline)
        - display: inlineblock
        -
### %
### vw,vh 
    - Definition
    - Demo with comparison with px
    - on width and height
    - on font size 
### vmax
    - devtool 
    - dev tool devices intro
    - custom device design
    - respective to max screen dimention between width and height
### vmin 
    - respective to min screen dimention between width and height

### em
    - demo
    - definition
    - depend on parent font size 

### rem
    - root font size dependent 
    - 1 rem = 16 px it's standard (can be customizable)
    - 
### ch
    - depends on charechter width
    - 
### ex 
    - depends on charechter height

## conditional 
### min and max
    - demo with demo and parent child relation (increasing child number it go out parent after certain point) here we can use min-height so parent can be auto increase less then min-height(kamse kam)
    -min-height: 300px;
    -min-width: 400px;
    - max (jyada se jyada) [1:59:12]
    - during minwidth keep in mind element types(block, inline, inlinebock) onwhich you are applying
### clamp 
