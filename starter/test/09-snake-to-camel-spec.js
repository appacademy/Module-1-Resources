const assert = require('assert');

const snakeToCamel = require('../problems/09-snake-to-camel-map');

describe('snakeToCamel()', function () {
  it('should turn the string from snake case to camel case using Array\'s map method', function () {
    assert.equal(snakeToCamel('snakes_go_hiss'), 'SnakesGoHiss');
    assert.equal(snakeToCamel('say_hello_world'), 'SayHelloWorld');
    assert.equal(snakeToCamel('app_academy_is_cool'), 'AppAcademyIsCool');
    assert.equal(snakeToCamel('APp_ACADEMY_iS_cOol'), 'AppAcademyIsCool');
  });
});



