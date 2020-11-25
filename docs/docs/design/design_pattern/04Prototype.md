# 原型模式——克隆对象

> 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象

## 适用性

- 当一个系统应该独立于它的产品创建、构成和表示时

- 当要实例化的类是在运行时刻指定时
- 为了避免创建一个与产品类层次平行的工厂类层次时
- 当一个类的实例只能有几个不同状态组合中的一种时。建立相应数目的原型并克隆它们可能比每次用合适的状态手工实例化该类更方便一些。

## UML

<img :src="$withBase('/design/design_pattern/04prototypeUML.png')" alt="原型UML"/>

## 实现

**实现ICloneable来实现原型拷贝**

```c#
public class Student : ICloneable
{
    private int Id;
    private string Name;
    private int Score;

    public object Clone()
    {
        return new Student() { 
            Id = this.Id, 
            Name = this.Name,
            Score = this.Score
        };
    }
}
```

**也可以自定义方法来实现原型拷贝**

```c#
public class Student
{
    private int Id;
    private string Name;
    private int Score;

    public Student Copy()
    {
        return new Student() { 
            Id = this.Id, 
            Name = this.Name,
            Score = this.Score
        };
    }
}
```

## 优点

 - 向客户隐藏制造新实例的复杂性
 - 提供让客户能够产生未知类型对象的选项
 - 在某些环境下，复制对象比创建新对象更有效

## 用途

在一个复杂的层次中，当系统必须从其中的许多类型创建新对象时，可以考虑原型

## 缺点

对象的复制有时相当复杂

## 相关模式

Prototype和Abstract Factory模式在某些方面是相互竞争的。但是他们也可以一起使用。Abstract Factory可以存储一个被克隆的原型的集合，并且返回产品对象

大量使用Composite和Decorator模式的设计通常也可从Prototype模式处获益



