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
    "modelNodeId": "4ff521e69d724ae88c5a2324008613e7",
    "viewNodeId": "222f9942c68e47d5a7167e64cc435b8a",
    "name": "Node",
    "type": "node",
    "x": 240,
    "y": 180,
    "width": 145,
    "height": 85,
    "parent": null
  },
  {
    "modelNodeId": "c66f4f1de7ef4b28a5aafdbd497a2aff",
    "viewNodeId": "ea00a3ff03f541fabc96f78348b55955",
    "name": "Equipment",
    "type": "equipment",
    "x": 36,
    "y": 84,
    "width": 109,
    "height": 85,
    "parent": null
  }
];
let viewRelationships = [
  {
    "modelRelationshipId": "790f2145455347d089d7afc34f6fba45",
    "sourceId": "222f9942c68e47d5a7167e64cc435b8a",
    "targetId": "ea00a3ff03f541fabc96f78348b55955",
    "viewRelationshipId": "c8684fc5137444c09ce193268abfcb97",
    "type": "aggregation",
    "bendpoints": [
      {
        "x": 204,
        "y": 195
      }
    ]
  }
];

ViewRenderer.renderToGraph(
    outputGraph,
    viewNodes,
    viewRelationships,
    new ViewSettings({
        archimateVersion: '<=3.1',
        style: 'hybrid',
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

* **archimateVersion**: Indicates the version of ArchiMate used to set default icons and colors. The default is '<=3.1'
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
