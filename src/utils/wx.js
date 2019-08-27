/* eslint-disable no-undef */
/**
 * 微信常用方法
 * @requires module:../utils/base.js
 */
import {
    noop as _noop
} from './base';
const noop = _noop;


/**
 * 微信登录
 * @returns {Object} -promise对象
 */
function loginFunc() {
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
function getUserInfoFunc() {
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
function hotupdateFunc() {
    const updateManager = wx.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
        console.log(res.hasUpdate);
        // true 需要更新 false 不需要
    });
    updateManager.onUpdateReady(function () {
        wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success(res) {
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
function requestFunc(url, data, method = 'POST', dataType = 'json', responseType = 'text', header, abortTime = 5) {
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

        /**
         * 成功方法
         * @param {Object} res -参数
         * @returns {undefined} -
         */
        function success(res) {
            resolve(res);
        }

        /**
         * 失败方法
         * @param {Error} err -错误
         * @returns {undefined} -
         */
        function fail(err) {
            wx.showToast({
                title: '网络异常，请稍后重试',
                icon: 'none',
                duration: 2000,
            });
            reject(err);
        }

        /**
         * 完成方法
         * @returns {undefined} -
         */
        function complete() {
            wx.hideLoading();
        }
        let requestTask = wx.request(requestObject);
        // 超时中断
        setTimeout(function () {
            requestTask && requestTask.abort();
            reject('请求超时');
        }, Number.parseInt(abortTime, 10) * 1000);
    });
}


/**
 * input 输入绑定
 * 绑定页面输入值到data
 * @example   inputHandler.apply(this, [e,'cloudPrice']);
 * @param {Object} e - input event
 * @param {String} name -data.name
 * @returns {undefined}
 */
function inputHandlerFunc(e, name) {
    let value = e.detail.value;
    let setObj = {};
    setObj[name] = value;
    this.setData(setObj);
}

/**
 * 微信公共库.
 * @module utils/wx
 */
export const login = loginFunc;
export const request = requestFunc;
export const hotupdate = hotupdateFunc;
export const getUserInfo = getUserInfoFunc;
export const inputHandler = inputHandlerFunc;