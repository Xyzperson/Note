---
title: 简单数学
date: 2022-04-27 17:16:34
tags: 
  - Math
  - Algorithm
---
# 简单数学

## 加法
A + B
像加法一样
```cpp
vector<int> add(vector<int> &A, vector<int> &B){
    int tmp = 0;
    if (A.size() < B.size()) return add(B, A);
    vector<int> C;
    
    for (int i = 0; i < A.size(); i ++){
        tmp += A[i];
        if (i < B.size()) tmp += B[i];
        C.push_back(tmp % 10);
        tmp /= 10;
    }
    
    while (tmp) C.push_back(tmp % 10), tmp /= 10;
    while (res.back() == 0 && res.size() > 1) res.pop_back();
    
    return C;
    
}
```
## 乘法


A x b

大数乘小数，将大数各个位数与小数相乘，保存个位，剩余位数待下次运算加上。
```cpp
include <iostream>
include <vector>

using namespace std;

string a;
vector<int> A;
int b;

vector<int> mul(vector<int> &A, int b){
    vector<int> C;
    
    int tmp = 0;
    for (int i = 0 ; i < A.size() ; i ++){
        tmp += A[i] * b;
        C.push_back(tmp % 10);
        tmp /= 10;
    }
    
    while (tmp){
        C.push_back(tmp % 10);
        tmp /= 10;
    }
    
    while (C.size() > 1 && C.back() == 0 ) C.pop_back();
    
    return C;
}

int main(){
    cin >> a >> b;
    
    for (int i = a.size() - 1; i >= 0 ; i --) A.push_back(a[i] - '0');
    
    auto res = mul(A, b);
    
    for (int i = res.size() - 1 ; i >= 0 ; i --) cout << res[i];
    
    return 0;
}
```

A x B

大数乘大数，将各位数乘积结果按位加入结果数组中，此时各位的结果就是**各数组元素**加入上**进位数**取个位，即模拟人工笔算

```cpp
include <iostream>
include <vector>

using namespace std;
    
string a, b;
vector<int> A, B;

vector<int> mul(vector<int> &A, vector<int> &B){
    vector<int> C(A.size() + B.size() + 10, 0);
    
    for (int i = 0 ; i < A.size() ; i ++)
        for (int j = 0 ; j < B.size() ; j ++)
            C[i + j] += A[i] * B[j];
            
    int tmp = 0;
    
    for (int i = 0 ; i < C.size() ; i ++){
        tmp += C[i];
        C[i] = tmp % 10;
        tmp /= 10;
    }
    
    while (C.size() > 1 && C.back() == 0) C.pop_back();
    
    return C;
}

int main() {
    cin >> a >> b;
    for (int i = n.size() - 1; i >= 0 ; i --) A.push_back(a[i] - '0');
    for (int i = m.size() - 1; i >= 0 ; i --) B.push_back(b[i] - '0');
    
    auto res = mul(A, B);
    
    for (int i = res.size() - 1; i >= 0 ; i --) cout << res[i];
    
    return 0;
}
```

## 除法

A / b

和手算除法的步骤是一样的，记得去除首0，翻转答案数组，因为答案是从高位存的

```cpp
include <bits/stdcpp.h>

using namespace std;

string A;
vector<int> a, ans;

int b;

int divi(vector<int> &ans, vector<int> &A, int b)
{
    int t = 0;
    for (int i = A.size() - 1; i >= 0  ; i --)
    {
        t = t * 10 + A[i];
        ans.push_back(t / b);
        t %= b;
    }
    
    reverse(ans.begin(), ans.end());
    
    while (ans.size() > 1 && ans.back() == 0) ans.pop_back();
    
    return t;
}

int main()
{
    cin >> A >> b;
    
    for (int i = A.size() - 1; i >= 0 ; i --) a.push_back(A[i] - '0');
    
    int t = divi(ans, a, b);
    
    for (int i = ans.size() - 1; i >= 0 ; i --) cout << ans[i];
    
    puts("");
    
    cout << t << endl;
    
    return 0;
}
```

## 幂

### 快速幂
和手写幂运算一样，只要不断地把底数进行平方运算，只需要算logk次就可以了。

