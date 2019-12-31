/** 求出两个数组a和b的交集和差集 */
const intersection = a.filter(v => b.includes(v))
const difference = a.concat(b).filter(v => !a.includes(v) || !b.includes(v))