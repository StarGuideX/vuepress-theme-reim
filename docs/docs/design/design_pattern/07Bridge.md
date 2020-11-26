# 桥接模式——抽象与实现分离

> 将抽象部分与它的实现部分分离，使它们都可以独立地变化。

## 适用性

- 你不希望在抽象和它的实现部分之间有一个固定的绑定关系。例如这种情况可能是因为，在程序运行时刻实现部分应可以被选择或者切换
- 类的抽象以及它的实现都应该可以通过子类的方法加以扩充。这是Bridge模式使你可以对不同的抽象接口和实现部分进行组合，并分别对它们进行扩充
- 对一个抽象的实现部分的修改应对客户不产生影响，即客户的代码不必重新编译
- 有许多类要生成。这样一种类层次结构说明你必须将一个对象分解成两个部分。
- 你想在多个对象间共享实现（可能使用引用计数），但同时要求客户并不知道这一点。

## 结构

<img :src="$withBase('/design/design_pattern/07Bridge.png')" alt="原型UML"/>

**Abstraction（RemoteControl）**

- 定义抽象类的接口
- 维护一个指向Implementor类型对象的指针

**RefinedAbstraction（ConcreteControl）**

- 扩充由Abstraction定义的接口

**Implementor（TV）**

- 定义实现类的接口，该接口不一定要与Abstraction的接口完全一致；事实上这两个接口可以完全不同。一般来讲，Implementor接口仅提供基本操作，而Abstraction则定义了基于这些基本操作的较高层次的操作。

**ConcreteImplement（SonyTV）**

- 实现Implementor接口并定义它的具体实现

## 实现

```c#
public abstract class RemoteControl
{
    protected TV _tv;
    
    public RemoteControl(TV tv)
    {
        _tv = tv;
    }
    public virtual void On()
    {
        _tv.On();
    }
    public virtual void Off()
    {
        _tv.Off();
    }
    public virtual void SetChannel(Channel channel)
    {
        _tv.TuneChannel(channel);
    }
}
```

```c#
public abstract class ConcreteControl : RemoteControl
{
    public ConcreteControl(TV tv) : base(tv) 
    {
    }

    public override void On()
    {
        _tv.On();
    }

    public override void Off()
    {
        _tv.Off();
    }

    public override void SetChannel(Channel channel)
    {
        _tv.TuneChannel(channel);
    }
    public abstract void NextChannel();
    public abstract void PreviousChannel();
}
```

```c#
public abstract class TV
{
    public abstract void On();
    public abstract void Off();
    public abstract void TuneChannel(Channel channel);
}
```

```c#
public class SonyTV : TV
{
    public override void Off()
    {
        Console.WriteLine("Excuting SonyTV Off");
    }

    public override void On()
    {
        Console.WriteLine("Excuting SonyTV On");
    }

    public override void TuneChannel(Channel channel)
    {
        Console.WriteLine("Excuting SonyTV TuneChannel,Channel:{0}", channel.Name);
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

 - 增加了复杂度

## 相关模式

Abstract Factory模式可以用来创建和配置一个特定的Bridge模式

Adapter模式用来帮助无关的类协同工作，它通常在系统设计完成后才会被使用。然而，Bridge模式则是在系统开始时就被使用，它使得抽象接口和实现部分可以独立进行改变