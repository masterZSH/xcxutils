'use strict';
const verify = require('utils/verify');
const md5 = require('utils/md5');
const sha1 = require('utils/sha1');
const wx = require('utils/wx');
const base = require('utils/base');


/*eslint no-undef:0*/
module.exports = {
    md5: md5,
    sha1: sha1,
    wx: wx,
    verify: verify,
    base: base,
};


