const assert = require('assert');
const sha1 = require('../src/utils/sha1');
describe('#verify.js', () => {
    describe('#sha1', () => {
        // sha1加密
        it('sha1 should return a sha1 string ', function () {
            assert.strictEqual(sha1('123456'), '7c4a8d09ca3762af61e59520943dc26494f8941b');
        });
    });
});
