const $ = require('./style/styles');

export function getStyle(style) {
  switch (style.toLowerCase()) {
    case 'layered':
      return $.COLOR_SCHEME_LAYERED;
    case 'element':
      return $.COLOR_SCHEME_ELEMENT;
    case 'hybrid':
      return $.COLOR_SCHEME_HIBRID;
    default:
      return $.COLOR_SCHEME_HIBRID;
  }
}
