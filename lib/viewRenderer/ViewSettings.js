const stylesAvailable = ['hybrid', 'layered', 'element'];

class ViewSettings {
  constructor({
                style = 'hybrid',
                darkColor = 'black',
                lightColor = 'white',
                defaultWidth = 140,
                defaultHeight = 50
              }) {
    this.style = stylesAvailable.includes(style) ? style : 'hybrid';
    this.darkColor = darkColor;
    this.lightColor = lightColor;
    this.defaultWidth = defaultWidth;
    this.defaultHeight = defaultHeight;
  }
}

module.exports = ViewSettings;
