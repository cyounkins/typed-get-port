import test = require('blue-tape');

import getPort = require('get-port');

test('type', function(t) {
    return getPort()
    .then(function(port) {
        t.is(typeof port, 'number');
        t.true(port > 0, 'greater than zero');
    });
});
