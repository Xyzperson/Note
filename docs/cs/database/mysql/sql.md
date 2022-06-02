---
title: SQL & MYSQL
date: 2022-05-26 10:38:18
permalink: /pages/e64e0f/
categories:
  - note
tags:
  - DataBase

---






## DQL
### 数据查询
查询关键字：select 

<strong>语法：</strong>

```sql
select
    字段列表
from
    表名列表
where
    条件列表
group by
    分组字段列表
having
    分组后条件列表
order by
    排序字段列表
limit
    分页参数
```

#### 基本查询

```sql
#查询多个字段
select 字段1,字段2,字段3,... from 表名;

select * from 表名;

#设置别名
select 字段1[as 别名1],字段2[as 别名],... from 表名;

# 去除重复查询记录
select distinct 字段列表 from 表名;
```

#### 条件查询

```sql
select 字段列表 from 表名 where 条件列表
```

<strong>条件：</strong>

比较运算符|描述
--|--
>|大于
>=|大于等于
<|小于
<=|小于等于
=|等于
<>|!=
between...and...|在某个范围之内(含最小、最大值)
in(...)|在in之后的列表中的值，多选一
like 占位符|模糊匹配(`_`匹配单个字符，`%` 匹配任意个字符)
is NULL|是NULL

逻辑运算符|描述
--|--
AND 或 `&&`|并且
OR 或 `||`|或
NOT 或 `!`|非，不是

#### 函数

##### 汇总

函数|说明
--|--
AVG()|返回某列的平均值
COUNT()|返回某列的行数
MAX()|返回某列的最大值
MIN()|返回某列的最小值
SUM()|返回某列值之和

> AVG() 会忽略NULL行

可以使用distinct可以汇总不同的值


例:

```sql
select avg(distinct age) from emp;
```

##### 文本处理
函数|说明
--|--
LEFT()|左边的字符
RIGHT()|右边的字符
LOWER()|转换为小写字符
UPPER()|转换为大写字符
LTRIM()|去除左边的空格
RTRIM()|去除右边的空格
LENGTH()|长度
SOUNDEX()|转换为语音值

其中，SOUNDEX()可以将一个字符串转换为描述其语音表示的字母数字模式

```sql
select *
from mytable
where soundex(col1) = soundex('apple')
```



#### 分组查询

语法:
```sql
select 字段列表 from 表名 [where 条件]
group by 分组字段名 [having 分组后过滤条件];
```

> where 与 having 区别:
> 1. 执行时机不同: where 是分组之前进行过滤，不满足 where 条件，不参与分组；而having是分组之后对结果进行过滤。
> 2. 判断条件不同: where不能对聚合函数进行判断，而having可以

> 注意:
> - 执行顺序：where > 聚合函数 > having 
> - 分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义

例:
```sql
select gender, avg(age) from emp group by gender;
```

#### 排序查询


语法:
```sql
select 字段列表 from 表名 order by 字段1 排序方式1, 字段２, 排序方式2;
```
排列方式:
- ASC: 升序
- DESC: 升序

> 注意：如果是多字段排序，当第一个字段值相同时，才会根据第二个字段进行排序。

例:
```sql
select * from emp order by age;
```

#### 分页查询

语法:

```sql
select 字段列表 from 表名 limit 起始索引, 查询记录数;

```

> - 起始索引从0开始，起始索引=(查询页码-1) * 每页显示记录数
> - 分页查询住不同数据库有不同的实现，mysql中是LIMIT
> - 如果查询的是第一页数据，起始索引可以省略，直接简写成limit10

### DQL执行顺序

```sql
from
    表名列表
where
    条件列表
group by
    分组字段控制
having  
    分组后后条件判断
select
    字段列表
order by
    排列字段列表
limit 
    分页参数

```

## DCL
用来管理数据库用户，控制数据库的访问权限

### 用户管理

```sql
#查询用户
use mysql;
select * from user;

#创建用户
create user '用户'@'主机名' identified by '密码';

#修改用户密码
alter user '用户名'@'主机名' indentified with mysql_native_password by '新密码';

# 删除密码
drop user '用户名'@'主机名';
```

### 权限管理
权限|说明
--|--
all, all privileges|所有权限
select|查询权限
insert|插入数据
update|修改数据
delete|删除数据
alter|修改表
drop|删除数据库/表视图
create|创建数据库/表


<strong>命令：</strong>
```sql
#查询权限
show grants for '用户'@'主机名'

#授予权限
grant 权限列表 on 数据库名 to '用户名'@'主机名'

#撤销权限
revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名' 
```

## 函数

### 字符串函数

