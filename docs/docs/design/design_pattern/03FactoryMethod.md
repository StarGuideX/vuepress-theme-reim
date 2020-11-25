# 工厂方法——创建对象延迟到子类

> 定义了一个创建对象的接口，但由于子类决定要实例化的是哪一个。Factory Method使一个类的实例化推迟到子类

## 适用性

- 当一个类不知道它所必须创建的对象的类的时候
- 当一个类希望由它的子类来指定它所创建的对象的时候
- 当类创建对象的职责委托给多个帮助子类的某一个，并且你希望将哪一个帮助子类是代理者这一信息局部化的时候

## UML

<img :src="$withBase('/design/design_pattern/03FactoryMethod.png')" alt="工厂方法UML"/>

## 实现

**抽象工厂PhoneFactory：** 我们需要生产不同品牌的手机。定义一个抽象工厂，让子类实现此方法制造产品。通常会包含依赖于抽象产品的代码，而这些抽象产品由子类制造，抽象工厂不需要真的知道在制造哪种具体产品。

```c#
public abstract class PhoneFactory
{
    protected abstract Phone CreatePhone(string type);
}
```

**具体子类HuaWeiPhoneFactory：**

```c#
public class HuaWeiPhoneFactory : PhoneFactory
{
    protected override Phone CreatePhone(string type)
    {
        Phone phone = null;
        switch (type)
        {
            case "P30":
                phone = new HuaWeiP30Phone();
                break;
            case "P40":
                phone = new HuaWeiP30Phone();
                break;
            default:
                break;
        }
        return phone;
    }
}
```

## 优点

不需要使用创建对象的方法来实例化对象。

## 缺点

不能通过继承来改变创建方法的行为。

## 相关模式

Abstract Factory经常用工厂方法来实现。

工厂方法通常在Template Methods中被调用。