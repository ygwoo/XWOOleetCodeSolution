/**
 * @author yiguang woo <501704652@qq.com>
 */

/**
 * “回文”字符串结构检测
 * @param {String} stringLine - 输入的字符串
 * @returns {Boolean} - 返回字符串是否为“回文”结构的布尔值
 */

function isPalindrome_planA(stringLine) {
    stringLine += '';
    return (
        stringLine ===
        stringLine
            .split('')
            .reverse()
            .join('')
    );
}
console.log('Plan_A: ' + isPalindrome_planA('abcabccbacba'));

function isPalindrome_planB(stringLine) {
    stringLine += '';
    for (let i = 0, j = stringLine.length - 1; i < j; ++i, --j) {
        if (stringLine.charAt(i) !== stringLine.charAt(j)) {
            return false;
        }
    }
    return true;
}
console.log('Plan_B: ' + isPalindrome_planB('abcabccbacba'));

/**
 * 输出给定条件范围内的随机数
 * @param {Number} minVal 输出随机数最小值
 * @param {Number} maxVal 输出随机数最大值
 * @returns {Number} 返回minVal至maxVal之间的随机数
 */
function mathRandom(minVal, maxVal) {
    switch (arguments.length) {
        case 1:
            return Math.floor(Math.random() * minVal + 1);
            break;
        case 2:
            return Math.floor(Math.random() * (maxVal - minVal) + minVal + 1);
        default:
            return -1;
            break;
    }
}

console.log(mathRandom(1, 10));

/**
 * 判断属性存在于原型中还是实列中
 * @param {Object} object 对象
 * @param {String} name 任意属性名字符串
 */
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && name in object;
}

/**
 * JavaScript运行机制典型考题
 * console.log()输出顺序2-3-5-4-1
 */
setTimeout(function() {
    console.log(1);
}, 0);
new Promise(function executor(resolve) {
    console.log(2);
    for (var i = 0; i < 10000; i++) {
        if (i === 9999) {
            resolve();
        }
    }
    console.log(3);
}).then(function() {
    console.log(4);
});
console.log(5);

/**
 * String类型html文本，从中提取JavaScript脚本及模板字符串
 * @param {String} strHtml html文本类型参数
 */
function formatCustomHtml(strHtml = '') {
    let stratIndex = strHtml.indexOf('<script>');
    let endIndex = strHtml.indexOf('</script>');
    if (stratIndex !== -1) {
        if (stratIndex === 0) {
            return {
                html: strHtml.substring(endIndex + 9, strHtml.length).trim(),
                script: strHtml.substring(8, endIndex).trim()
            };
        } else {
            return { html: strHtml.substring(0, stratIndex).trim(), script: strHtml.substring(stratIndex + 8, endIndex).trim() };
        }
    } else {
        return { html: strHtml };
    }
}

const CUSTOM_HTML =
    '<div> \
        <span>CUSTOM_HTML</span> \
    </div> \
    <div class="custom"></div> \
    <script> \
        console.log("CUSTOM_HTML"); \
    </script>';

let strHtml = formatCustomHtml(CUSTOM_HTML);
console.log('strHtml', JSON.stringify(strHtml));
