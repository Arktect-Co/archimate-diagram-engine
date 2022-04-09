const stylesAvailable = ['hybrid', 'layered', 'element'];

class ViewSettings {
    constructor({
                    style = 'hybrid',
                    darkColor = 'black',
                    lightColor = 'white',
                    textColor = 'black',
                    defaultWidth = 140,
                    defaultHeight = 50
                }) {
        this.style = stylesAvailable.includes(style) ? style : 'hybrid';
        this.darkColor = darkColor;
        this.lightColor = lightColor;
        this.textColor = textColor;
        this.defaultWidth = defaultWidth;
        this.defaultHeight = defaultHeight;
    }
}

module.exports = ViewSettings;
