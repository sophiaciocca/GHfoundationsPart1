#03-Constructor-Functions
<hr>

###Overview

In 02-Factory-Functions you created a function that returned a Calculator Object.  Let's learn a new way of creating a custom object using a `Constructor Function`. 
`Constructor Functions` create new objects when invoked with the `new` operator and assign the internal prototype of the new object to the Constructor Function's `.prototype` object.  

The following Test Specs will guide and help you create an RPN Calculator which stands for (Reverse Polish Notation).  RPN Calculators are based on `POSTFIX` arithmetic notation.
`POSTFIX` aka "postorder" notation positions operands (numbers) before their operators, (EX: `4 5 7 * +`) `INFIX` aka "inorder" notation is commonly used. `INFIX` notation positions
operands and operators between each other, (EX: ` 4 + 5 * 7`). One of the main advantages of `POSTFIX` notation is the ease of readability.  `POSTFIX` expressions are read from left
to right, there aren' parenthesis and the concept of operator precedence (order of operations, PEMDAS).  Here is a [link that will demonstrate how to evaluate a `POSTFIX` expression](http://scriptasylum.com/tutorials/infix_postfix/algorithms/postfix-evaluation/)
or watch the Overview video for a walkthrough.
 

For example:

```
INFIX:
<value> <operator> <value>

2+3
A-B
7*2
5 + 4 * 3
```

```
POSTFIX
<value> <value> <operator>

2 3 +
A B -
7 2 *
5 4 3 * + 
```

<hr>

###Section Overview

- [03-Constructor-Functions Overview](https://youtu.be/bDCLUIQx2qU)
- [What is an RPN Calculator?](https://youtu.be/bDCLUIQx2qU)
- [Test Spec Overview](https://youtu.be/bDCLUIQx2qU?t=7m40s)
- [Constructor Function Mini-Lesson](https://youtu.be/bDCLUIQx2qU?t=12m25s)

###Curriculum Videos

- [__proto__ vs '.prototype'](https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/5841e3384b5f3d000456e0cf/text)
- [Constructor Functions Overview](https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/5841e3443506550004fb1e0c/text)
- [new keyword](https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/5841e3533506550004fb1e10/text)
- [prototype Property & Constructors](https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/5841e3633506550004fb1e14/text)
- [Adding Methods to .prototype](https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/5841e37d3506550004fb1e18/text)
- [Rule 4: Binding 'this' using the new keyword](https://learn.fullstackacademy.com/workshop/57a21d1d39616e0300f91dd6/content/57a379cd196d170300fd6373/text)

###Additional Resources

- Eloquent JavaScript [The Secret Life Of Objects](http://eloquentjavascript.net/06_object.html)
- Codeschool [Plains of Prototypes](http://javascript-roadtrip-part3.codeschool.com/levels/5)  
