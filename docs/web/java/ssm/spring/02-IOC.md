# IOC 容器


## IOC 原理

### 什么是 IOC

IOC（Inversion of Control, 控制反转），是<mark>面向对象编程</mark>中的一种设计原则，可以用来降低计算机代码之间的<mark>耦合度</mark>。

通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体将其所依赖的对象的引用传递给它。也可以说，依赖被注入到对象中。


1. 控制反转，把对象创建和对象之间的调用过程，交给 Spring 进行管理
2. 使用 IOC 目的：为了耦合度降低
3. 做入门案例就是 IOC 实现

### IOC 底层原理


1. xml 解析
2. 工厂模式
3. 反射


<iframe frameborder="0" style="width:100%;height:453px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=IOCBaseTheory.drawio#R7Vttd6I4FP41nNP5UA4IgnwExdnZ3dmZM92Z2e43ClGZInFjrLq%2Ffu9NgoBgbaetta49PZVcktyXPLl5LlLN6k9X71k0m3ykCcm0jpGsNGugdTq9jgl%2FUbCWAtt2pGDM0kSKzFJwlf5LlNBQ0kWakHmtI6c04%2BmsLoxpnpOY12QRY3RZ7zaiWV3rLBqThuAqjrKm9Hua8EnhllvKfyHpeFJoNh1P3plGRWflyXwSJXRZEVmhZvUZpVxeTVd9kmHsirjIccMddzeGMZLzhwz47fv1t%2Bn13zH9evnDuQmzj5%2B%2B%2FHpp2so4vi48JgkEQDUp4xM6pnmUhaU0YHSRJwSnNaBV9vmd0hkITRD%2BIJyv1WpGC05BNOHTTN0Fi9n6LzVeNK6xoXeL5mBVvTlYq9aI5rxPM8qEpdZwaMAPyCG0M9SUpfktDlqlXMyuG66t2lKB5zmqXWrAxrrS%2BExYOiWcMCVrxlmFfk4XLCb3BVfhNWJjwu%2FppxCDga8oUKv4nlCwhq2hAyNZxNO7OjIjBfDxpp8a6jMWrSsdZjTN%2Bbwy82cUQIdVsePUjGqnApbreGr0N57U37ZqeIULaXHRqrheigSmH4NvqfIuyhYqbA2819G8nKScXM0isbBLSGl15O4Ewx1hnKzuXb4iJdbD4Knmsswumy6TamYp8kjbgleC%2BPgY2S0xcjJQGyTpXS1Wzj8LzFZB7WqsPsWI%2BSzKW4fcRPHtWIT6MpY72Ee78pSnUdY6ZT%2BL5gBX4%2BucsCvC7lJYEoiBu9EFzkp1dRNALOyuS1%2FVlb1TCtRdziXscLYZI7tmgsTn1d2tRoGsSLzg5OLdOVZ7Y3VAVQjiP8kc0yGXH0KRAPcw4hT2sQ6HBHaBpdtr8XndDqQKF0uPkqS2KDesZT3Oy9SIgjs4iYiVbjzQ6C2CAbwA5RUWMeeM3pKCyeY0xwiP0izbEkVZOs6R15IRzoAcI4XSxFfiaZokgpC3kZY6rXkG3uLVeYtpthAXr4W4uC%2FFWzaF1WNql61S4flKmU3jaaVMWbt4HVOr1y497XC1i%2Fumahen2zt8beEeX21hG8dWXPTOxcXpnOiSCJ3jdEQEVdf181KcSej%2FhYTa5rGxUO%2F4WIDp1INkuc0g2fZBaUCxTMfMA4ZRzKmI4%2Fl8uz%2BpzhY3WRoLJUDqYxU%2F9XyrfIx1DuQREYUrztJ8DDPECPlvYh8WTyGFSAu7WmBqXqiFjgZFgu%2BiBC6CPnY8fFCwREbjNlVyOZM1Gol6uWXyIfya%2BgryadhDH3wL%2FQGvPKOiT879ZtnASSK0yMWx%2BpTYFFJ9RNkf0ZRclOCVD2TfFi47uhZ6uKU8H9EZDLWe3GRwMRD7z9B6tpD0NC8QkkALfLzwh1rgiVGm5pt7oPymqe5JgpsRvmCo5KI4Kt8VUNdzsvyQw1Gax%2BT8PcO5xHuw0adZ4pnuVvXS8hBzUwYepMQz294i2X8WGIbntZ8FTjTF0EnIEoEgZUDRV35JXBkpR%2BQ385k89%2BQhWR0S06mekCnVSy6uRrVohThIxVtdSoXtx8srV7adTreGjU5LZWu1YcN%2BMWx0mtgIgXX28Te0taCH5z0wUH%2Bg%2BV30BJkpkICuOPJdLQC5oNyeI9iALY58RwuHSLx7%2FbbOTX7gIqWQ1GGbKBxhltj68kttlOdBSHfrrTS75QGR24IQ68UQYv1U9tjJJGvo8gVCCnSVmGljkIEr%2BsCtUOsJlAJCggfv9VMHjl1PLZb12sDp%2FOyx0w6cD5%2F6CiCQKhoHyr3lxL5TzvPacNpEHOC0hzkJb%2FWx6ukEOwr1oKUseoqNu6qyxrmq6jLcOo3kDZkYPEWTbMzE4NQOk2QSR4fALbDdxFnxkYqD3oB%2FsDnRLR8lb2Cfbd5OeIZ9tvUaSUt6tozn2WXQLN%2Bul1%2F6l%2F%2BiYIX%2FAQ%3D%3D"></iframe>



