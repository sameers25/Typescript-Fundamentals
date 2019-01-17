import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {

    //Sample test code added here

    var foo = "test";

    var bar = foo; // bar is a reference

    var baz = {}; // baz is a *new object* distinct from `foo`

    console.log(foo === bar); // true

    console.log(foo === baz); // false

    //Null and Undefined
    ///	Imagine you are doing `foo.bar == undefined` where bar can be one of: console.log(undefined == undefined); // true
    console.log(null == undefined); // true console.log(0 == undefined); // false console.log('' == undefined); // false console.log(false == undefined); // false


    //THIS
    var test = this.foo();
    this.outerFunction("hello closure"); // logs hello closure!


    //Decimal
    console.log(.1 + .2); // 0.30000000000000004

    //Integer
    console.log({ max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER });

    // {max: 9007199254740991, min: -9007199254740991}


    //NaN
    console.log(Math.sqrt(-1)); // NaN


    //INFINITY
    console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 console.log(-Number.MAX_VALUE); // -1.7976931348623157e+308


    //INFINITESIMAL
    console.log(Number.MIN_VALUE);	// 5e-324
    console.log(Number.MIN_VALUE / 10);	// 0

    //const declarations must be initialized
    const foo1 = 123;
    //foo1 = 456; // ERROR: Left-hand side of an assignment expression cannot be a constant

    //Left hand side of assignment cannot be a constant
    const foo2 = 123;

    //foo2 = 456; // ERROR: Left-hand side of an assignment expression cannot be a constant

    //Block Scope
    const foo3 = 123;
    if (true) {
      const foo3 = 456; // Allowed as its a new variable limited to this `if` block
    }


    //Deep immutability
    const foo4 = { bar: 123 };
    //foo4 = { bar: 456 }; // ERROR : Left hand side of an assignment expression cannot be a constant

    const foo5 = { bar: 123 };
    foo5.bar = 456; // Allowed!
    console.log(foo5); // { bar: 456 }


    //Object Desctructing
    var rect = { x: 0, y: 10, width: 15, height: 20 };

    // Destructuring assignment
    var { x, y, width, height } = rect;
    console.log(x, y, width, height); // 0,10,15,20
    rect.x = 10;
    ({ x, y, width, height } = rect); // assign to existing variables using outer parentheses
    console.log(x, y, width, height); // 10,10,15,20

    // structure
    const obj = { "some property": "some value" };
    // destructure
    const { "some property": someProperty } = obj; console.log(someProperty === "some value"); // true

    //Object Destructuring with rest
    var { w, x, ...remaining } = { w: 1, x: 2, y: 3, z: 4 };
    console.log(w, x, remaining); // 1, 2, {y:3,z:4}

    // Example function
    function goto(point2D: { x: number, y: number }) {
      //	Imagine some code that might break
      //	if you pass in an object
      //	with more items than desired
    }
    //	Some point you get from somewhere const point3D = {x: 1, y: 2, z: 3};
    /** A nifty use of rest to remove extra properties  const { z, ...point2D } = point3D;
      goto(point2D);*/


    //Array Destructuring
    var x = 1, y = 2;
    [x, y] = [y, x];
    console.log(x, y); // 2,1


    //Array Destructuring with rest
    var [x, y, z] = [1, 2, 3, 4];
    console.log(x, y, z); // 1, 2, [3,4]

    //Array Destructuring with ignores
    var [x, , z] = [1, 2, 3, 4];
    console.log(x, z); // 1, [3,4]


    //JS Generation
    var x = 1, y = 2;
    [x, y] = [y, x];
    console.log(x, y); // 2,1
    // becomes //
    var x = 1, y = 2;
    _a = [y, x], x = _a[0], y = _a[1];
    console.log(x, y);
    var _a;


  }
  foo() {
    console.log(this);
    return this;
  }


  //Closure
  outerFunction(arg) {
    var variableInOuterFunction = arg;
    this.bar(variableInOuterFunction);
    //	Call the local function to demonstrate that it has access to arg bar();

  }

  bar(variableInOuterFunction) {
    console.log(variableInOuterFunction); // Access a variable from the outer scope
  }

  




}

  



