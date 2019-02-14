'use strict';

// import { join } from "path";

// 引入hello模块:
// var greet = require('./hello');

// var s = 'Michael';

// greet(s); // Hello, Michael!

// var tmp = new Date();

// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = 'hello world';
//     console.log(tmp);
//   }
// }

// f(); // undefined

// function waitHandle() {
//     var dtd = $.Deferred()  // 创建一个 deferred 对象

//     var wait = function (dtd) {  // 要求传入一个 deferred 对象
//         var task = function () {
//             console.log('执行完成')
//             dtd.resolve()  // 表示异步任务已经完成
//         }
//         setTimeout(task, 2000)
//         return dtd  // 要求返回 deferred 对象
//     }

//     // 注意，这里一定要有返回值
//     return wait(dtd)
// }

// var w = waitHandle()
// w.then(function () {
//     console.log('ok 1')
// }, function () {
//     console.log('err 1')
// }).then(function () {
//     console.log('ok 2')
// }, function () {
//     console.log('err 2')
// })


// const fs = require('fs')
// const path = require('path')  // 后面获取文件路径时候会用到
// const readFilePromise = function (fileName) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (err, data) => {
//             if (err) {
//                 reject(err)  // 注意，这里执行 reject 是传递了参数，后面会有地方接收到这个参数
//             } else {
//                 resolve(data.toString())  // 注意，这里执行 resolve 时传递了参数，后面会有地方接收到这个参数
//             }
//         })
//     })
// }

// function* demo() {
//     // console.log('Hello' + yield); // SyntaxError
//     // console.log('Hello' + yield 123); // SyntaxError
  
//     console.log('Hello' + (yield)); // OK
//     console.log('Hello' + (yield 123)); // OK
//   }

//   var hw = demo();
//   var z
//   z = hw.next();
//   z = hw.next();
//     z  = hw.next();
//   console.log('zzz');
// function* helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
//   }
  
//   var hw = helloWorldGenerator();
//   console.log(hw.next());
//   console.log(hw.next());
//   console.log(hw.next());
// function* fibonacci() {
//   let [prev, curr] = [0, 1]
//   for (;;) {
//       [prev, curr] = [curr, prev + curr]
//       // 将中间值通过 yield 返回，并且保留函数执行的状态，因此可以非常简单的实现 fibonacci
//       yield curr
//   }
// }
// for (let n of fibonacci()) {
//   if (n > 10000000000000) {
//       break
//   }
//   console.log(n)
// }

// const readFileThunk = thunkify(fs.readFile)
// const gen = function* () {
//     const r1 = yield readFileThunk('data1.json')
//     console.log(r1)
//     const r2 = yield readFileThunk('data2.json')
//     console.log(r2)
// }

// const g = gen()

// // 试着打印 g.next() 这里一定要明白 value 是一个 thunk函数 ，否则下面的代码你都看不懂
// // console.log( g.next() )  // g.next() 返回 {{ value: thunk函数, done: false }} 

// // 下一行中，g.next().value 是一个 thunk 函数，它需要一个 callback 函数作为参数传递进去
// g.next().value((err, data1) => {
//     // 这里的 data1 获取的就是第一个文件的内容。下一行中，g.next(data1) 可以将数据传递给上面的 r1 变量，此前已经讲过这种参数传递的形式
//     // 下一行中，g.next(data1).value 又是一个 thunk 函数，它又需要一个 callback 函数作为参数传递进去
//     g.next(data1).value((err, data2) => {
//         // 这里的 data2 获取的是第二个文件的内容，通过 g.next(data2) 将数据传递个上面的 r2 变量
//         g.next(data2)
//     })
// })



var reverseWords = function(s) {

  var returnStr = '';
  var sArr =  s.split(' ');
  for (let index = 0; index < sArr.length; index++) {
    const element = sArr[index];
    
    if (element.length > 0 && index !=0) {
      returnStr += ' ';
    }

    var reverStr = '';
    for (let index = element.length -1; index >= 0; index--) {
      reverStr += element[index];
    }
    returnStr += reverStr;


  }  


  return returnStr
};


var reverseString = function(s) {
    
  var front,back;
  front = 0;
  back = s.length - 1;
  while (front < back) {
    var temp = s[front];
    s[front] = s[back];
    s[back] = temp;
    front++;
    back--;
  }
  return s;
};


var z = reverseString(['z','b','c','d']);
// console.log(z)



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
//  @param {ListNode} l1
//  @param {ListNode} l2
//  @return {ListNode}
 */

 function ListNode(val) {
   this.val = val;
   this.next = null;
 }

var addTwoNumbers = function(l1, l2) {

  var firstNode = new ListNode(0);
  var l1Node = l1, l2Node = l2, currentNode = firstNode;
  //标志位 是否有进位标识
  var jinwei = false;

  while (l1Node != null || l2Node != null) {
  
    var  l1_Vaue = l1Node != null ? l1Node.val : 0;
    var  l2_Vaue = l2Node != null ? l2Node.val : 0;
    var sumValue = l1_Vaue + l2_Vaue;
    sumValue = jinwei ? sumValue + 1 : sumValue;
    jinwei = sumValue >= 10 ? true : false;
    currentNode.next = new ListNode(sumValue % 10);
    currentNode = currentNode.next;

    if (l1Node != null) {
      l1Node = l1Node.next;
    }

    if (l2Node != null) {
      l2Node = l2Node.next;
    }
  }

  if (jinwei) {
    currentNode.next = new ListNode(1);
  }


  return firstNode.next;
};

