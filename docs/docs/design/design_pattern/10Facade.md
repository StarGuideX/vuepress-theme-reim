# 外观模式

> 为子系统中的一组接口提供一个一致的界面，Facade模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。

## 适用性

- 当你要为一个复杂子系统提供一个简单接口时。子系统往往因为不断演化而变得越来越复杂。大多数模式使用时都会产生更多更小的类。这使得子系统更具可重用性，也更容易对子系统进行定制，但这也给那些不需要定制子系统的用户带来一些使用上的困难。Facade可以提供一个简单的缺省视图，这一视图对大多数用户来说已经足够，而那些需要更多的可定制性的用户可以越过Facade层
- 客户程序与抽象类的是实现部分之间存在着很大的依赖性。引入Facade将这个子系统与客户以及其他的子系统分离，可以提高子系统的独立性与可移植性
- 当你需要构建一个层次结构的子系统，使用Facade模式定义子系统中每层的入口点。如果子系统之间是相互依赖的，你可以让它们仅通过facade进行通讯，从而简化了它们之间的依赖关系

## 结构

<img :src="$withBase('/design/design_pattern/07Bridge.png')" alt="原型UML"/>

Facade（）

- 知道哪些子系统类负责处理请求
- 将客户的请求代理给适当的子系统对象

**RefinedAbstraction（ConcreteControl）**

- 实现子系统的功能
- 处理由Facade对象指派的任务

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









## 外观模式
### 综述
#### 定义
提供了一个统一的接口，用来访问子系统中的一群接口。外观定义了一个高层接口，让子系统更容易使用。
#### 优势

 - 外观模式提供简化接口的同时，依然将系统完整的功能暴露出来。以供使用
 - 外观模式可以附加“聪明”的功能，让子系统更方便
 - 每个子系统可以定义多个外观
 - 外观模式也允许你将客户实现从任何字系统中解耦


### 外观模式示例
```
public class HomeTheaterFacade
{
    Amplifier _amp;
    Tuner _tuner;
    DvdPlayer _dvd;
    CdPlayer _cd;
    Projector _projector;
    TheaterLights _lights;
    Screen _screen;
    PopcornPopper _popper;

    public HomeTheaterFacade(Amplifier amp, Tuner tuner,
        DvdPlayer dvd, CdPlayer cd, Projector projector,
        TheaterLights lights, Screen screen, PopcornPopper popper)
    {
        this._amp = amp;
        this._tuner = tuner;
        this._dvd = dvd;
        this._cd = cd;
        this._projector = projector;
        this._lights = lights;
        this._screen = screen;
        this._popper = popper;
    }

    public void WacthMovie(String movie)
    {
        Console.WriteLine("开始观看电影 " + movie + "...");
        _popper.On();
        _popper.Pop();
        _lights.Dim(10);
        _screen.Dowm();
        _projector.On();
        _projector.WideScreenMode();
        _amp.On();
        _amp.SetDvd(_dvd);
        _amp.SetSurroundSound();
        _amp.SetVolume(5);
        _dvd.On();
        _dvd.Play(movie);
    }

    public void EndMovie() {
        Console.WriteLine("结束电影...");
        _popper.Off();
        _lights.On();
        _screen.Up();
        _projector.Off();
        _amp.Off();
        _dvd.Stop();
        _dvd.Eject();
        _dvd.Off();
    }
}
```