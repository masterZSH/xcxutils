/**
 * 微信常用方法
 * @requires module:../utils/base.js
 */
const base = require('./base');
const noop = base.noop;


/**
 * 微信登录
 * @returns {Object} -promise对象
 */
function login () {
    return new Promise(function (resolve, reject) {
        wx.login({
            success: function (res) {
                if (res.code) {
                    resolve(res.code);
                }
                reject(res);
            },
            fail: function (err) {
                reject(err);
            },
        });
    });
}

/**
 * 微信登录
 * @returns {Object} -promise对象
 */
function getUserInfo () {
    return new Promise(function (resolve, reject) {
        wx.getUserInfo({
            withCredentials: true,
            success: function (userRes) {
                resolve(userRes);
            },
            fail: function (err) {
                reject(err);
            },
        });
    });
}

/**
 * 小程序热更新
 * @returns {null}
 * {@link https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/update-mechanism.html 微信小程序更新机制}.
 */
function hotupdate () {
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
        console.log(res.hasUpdate);
    // true 需要更新 false 不需要
    });
    updateManager.onUpdateReady(function () {
        wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success (res) {
                if (res.confirm) {
                    updateManager.applyUpdate();
                }
            },
        });
    });
    // 这里可以请求日志接口记录用户拒绝更新行为
    updateManager.onUpdateFailed(function () {});
    return noop();
}


/**
 * 封装请求方法 -请求格式 默认json
 * @param {string} url - 请求地址
 * @param {string|object|ArrayBuffer} data - 请求数据
 * @param {string} method - 请求方法
 * @param {string} dataType - 数据类型 默认json
 * @param {string} responseType - 响应类型 默认text
 * @param {Object} header - 设置请求的 header，header 中不能设置 Referer。
content-type 默认为 application/json
   @param {number} abortTime -超时时间
   @returns {Object} - promise对象
 */
function request (url, data, method = 'POST', dataType = 'json', responseType = 'text', header, abortTime = 5) {
    wx.showLoading({
        title: '',
    });
    return new Promise(function (resolve, reject) {
        let defaultHeader = {
            'content-type': 'application/json',
        };
        header = Object.assign(defaultHeader, header);
        let requestObject = {
            url: url || '',
            data: data || {},
            header: header || {},
            method: method || 'POST',
            dataType: 'json',
            success: success,
            fail: fail,
            complete: complete,
        };

        function success (res) {
            resolve(res);
        }

        function fail (err) {
            wx.showToast({
                title: '网络异常，请稍后重试',
                icon: 'none',
                duration: 2000,
            });
            reject(err);
        }

        function complete () {
            wx.hideLoading();
        }
        let requestTask = wx.request(requestObject);
        // 超时中断
        setTimeout(function () {
            requestTask && requestTask.abort();
            reject('请求超时');
        }, parseInt(abortTime) * 1000);
    });
}

/**
 * 微信公共库.
 * @module utils/wx
 */
module.exports = {

    /** 小程序登录 */
    login: login,

    /** 小程序请求 */
    request: request,

    /** 小程序热更新 */
    hotupdate: hotupdate,

    /** 获取用户信息 */
    getUserInfo: getUserInfo,
};