函数|功能
--|--
concat(s1, s2,..., s3)|字符串拼接
lower(str)|将字符串str全部转为小写
upper(str)|将字符串str全部转换为大写
lpad(str, n, pad)|左填充，用字符串pad对str的左边进行填充，达到n个字符串长度
rpad(str, n, pad)|右填充，用字符串pad对str右边进行填充，达到n个字符串长度
trim(str)|去掉字符串头部和尾部的空格
substring(str, start, len)|返回从字符串str从start位置引起的len个长度的字符串



### 数值函数

函数|功能
--|--
ceil()|向上取整
floor()|向下取整
mod(x, y)|返回x/y的模
rand()|返回0～1内的随机数
round(x, y)|求参数x的四舍五入的值，保留ｙ位小数


### 日期函数


函数|功能
--|--
curdate()|返回当前日期
curtime()|返回当前时间
now()|返回当前日期和时间
year()|获取指date的年份
month()|获取指定date的月份
day()|获取指定date的日期
date_add(date, interval expr type)|返回一个日期/时间值加上一个时间间隔expr后的时间值
datediff(date1, date2)|返回起始时间date1 和 结束时间date2之间的天数

### 流程函数

函数|功能
--|--
if(value, t, f)|如果value为true, 则返回t, 否则返回f
ifnull(value1, value2)|如果value1不为空, 返回value1, 否则返回value2
case when [val1] then [res1] ... else [default] end|如果val1为true，返回res1, ... 否则返回default默认值
case [expr] when [val1] then [res1] ... else [default] end|如果expr的值等于val1, 返回res1, ... 否则返回default默认值
 

## 约束

1. 非空约束: not null 
   - 约束某字段不能为空
2. 唯一约束: unique
   - 约束字段值是唯一的
3. 主键约束: primary key (自增: auto_increment)
   - 主键是一张表的唯一表示，是非空唯一的，若需要自增，加上auto_increment

4. 默认约束: default
   - 若某字段的值没有添加，则会默认指定的值

5. 检查约束: check
   - 字段储存时必须要达到的条件

6. 外键约束: foreign key
   - 用来让两张表的数据之间建立连接，从而保证数据的完整性和一致性的

<strong>例:</strong>
字段名|字段含义|字段类型|约束条件|约束关键字
--|--|--|--|--|
id|id唯一标示|int|主键并且自动增长|primary key, auto_increment
name|姓名|varchar(10)|不为空,并且唯一|not null, unique
age|年龄|int|大于0,并且小于120|check|
status|状态|char(1)|如果没有指定该值，默认为１|default
gender|性别|char(1)|无||

```sql
create table user (
    id int primary key auto_increment,
    name varchar(10) not null unique,
    age int check(age > 0 && age <= 120),
    status char(1) default '1',
    gender char(1) 
);
```

### 外键约束

```sql
create table 表名(
    字段名 数据类型,
    ...
    [constraint] [外键名称] foreign key (外键字段名) references 主表(主表列名)
);

#添加外键
alter table 表名 add constraint 外键名称 foreign key (外键字段名) references 主表(主表列名)

#删除外键
alter table 表名 drop foreign key 外键名称;

```

- <strong>删除和更新行为</strong>

行为|说明
--|--
no action|当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。(与restrict一致)
restrict|当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。(与no action一致)
cascade|当在父表中删除/更新对应记录时，首先检查该记录是否对应外键，如果有，则也删除/更新外键在子表中的记录。
set null|当在父表中删除对应记录时，首先检查该记录是否对应外键，如果有则设置子表中该外键值为null(这就要求该外键允许取null)
set default|父表有变更时，子表将外键列设置成一个默认的值(innodb不支持)

```sql
#创建外键关联时的例子
alter table 表名 add constraint 外键名称 foreigen key (外键字段) references 主表名(主表字段名) on update constraint on delete cascade
```

## 多表查询

### 多表关系
项目开发中，在进行数据库表结构设计时，会根据业务需求及业务模块之间的关系，分析并设计表结构名，由于业务之间相互关联，所以各个表结构之间也存在着各种联系，基本上分为三种:
- 一对多
- 多对多
- 一对一

#### 一对多
- 案例：部门与员工的关系
- 关系：一个部门对应多个员工，一个员工对应一个部门
- 实现：`在多的一方建立外键，指向一的一方的主键`

#### 多对多
- 案例：学生与课程的关系
- 关系：一个学生可以选修多门课程，一门课程也可以供多个学生选修
- 实现：`建立第三张中间表，中间表值扫包含两个外键，分别关联两方主键`


#### 一对一
- 案例：用户与用户详情的关系
- 关系：一对一关系，用于单表拆分，将一张表的基础字段放在在一张表中，其他详情字段放在另一张表中，以提升操作效率
- 实现：`在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的( unique )`


### 概述
- 概述：指从多张表中查询数据
- 笛卡尔积：笛卡儿积指子数学中，两个集合的所有组合情况(在多表查询时，需要消除无效的笛卡尔积)

