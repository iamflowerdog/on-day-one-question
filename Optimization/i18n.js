// 1. webpack 编译之前，先拿到当前业务下载的文案列表，将列表的所有key进行编码，越短越好
// 2. 在babel loader 扫描的过程中，将用到的文案上报，并将引入文案使用的key 替换为短编码
// 3. 扫描完成后，生成文案的部分，使用编码后的短字符串，作为文案的key，打包进文案文件中

let BREADCRUMBS = {
  "SETTINGS": "设定",
  "MONITORSETTINGS": "监视器设定",
  "GENERAL": "通用",
  "Analysis": "分析",
  "Network": "网络",
  "Application": "应用",
  "General": "通用",
  "HTTP": "HTTP",
  "DNS": "DNS",
  "SMB Wizard": "SMB向导",
  "SMB": "SMB",
  "Dashboard": "仪表盘",
  "Web": "网页",
  "Name Resolution": "名称解析",
  "File Monitoring": "文件监控",
  "Alarm": "警报",
};





// 第一种方法 假如我们用十进制的方法 把 BREADCRUMBS 的 key转成，本地文件的索引十进制的数字

let i18nKeys =  Object.keys(BREADCRUMBS).reduce((all, key, index) => {
  all[key] = index
  return all
}, {})

// 将国际化文件的 key 重新编码，编10进制

// 解析
let i18nValue = Object.keys(BREADCRUMBS).reduce((all, key, index) => {
  all[index] = BREADCRUMBS[key]
  return all
}, {})



// Object.keys(BREADCRUMBS)


// 如果变量名称不能用数字开头，

const NUMBER_MAP = {
  0: 'q',
  1: 'r',
  2: 's',
  3: 't',
  4: 'u',
  5: 'v',
  6: 'w',
  7: 'x',
  8: 'y',
  9: 'z',
};
const i18nKeys = Object.keys(resources['zh-CN']).reduce((all, key, index) => {
  // 将i18n的key重新编码，编码成26进制，然后用字母替换掉所有数字。
  // 因为变量名称不能用数字开头，所以需要替换掉所有数字
  all[key] = index.toString(26).replace(/\d/g, (s) => NUMBER_MAP[s]);
  return all;
}, {});