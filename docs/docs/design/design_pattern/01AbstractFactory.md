# 抽象工厂
### 综述
#### 定义
提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类
#### 描述
 - 使用的是对象
 - 负责创建对象，通过对象的组合
 - 提供一个用来创建一个产品家族的抽象类型，这个类型的子类定义了产品被产生的方法。要想使用这个工厂，必须先实例化它，然后将它传人一些针对抽象类型所写的代码中。所以，和工厂方法一样，我可以把客户从所使用的实际具体产品中解耦
 - 另一个优点是可以把一群相关的产品集合起来
 - 可以使用工厂方法来实现你的具体工厂

#### 缺点

 - 如果加入新产品就必须改变接口

#### 用途
当你需要创建产品家族和想让制造的相关产品集合起来时，你可以使用我
#### 类图
![这里写图片描述](https://img-blog.csdnimg.cn/img_convert/366a12a8c06e6bc8054ba093222271a8.png)
### 示例
#### 创建抽象工厂

```
public interface PizzaIngredientFactory
{
    Dough CreateDough();
    Sauce CreateSauce();
    Cheese CreateCheese();
    Veggie[] CreateVeggies();
    Pepperoni CreatePepperoni();
    Clams CreateClam();
}
```
#### 具体子类

```
public class NYPizzaIngredientFactory : PizzaIngredientFactory
{
    public Cheese CreateCheese()
    {
        return new ReggianoCheese();
    }

    public Clams CreateClam()
    {
        return new FreshClams();
    }

    public Dough CreateDough()
    {
        return new ThinCrustDough();
    }

    public Pepperoni CreatePepperoni()
    {
        return new SlicedPepperoni();
    }

    public Sauce CreateSauce()
    {
        return new MarinaraSauce();
    }

    public Veggie[] CreateVeggies()
    {
        Veggie[] veggies = { new Garlic(), new Onion() };
        return veggies;
    }
}
```
#### 产品

```
public interface Dough
{

}
```

```
public class ThinCrustDough : Dough
{
    public ThinCrustDough()
    {
        Console.WriteLine("ThinCrustDough");
    }
}
```
## 结果

```
PizzaStore nyPizzaStore = new NYStylePizzaStore();
Pizza pizza = nyPizzaStore.OrderPizza("Cheese");
```

## 输出

```
准备 纽约披萨
ThinCrustDough
MarinaraSauce
ReggianoCheese
350度烤25分钟
将比萨饼切成对角片
将披萨装在披萨盒里
```





















抽象工厂类图.png