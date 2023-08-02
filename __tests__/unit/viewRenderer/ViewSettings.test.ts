import { ViewSettings } from '@lib/viewRenderer/ViewSettings';
import { SETTINGS_DEFAULT } from '@lib/common/constants';
import { expect } from 'chai';
import { Style } from '@lib/model/ViewSetting';

const defaultSettings = {
  style: SETTINGS_DEFAULT.STYLE,
  darkColor: SETTINGS_DEFAULT.DARK_COLOR,
  lightColor: SETTINGS_DEFAULT.LIGHT_COLOR,
  textColor: SETTINGS_DEFAULT.TEXT_COLOR,
  textSize: SETTINGS_DEFAULT.TEXT_SIZE,
  defaultWidth: SETTINGS_DEFAULT.WIDTH,
  defaultHeight: SETTINGS_DEFAULT.HEIGHT,
  borderWidth: SETTINGS_DEFAULT.BORDER_WIDTH,
  edgeWidth: SETTINGS_DEFAULT.EDGE_WIDTH,
};

describe('ViewSettings', () => {
  it('should return a default value of settings if no settings are provided', () => {
    const setting = new ViewSettings({});

    expect(setting.style).to.equal(defaultSettings.style);
    expect(setting.darkColor).to.equal(defaultSettings.darkColor);
    expect(setting.lightColor).to.equal(defaultSettings.lightColor);
    expect(setting.textColor).to.equal(defaultSettings.textColor);
    expect(setting.textSize).to.equal(defaultSettings.textSize);
    expect(setting.defaultWidth).to.equal(defaultSettings.defaultWidth);
    expect(setting.defaultHeight).to.equal(defaultSettings.defaultHeight);
    expect(setting.borderWidth).to.equal(defaultSettings.borderWidth);
    expect(setting.edgeWidth).to.equal(defaultSettings.edgeWidth);
  });

  it('Should return the settings informed in the constructor', () => {
    const settings = {
      style: 'element' as Style,
      darkColor: 'blue',
      lightColor: 'white',
      textColor: 'black',
      textSize: 16,
      defaultWidth: 100,
      defaultHeight: 80,
      borderWidth: 1,
      edgeWidth: 1,
    };

    const setting = new ViewSettings(settings);

    expect(setting.style).to.equal(settings.style);
    expect(setting.darkColor).to.equal(settings.darkColor);
    expect(setting.lightColor).to.equal(settings.lightColor);
    expect(setting.textColor).to.equal(settings.textColor);
    expect(setting.textSize).to.equal(settings.textSize);
    expect(setting.defaultWidth).to.equal(settings.defaultWidth);
    expect(setting.defaultHeight).to.equal(settings.defaultHeight);
    expect(setting.borderWidth).to.equal(settings.borderWidth);
    expect(setting.edgeWidth).to.equal(settings.edgeWidth);
  });
});
