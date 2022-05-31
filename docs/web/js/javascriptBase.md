---
title: javascriptBase
date: 2022-05-26 11:15:09
permalink: /pages/d0f2e9/
categories:
  - language
  - javascript
tags:
  - 
---
# JS NOTE

## 知识点

1. js是解释型的高级语言

### 基本语法

1. js中严格区分大小写

2. js中每一条语句以分号`;`结尾

   ```
   如果不写分号，浏览器会自动添加，但是会消耗一些系统资源，而且有些时候，浏览器会加错分号，所以在开发中分号必须有
   ```

3. js会忽略多个空格和换行，所以可以根据空格和换行对代码进行格式化

   

### 变量类型

1. Number

2. String

3. Boolean

4. Null

5. Undefined

6. Object

   

#### Number

1. 整数

2. 浮点数

   ```
   Js的浮点数误差大，不要使用浮点数运算
   ```

3. NaN(Not a Number的缩写)，任何值和NaN计算都会得到NaN

4. Infinity 表示正无穷, -Infinity 表示负无穷

5. 使用`0x`开头使用16进制的数字

6. 使用`0`开头使用8进制数字

7. 使用`0b`开头表示二进制的数字

   ````
   兼容性很差，不同浏览器支持不同
   ````

   
   
   ```javascript
   var a = "070";
   a = parseInt(a); 	//不同的浏览器解析结果不同，有 70 有 56 
   a = parserInt(a,10);	//可以使用第二个参数取对应的进制数
   ```
   
   

#### Null

```
空的对象
```

#### Undefined

```
Null 和 Undefined 是没有方法的
```

> 小技巧，变量没定义浏览器会报错，属性没定义浏览器只会返回undefined，可以用window.xx的方式写一个兼容浏览器的函数

# 对象&方法&函数&包装类



- 在script标签(全局作用域)中创建的变量和函数默认设为window的属性和方法
- 使用`var`关键字定义变量，会在头部先声明，在该行再赋值
- 大部分的方法都不会对原对象造成修改
- js对象分为3类，内建对象，宿主对象，自定义对象

**xxx.hasOwnProperty**()

​	寻找对象自身中是否含有某属性或方法



**xxx.toString**()

```javascript
var a = 123;
a = a.toString(); //Null 和 Underfined 没有该方法 无法使用
```



**String**()

```javascript
var a;
a = String(a);
```



**Number**()

```javascript
var a = "123";
a = Number(a);
```

1. 字符串为纯数字，直接转换为数字
2. 字符串为非数字，转换为NaN
3. 字符串为空串或有很多空格，转换为0
4. 布尔True转换为1，False转换为0
5. Null转换为0
6. Undefined转换 为NaN



**parseInt**()

```javascript
var a = "123.23px";
a = parseInt(a);   //输出"123"

//可用间接于取整
a = 123.23;
a = parseInt(a);	//输出“123”


```

+ 会将字符串中有效的整数内容提取出来
+ 可以使用第二个参数提取不同的进制数



**parseFloat**()

```javascript
var a = "123.23px";
a = parseFloat(a);	//输出"123.23"
```

+ 会将字符串中有效的浮点数内容提取出来

如果对非 String 使用 parseInt() 或 parseFloat() 会先将其转换为字符串再提取



**Boolean**()

```javascript
var a = 123;
a = Boolean(a);		//True
```

+ 数字中除了 0 和 NaN 其余的都会转换为True
+ 字符串中除了空串，其余的都会转换为True
+ null 和 undefined 都会转换为false
+ 对象也会转换为True









> 使用 xxx属性 in xx对象 来判断在对象中是否存在属性

## 函数创建

注：函数也是对象，对象能干的事，函数都能干

```javascript
var fun1 = function(){};	//函数表达式		后面的函数为匿名函数
function fun2 （）{};	//函数声明
var fun3 = new function(){};	//函数对象(少用)
```

