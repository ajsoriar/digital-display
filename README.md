# digital-display [![Build Status](https://travis-ci.org/ajsoriar/angular-avatar.svg?branch=master)](https://travis-ci.org/ajsoriar/angular-avatar)

[![yarn version](https://badge.fury.io/js/digital-display.svg)](https://badge.fury.io/js/digital-display)
[![NuGet version](https://badge.fury.io/nu/digital-display.svg)](https://badge.fury.io/nu/digital-display)

Javascript library to draw 7-segment displays

![digital-display demo 1](./docs/digital-display-1.gif?raw=true "digital-display demo 1")

This example in plunker: **demo/index.html**

## Quick start

### 1 Download and Install digital-display

- yarn: **yarn add digital-display**
- NPM: **npm install digital-display**
- NuGet: **PM> Install-Package digital-display**
- github: **<https://github.com/ajsoriar/digital-display>**

### 2 Include dependences

2.1 digital-display.js and digital-display.min.js are under dist folder.

2.2 Include digital-display.js or digital-display.min.js, e.g.

```javascript
<head>
    ...
    <link rel="stylesheet" href="../dist/digital-display.css">
    <script src="../dist/digital-display.js"></script>
</head>
```

### 3 Use it

Just use it inside your javascript code this way:

```javascript
<script>

    var dd1 = new DigitalDisplay("00:00:00", {
        el: null,
        x: 0,
        y: 0
    });

    dd1.displayText("88:88 88");

    var w = dd1.getWidth();
    var h = dd1.getHeight();

    var dd2 = new DigitalDisplay("00:00", {
        el: null,
        x: 20,
        y: 200,
        baseUnit: 5
    });

    var dd3 = new DigitalDisplay("abcdef", {
        el: null,
        x: 20,
        y: 400,
        baseUnit: 5
    });

    var dd4 = new DigitalDisplay("00:00:00", {
        el: "greenBox",
        x: 10,
        y: 10,
        class: "mio",
        width: 100
    })
    
<script>
```

### 4 License

digital-display.js is [MIT licensed](./LICENSE).
