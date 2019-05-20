const assert = require('assert');
const app = require('../../src/app');

describe('\'issues\' service', () => {
  it('registered the service', () => {
    const service = app.service('issues');

    assert.ok(service, 'Registered the service');
  });
});
