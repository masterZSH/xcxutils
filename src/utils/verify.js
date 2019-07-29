/**
 * 验证密码  非特殊字符 6-8位
 * @param {String} password -密码
 * @returns {boolean} 是否验证通过
 */
function checkPassword (password) {
    let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9\s\·\~\！\@\#\￥\%\……\&\*\（\）\——\-\+\=\【\】\{\}\、\|\；\‘\’\：\“\”\《\》\？\，\。\、\`\~\!\#\$\%\^\&\*\(\)\_\[\]{\}\\\|\;\'\'\:\"\"\,\.\/\<\>\?a-zA-Z0-9]{6,8}$/;
    let r = reg.exec(password);
    return !!r;
}

/**
 * 检查是否是中文
 * @param {String} name 检查的字符串
 * @returns {boolean} 是否验证通过
 */
function checkZh (name) {
    let reg = /^[0-9a-zA-Z]*[\u4E00-\u9FA5\uf900-\ufa2d·s]{1,8}$/g;
    let r = reg.exec(name);
    return !!r;
}

/**
 * 检查是否是邮箱
 * @param {String} str -需要检查的字符串
 * @returns {boolean} 是否验证通过
 */
function checkMail (str) {
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    let r = reg.exec(str);
    return !!r;
}

/**
 * 验证手机号
 * @param {String} str -需要检查的字符串
 * @returns {boolean} 是否验证通过
 */
function checkPhone (str) {
    let reg = /^1[3-9]\d{9}$/;
    let r = reg.exec(str);
    return !!r;
}


/*eslint no-undef:0*/
module.exports = {
    checkPassword: checkPassword,
    checkPhone: checkPhone,
    checkMail: checkMail,
    checkZh: checkZh,
};