1. 使用函数表达式定义函数，默认会先在头部声明该函数，而不赋值，直到执行到该行才赋值(和普通变量一样)

2. 使用函数声明定义函数，默认将提前到在script标签的头部声明定义函数

   

参数

1. 定义形参就相当于在函数中定义了一个变量
2. 函数的实参可以是任意的类型
   + 如果实参为函数，加括号表示传入的是该函数的返回值
   + 如果实参为函数，不加括号表示传入的是该函数对象
3. 解析器不会检测参数的类型
4. 解析器不会检测参数的数量
   + 多余的参数不会被赋值
   + 实参不足，形参会赋值为undefined



​	在调用函数时，浏览器每次都会传递进两个隐含的参数

  		1. 函数上下文对象this
  		2. 封装实参的对象arguments
  	   - arguments是一个类数组对象， 即它也可以通过索引来操作数据， 也可以获取长度
  	   - 在调用函数时，我们所传递的实参都会在arguments中保存
  	   - 即使不定义形参，也可以通过arguments来访问实参
  	   - 它的callee属性，对应一个函数对象，就是当前正在指向的函数的对象



返回值

1. 返回值可以返回任意类型

   + 包含函数的返回值和函数对象本身

     

```javascript
function fun1 (){
    function fun2 (){
        console.log("hello world");
    }
     return fun2;		//返回的是一个函数对象
}

fun1()()			//讲返回的函数执行了
```



```javascript
(function (){
    console.log("hello world");
})				//用括号扩起表示一个整体，不会报错

(function (){
    console.log("hello world");
})()		//执行这个函数
```





**this**

1. 隐含参数this指向的是一个对象
2. 这个对象我们称为函数执行的上下文对象
3. 根据函数调用方式的不同，this会指向不同的对象
   - 以函数的方法调用时，this永远都是window
   - 以方法的形式调用时， this就是调用方法的那个对象
   - 以构造函数的形式调用时，this是新创建的那个对象
   -  使用call和apply调用时， this是指定的那个对象



**.call && .apply**

- 都是函数对象的方法，需要通过函数对象来调用
- 当对函数调用call()和apply()都会调用函数执行
- 在调用call() 和 apply() 可以将 一个对象指定为第一个参数
  - 此时这个对象将会成为函数执行的this
- call()方法可以将实参在对象之后依次传递
- apply()方法需要将实参封装到一个数组中统一传递





## 对象创建

1. 采用工厂方法创建对象(构造函数Object创建的对象都是Object这个类型，难以区分多种不同类型的对象)

   ```javascript
   function CreatPerson(name, age, gender){
       var obj = new Object();
       obj.name = name;
       obj.age = age;
       obj.gender = gendre;
       obj.sayName = function (){console.log(this.name)}
   }
   
   var person1 = CreatPerson("haung", 18, "M");
   ```

2. 构造函数

   + 使用同一个构造函数创建的对象，我们称为一类对象，将一个构造函数称为一个类
   + 创建的对象称为该类的实例(使用instanceof检查对象是否为类的实例 `对象 instanceof 构造函数`)
     + 所有的对象都是Obeject的实例(后代)
   + 构造函数和普通函数的区别是调用方法的不同
   + 普通函数直接调用，而构造函数需要使用new关键字来调用
   + 对象中`constructor` 属性是对创建该对象的函数的引用
   
   ```javascript
   function Person(name, age, gender){
       this.name = name;
       this.age = age;
       this.gender = gender;
   }
   
   var person1 = new Person("tom", 18, "M");
   ```
   
   执行流程
   
   1. 立刻创建新对象
   2. 将新建的对象设置为函数中的this， 在构造函数中可以使用this来引用新建的对象
   3. 逐行执行函数中的代码
   4. 将新建的对象作为返回值返回

> 对象除了可以使用`对象.属性名`的方式访问属性，还可以通过`对象["属性名"]的方式访问属性`

