const assert = require('assert');
const app = require('../../src/app');

describe('\'issue\' service', () => {
  it('registered the service', () => {
    const service = app.service('issue');

    assert.ok(service, 'Registered the service');
  });
});
