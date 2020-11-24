# 综述
创建型类模式：将对象的部分创建工作延迟到子类。

创建型对象模式：将对象的部分创建工作延迟到另一个对象中。

结构型类模式：使用继承机制来组合类。

结构型对象模式：对象的组装方式。

行为型类模式：使用继承描述算法和控制流。

行为型对象模式：描述一组对象怎么协作完成单个对象所无法完成的任务。





关系图！！！！！！！！





# 重新设计的一般原因

### 通过显式地指定一个类来创建对象
在创建对象时指定类名将使你受特定实现的约束而不是特定接口的约束。这会使未来的变化更复杂。要避免这种情况，应该间接地创建对象。

设计模式：Abstract Factory，Factory Method，Prototype
### 对特殊搡作的依赖
当你为请求指定一个特殊的操作时，完成该请求的方式就固定下来了。为避免把请求代码写死，你将可以在编译时刻或运行时刻很方便地改变响应请求的方法。

设计模式：Chain of ReSposibility，Command
### 对硬件和软件平台的依赖
外部的操作系统接口和应用编程接口（API）在不同的软硬件平台上是不同的。依赖于特定平台的软件将很难移植到其他平台上，甚至都很难跟上本地平台的更新。所以设计系统时限制其平台相关性就很重要了。

设计模式：Abstract Factory，Bridge
### 对对象表示或实现的依赖
知道对象怎样表示、保存、定位或实现的客户在对象发生变化时可能也需要变化。对客户隐藏这些信息能阻止连锁变化。

设计模式：Abstract Factory，Bridge，Memento，Proxy
### 算法依赖
算法在开发和复用时常常被扩展、优化和替代。依赖于某个特定算法的对象在算法发生变化时不得不变化因此有可能发生变化的算法应该被孤立起来。

设计模式：Builder，Iterator，Strategy，Template Method，Visitor
### 紧耦合
紧耦合的类很难独立地被复用，因为它们是互相依赖的。紧耦合产生单块的系统，要改变或删掉一个类，你必须理解和改变其他许多类。这样的系统是一个很难学习、移植和维护的密集体。

松散耦合提高了一个类本身被复用的可能性，并且系统更易于学习、移植、修改和扩展。设计模式使用抽象耦合和分层技术来提高系统的松散耦合性。

设计模式：Abstract Factory，Command，Facade，Mediator，Observer，Chain of Responsibility

### 通过生成子类来扩充功能
通常很难通过定义子类来定制对象。每一个新类都有固定的实现开销（初始化、终止处理等）。定义子类还需要对父类有深人的了解。如，重定义一个操作可能需要重定义其他操作。一个被重定义的操作可能需要调用继承下来的操作。并且子类方法会导致类爆炸，因为即使对于一个简单的扩充，你也不得不引人许多新的子类。

一般的对象组合技术和具体的委托技术，是继承之外组合对象行为的另一种灵活方法。新的功能可以通过以新的方式组合已有对象，而不是通过定义已存在类的子类的方式加到应用中去。另一方面，过多使用对象组合会使设计难于理解。许多设计模式产生的设计中，你可以定义一个子类，且将它的实例和已存在实例进行组合来引人定制的功能。

设计模式：Bridge，Chain of Responsibility，Composite，Decorator，Observer，Strategy
### 不能方便地对类进行修改
有时你不得不改变一个难以修改的类。也许你需要源代码而又没有（对于商业类库就有这种情况），或者可能对类的任何改变会要求修改许多已存在的其他子类。设计模式提供在这些清况下对类进行修改的方法。

设计模式：Adapter，Decorator，Visitor