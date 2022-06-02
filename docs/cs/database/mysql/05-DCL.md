
# DCL
用来管理数据库用户，控制数据库的访问权限

## 用户管理

```sql
查询用户
use mysql;
select * from user;

创建用户
create user '用户'@'主机名' identified by '密码';

修改用户密码
alter user '用户名'@'主机名' indentified with mysql_native_password by '新密码';

 删除密码
drop user '用户名'@'主机名';
```

## 权限管理
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
查询权限
show grants for '用户'@'主机名'

授予权限
grant 权限列表 on 数据库名 to '用户名'@'主机名'

撤销权限
revoke 权限列表 on 数据库名.表名 from '用户名'@'主机名' 
```
