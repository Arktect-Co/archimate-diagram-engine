const stylesAvailable = ['hybrid', 'layered', 'element'];

// TODO: Create a module with constants
const DEFAULT_TEXT_SIZE = 12;
const DEFAULT_WIDTH = 140;
const DEFAULT_HEIGHT = 50;
const DEFAULT_BORDER_WIDTH = 0.8;
const DEFAULT_EDGE_WIDTH = 1;

class ViewSettings {
    constructor({
                    style = 'hybrid',
                    darkColor = 'black',
                    lightColor = 'white',
                    textColor = 'black',
                    textSize = DEFAULT_TEXT_SIZE,
                    defaultWidth = DEFAULT_WIDTH,
                    defaultHeight = DEFAULT_HEIGHT,
                    borderWidth = DEFAULT_BORDER_WIDTH,
                    edgeWidth = DEFAULT_EDGE_WIDTH
                }) {
        this.style = stylesAvailable.includes(style) ? style : 'hybrid';
        this.darkColor = darkColor;
        this.lightColor = lightColor;
        this.textColor = textColor;
        this.textSize = typeof textSize === "number" && textSize > 0 ? textSize : DEFAULT_TEXT_SIZE;
        this.defaultWidth = typeof defaultWidth === "number" && defaultWidth > 0 ? defaultWidth : DEFAULT_WIDTH;
        this.defaultHeight = typeof defaultHeight === "number" && defaultHeight > 0 ? defaultHeight : DEFAULT_HEIGHT;
        this.borderWidth = typeof borderWidth === "number" && borderWidth > 0 ? borderWidth : DEFAULT_BORDER_WIDTH;
        this.edgeWidth = typeof edgeWidth === "number" && edgeWidth > 0 ? edgeWidth : DEFAULT_EDGE_WIDTH;
    }
}

module.exports = ViewSettings;
