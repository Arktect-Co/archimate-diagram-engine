# archimate-diagram-engine

Archimate 3.x diagram renderer using JoinJS.

This engine can be used for server-side as well for client-side diagram rendering.

## Installation

Using npm:

``
npm i --save @arktect-co/archimate-diagram-engine
``

Using Yarn:

``
yarn add @arktect-co/archimate-diagram-engine
``

## Usage Example

```js
const joint = require("jointjs");
const {ViewRenderer, ViewSettings} = require("@arktect-co/archimate-diagram-engine");

let outputGraph = new joint.dia.Graph({}, {cellNamespace: joint.shapes});
let viewNodes = [
    {
        "identifier": "40eb5bd6-4d7c-4c27-98a8-602f935ed405",
        "name": "Resource",
        "type": "resource"
    },
    {
        "identifier": "6be02ba1-0489-4ea4-b62b-a22d302cbefe",
        "name": "Capability",
        "type": "capability"
    }
];
let viewRelationships = [
    {
        "identifier": "bc8c928b-dafb-4e61-91b3-7c3e5b93a900",
        "sourceId": "40eb5bd6-4d7c-4c27-98a8-602f935ed405",
        "targetId": "6be02ba1-0489-4ea4-b62b-a22d302cbefe",
        "type": "assignmentrelationship"
    }
];

ViewRenderer.renderToGraph(
    outputGraph,
    viewNodes,
    viewRelationships,
    new ViewSettings({
        style: 'hibrid',
        darkColor: 'black',
        lightColor: 'white',
        textColor: 'black',
        textSize: 12,
        defaultWidth: 140,
        defaultHeight: 50,
        borderWidth: 0.8,
        edgeWidth: 0.8
    })
);
```

## Options

* **style**: Color style for nodes. There are three available styles:
    * Hybrid: This style combines active, behaviour and passive classification with layering.
    * Layered: Differentiate only between layers.
    * Element: Differentiate only between active, behaviour and passive elements.
* **darkColor**: Color used for strokes (Hex colours are accepted). The default is 'black'
* **lightColor**: Color used to fulfill relationship arrow shapes (Hex colours are accepted). The default is 'white'
* **textColor**: Color used to fill texts. The default is 'black'
* **textSize**: Text font size. The default is 12
* **defaultWidth**: Reference size for element's width. The default is 140px
* **defaultHeight**: Reference size for element's height. The default is 50px
* **borderWidth**: Border width for elements. The default is 0.8
* **edgeWidth**: Width of the relationship stroke. The default is 0.8
