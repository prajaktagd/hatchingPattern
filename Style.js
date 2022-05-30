class Style {
  constructor() {
    this.attributes = {};
  }

  addAttribute(property, value) {
    this.attributes[property] = value;
  }

  toHtml() {
    const styleHtml = Object.entries(this.attributes).map(
      ([attribute, value]) => `${attribute}:${value}`);
    return styleHtml.join(';');
  }
}

exports.Style = Style;
