### Javascript语句

- Atom
- Expression
- Statement
- Structure
- Program/Module

#### Grammar
##### 简单语句
- Expression Statement 表达式语句
    - a = 1 + 2;

- Empty Statement 空语句
    - ;
- Debugger Statement debugger语句，运行时不产生作用
    - debugger;

- ThrowStatement
    - throw a;
- Continue Statement(与循环相互匹配)
    - continue label1;
- Break Statement(与循环匹配)
    - break label2;
- Return Statement
    - return; / return 1;

##### 组合语句
- Block Statement
```
{
...
...
}
```
- Iteration
```
while()
do...while
for
for...in...
for...of...
```
##### 声明
- FunctionDeclaration
- GeneratorDeclaration
- AsyncFunctionDeclaration
- AsyncGeneratorDeclaration
- VariableStatemeny
- ClassDeclaration
- LexicalDeclaration


##### 标签、循环、break、continue
- LabelledStatement
- IterationStatement
- ContinueStatement
- BreakStatement
- SwitchStatement

#### Runtime：
- Complection Record
    - [[type]]: normal, break, continue, return, throw
    - [[value]]: Types
    - [[target]]: label
- Lexical Enviorment

### Javascript对象机制

#### Object

- 任何一个对象都是唯一的，这与它本身的状态无关。

- 即使状态完全一致的两个对象。也并不相等。

- 我们用状态来描述对象。

- 状态的改变即是行为。

- 标示性（Identifier）指针（state）行为（behavior）

#### 基于类的面向对象

- 类是一种常见的描述对象的方式。而“归类”和“分类”则是两个主要的流派。

- 对于“归类”方法而言，多继承是非常自然的事情。如C++。

- 而采用分类思想的计算机语言，则是单继承结构。并且会有一个基类Object。

- 原型是一种更接近人类原始认知的描述对象的方法。

- 我们并不试图做严谨的分类，而是采用“相似”这样的方式去描述对象。

- 任何对象仅仅需要描述它自己与原型的区别即可。

#### Object in Javascript

- 在Javascript运行时，原生对象的描述方式非常简单。我们只需要关心原型和属性两个部分。

- 它的原型实际上就是一个KV对。

- Javascript用属性来统一抽象对象状态和行为。

- 一般来说，数据属性用于描述状态，访问器属性则用于描述行为。

- 数据属性中如果存储函数，也可以用于描述行为。