### 给对象添加方法

#### 原型对象prototype

同个类的实例都有指向同一个prototype的对象, 把方法定义在原型对象中，可以避免多次定义函数

1. 当一个实例对象访问一个属性， 方法， 对象时会优先检查该实例中有没有定义，再去检测`__proto__`中有没有定义
2. 原型对象也隐含有原型对象，并且浏览器只带的一些方法定义在其中例如`toString()`





## 数组创建

1. js的数组和函数都属于一种对象
2. 各种类型的值都可以存放进同一个数组

```javascript
var arr = [];		//最常用
var arr2 = new Array();
```

方法到w3school查询





## Date对象

使用Date对象来表示一个时间

.getDate获取当前时间

其他方法查w3s

```javascript
var d = new Date();
```

直接使用构造函数创建一个Date对象， 则会封装为当前代码执行的时间



```javascript
var d2 = new Date("01/01/2022 20:35:30");
```

需要在构造函数中传递一个表示时间的字符串作为参数，格式：`月份/日/年 时:分:秒`





## Math对象

1. 无法使用`new Math()`来创建对象，它不是一个构造函数，只是一个对象
2. Math中提供有非常多的数学方法使用(w3c查看)









## 字符串

1. 和c语言一样js的字符串是以字符数组的形式保存的，可以直接使用下标访问字符

   ```javascript
   string.charAt(0);	//返回字符串指定位置的字符
   string.charCodeAt(0);	//返回字符串指定位置字符的unicode编码
   string.fromCharCode(25525);	//返回unicode对应的字符
   string.concat("123","456");		//用来连接两个或者多个字符串
   string.indexOf("b",1);		//检索字符串中是否含有字符串，含有该内容返回第一次出现的索引，否则返回-1第二个参数为查找开始的位置索引
   string.lastIndexOfl;			//和indexOf一样，但它是从后往前找
   string.slice(0,2);			//可以从字符串中截取指定的内容，第一个参数为开始位置的索引(包含)，第二个参数为结束位置的索引(不包含),如果省略第二个参数，则截取到后面所有的，传递负数为参数，会从后面开始计算
   string.substring(1,-1);		//可以截取一个字符串，和slice类似，该方法不能接受负数，默认负数为0，还好自动交换参数位置，若第一个参数大于第二个，则自动交换
   string.substr(3,2)			//第一个参数为截取开始位置的索引，第二个参数为截取长度 *ECMAscript未对其标准化，使用请小心
   string.split(",");				//可以将字符串拆分为一个数组，以字符串为参数去拆分成数组，若参数为空，则将字符串每个字符拆分数组元素
   string.toUpperCase();				//将字符串转换为大些返回对应的有toLowerCase()
   string.search("abc");				//搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1，可以接受一个正则表达式作为参数，但是只能查找第一个，即使设置全局模式也只能查找第一个
   string.match();				//可以根据正则表达式，从一个字符串中将符合条件的内容提取出来，返回数组
   string.replace("acd","abc");			//可以将字符串中指定内容替换为新的内容，第一个参数为被替换的内容，第二个参数为新的内容，默认只替换第一个。可以接受正则表达式
   ```




## 正则表达式

查找匹配字符串的规则

#### 模板和语法

