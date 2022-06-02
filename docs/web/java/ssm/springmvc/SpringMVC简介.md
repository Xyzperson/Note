# SpringMVC简介

## 什么是MVC
MVC是一种软件架构思想，将软件按照模型、视图、控制器来划分

M: Model，模型层，指工程文件中的JavaBean，作用是处理数据

JavaBean分为两类:
- 一类称为实体类Bean：专门存储业务数据的，如Student、User等
- 一类称为业务处理Bean：指 Service 或 Dao 对象，专门用于处理业务逻辑和数据访问

V: View，视图层，指工程中的html或jsp等页面，作用是与用户进行交互，展示数据

C：Controller，控制层，指工程中的servlet，作用是接受请求和响应浏览器

MVC的工作流程:
用户通过视图层发送请求到服务器，在服务器中请求被Controller接收，Controller调用相应的Model层处理请求，处理完毕将结果返回到Controller，Controller再根据请求处理的结果找到相应的View视图，渲染数据后最终响应给浏览器


## 什么是SpringMVC
SpringMVC 是 Spring 的一个后序产品，是Spring的一个子项目

SpringMVC 是 Spring 为表述层开发提供的一整套完备的解决方案。在表述层框架历经Strust、WebWork、Strust2等诸多产品的历代更迭后，目前业界普遍选择了SpringMVC作为Java EE 项目表述层开发的<mark>首选方案</mark>
