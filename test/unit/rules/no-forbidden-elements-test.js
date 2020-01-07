'use strict';

const generateRuleTests = require('../../helpers/rule-test-harness');
const ERROR_MESSAGE = require('../../../lib/rules/no-forbidden-elements').ERROR_MESSAGE;

generateRuleTests({
  name: 'no-forbidden-elements',

  config: true,

  good: ['<button></button>', '<a href="#"></a>'],

  bad: [
    {
      template: '<html lang="en">hi</html>',

      result: {
        message: ERROR_MESSAGE,
        moduleId: 'layout.hbs',
        source: '<html lang="en">hi</html>',
        line: 1,
        column: 0,
      },
    },
    {
      template: `
      <h1>
        <html lang="en">hi</html>',
      </h1>
      `,

      result: {
        message: ERROR_MESSAGE,
        moduleId: 'layout.hbs',
        source: '<html lang="en">hi</html>',
        line: 3,
        column: 8,
      },
    },
  ],
});
