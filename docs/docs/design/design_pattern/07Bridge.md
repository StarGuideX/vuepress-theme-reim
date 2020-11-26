# 原型模式——克隆对象

> 将抽象部分与它的实现部分分离，使它们都可以独立地变化。

## 适用性

- 你不希望在抽象和它的实现部分之间有一个固定的绑定关系。例如这种情况可能是因为，在程序运行时刻实现部分应可以被选择或者切换
- 类的抽象以及它的实现都应该可以通过子类的方法加以扩充。这是Bridge模式使你可以对不同的抽象接口和实现部分进行组合，并分别对它们进行扩充
- 对一个抽象的实现部分的修改应对客户不产生影响，即客户的代码不必重新编译
- 有许多类要生成。这样一种类层次结构说明你必须将一个对象分解成两个部分。
- 你想在多个对象间共享实现（可能使用引用计数），但同时要求客户并不知道这一点。







## 结构

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

 - 将实现予以解耦，让它和界面之间不再永久绑定
- 抽象和实现可以独立扩展，不会影响到对方
- 对于“具体的抽象类”所做的改变，不会影响到客户

## 用途

- 适合使用在需要跨越多个平台的图形和窗口系统上
- 当需要用不同的方式改变接口和实现时，你会发现桥接模式很好用

## 缺点

增加了复杂度

## 相关模式

Prototype和Abstract Factory模式在某些方面是相互竞争的。但是他们也可以一起使用。Abstract Factory可以存储一个被克隆的原型的集合，并且返回产品对象

大量使用Composite和Decorator模式的设计通常也可从Prototype模式处获益



@[toc]
# 桥接模式（Bridge Pattern）
## 综述
### 定义
使用桥接模式不只改变你的实现，也改变你的抽象。

### 类图
![这里写图片描述](https://img-blog.csdnimg.cn/img_convert/7bd56b15a4bfd29d381548a761493bc4.png)

有两个层次结构，其中一个是遥控器（RemoteControl），另一个是平台特定的电视实现。有了桥接的存在，你就可以独立地改变这两个层次。
### 优点

 - 将实现予以解耦，让它和界面之间不再永久绑定
 - 抽象和实现可以独立扩展，不会影响到对方
 - 对于“具体的抽象类”所做的改变，不会影响到客户

### 用途

 - 适合使用在需要跨越多个平台的图形和窗口系统上
 - 当需要用不同的方式改变接口和实现时，你会发现桥接模式很好用
 - 桥接模式的缺点是增加了复杂度