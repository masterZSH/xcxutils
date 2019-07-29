/**
 * 深度克隆
 * Object deepclone
 * @param {Object} obj the object need clone
 */
function deepclone (obj) {
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
function noop () {
    return null;
}

/**
 * 判断属性是否是对象的私有属性 非原型链属性
 * @param {Object} obj -对象
 * @param {string} type -属性
 * @returns {Boolean}
 */
function hasOwn (obj, type) {
    return Object.prototype.hasOwnProperty.call(obj, type);
}

/**
 * 判断变量是否未定义
 * @param  item
 * @returns {Boolean}
 */
function isUndef (item) {
    return item === undefined || item === null;
}

/**
 * 判断变量是否定义
 * @param item
 * @returns {Boolean}
 */
function isDef (item) {
    return !this.isUndefined(item);
}

/**
 * 判断是否是字符串
 * @param {any} item
 * @returns {Boolean}
 */
function isStr (item) {
    return typeof item === 'string';
}

/**
 * 判断是否是数字
 * @param {any} item
 * @returns {Boolean}
 */
function isNumber (item) {
    return typeof item === 'number';
}

/**
 * 判断是否是数组
 * @param {any} item
 * @returns {Boolean}
 */
function isArray (item) {
    // 判断是否有 isArray方法 如果有绑定当前content 返回
    if (typeof Array.isArray === 'function') {
        return Array.isArray.bind(this)(item);
    }
    // pollfill
    return Object.prototype.toString.call(item) === '[object Array]';
}

/**
 * 判断是否是对象
 * @param {any} item
 * @returns {Boolean}
 */
function isObj (obj) {
    return obj !== null && typeof obj === 'object';
}

/**
 * 判断是否是函数
 * @param {any} item
 * @returns {Boolean}
 */
function isFunc (item) {
    return typeof item === 'function';
}

/**
 * 转数字
 * @param {any} val
 * @returns {(typeof val | number)} -返回的值
 */
function toNumber (val) {
    let n = parseFloat(val);
    return isNaN(n) ? val : n;
}


/**
 * base module. - 公共基础方法模块
 * @module utils/base
 * @see module:utils/base
 */

module.exports = {

    /** 深拷贝 */
    deepclone: deepclone,

    /** 返回空 */
    noop: noop,

    /** 是否私有属性 */
    hasOwn: hasOwn,

    /** 是否未定义 */
    isUndef: isUndef,

    /** 是否定义 */
    isDef: isDef,

    /** 是否是字符串 */
    isStr: isStr,

    /** 是否是数字 */
    isNumber: isNumber,

    /** 是否是数组 */
    isArray: isArray,

    /** 是否是对象 */
    isObj: isObj,

    /** 是否是函数 */
    isFunc: isFunc,

    /** 尝试转换数字 */
    toNumber: toNumber,
};