复杂度：
- 时间:$O(logn)$

```cpp
include <iostream>

using namespace std;
typedef long long LL;

LL qmi(int a, int k, int mod)
{
    LL res = 1;
    while (k)
    {
        if (k & 1) res = res * a % mod;
        a = 1LL * a * a % mod;
        k >>= 1;
    }
    return res;
}
int main()
{
    int n;
    cin >> n;
    
    while (n -- )
    {
        int a, b;
        cin >> a >> b;
        LL res = qmi(a, b); cout << res << endl;
    }
    return 0;
}
```
## 阶乘
求阶乘中质因数的指数：$cnt_pmi(a!)= \left\lfloor\frac{a}{p}\right\rfloor + \left\lfloor\frac{a}{p^2}\right\rfloor + ... + \left\lfloor\frac{a}{p^k}\right\rfloor$<br>
证明：
> 知识点：
> - 1 到 n 中 p 的倍数的个数为[n / p]，[]为向下取整<br>
> 知识点举例证明：6 / 2 = 3，说明6等于3个2相加<br>
> 6 = 2 + 2 + 2 <br>
> 5 = 2 + 2 + 1 <br>
> 4 = 2 + 2 <br>
> 3 = 2 + 1 <br>
> 2 = 2 <br>
> 1 = 1 <br>
> 可以看出当加项全为2时，总和才能被2整除，因此加项的个数就是1到8中2的倍数个数

 由分解质因数部分可知，任何一个合数`N`都可以写成$N = p_1^{k_1} \* p_2^{k_2} \* ... \* p_n^{k_n}$，即若干个质数的若干次幂的积<br>

由 `1 到 n 中 p 的倍数的个数为[n / p]` 可知，$[\frac{a}{p}]$算出了1到a中 p 的倍数个数，同时也是a * (a - 1) * ... * 1中各项为p倍数的因数对$p^k中$k的贡献(因为这些倍数都乘起来了，因此至少每个倍数贡献1)，记为$k_1$。而a!的因数中可能还存在有多贡献的倍数那么$[\frac{\frac{a}{p}}{p}] = [\frac{a}{p^2}]$可表示再次贡献1的倍数个数，记为$k_2$，同理可得到$k = k_1 + k_2 + ... + k_n$，由此可证：<br>


阶乘中质因数的指数：$cnt_pmi(a!)= \left\lfloor\frac{a}{p}\right\rfloor + \left\lfloor\frac{a}{p^2}\right\rfloor + ... + \left\lfloor\frac{a}{p^k}\right\rfloor = k$

题目：求n!中有多少个尾数0(由于 2 * 5 = 10 , 而2的数量比5的多，因此0的个数取决于5的指数)
```cpp
include <iostream>

using namespace std;

int n, res;

int main()
{
    cin >> n;
    
    while (n)
    {
        n /= 5;
        res += n;
    }
    
    cout << res << endl;

    return 0;
}
```
## 对数
对数推导算法的时间复杂度很重要，以下是常用的对数公式

名称|公式
:--:|:--:
和差|$log_aMN = log_aM + log_aN$
换底|$log_ax=\frac{log_cx}{log_ca}$
次方|$log_{a^n}x^m = \frac{m}{n}log_ax$
互换|$M^{log_aN} = N^{log_aM}$
倒数|$log_ab = \frac{lnb}{lna} =\frac{1}{\frac{lna}{lnb}}= \frac{1}{log_ba}$
链式|$log_cb  log_ba = \frac{lnb}{lnc}  \frac{lna}{lnb} = log_ca$
还原|$a^{log_ax} = x = log_aa^x$

> 关于计算机中，很多问题log的底数时而为2，时而为e，可以用换底公式求出他们的比值：$\frac{log_eN}{log_2N} = \frac{log_kN}{logke} / \frac{log_kN}{log_k2} =log_e2$

## 日期

- 闰年判断
  1. 非整百年份(不可被100整除)，可以被4整除
  2. 整百年份(可被100整除)可以被400整除
- 闰年性质
  1. 2月份有29天，全年有366天 

- 1000ms = 1s

