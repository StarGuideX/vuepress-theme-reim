# 组合模式——部分整体

> 将对象组合成树形结构以表示“部分-整体”的层次结构。Composite使得用户对单个对象和组合对象的使用具有一致性

## 适用性

- 你想表示对象的部分 - 整体层级结构
- 你希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象

## 结构

<img :src="$withBase('/design/design_pattern/08Composite.png')" />

**Component（Node）**

- 为组合中的对象声明接口
- 在适当的情况下，实现所有类共有接口的缺省行为
- 声明一个接口用于访问和管理Component的子组件

**Leaf（TextNode）**

- 在组合中表示叶节点对象，叶节点没有子节点
- 在组合中定义图元对象的行为

**Composite（ElementNode）**

- 定义有子部件的那些部件的行为
- 存储子部件
- 在Component接口中实现与子部件有关的操作

**Client**

- 通过Component接口操纵组合部件的对象

## 实现

```c#
public interface Node
{
    void Add(Node node);
    void Remove(Node node);
    Node GetChild(int index);
    void Operation();
}
```

```c#
public class ElementNode : Node
{
    private List<Node> children = new List<Node>();
    public void Add(Node node)
    {
        children.Add(node);
    }

    public Node GetChild(int index)
    {
        return children[index];
    }

    public void Operation()
    {
        foreach (var item in children)
        {
            item.Operation();
        }
    }

    public void Remove(Node node)
    {
        children.Remove(node);
    }
}
```

```c#
public class TextNode : Node
{
    public void Add(Node node)
    {
        throw new NotSupportedException();
    }

    public Node GetChild(int index)
    {
        throw new NotSupportedException();
    }

    public void Operation()
    {
        Console.WriteLine(this.GetHashCode());
    }

    public void Remove(Node node)
    {
        throw new NotSupportedException();
    }
}
```

## 相关模式

通常部件-父部件连接用于Resposibility of Chain模式

Decorator模式经常与Composite模式一起使用。当装饰和组合一起使用时，它们通常有一个公共的父类。因此装饰必须支持具有Add、Remove、GetChild操作的Component接口

Fltweight让你共享组件，但不再能引用他们的父部件

Itertor可用来遍历Composite

Visitor将本来应该分布在Composite和Leaf类中的操作和行为局部化