```javascript
var reg = /正则表达式/ 匹配模式		//字面量，难以修改
var reg = new RegExp("a","i");	//使用构造函数创建正则表达对象，该方法更灵活，参数能修改为变量

//表达式
var reg = /a|b/;		//匹配a或者b， | 表示或
var reg = /[ab]/;		//匹配a或者b， [] 表示或，[a-z]匹配任意小写字母，[A-Z]匹配任意大写字母，[A-z]表示匹配任意字母，[0-9]匹配任意数字
var reg = /a[bde]c/;		//匹配abc,adc,aec 
var reg = /[^ab]/;		//匹配除了ab以外的字符
//量词
var reg = /a{3}/;		//匹配连续3个a
var reg = /(ab){3}/;		//{n}为量词，表示匹配连续出现n个ab
var reg = /b{1,3}/;		//表示匹配连续的1到3个b
var reg = /b{3,}/;		//表示匹配连续的3个以上的b
	var reg = /b+/;			//匹配至少1个连续的b，相当于b{1,}
	var reg = /b*/;			//匹配0个或者多个b，相当于b{0,}
	var reg = /b?/;			//匹配0个或1个b，相当于b{0,1}

var reg = /^a/;			//匹配以a开头
var reg = /a$/;			//匹配以a结尾
var reg = /^a$/;		// 如果在正则表达式中同时使用^$则要求字符串必须完全符合正则表达式，表示匹配单个字母a
var reg = /^a|a$/;		//匹配以a开头，或以a结尾的字符串
var reg = /^a.*a$/;	//匹配以a开头，且以a结尾的字符串

//匹配模式
var reg = /ab/i;		//i为ignore，表示忽略大小写
var reg = /ab/g;			//g为globle，表示全局匹配，所有符合的都匹配
```

可以为一个正则表达式设置多个匹配模式，没有顺序要求

`.`表示任意字符`.`若要检查`.`字符要用 `\`转义，即`\.`，同理要用`\\`表示检查`\`

注意：使用正则表达构造函数时，由于它的参数是一个字符串，而`\`是字符串中的转义字符，如果要使用`\`来转义，需要写`\\`，即

```javascript
var reg = new RegExp("\\.");	//表示匹配 . 字符，原本需要用一个\转义即可，但是字符串中\表示转义，因此还需要使用一个\给\转义
var reg = /\./;					//而字面量就不需要，因为不是字符串
```

```javascript
/* \w 任意字母，_，数字			[A-z_0-9]	word
* \W 除了字母，_，数字的任意字符	[^A-z_0-9]
* \d 任意数字				[0-9]			digital or dex
* \D 除了数字任意字符			[^0-9]
* \s 空格									space
* \S 除了空格
* \b 单词边界	即\bword\b 表示只独立匹配word这个单词
* \B 除了单词边界
*/
```



#### 方法

```javascript
console.log(reg.test("abc"));	//使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，返回布尔值

```

#### 字符串实例

```javascript
var str = "1a2b3c4e5d6f";
var result = str.split(/[a-z]/);	//split可以传入正则表达式，根据正则表达式拆分元素，返回数组

var str = "hello aec world abc";
var result = str.search(/a[be]c/);		//查找abc，aec				

var str = "1a2B3ce5d6f";
var result = str.match(/[a-z]/gi);	//将字母全部提取出来，返回数组

var result = str.replace(/[a-z]/gi,"?");	//将字母全部替换为？
var result = str.replace(/[a-z]/gi,"");		//将字母全部删除

var str = "          he        llo      ";
var result = str.replace(/^\s*|\s*$/g,"");		//删除开头和结尾的空格，单词中间的不删除
```

#### 运用实例

```javascript
//更多的正则表达式可以在网络上找到，但是仅供参考

/*创建一个正则表达式，用来检查一个字符串是否是一个合法的手机号
*手机号规则：
*1. 11位
*2. 第一位以1开头	^1
*3. 第二位3-9任意数字	[3-9]
*4. 三位以后任意数字9个 [0-9]{9}$		//$表示9位数字后不能跟内容
*/
var phoneStr = "13567890123";
var phoneReg = /^1[3-9][0-9]{9}$/;		//以^开头，以$结尾表示完全符合的字符串，即前后不能有内容

//----------------------------------------------------------------------------------------

