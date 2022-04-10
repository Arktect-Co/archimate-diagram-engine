const {SETTINGS_DEFAULT} = require('../common/constants');

const stylesAvailable = ['hybrid', 'layered', 'element'];

/**
 * Verifies if the value is a natural number but excluding zero
 * @param value Value to be verified
 * @return {boolean} True if value is a number greater than zero
 */
function isNaturalNumber(value) {
    return typeof value === "number" && value > 0;
}

class ViewSettings {
    constructor({
                    style = SETTINGS_DEFAULT.STYLE,
                    darkColor = SETTINGS_DEFAULT.DARK_COLOR,
                    lightColor = SETTINGS_DEFAULT.LIGHT_COLOR,
                    textColor = SETTINGS_DEFAULT.TEXT_COLOR,
                    textSize = SETTINGS_DEFAULT.TEXT_SIZE,
                    defaultWidth = SETTINGS_DEFAULT.WIDTH,
                    defaultHeight = SETTINGS_DEFAULT.HEIGHT,
                    borderWidth = SETTINGS_DEFAULT.BORDER_WIDTH,
                    edgeWidth = SETTINGS_DEFAULT.EDGE_WIDTH
                }) {
        this.style = stylesAvailable.includes(style) ? style : SETTINGS_DEFAULT.STYLE;
        this.darkColor = darkColor;
        this.lightColor = lightColor;
        this.textColor = textColor;
        this.textSize = isNaturalNumber(textSize) ? textSize : SETTINGS_DEFAULT.TEXT_SIZE;
        this.defaultWidth = isNaturalNumber(defaultWidth) ? defaultWidth : SETTINGS_DEFAULT.WIDTH;
        this.defaultHeight = isNaturalNumber(defaultHeight) ? defaultHeight : SETTINGS_DEFAULT.HEIGHT;
        this.borderWidth = isNaturalNumber(borderWidth) ? borderWidth : SETTINGS_DEFAULT.BORDER_WIDTH;
        this.edgeWidth = isNaturalNumber(edgeWidth) ? edgeWidth : SETTINGS_DEFAULT.EDGE_WIDTH;
    }
}

module.exports = ViewSettings;