// // [1,2,3]
// // [4,5,6]
// var l1_3 = new ListNode(3,null);
// var l1_2 = new ListNode(2);
// l1_2.next = l1_3;
// var l1_1 = new ListNode(1);
// l1_1.next = l1_2;


// var l2_3 = new ListNode(6,null);
// var l2_2 = new ListNode(5);
// l2_2.next = l2_3;
// var l2_1 = new ListNode(4);
// l2_1.next = l2_2;


// // [1]
// // [9,9]
var l1_1 = new ListNode(1);

var l2_2 = new ListNode(9);
var l2_1 = new ListNode(9);
l2_1.next = l2_2;


var returnNode = addTwoNumbers(l1_1,l2_1);
// console.log(returnNode);



var reverse = function(x) {

  var inputValue = x;
  var ret = 0;
  while (inputValue != 0) {
    ret = ret * 10 + (inputValue % 10)
    inputValue = parseInt(inputValue / 10);
  }

  if (ret < -(2**31) || ret > 2**32) {
    return 0;
  }

  return ret;
};

var reverseReturn = reverse(1563847412);
// console.log(reverseReturn);



var isPalindrome = function(x) {
  
  //负数不是
  if (x < 0) {
    return false;
  }

  //类似 100 这样的数
  if (x % 10 == 0 && x != 0) {
    return false;
  }

  var reverInt = 0;
  //123123 3 2  
  while (x > reverInt) {
    reverInt = 10 * reverInt + x % 10;
    x = parseInt(x / 10);
  }

  if (x == reverInt || x == parseInt(reverInt / 10)) {
    return true;
  } else {
    return false;
  }

};

// console.log(isPalindrome(121));


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
  if (height.length == 2) {
    return Math.min(height[0],height[1]);
  } else {

    var mianji = 0;
    for (let index = 0; index < height.length; index++) {
      const element = height[index];
      for (let index2 = (index + 1); index2 < height.length; index2++) {
        const element2 = height[index2];
        var newMianji = 0;
        newMianji = (index2 - index) * Math.min(element,element2);
        mianji = Math.max(mianji,newMianji);


      }
      
    }
    return mianji;

  }


};
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));


//更新方法 时间复杂度 O(n)
var nweMaxArea = function(height) {
    
  if (height.length == 2) {
    return Math.min(height[0],height[1]);
  } else { 

    var mianJi = 0;
    var leftIndex = 0 , rightIndex = height.length - 1;
    var leftValue = height[leftIndex] , rightValue = height[rightIndex];
    while(rightIndex > leftIndex) {
      leftValue = height[leftIndex] , rightValue = height[rightIndex];
      var newMianJi = 0;
      newMianJi = (rightIndex - leftIndex) * Math.min(leftValue,rightValue);
      mianJi = Math.max(mianJi,newMianJi);
      if (rightValue > leftValue) {
        leftIndex ++;
      } else {
        rightIndex --;
      }
    }
    return mianJi;
  }


};

// console.log(nweMaxArea([1,8,6,2,5,4,8,3,7]));


//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    

  if (height.length <= 2) {
    return 0;
  } else {

    var leftIndex = 0, rightIndex = height.length - 1;
    var mianJi = 0;
    while ((leftIndex < (height.length - 1)) && height[leftIndex] < height[leftIndex + 1]) {
      leftIndex ++;
    }

    while ((rightIndex >0) && height[leftIndex] < height[leftIndex - 1]) {
      rightIndex ++;
    }

    while (leftIndex < rightIndex) {

      if (height[leftIndex] <= height[rightIndex]) {
        
        var leftValue = height[leftIndex];
        while (leftIndex < rightIndex) {

          leftIndex++;
          if (leftValue > height[leftIndex]) {
            mianJi += leftValue - height[leftIndex];
          } else {
            break;
          }
        }
      } else {
        var rightValue = height[rightIndex];
        while (leftIndex < rightIndex) {
          rightIndex--;
          if (rightValue > height[rightIndex]) {
            mianJi += rightValue - height[rightIndex];
          } else {
            break;
          }
        }
      }
    }

    return mianJi;
  }



};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));


/** 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
  var tempDic = {};
  for (let index = 0; index < nums.length; index++) {

    var key = target - nums[index];
    var value = tempDic[key];

    if (value != null) {
      return[value,index];
    } else {
      tempDic[nums[index]] = index;
    }

    
    
  }


};

// console.log(twoSum([3,3],6))



/**  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  
  if (s == '') {
    return 0;
  }

  if (s.length == 1) {
    return 1;
  }

  var maxNum = 0;
  var n = s.length;
  var i = 0, j = 0;
  var tempDic = {};

  while(i < n && j < n) {
    var tempS = s[j];
    if (tempDic[tempS] == null) {
      tempDic[tempS] = tempS;
      j++
      maxNum = Math.max(maxNum,j - i);
    } else {
      tempDic[s[i]] = null;
      i++;
    }
  }
  
  return maxNum;
};

// console.log(lengthOfLongestSubstring('pwwkew'));


