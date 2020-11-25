# 抽象工厂——我的家族包含很多人
> 提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类

## 适用性

- 一个系统要独立于他的创建、组合和表示时
- 一个系统要由多个产品系列中的一个配置时
- 当你要强调一系列相关的产品对象的设计以便进行联合使用时
- 当你提供一个产品类库，而只想显示它们的接口而不是实现时

## UML

<img :src="$withBase('/design/design_pattern/01abstractfactoryUML.png')" alt="抽象工厂UML"/>

## 实现

**PhoneSeriesFactory**

一台手机需要各种部件（如Cpu、RAM、相机、操作系统等组成）

```c#
public abstract class PhoneSeriesFactory
{
    public abstract Cpu CreateCpu();
    public abstract Camera CreateCamera();
    public abstract RAM CreateRAM();
    public abstract OperatingSystem CreateOperatingSystem();
}
```

**具体子类ApplePhoneSeriesFactory**

Camera、Cpu、OperatingSystem、RAM都是产品，而这些负责在抽象工厂创建产品的子类（ApplePhoneSeriesFactory）通常是以Factory Method来实现的

每一个具体的子类都创建一个家族的产品

```c#
public class ApplePhoneSeriesFactory : PhoneSeriesFactory
{
    public override Camera CreateCamera()
    {
        return new SonyCamera();
    }

    public override Cpu CreateCpu()
    {
        return new IntelCpu();
    }

    public override OperatingSystem CreateOperatingSystem()
    {
        return new IOSOperatingSystem();
    }

    public override RAM CreateRAM()
    {
        return new SamSungRAM();
    }
}
```

## 优点

不需要使用创建对象的方法来实例化对象

## 用途

当你需要创建产品家族和想让制造的相关产品集合起来时

## 缺点

如果加入新产品就必须改变接口

## 相关模式

Abstract Factory类通常用工厂方法（Factory Method）实现，但它们也可以使用Prototype实现

一个具体的工厂通常是一个单例（Singleton）

#### 
