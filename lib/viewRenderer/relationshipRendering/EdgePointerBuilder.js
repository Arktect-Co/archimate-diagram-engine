class EdgePointerBuilder {
    constructor({lightColor = 'white', darkColor = 'black'}) {
        this.lightColor = lightColor;
        this.darkColor = darkColor;
    }

    buildBasePointer() {
        return {
            type: 'none',
        };
    }

    buildTrianglePointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            fill: this.lightColor,
            d: 'M 15 -9 0 0 15 9 z', // White filled big arrow
        };
    }

    buildFullTrianglePointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            fill: this.darkColor,
            d: 'M 15 -9 0 0 15 9 z', // White filled big arrow
        };
    }

    buildCircularPointer() {
        return {
            type: 'circle', // SVG Circle
            stroke: this.darkColor,
            fill: this.lightColor,
            r: 4, // radius of the circle
            cx: 4, // move the centre of the circle 5 pixels from the end of the path
        };
    }

    buildFullCircularPointer() {
        return {
            type: 'circle', // SVG Circle
            stroke: this.darkColor,
            fill: this.darkColor,
            r: 4, // radius of the circle
            cx: 4, // move the centre of the circle 5 pixels from the end of the path
        };
    }

    buildDiamondPointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            fill: this.lightColor,
            d: 'M 10 -8 0 0 10 8 20 0 z', // White diamond
        };
    }

    buildFullDiamondPointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            fill: this.darkColor,
            d: 'M 10 -8 0 0 10 8 20 0 z', // Black diamond
        };
    }

    buildArrowPointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            d: 'M 10 -5 0 0 10 5 z', // Filled arrow
        };
    }

    buildThinArrowPointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            d: 'M 12 -6 0 0 12 6 1 0 z', // Simple arrow
        }
    }

    buildSmallThinArrowPointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            d: 'M 10 -5 0 0 10 5 1 0 z', // Simple arrow - Smaller
        };
    }

    buildHalfThinArrowPointer() {
        return {
            type: 'path',
            stroke: this.darkColor,
            d: 'M 12 -6 0 0 z', // Half arrow
        };
    }
}

module.exports = EdgePointerBuilder;
