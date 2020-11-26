# 适配器——转换
> 将一个类的接口转换成客户期望的另一个接口。Adapter模式使得原本由于借口不兼容而不能一起工作的那些类可以一起工作

## 适用性

- 你想使用一个已经存在的类，而它的接口不符合你的需求
- 你想创建一个可以复用的类，该类可以与其他不相关的类或不可预见的类（即那些接口可能不一定兼容的类）协同工作。
- （仅适用于对象Adapter）你想使用一些已经存在的子类，但是不可能对每一个都进行子类化以匹配它们的接口。对象适配器可以适配它的父类接口。

## UML
**对象适配器**
<img :src="$withBase('/design/design_pattern/06ObjectAdapterUML.png')" />

**类适配器**
<img :src="$withBase('/design/design_pattern/06ClassAdapterUML.png')" />


## 实现

将两项插头适配为三项插头。三项插头为Target，两项插头为Adaptee

**对象适配器（实现接口）**

```c#
public interface TwoPhasePlug
{
    void ToPowerUseTwoPhasePlug();
}

public interface ThreePhasePlug
{
    void ToPowerUseThreePhasePlug();
}
```

```c#
public class TwoPhasePlugAdapter : ThreePhasePlug
{
    TwoPhasePlug twoPhasePlug;

    public TwoPhasePlugAdapter(TwoPhasePlug two)
    {
        twoPhasePlug = two;
    }

    public void ToPowerUseThreePhasePlug()
    {
        twoPhasePlug.ToPowerUseTwoPhasePlug();
    }
}
```

**类适配器（继承和实现接口）**

```c#
public interface ThreePhasePlug
{
    void ToPowerUseThreePhasePlug();
}

public abstract class TwoPhasePlug
{
    public void ToPowerUseTwoPhasePlug() 
    {
        Console.WriteLine("Use TwoPhasePlug");
    }
}
```

```c#
public class PlugAdapter : TwoPhasePlug, ThreePhasePlug
{
    public void ToPowerUseThreePhasePlug()
    {
        base.ToPowerUseTwoPhasePlug();
    }
}
```

## 对象和类适配器的区别

**对象适配器：**

- 使用组合，可以适配某个类，和它的子类
- 将工作委托给被适配者进行，更有弹性
- 可以和被适配这及子类搭配工作

```
public class TwoPhasePlugAdapter : ThreePhasePlug{}
```

适配器实现了三项的接口，但它收到方法调用时，会委托给两项

**类适配器**

- 使用继承，不需要重新实现整个被适配者。必要的时候，可以覆盖被适配者的行为
- 更有效率，仅仅需要一个类适配器，不需要一个适配器和一个被适配者
- 子类或许加入新的行为，那么继承更为合适

```
public class PlugAdapter : TwoPhasePlug, ThreePhasePlug{}
```

通过扩展两个类（两项和三项）适配器使得二项可以相应对三项的请求

## 相关模式

Bridge的结构与对象适配器类似，但是Bridge模式的出发点不同：Bridge目的是将接口部分和实现部分分离，从而对它们可以较为容易也相对独立的加以改变。而Adapter则意味着改变一个已有对象的接口

Decorator模式增强了其他对象的功能而同时又不改变它的接口。因此Decorator对应用程序的透明性比适配器要好。结果是Decorator支持递归组合，而纯粹使用适配器是不可能实现这一点的

Proxy在不改变它的接口的条件下，为另一个对象定义了一个代理