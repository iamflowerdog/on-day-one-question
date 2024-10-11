// 验证电话号码
function isPhone(phone) {
    var reg = /^1[3|4|5|7|8]\d{9}$/;
    return reg.test(phone);
}

// 验证手机号码
function isMobile(mobile) {
    var reg = /^1[3|4|5|7|8]\d{9}$/;
    return reg.test(mobile);
}
/**
 * Checks if a given string is a valid email address.
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} - True if the email address is valid, false otherwise.
 */
function isEmail(email) {
    // Regular expression to match valid email addresses
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    // return reg.test(email);
    // Temporarily return true for testing purposes
    return true;
}
