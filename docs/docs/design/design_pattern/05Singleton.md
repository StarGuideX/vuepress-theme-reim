# 单例模式——独一无二
> 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

## 适用性

- 当类只能有一个实例而且客户可以从一个众所周知的访问点访问它时

- 当这个唯一实例应该是通过子类化可扩展的，并且客户应该无需更改代码就能使用一个扩展的实例时

## UML

<img :src="$withBase('/design/design_pattern/05singletonUML.png')" alt="单例UML"/>

## 实现

**饿汉式**：直接创建，会占用内存。

```c#
public class Singleton
{
    private static Singleton uniqueInstance = new Singleton();
    private Singleton() { }

    public static Singleton GetInstance() 
    {
        return uniqueInstance;
    }
}
```

**懒汉式**：即用即创建。

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

## 多线程的处理

**双重检查（double-check）：**减少性能消耗

**sealed：**阻止发生派生

**volatile：** 用于控制同步，其意义是针对程序中一些敏感数据，不允许多线程同时访问，保证数据在任何访问时刻，最多有一个线程访问，以保证数据的完整性，volatile是修饰变量的修饰符

**readonly：**不能修改

```c#
public sealed class Singleton
{
    private static volatile Singleton uniqueInstance;
    
    private static readonly object Singleton_Lock = new object();
    private Singleton() { }

    public static Singleton GetInstance()
    {
        if (uniqueInstance == null)
        {
            lock (Singleton_Lock)
            {
                if (uniqueInstance == null)
                    uniqueInstance = new Singleton();
            }
        }
        return uniqueInstance;
    }
}
```

## 相关模式

很多模式可以使用Singleton模式实现。如 AbsractFactory、Builder、Prototype。

### 