## IOC 接口 (BeanFactory)
1. IOC 思想基于 IOC 容器完成，IOC 容器底层就是对象工厂
2. Spring 提供 IOC 容器实现两种方式：（两个接口）
    - <mark>BeanFactory</mark>：IOC 容器使用基本实现，是 Spring 内部使用接口
        - 加载配置文件的时候，不会去创建对象，在获取对象（使用）才去创建对象
    - <mark>ApplicationContext</mark>：BeanFactory 接口的子接口，提供更多更强大的功能
        - 加载配置文件的时候，就会创建对象

3. ApplicationContext 实现类





![image](https://user-images.githubusercontent.com/94043894/172037940-2215e451-a841-4161-927c-3cd4355c4c32.png)

- FileSystemXmlApplicationContext 要写 xml 文件相对于系统下的类路径
- ClassPathXmlApplicatonContext 要写 xml 文件内部路径

:::warning
新版本 spring 配置文件默认扫描路径不再是 `src/`，而是 `src/main/resourses`
:::





## IOC 操作 Bean 管理
### 什么是 Bean 管理

Bean 管理指两个操作：
1. Spring 创建对象
2. Spring 注入属性

Bean 管理有两种方式实现：
- 基于 xml 配置文件方式实现
- 基于注解方式实现

### 基于 xml

#### 创建对象

1. 在 spring 配置文件中，使用 bean 标签，标签里面添加对应属性，就可以实现对象创建
2. 在 bean 标签的常见属性
    - id 属性：唯一标识（不能用特殊符号）
    - name 属性：标识（可以用特殊符号，很少使用这个属性）
    - class 属性：类全路径（包类路径）
3. Bean 管理创建对象时候，默认执行无参数构造方法完成对象创建


#### 注入属性

<mark>
DI:依赖注入，就是注入属性
</mark>

- 第一种注入方式：使用 set 方法进行注入
    1. 在类中设置 set 方法
    2. 在 spring 配置文件配置对象创建，配置属性注入



```xml
<!-- 1 配置对象创建-->
<!-- 2 set 方法注入属性-->
<bean id = "book" class="com.demo.test.User">
    <property name="money" value="1230"></property>
    <!-- name: 类里面属性名称 -->
    <!-- value: 向属性注入的值 -->
</bean>

```


- 有参数构造进行注入
    1. 创建类，定义属性，创建属性对应有参数构造方法
    2. 在 spring 配置文件中配置


```xml
<bean id="orders" class="com.demo.test.Orders">
    <constructor-arg name="What" value="w"></constructor-arg>
    <constructor-arg name="Test" value="t"></constructor-arg>
    <constructor-arg index="0" value="t"></constructor-arg>
    <!-- name 表示形参的名字，value 表示值， -->
    <!-- index 表示第几个参数 -->
</bean>
```

- p 名称空间注入
    1. 添加 p 名称空间在配置文件中
    2. 进行属性注入



```xml
<!-- 添加 p 命名空间 -->
<beans xmlns:p="http://www.springframework.org/schema/beans"
    <bean id="book" class="com.demo.test.Book" p:What="w" p:Test="t">
    </bean>
</beans>
```


:::tip
使用 p 名称空间注入，可以简化基于 xml 配置方式
:::

<br>

<mark>
注入其他类型属性（字面量）
</mark>

<br>

```xml
<!-- 空 -->
<property name="address">
    <null/>
</property>

<!-- 特殊符号要转义 -->
<!-- 把带特殊符号内容写进 CDATA -->
<property name="address">
    <value><![CDATA[<<what>>]]></value>
</property>
```


#### 注入属性-外部 bean

创建两个类 service 类和 test 类





### 基于注解