### 分类
- 查询连接
    - 内连接：相当于查询A、B交集部分数据
    - 外连接：
        - 左外连接：查询左表所有数据，以及两张表交集部分数据
        - 右外连接：查询右表所有数据，以及两张表交集部分数据
    - 自连接：当前表与自身的连接查询，自连接必须使用表别名
- 子查询

#### 内连接

查询两张表交集的部分

```sql
#隐式内连接
select 字段列表 from 表1, 表2 where 条件...;

#显式内连接
select 字段列表 from 表1 [inner] join 表2 on 条件...;
```

#### 外连接

```sql
# 两个写法可以互换
#左外连接, 相当于查询左表(表1)的所有数据，包含交集部分
select 字段列表 from 表1 left [outer] join 表2 on 条件...;

#右外连接, 相当于查询右表(表2)的所有数据，包含交集部分
select 字段列表 from 表1 right [outer] join 表2 on 条件...;
```

#### 自连接
```sql
select 字段列表框 from 表A 别名A join 表A 别名B on 条件...;
```

#### 联合查询
对于union查询，就是把多次查询的结果合并起来，形成一个新的查询结果集。
```sql
select 字段列表 from 表A...;

union[ALL]

select 字段列表 from 表B...;
```

#### 子查询
sql 语句中嵌套select 语句，称为嵌套查询，又称为子查询

```sql
select * from table1 where column1 = (select column1 from table2);
```

<br>子查询外部的语句可以是insert / update / delete / select 的任何一个

<br>
根据子查询结果的不同，分为:
- 标量子查询(子查询结果为单个值)
- 列子查询(查询结果为一列)
- 行子查询(查询结果为一行)
- 表子查询(查询结果为多行多列)


##### 标量子查询
子查询返回的结果是单个值(数字、字符串、日期等), 最简单的形式，这种子查询成为标量子查询

常用的操作符：`= , <> , > , >= , < , <=`


##### 列子查询
子查询返回的结果是一列(可以是多行)，这种子查询称为列子查询

常见的操作符：`in , not in , any , some , all`

操作符|描述
--|--
in|在指定的集合范围之内，多选一
not in|不在指定的集合范围之内
any|子查询返回列表中，有任意一个满足即可
some|与any等同，使用some的地方都可以使用any
all|子查询返回列表的所有值都必须满足

<br>
例：

```sql
select * from emp where salary > some (select salary from emp where dept_id  = (select id from dept where name = '研发部'));
```

<br>

##### 行子查询
返回的结果是一行(可以是多列)，这种子查询称为行子查询

<br>
例：

```sql
select * from emp where (salary, managerid) = (select salary, managerid from emp where name = 'xxx')
```

<br>

##### 多表查询

即将子查询的结果表作为表，进行进一步的查询

<br>
例：

```sql
select * from emp where (job, salary) in (select job, salary from emp where name = 'a' or name = 'b');


select e.*, d.* from (select * from emp where entrydate > '2006-01-01') e left join dept d on e.dept_id = d.id;
```

## 事务
&emsp;&emsp;事务 是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么`同时成功，要么同时失败。`


### 特性
- 原子性：事务是不可分割的最小操作单元，要么全部成功，要么全部失败
- 一致性：事务完成时，必须使所有的数据都保持一致状态
- 隔离性：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行。
- 持久性：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。

### 操作

1. 方式一

```sql
#查看/设置事务提交方式 1 表示自动提交，0 表示手动提交
select @@autocommit;
set @@autocommit = 0;


#提交事务
commit;


#回滚事务
rollback;
```

2. 方式二

```sql
#开启事务
start transaction; # or begin

#提交事务
commit;


#回滚事务
rollback;
```



### 并发事务问题

问题|描述
--|--
脏读|一个事务读到另外一个事务还没有提交的数据
不可重复读|一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。
幻读|一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了一个幻影

### 事务隔离级别

隔离级别|脏读|不可重复读|幻读
--|:-:|:-:|:-:|
Read uncommitted|❎|❎|❎|
Read committed|✅|❎|❎|
Repeatable Read(mysql默认)|✅|✅|❎|
Serializable|✅|✅|✅|

> serializable 通过使所有事务串行来达到规避并发问题，即等待第一个操作同一字段的事件结束后才能操作下一个，性能会下降


```sql
# 查看事务隔离级别
select @@transaction_isolation;

# 设置事务隔离级别
set [session|global] transaction isolation level {read uncommited | read committed | Repeatable read | serializable}
```

> Serialiazble 虽然安全性最高，但是性能最差。同理Read uncommitted 虽然安全性低，但是性能最高

# 其他

## 退出和关闭
1. 退出MySQL(命令行)

```sql
quit;
exit;
```

2. 关闭Mysql(服务)

```sql
shutdown;
```
3. 重启mysql服务(shell)

```shell
service mysqld restart 
```


<Vssue :title="$title" />