/*电子邮件	hello@abc.com.cn
* 第一个部分(用户名) 任意字母下划线数字 或 任意字母下划线数字.任意字母下划线数字 \w{3,}(\.\w+)*
* 第二个部分 @
* 第三个部分(网址名称)  任意字母数字		{A-z0-9}+
* 第四个部分(后缀)	.任意字母(2-5位) 或再加.任意字母(2-5位)	(\.[A-z]{2,5}){1,2}
*/
var email = "abc@abc.com";
var emailReg = /^\w{3,}(\.\w)*@{A-z0-9}+(\.[A-z]{2,5}){1,2}$/;
//以^开头，以$结尾表示完全符合的字符串，即前后不能有内容
```









## DOM

#### 知识点

全称Document Object Model文档对象模型

- js通过DOM来对html文档进行操作
- 文档表示的就是整个html网页文档
- 对象表示将网页中的每一个部分都转换为了一个对象去
- 使用模型来表示与对象之间的关系，方便获取对象



1.浏览器加载一个页面时，是按照自上而下的顺序加载的，读到一行就执行一行

- 因此script标签尽量写页面的下部或用其他方法，在页面加载完成后在执行
  - 可以为window添加onload事件响应函数，在页面加载完成后才执行

2.document中有一个属性body，它保存body的引用

3.document.documentElement保存的是html根标签

4.document.all代表页面中所有元素



#### (document & Element)

##### dom查询

通过document对象调用，来获取元素节点，元素就是标签

**获取元素节点**

1. **getElementById()**
   - 通过**id**属性获取**一个**元素节点对象
2. getElementsByTagName() 
   - 通过**标签名**获取**一组**元素节点对象
   - 该方法会返回一个类数组对象，所有查询到的元素都会封装到数组中
3. **getElementsByName()**
   - 通过**name**属性获取**一组**元素节点对象(name属性主要是表单项有)
4. getElementsByClassName()
   - 可以根据class属性获取元素，IE8下不支持
5. **querySelector()**
   - 需要一个选字符串作为参数，可以根据一个**CSS选择器**来查询一个元素节点对象，但只会返回一个元素，当匹配多个时，只返回第一个
6. **querySelectorAll()**
   - 和用法类似querySelector()，把结果放入数组，即使只有一个

- 元素节点通过**innerHTML()**方法获取内部的html代码，对自结束标签没有作用
- 元素节点通过innerText()获取到元素内部的文本内容，它会自动将html标签去除
- 元素节点通过nodeValue()获取文本节点
- 直接使用`元素.属性名`读取元素节点属性，特别的，读取class属性要使用className



**获取元素子节点**

1. getElementsByTagName()
   - 返回当前元素的指定标签后代节点
2. childNodes()
   - 表示当前元素的所有子节点,包括文本节点，空白部分也会被当成文本节点(IE8及以下的浏览器除外)
3. **children()**
   - 可以获取当前元素的所有子元素
4. firstChild()
   - 当前元素的第一个子节点，包括空白文本节点
5. firstElementChild()
   - 获取当前元素的第一个子元素，不支持IE8及以下浏览器
6. lastChild()
   - 当前元素的最后一个节点  

**获取父节点和兄弟节点**

1. **parentNode**
   - 获取当前节点的父节点
2. previousSibling
   - 获取当前节点的前一个兄弟节点(也可能获取空白节点)
3. previousElementSibling;
   - 取前一个兄弟元素(IE8以下不支持   )
4. nextSibling
   - 获取当前节点的下一个兄弟 节点

##### dom修改

1. **appendChild()**
   - 添加新的子节点到指定节点
2. **removeChild()**
   - 删除子节点，调用为父节点
3. replaceChild(newnode,refnode)
   - 替换子节点，调用为父节点
4. **insertBefore(newnode,refnode)**
   - 指定的子节点前面插入新的子节点，调用为父节点
5. **createElement()**
   - 创建元素节点，参数为标签名字符串
6. **createTextNode()**
   - 创建文本节点
7. innerHTML()
   - 可以使用innerHTML()给节点添加子节点



#### 修改样式

- 内联样式(含有较高的优先级，优先执行)

  1. js修改css样式，通过 `元素.style.样式名 = 样式值`(样式值为字符串)

  2. css含有`-`的样式名在js中不合法，需要去掉`-`使用驼峰命名法
- 当前样式

  1.  使用`元素.currentStyle.样式名 = 样式值`来元素读取的当前样式，只读无法修改(只有IE浏览器支持，其他的都不支持)
  2. 使用`getComputedStyle(元素名,伪元素或null)`来获取元素的当前样式真实值，window的方法，它会返回一个封装着当前元素对应的样式的对象，只读无法修改(IE8及以下不支持)





>  ***注意***：如果样式中写了`!important`，则该样式的优先级别最高，js修改的内联样式也 无法覆盖



#### 元素相关属性

1. clienHeight() 和 clienWidth()
   - 返回内容的宽度和高度(没有px，是只读的)，包括内容区和内边距
2. offsetWidth() 和 offsetHeight()
   - 获取元素的宽度和高度(没有px，是只读的)，包括内容区，内边距和外边距
3. offsetParent()
   - 获取元素的定位父元素，即离该元素最近的开启定位的父元素
4. offsetLeft() 和 offsetTop()
   - 当前元素相对于其定位父元素的水平偏移量和垂直偏移量
5. scrollHeight() 和 scrollWidth()
   - 可滚动滚动区域的高度和宽度
6. scrollLeft()
   - 水平滚动条移动的距离
7. scrollTop()
   - 垂直滚动条移动的距离

> 当满足 scrollTop() - scrollHeight() == clienHeight() 表示滚动条滚到底了







#### 事件

- 文档或浏览器窗口中发生的一些特定的交互瞬间
- js与html之间的交互是通过事件实现的
  - 比如说点击，刷新，改变窗口大小之类的

```html
//直接在标签上添加事件属性
<butten id="btn" onclick="alert('helloworld')">btn</button>
```

```javascript
//js中获取对象后，绑定事件，该函数称为单击响应函数
var btn = document.getElementById("id");
btn.onclick = function(){alert("helloworld")};
```

例子

- oninput 输入
- oninvalid 表单验证错误onchange 输入改变时

- onmousewheel 鼠标滚轮滚动事件
- 键盘事件一般绑定可以获取焦点的对象或者document
  - onkeydown 和 onkeyup
    - onkeydown 可连续触发，当第一次触发和第二次触发之间的时间间隙较长防止误操作 



> 火狐中需要使用DOMMouseScroll 来绑定滚动事件，该事件要使用addEventlistener()来绑定



##### 事件对象(dom event)

1. 当事件的相应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数
2. 在事件对象中封装了当前事件的一切信息，比如哪个按键被按下，鼠标的坐标等等



```javascript
//例子
xxx.onmousemove = function(event){
    var x = event.clientX;
    var y = event.clientY; //获取鼠标的坐标
};
```

- .clientX 和 .clientY
  - 表示鼠标在可视窗口内的坐标


- .pageX 和 .pageY(IE8中不支持)	

  - 表示鼠标相对于页面的坐标

  - 可以用 .clientX + scrollTop() 表示 .pageX

- event中的target表示触发事件的对象

- event中wheelDelta() 获取鼠标滚动方向 
  - 只看正负不看大小 
  - 火狐不支持，需要使用event.detail，只看正负不看大小
- 可以使用keyCode获取按键的编码
  - 特殊按键还可以使用ctrlKey 等等



> ***注意***：IE8中，响应函数被触发时，浏览器不会传递事件对象，在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的，因此使用event = event || window.event ；解决兼容性问题是个好方法



##### 事件冒泡

- 所谓事件冒泡指的就是事件向上传导，当后代元素上的事件被触发时，其**祖先元素**的**相同事件**也会被触发

- 在开发中大部分情况冒泡都是有用的，如果不希望发生事件冒泡可以通过**事件对象来**取消冒泡

  ```javascript
  btn.onclick = function(event){
      event.cancelBubble = true;			//注意，只在该处取消，其较近的祖先元素被取消，较远的祖先元素的冒泡尚未取消
  }
  ```



##### 事件委派

- 将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件
-  事件委派是利用了冒泡，通过委派事件减少了事件的绑定





##### 事件绑定

1. 使用`对象.事件 = 函数`的形式绑定响应函数，只能同时为一个元素绑定一个响应函数，第二次绑定会覆盖掉之前绑定的函数
2. `对象.addEventListener("click",function，false)`，可以同时为一个元素相同事件绑定多个函数，按照绑定顺序执行(IE8及一下浏览器不支持)，参数：
   - 事件的字符串，不要on
   - 回调函数，当事件触发时该函数会被调用
   - 是否在捕获阶段触发事件，需要一个布尔值，一般为false

> 在IE中可以使用attachEvent()来绑定事件，参数1.带on的事件字符串；2.函数； 绑定事件的执行顺序是后绑定后执行
>
> addEventListener() 中的this 是绑定事件的对象，attachEven()中的this 是window
>
> 可以通过attachEven("onclick",function(){callback.call(obj);})的方式统一this为绑定事件的对象





##### 事件传播

- 微软公司认为事件应该是由内向外执行，先执行当前元素，再执行祖先元素的事件，即冒泡
- 网景公司认为事件应该是有外向内执行，当事件触发时应该先触发元素外的祖先元素再传入内，即捕获阶段
- w3c 综合了两个公司的方案，将事件传播分成了三个阶段
  1. 捕获阶段
     - 捕获阶段时，从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
  2. 目标阶段
     - 事件捕获到了目标元素，捕获结束，开始在目标元素上触发事件
  3. 冒泡阶段
     - 事件从目标元素向他祖先元素传递，依次触发事件

如果希望在捕获阶段执行事件，可以将addEventListener()的第三个参数改为true



当调用一个元素的setCapture()方法以后，这个元素将会把下一次所有的鼠标按下相关的事件捕获到自身上(chrom不支持)

releaseCapture()取消对鼠标的捕获(只有IE8有)



> 可以通过在元素.onxxs=绑定响应函数中 return false 来取消浏览器的默认行为 ，但是对IE8不起作用
>
> 如果使用addEventListener()添加的响应函数，可以使用event.preventDefault()取消浏览器默认行为 



## BOM

- BOM（Browser Object Model）： 浏览器对象模型
- 操作浏览器的一些能力
- 对象  都是作为window对象的属性保存的
  - window  代表整个浏览器
  - navigator  代表当前浏览器的信息
  - location  代表当前浏览器的地址栏信息，或者跳转页面
  - history  代表浏览器的历史记录，可以通过该对象操作浏览器的历史记录 不能获取具体历史，只能操作向前或向后，且只在当次访问有效
  - screen  代表用户屏幕信息，可以获取用户的显示器相关信息



#### navigator

- appName() 返回浏览器的名字，现在已失效
- userAgent() 来判断浏览器的信息，返回字符串 ，用正则表达式查找出浏览器名称
- 使用 `ActiveXObject in window `来判断是否是IE浏览器



#### history

- lenghth  历史访问链接数量
- back()  回退到上一个页面  forward()  往前一个页面
- go()  跳转到指定的页面，参数：
  - 1 向前跳转一个页面， 2 向前跳转两个页面
  - -1 向后跳转一个页面， -2 向后跳转两个页面



#### Location

- 可以直接访问location 获取浏览器地址栏，并修改
- assign()  跳转到其他页面，与直接修改location一样，会生成历史记录
- reload()  可用与重新加载页面，作用与F5一样，是保存缓存的刷新，若要强制清空浏览器缓存刷新，传人参数true 即与ctrl + F5一样
- replace() 替换当前页面到了链接，不会产生历史记录



#### window

定时调用

- setInterval() 设置函数隔一段时间执行一次，参数
  - 回调函数
  - 间隔时间，单位毫秒
  - 返回值 为一个number 作为定时器的唯一标志
- clearInterval()  用一个定时器标识作为参数，清除一个定时器

延时调用

- setTimeout()  只执行一次，延时一段时间执行 







## 修改样式

- 通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面，执行的性能差
- 通过修改class属性来间接修改样式，浏览器只需要重新渲染一次
- className 获取元素的类属性
- className.replace("xx","");  可以使用该方法来删除一个类名
- toggleClass("class");  如果某个元素有这个类就删除，没有就添加



# JSON

json就是一个特殊格式的**字符串**，这个字符串可以被任意语言所识别，并且可以转换为任意语言中的对象，json在开发中主要用来数据的交互

- JSON
  - JavaScript Object Notation Js 对象表示法
  - JSON 和 JS 对象的格式一样，只不过JSON字符串中的**属性名**必须加**双引号** 
  - 其他和js语法一致
- 分类
  1. 对象 {}
  2. 数组 []
- 允许的值
  1. 字符串
  2. 数值
  3. 布尔值
  4. null
  5. 对象(普通对象(包括数组对象)，不包括函数对象)
  6. 数组

```json
//创建对象和数组
var obj = '{"name":"张三","age":18,“gender”:"男"}';
var arr = '[1,2,3,"hello",true]';
var obj2 = '{"arr":[1,2,3]}';
var arr2 = '[{"name":"张三","age":28,“gender”:"男"},{"name":"李四","age":32,“gender”:"男"}]';
```



**将JSON字符串转换为JS中的对象**

js提供一个工具类JSON，可以将JSON转换为js对象

* JSON.prase()  可以将以JSON字符串转换为js对象
  * 它需要一个JSON字符串作为参数，将该字符串转换为js对象



**将js字符串转换为JSON**

- JSON.stringify()
  - 可以将一个js对象转换为JSON字符串
  - 需要一个js对象作为参数，会返回一个JSON字符串



**eval()**  

- 这个函数可以用来执行一段字符串形式的js代码，并将执行结果返回
- 如果使用eval()执行的字符串中含有{}，它会将{}当成代码快，如果不希望当成代码块，需要在字符串前后加()
- 虽然eval()很强大，但在开发中尽量不要使用，原因：
  - 执行性能差
  - 安全隐患

```javascript
var str = '{"name":"张三","age":18,“gender”:"男"}';
var obj = eval("("+str+")");
```



> JSON在IE7-的浏览器中不支持，如果要兼容IE7- 的JSON操作，可以通过引入一个js文件处理

## 运算符

###   一元

typeof 

+ 它会将该值的类型以字符串的形式返回，以表述该变量的类型



+, -

+ 数字取反
+ 非number会先转换为number再计算(可以用这个特性来间接的转换类型)



### 二元

+

+ 纯数字进行算术加法运算
+ 对非Number的类型运算，会将其他类型先转换为Number再运算
+ 如果对两个字符串进行加法运算，会讲两个字符串拼接
+ 任何时和字符串做加法运算，都会先转换为字符串，再拼接

```javascript
var a = 123;
a = a + "";		//转换为字符串
```





-，*， /,  %

+ 纯数字进行算术运算

+ 对非Number的类型运算，会将其他类型先转换为Number再运算aaaaaa

  ```javascript
  var a = "123";
  a = a - 0;	//转换为数字
  ```

  

 == , ===

- `==`先转换类型再比较
- `===`先判断类型，如果不是同一类型false，若类型相同且内容相等，则返回true





|| ， &&

-  1 || 2         当1 true 就不会执行2，当 1 false 就执行2
- 1 && 2        当 1 true 就执行2，当 1 false 就不会执行2
