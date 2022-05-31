---
title: SpringBoot自动版本控制原理
date: 2022-04-28 15:38:44
permalink: /pages/741571/
categories:
  - language
  - java
  - Spring
tags:
  - 
---
# 自动配置原理

## 依赖管理
### 父项目做依赖管理

```xml
<!--依赖管理-->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.6.7</version>
</parent>

<!--它的父项目-->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>2.6.7</version>
</parent>
<!--在这个项目中几乎声明了所有开发常用的依赖的版本号，自动版本仲裁机制-->

<!--<properties>    //可以使用默认的方式重写想要依赖的版本号
    <xxxx.version>x.xx.x</xxxx.version>
</properties>-->
```

> 自动版本仲裁，引入依赖默认都可以不写版本，引入非仲裁的jar, 要写版本号。


### 开发导入starter场景启动器

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

1. `spring-boot-starter-*:` *表示某种场景
2. 只要引入了starter, 这个场景需要的所有常规依赖都会自动引入
3. SpringBoot所有的[场景](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.starters)
4. 三方的简化开发的场景启动器 `*-spring-boot-starter`
5. 所有场景启动器最底层的依赖

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
  <version>2.6.7</version>
  <scope>compile</scope>
</dependency>
<dependency>
```

## 自动配置

- 自动配置好Tomcat
    - 引入Tomcat依赖
    - 配置Tomcat 
    ```xml
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>
      <version>2.6.7</version>
      <scope>compile</scope>
    </dependency>
    ```

- 自动配置好SpringMVC
    - 引入SpringMVC全套组件
    - 自动配好SpringMVC常用组件(功能)

- 自动配好Web常见功能，如字符编码问题 
    - SpringBoot帮我们配置好了所有web开发的常见场景
- 默认的包结构
    - 主程序所在包及其下面的所有子包里面的组件都会被默认扫描进来
    - 无需以前的包扫描配置
    - 改变扫描路径


    ```java
    @SpringBootApplication(scanBasePackages="com.spring")


    //or 

    @SpringBootConfiguration
    @EnableAutoConfiguration
    @ComponentScan("com.spring")      //指定扫描路径
    ```




## 配置类的实现

SpringBoot 推荐使用java配置完全代替XML配置，java配置通过`@Configration` 和 `@Bean` 注解实现的。二者作用如下：
- `@Confidration` 注解：声明当前类是一个配置类，相当于Spring中的一个XML文件
- `@Bean` 注解：作用在方法上，声明当前方法的返回值是一个 Bean

```java
package com.example.demo.component;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
 
@Configuration
public class MyConfigration {
    @Bean
    public String hello() {
        return "welcome to hangge.com";
    }
}
```


例：<br>
这里创建了一个自定义的配置类MyConfigration
- 使用`@Configration`注解将该类声明为一个配置类
- 在hello()的方法上添加`@Bean`注解则会往Spring容器中添加一个名为hello的Bean，该Bean即为方法的返回值


在一个controller 中获取并使用这个Bean, 代码如下：

```java
package com.example.demo.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class HelloController {
 
    @Autowired
    String hello;
 
    @GetMapping("/test")
    public String test() {
        return hello;
    }
}
```

### @Bean 注解详解

1. 使用说明

- `@Bean` 注解作用在方法上
- `@Bean` 指示一个方法返回一个Spring容器管理的Bean
- `@Bean` 方法名与返回类名一致，首字母小写
- `@Bean` 一般和`@Component` 或者 `@Configuration`一起使用
- `@Bean` 注解默认作用域为单例singleton作用域，可通过`@Scope("prototype")`设置为原型作用域

<Vssue :title="$title" />
