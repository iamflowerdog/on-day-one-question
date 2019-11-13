
// Array.prototype.map 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

let a = ['1', '3', '10'].map(parseInt);
console.log(a);
/**
  * Converts a string to an integer.
  * @param s A string to convert into a number.
  * @param radix A value between 2 and 36 that specifies the base of the number in numString.
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */
// declare function parseInt(s: string, radix?: number): number;
 
/**
 * 返回解析后的整数值。 如果被解析参数的第一个字符无法被转化成数值类型，则返回 NaN。
 * 注意：radix参数为n 将会把第一个参数看作是一个数的n进制表示，而返回的值则是十进制的。例如：
 */
['1', '3', '10'].map((string, radix) => {

});




