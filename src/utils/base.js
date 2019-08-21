/**
 * 深度克隆
 * Object deepclone
 * @param {Object} obj -the object need clone
 * @returns {Object} -clone Object
 */
function deepcloneFunc (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((v) => {
            if (typeof v === 'object' && v !== null) {return deepclone(v);} else {return v;}
        });
    } else {
        const newObj = {};

        Object.keys(obj).forEach((v) => {
            if (typeof obj[v] === 'object' && obj[v] !== null) {
                newObj[v] = deepclone(obj[v]);
            } else {
                newObj[v] = obj[v];
            }
        });

        return newObj;
    }
}

/**
 * 返回空
 * @returns {Object} -null
 */
function noopFunc () {
    return null;
}

/**
 * 判断属性是否是对象的私有属性 非原型链属性
 * @param {Object} obj -对象
 * @param {string} type -属性
 * @returns {Boolean} 是否是对象的私有属性
 */
function hasOwnFunc (obj, type) {
    return Object.prototype.hasOwnProperty.call(obj, type);
}

/**
 * 判断变量是否未定义
 * @param {any} item -需要判断的
 * @returns {Boolean} -是否未定义
 */
function isUndefFunc (item) {
    return item === undefined || item === null;
}

/**
 * 判断变量是否定义
 * @param {any} item -需要判断的变量
 * @returns {Boolean} -是否定义
 */
function isDefFunc (item) {
    return !this.isUndefined(item);
}

/**
 * 判断是否是字符串
 * @param {any} item -需要判断的变量
 * @returns {Boolean} -是否是字符串
 */
function isStrFunc (item) {
    return typeof item === 'string';
}

/**
 * 判断是否是数字
 * @param {any} item -需要判断的变量
 * @returns {Boolean} -是否是数字
 */
function isNumberFunc (item) {
    return typeof item === 'number';
}

/**
 * 判断是否是数组
 * @param {any} item -需要判断的变量
 * @returns {Boolean} -是否是数组
 */
function isArrayFunc (item) {
    // 判断是否有 isArray方法 如果有绑定当前content 返回
    if (typeof Array.isArray === 'function') {
        return Array.isArray.bind(this)(item);
    }
    // pollfill
    return Object.prototype.toString.call(item) === '[object Array]';
}

/**
 * 判断是否是对象
 * @param {any} obj  -需要判断的变量
 * @returns {Boolean} -是否是对象
 */
function isObjFunc (obj) {
    return obj !== null && typeof obj === 'object';
}

/**
 * 判断是否是函数
 * @param {any} item -需要判断的变量
 * @returns {Boolean} -是否是对象
 */
function isFuncFunc (item) {
    return typeof item === 'function';
}

/**
 * 转数字
 * @param {any} val -需要判断的变量
 * @returns {any} -返回的值
 */
function toNumberFunc (val) {
    let n = parseFloat(val);
    return isNaN(n) ? val : n;
}


/**
 * base module. - 公共基础方法模块
 * @module utils/base
 * @see module:utils/base
 */

export const deepclone = deepcloneFunc;
export const noop = noopFunc;
export const hasOwn = hasOwnFunc;
export const isUndef = isUndefFunc;
export const isDef = isDefFunc;
export const isStr = isStrFunc;
export const isNumber = isNumberFunc;
export const isArray = isArrayFunc;
export const isObj = isObjFunc;
export const isFunc = isFuncFunc;
export const toNumber = toNumberFunc;

