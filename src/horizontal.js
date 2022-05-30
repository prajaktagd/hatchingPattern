const { Style } = require('./Style.js');

const px = (value) => `${value}px`;
const div = (style, content) => `<div ${style}>${content}</div>`;

class HorizontalLine {
  constructor(length) {
    this.length = length;
  }

  toHtml() {
    const style = new Style();
    style.addAttribute('width', px(this.length));
    style.addAttribute('border-bottom', `${px(1)} solid black`);
    const styleString = `style="${style.toHtml()}"`;
    return div(styleString, '');
  }
}

class HorizontalLines {
  constructor(length, numOfLines) {
    this.length = length;
    this.numOfLines = numOfLines;
  }

  toHtml() {
    const lines = Array(this.numOfLines).fill(new HorizontalLine(this.length));
    const style = new Style();
    style.addAttribute('display', 'flex');
    style.addAttribute('flex-direction', 'column');
    style.addAttribute('justify-content', 'space-between');
    style.addAttribute('width', px(this.length));
    style.addAttribute('height', px(this.length));
    const styleString = `style="${style.toHtml()}"`;
    return div(styleString, lines.map(line => line.toHtml()).join(''));
  }
}

exports.HorizontalLines = HorizontalLines;
exports.px = px;
exports.div = div;
