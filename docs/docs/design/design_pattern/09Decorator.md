# 桥接模式——抽象与实现分离

> 动态地给一个对象添加一些额外的职责。就增加功能来说， Decorator模式相比生成子类更为灵活。

## 适用性

- 在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责
- 处理那些可以撤销的职责
- 当不能采用生成子类的方法进行扩充时。一种情况是，可能有大量独立的扩展，为支持每一种组合将产生大量的子类，使得子类数目承爆炸式增长。另一种情况可能是因为类定义被隐藏，或类定义不能用于生成子类

## 结构

<img :src="$withBase('/design/design_pattern/09Decorato.png')" />

**Component（Beverage）**

- 定义一个对象接口，可以给这些对象动态地添加职责。

**ConcreteComponent(Water)**

- 定义一个对象，可以给这个对象添加一些职责。

**Decorator（CondimentDecorate）**

- 维持一个指向Component对象的指针，并定义一个与Component接口一致的接口。

**ConcreteDecorator(Americano，Milk)**

- 向组件添加职责。



## 实现

```c#
public interface Beverage
{
    public double Cost();
}
```

```c#
public abstract class CondimentDecorate : Beverage
{
    private Beverage _beverage;
    public CondimentDecorate(Beverage beverage) 
    {
        _beverage = beverage;
    }
    public virtual double Cost()
    {
        return _beverage.Cost();
    }
}
```

```c#
public class Water : Beverage
{
    public double Cost()
    {
        return 0d;
    }
}
```

```c#
public class Milk : CondimentDecorate
{
    public Milk(Beverage beverage) : base(beverage)
    {

    }

    public double AddMilk()
    {
        return 5d;
    }

    public override double Cost()
    {
        return base.Cost() + AddMilk();
    }
}
```

```c#
public class Americano : CondimentDecorate
{
    public Americano(Beverage beverage) : base(beverage)
    {

    }
    public double AddCoffeeCherry()
    {
        return 10d;
    }

    public override double Cost()
    {
        return base.Cost() + AddCoffeeCherry();
    }
}
```
## 相关模式

Adapter模式：Decorator模式不同于Adapter模式，因为装饰仅改变对象的职责而不改变它的接口；适配器讲给对象一个全新的接口。

Composite模式：可以将装饰视为一个退化的、仅有一个组件的组合。然后，装饰仅给对象添加一些额外的职责——它的目的不在于对象聚集。

Strategy模式：用一个装饰你可以改变对象的外表；而Strategy模式使得你可以改变对象的内核。这是改变对象的两种途径。