'use strict';
const Rule = require('./base');

const ERROR_MESSAGE = 'do not do bad';
const FORBIDDEN_TAG_NAMES = ['html', 'meta', 'style', 'script'];

module.exports = class NoForbiddenElements extends Rule {
  visitor() {
    return {
      ElementNode(node) {
        if (isForbiddenElement(node)) {
          this.log({
            message: ERROR_MESSAGE,
            line: node.loc && node.loc.start.line,
            column: node.loc && node.loc.start.column,
            source: this.sourceForNode(node),
          });
        }
      },
    };
  }
};

function isForbiddenElement(node) {
  return FORBIDDEN_TAG_NAMES.includes(node.tag);
}

module.exports.ERROR_MESSAGE = ERROR_MESSAGE;
