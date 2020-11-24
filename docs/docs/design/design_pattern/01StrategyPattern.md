# 策略模式

### 定义
策略模式定义了算法族，分别封装起来，让他们之间可以互相替换，此模式让算法的变化独立于使用算法的客户。

## 设计鸭子的行为
设计原则：针对接口编程，而不是针对实现编程。
```
// 所有飞行行为类必须实现的接口
public interface FlyBehavior
{
    void Fly();
}

// 所有叫的行为类必须实现的接口
public interface QuackBehavior
{
    void Quack();
}
```
**实现鸭子的行为**

```
// 是叫的行为类的实现，给会叫的鸭子用的
public class Quack : QuackBehavior
{
    void QuackBehavior.Quack()
    {
        Console.WriteLine("鸭子叫！");
    }
}

// 是飞行行为的实现，给会飞的鸭子使用
public class FlyWithWings : FlyBehavior
{
    public void Fly()
    {
        Console.WriteLine("我在飞！");
    }
}

// 是飞行行为的实现，给不会飞的鸭子用的
public class FlyNoWay : FlyBehavior
{
    public void Fly()
    {
        Console.WriteLine("我不会飞！");
    }
}
```
## 整合鸭子的行为

```
public abstract class Duck
{
    //为行为接口声明两个引用变量，所有鸭子类都继承它们。
    protected FlyBehavior flyBehavior;
    protected QuackBehavior quackBehavior;

    public Duck()
    {
    }

    //委托给行为类，运行时改变行为，调用
    public void SetFlyBehavior(FlyBehavior fb) {
       flyBehavior = fb;
    }

    //委托给行为类，运行时改变行为，调用
    public void SetQuackBehavior(QuackBehavior qb)
    {
        quackBehavior = qb;
    }
    public abstract void Display();

    // 叫
    public void PerformQuack()
    {
        quackBehavior.Quack();
    }
    //飞
    public void PerformFly()
    {
        flyBehavior.Fly();
    }

    public void Swim() {
        Console.WriteLine("All ducks float,even decoys!");
    }
}
```

## 动态设定行为

```
protected FlyBehavior flyBehavior;
protected QuackBehavior quackBehavior;

//委托给行为类，运行时改变行为，调用
public void SetFlyBehavior(FlyBehavior fb) {
    flyBehavior = fb;
}

//委托给行为类，运行时改变行为，调用
public void SetQuackBehavior(QuackBehavior qb)
{
    quackBehavior = qb;
}
```
## 结果

```
class Program
{
    static void Main(string[] args)
    {
        Duck mallardDuck = new MallardDuck();
        mallardDuck.PerformFly();
        mallardDuck.PerformQuack();
        mallardDuck.SetFlyBehavior(new FlyWithWings());
        mallardDuck.SetQuackBehavior(new Quack());
        mallardDuck.PerformFly();
        mallardDuck.PerformQuack();
        Console.ReadLine();
    }
}
```
## 输出
```
我不会飞！  //初始设定
鸭子叫！	//初始设定
我在飞！ 	//动态设定行为
鸭子叫！	//动态设定行为
```