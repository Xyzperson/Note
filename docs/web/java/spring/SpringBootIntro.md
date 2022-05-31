---
title: SpringBootIntro
date: 2022-04-28 11:31:04
permalink: /pages/121422/
categories:
  - language
  - java
  - Spring
tags:
  - 
---
# SpringBoot Intro
SpringBoot 是集成了Spring 等等框架和技术栈的启动框架，它只需要配置少量的Spring configuration, 就可以帮助我们开发出独立的, 高质量的, 基于Spring 的应用, 并且可以把应用打包成jar 或者传统的war

最喜欢的[官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/index.html)

## Install
### System Requirements
SpringBoot Vesion 2.6.7

<strong>Base</strong>: Java 8+

<strong>Build</strong>:

Tools|Vesion
--|--
Maven|3.5+
Gradle|6.8.x, 6.9.x, 7.x


## Hello World
### 1. 新建maven工程
maven 没学过

#### pre
可以在总config文件里配制镜像, 和默认的jdk编译版本
```xml
<mirrors>
      <mirror>
        <id>nexus-aliyun</id>
        <mirrorOf>central</mirrorOf>
        <name>Nexus aliyun</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public</url>
      </mirror>
  </mirrors>
 
  <profiles>
         <profile>
              <id>jdk-1.8</id>
              <activation>
                <activeByDefault>true</activeByDefault>
                <jdk>1.8</jdk>
              </activation>
              <properties>
                <maven.compiler.source>1.8</maven.compiler.source>
                <maven.compiler.target>1.8</maven.compiler.target>
                <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
              </properties>
         </profile>
  </profiles>
```

### 配置POM
在新建的maven工程POM里, 加入SpringBoot starter
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>myproject</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.6.7</version>
    </parent>

    <!-- Additional lines to be added here... -->

</project>
```

引入依赖
```xml
<dependencies>
     <dependency>
         <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-starter-web</artifactId>
     </dependency>
 </dependencies>
```

run `mvn dependency:tree` or `Reload Maven Project`

然后需要使用的依赖就全部被导入了

#### 2. Coding
基础的目录结构

![image](https://user-images.githubusercontent.com/94043894/165685304-c308c96f-0650-41a3-9842-49a267275264.png)

1. `src/main/java`下放java class文件
2. `src/main/resources`下放配置文件
3. `target`下存放生成文件, 和打包好的文件
##### Main

在`MainApplication类`里(名字不唯一)，实现SpringApplication 的main方法

整个项目的都从这里开始，如果是web，直接运行main，就启动了，无需配置tomcat

```java
package com.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 主程序类
 * SpringBootApplication:这是一个Springboot应用
 */
@SpringBootApplication
public class MainApplication {

    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }
}
```

##### Controller(编写业务)

相当于Servlet中处理请求的类

```java
package com.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@ResponseBody
//@Controller
// @RestController该标签取代了上面俩
@RestController
public class HelloController {
        @RequestMapping("/hello")
        public String handle01(){
            return "Hello spring boot";
        }
}
```
> @Controller 和 @ResponseBody 注解, 第一个注解表示这是一个控制器, 第二个注解表示这个类中的方法或某方法的返回值是Responese body信息(一般都写在类外), 在Spring Mvc中可以使用@RestContronller来取带这两个注解 <br>
> @RequestMapping 表示把请求地址映射到这个方法上

## 测试程序
直接运行main方法

## 简化配置
在`resources/application.properties`中配置服务和应用的内容, 例：<br>
`server.port=8888`

## 简化部署
POM 中加入
```java
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <version>2.6.7</version> //与starter-parent的版本一样
        </plugin>
    </plugins>
</build>
```

> spring-boot-maven-plugin not found 是因为没有版本号，手动加上就可以了

最后在maven-->Lifecycle中选择打包方式, 再`Run Maven Build`, 创建jar包, 在目标服务器运行即可

> 使用 java -jar '/path/to/xxx.jar' 运行jar
<Vssue :title="$title" />
