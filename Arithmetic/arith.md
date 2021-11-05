### 斐波那契数列


### 实现 `calc` 方法，可以将输入的数拆解为【尽可能多的乘数】，所有数相乘等于输入数。


### 数组去重


### 求数组中最大值


### 判断数据类型


### curry 
```
// 定义一个函数 add，满足如下性质：
add(1) == 1
add(1)(2) == 3
add(1)(2)(3) == 6
...
var g = add(1)(2)
g(100) == 103
g(200) == 203

```

### HOW TO FIND A UNIQUE NUMBER IN A LIST CONTAINING PAIRS? [url](https://yonatankra.com/how-to-find-a-unique-number-in-a-list-of-pairs/)

Performance wise, there are 3 main ways to do that. O(n*n), O(n) time and O(n) space and, with a little bitwise trick, O(n) time and O(1) space. After reading this article, you’ll know all three.

1. The Naive Solution O(n*n)
  ```
  function singleNumber(nums) {
      for (let i = 0; i < nums.length; i++) {
          let found = false;
          for (let j = 0; j < nums.length; j++) {
              if (nums[j] === nums[i] && i != j) {
                  found = true;
                  break;
              }
          }
          if (!found) return nums[i];
      }
  };
  ``

2. How to solve finding unique value in a list containing pairs in linear time? O(n)

  ```
    function findUniqueNumber(nums) {
        let memo = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (!memo[num]) {
                memo[num] = 1;
            } else {
                memo[num] += 1;
            }
        }
        return Object.keys(memo).reduce((unique,num) => {
            return memo[num] === 1 ? Number(num) : unique;
        }, NaN);
    };
  ```

3. How to Use Bitwise XOR to find a unique value in a list containing pairs in linear time? O(1)

  ```
  // 太秀了
  function findUniqueNumber(nums) {
    return nums.reduce((val, num) => val ^ num); 
  }
  ```

4. 延伸：给定一个一元数组，assume 里面的每个元素都是数字，如果每个元素都有一个和自己相等的元素，则这个数组称为镜像数组，否则不是
怎么判断一个数组是否为镜像数组？
解答：
1: 首先判断数组的长度，如果为奇数则为false
2: 如果为偶数，可以利用异或运算(二进制中，两个数字异或运算，如果某位不同，则为1，相同则为0)

