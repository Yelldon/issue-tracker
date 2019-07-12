const assert = require('assert');
const app = require('../../src/app');

describe('\'statuses\' service', () => {
  it('registered the service', () => {
    const service = app.service('statuses');

    assert.ok(service, 'Registered the service');
  });
});
