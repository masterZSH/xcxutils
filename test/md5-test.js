/* eslint-disable no-undef */
const assert = require('assert');
const md5 = require('../src/utils/md5');
describe('#verify.js', () => {
    describe('#md5', () => {
        // md5加密  32位小写
        it('md5 should return a md5 string ', function () {
            assert.strictEqual(md5.md5('123456'), 'e10adc3949ba59abbe56e057f20f883e');
        });
    });
});
