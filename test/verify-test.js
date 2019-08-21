/* eslint-disable no-undef */
const assert = require('assert');
const verify = require('../src/utils/verify');
describe('#verify.js', () => {
    describe('#verify', () => {
        // 密码验证
        it('checkPassword verify should return true', function () {
            assert.strictEqual(verify.checkPassword('123456'), true);
        });
        it('checkPassword verify should return false', function () {
            assert.strictEqual(verify.checkPassword('12345'), false);
        });

        // 中文验证
        it('checkZh verify should return true', function () {
            assert.strictEqual(verify.checkZh('周周'), true);
        });
        it('checkZh verify should return false', function () {
            assert.strictEqual(verify.checkPassword('123'), false);
        });

        // 邮箱验证
        it('checkMail verify should return true', function () {
            assert.strictEqual(verify.checkMail('123@gmail.com'), true);
        });
        it('checkMail verify should return false', function () {
            assert.strictEqual(verify.checkMail('123gmail'), false);
        });

        // 手机号验证
        it('checkPhone verify should return true', function () {
            assert.strictEqual(verify.checkPhone('13111111111'), true);
        });
        it('checkPhone verify should return false', function () {
            assert.strictEqual(verify.checkPhone('12345555'), false);
        });
    });
});

