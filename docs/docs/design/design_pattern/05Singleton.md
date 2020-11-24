# 单例模式——独一无二
> 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

## 适用性

- 当类只能有一个实例而且客户可以从一个众所周知的访问点访问它时

- 当这个唯一实例应该是通过子类化可扩展的，并且客户应该无需更改代码就能使用一个扩展的实例时

## UML

<img :src="$withBase('/design/design_pattern/04prototypeUML.png')" alt="原型UML"/>

## 实现

**单例**

```c#
public class Singleton
{
    private static Singleton uniqueInstance;
    private Singleton() { }

    public static Singleton GetInstance() 
    {
        if (uniqueInstance == null)
            uniqueInstance = new Singleton();

        return uniqueInstance;
    }
}
```

**处理多线程**

```c#
public class Singleton
{
    private static Singleton uniqueInstance;
    private static object Singleton_Lock = new object(); 
    private Singleton() { }
    
    public static Singleton GetInstance() 
    {
        lock (Singleton_Lock)
        {
            if (uniqueInstance == null)
                uniqueInstance = new Singleton();
        }
        return uniqueInstance;
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











### 定义

确保一个类只有一个实例，并提供一个全局访问点

### 应用范围
如数据库连接、线程池、缓存、对话框、处理偏好设置、注册表的对象、日志对象、充当打印机、显卡等设备的驱动程序对象

### 注意事项
类的单例（所有的方法和变量都放在一个类上）有可能造成混乱，对象的单例（以对象区分单例的类）比较保险。

### 多Classloader（JAVA可能）
如果有两个以上的Classloader，不同的Classloader可能会加载同一个类。
如果这样的事情发生在单例上，就会产生多个单例并存的现象。
**解决办法：**
自行制定Classloader，并指定同一个Classloader。
### 类图
![这里写图片描述](https://img-blog.csdn.net/20180426110800272?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1N0YXJfSW5vcmk=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 要点

 - 单例模式确保程序一个类对多只有一个实例
 - 单例模式也是提供访问这个实例的全局点
 - 实现单例模式需要私有的构造器、一个静态方法和一个静态变量
 - 确定在性能和资源上的限制，然后小心地选择适当的方案来实现单例，以解决多线程的问题
 - 你如果使用多个加载器，可能导致单例失效而产生多个实例

## 示例
### 巧克力工厂
```
public class ChocolateBoiler
{
    private bool _empty;
    private bool _boiled;
    private static ChocolateBoiler _ChocolateBoiler;

    public static ChocolateBoiler GetInstance()
    {
        if (_ChocolateBoiler == null)
        {
            _ChocolateBoiler = new ChocolateBoiler();
        }
        return _ChocolateBoiler;
    }

    //开始，锅炉是空的
    private ChocolateBoiler()
    {
        _empty = true;
        _boiled = true;
    }

    //锅炉为空，填充巧克力和牛奶
    public void fill()
    {
        if (IsEmpty())
        {
            _empty = false;
            _boiled = false;
        }
    }

    //锅炉不空，且没有煮，开始煮
    public void Boil()
    {
        if (!IsEmpty() && !IsBoiled())
        {
            _boiled = true;
        }
    }

    //锅炉不空，且煮完了，锅炉空
    public void Drain()
    {
        if (!IsEmpty() && IsBoiled())
        {
            _empty = true;
        }
    }

    public bool IsEmpty()
    {
        return _empty;
    }

    public bool IsBoiled()
    {
        return _boiled;
    }
}
```
### 处理多线程

```
public static ChocolateBoiler GetInstance()
{
    lock (_ChocolateBoiler.GetType())
    {
        if (_ChocolateBoiler == null)
        {
            _ChocolateBoiler = new ChocolateBoiler();
        }
        return _ChocolateBoiler;
    }
}
```

### 改善多线程的方法

#### 不做任何事
如果GetInstance()的性能对应用程序不是很关键，就设么都别做。

#### 使用“急切”创建实例
使用"eagerly（急切）"创建实例，而不是用延迟实例化的做法。

```
private static ChocolateBoiler _uniqueChocolateBoiler = new ChocolateBoiler ();

//应用程序总是创建并使用单例实例，或者在创建和运行是方面的负担不太繁重。
//C#保证，在任何线程访问_uniqueChocolateBoiler静态变量之前，一定先创建此实例。
public static ChocolateBoiler GetInstance()
{
    return _uniqueChocolateBoiler;
}

        //开始，锅炉是空的
private ChocolateBoilerEagerly()
{
    _empty = true;
    _boiled = true;
}
```
#### 双重检查加锁
用"双重检查加锁"，在GetInstance()中减少使用同步

volatile是C#中用于控制同步的关键字，其意义是针对程序中一些敏感数据，不允许多线程同时访问，保证数据在任何访问时刻，最多有一个线程访问，以保证数据的完整性，volatile是修饰变量的修饰符。

```
private volatile static ChocolateBoilerDouble _ChocolateBoiler;

//处理多线程
public static ChocolateBoilerDouble GetInstance()
{
    if (_ChocolateBoiler == null)
    {
        lock (_ChocolateBoiler.GetType())
        {
            if (_ChocolateBoiler == null)
            {
                _ChocolateBoiler = new ChocolateBoilerDouble();
            }
        }
     }
     return _ChocolateBoiler;
}

//开始，锅炉是空的
private ChocolateBoilerDouble()
{
    _empty = true;
    _boiled = true;
}
```