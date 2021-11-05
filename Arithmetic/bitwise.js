// 4. 延伸：给定一个一元数组，assume 里面的每个元素都是数字，如果每个元素都有一个和自己相等的元素，则这个数组称为镜像数组，否则不是
// 怎么判断一个数组是否为镜像数组？


// 这种方法不行
function isMirrorArray(array=[]) {
  return array.reduce((previous, item) => {
    return previous ^ item
  })
}



console.log(isMirrorArray([1, 2, 2, 1, 9]))

