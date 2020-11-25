# 建造者模式——组装成什么对象就是什么对象

> 将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示

## 适用性

- 当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时。

- 当构造过程必须允许被构造的对象有不同的表示时。

## UML

<img :src="$withBase('/design/design_pattern/02builderUML.png')" alt="建造者UML"/>

## 实现

**如果我们需要柠檬茶**

```c#
DrinkMaker drinkMaker = new TeaDrinkMaker();

TeaDrink teaDrink = drinkMaker
    .AddLemon()
    .AddTea()
    .GetDrink();
```

**如果我们需要蜂蜜柠檬茶**

```c#
DrinkMaker drinkMaker = new TeaDrinkMaker();

TeaDrink teaDrink = drinkMaker
    .AddHoney()
    .AddLemon()
    .AddTea()
    .GetDrink();
```

## 优点

 - 将一个复杂对象的创建过程封装起来
 - 允许对象通过多个步骤来创建，并且可以改变过程（这和只有一个步骤的工厂模式不同）
 - 向客户隐藏产品内部的表现
 - 产品的实现可以被替换，因为客户只看到一个抽象的接口

## 用途

经常被用来创建组合结构

## 缺点

与工厂模式相比，采用生成器模式创建对象的客户，需要具备更多的领域知识

## 相关模式

Abstract Factory和Builder相似，因为它也可以创建复杂对象。主要的区别是Builder模式着重一步步构造一个复杂对象。而Abstract Factory着重于多个系列的产品对象（简单或是复杂的）。Builder在最后一步返回产品。而对于Abstract Factory来说，产品是立即返回的。

Composite通常是用Builder生成的。



