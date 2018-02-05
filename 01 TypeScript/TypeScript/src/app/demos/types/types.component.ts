import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import * as $ from "jquery";
import { Voucher } from "../../shared/model/model";

@Component({
  selector: "app-types",
  templateUrl: "./types.component.html",
  styleUrls: ["./types.component.css"]
})
export class TypesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  basicVariables() {
    debugger;

    var myname: string = "alex";

    //Numbers
    var age: number;
    var weight: number = 83.12;
    var dogWeight = 25.4;    
    var rand = Math.random();

    var numbers: number[] = [];
    var myNumArray: Array<number> = new Array();

    numbers[0] = 1;
    // numbers.push("two"); // compile-time error

    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean

    var isCustomer: boolean = false;
    var finished = false;

    //strings
    var dogName: string = "Giro";
    var otherDogName = "Soi";
    var myString = "ten";

    var strings: Array<string> = ["hubert", "Sam"];
    strings.push("Hans");
    //strings[1] = 1337; // compile time error

    // Function returning never must have unreachable end point
    function error(message: string): never {
      throw new Error(message);
    }

    // Not much else we can assign to these variables!
    var u: undefined = undefined;
    var n: null = null;
  }

  useLetConst() {
    debugger;

    var index: number = 0;
    var array = ["a", "b", "c"];
    for (let index: number = 0; index < array.length; index++) {
      console.log("Inside for ..." + index);
      console.log("Inside for ..." + array[index]);
    }
    console.log(index); // 0
    const pi = 3.14;
    //pi = 2;

    const person = {name: "john", age: 22};
    person.name = "franz";
  }

  stringFunctions() {
    debugger;

    var productID = 100;
    var category = "music";

    //string concatenation
    var url = "http://server/" + category + "/" + productID;
    console.log(url);

    //Template Literals using Backticks
    var tl = `http://server/${category}/${productID}`;
    console.log(tl);

    //startswith
    var str = "To be, or not to be, that is the question.";
    console.log(str.startsWith("To be")); // true
    console.log(str.endsWith("question.")); // true

    //include -> C# string.contains
    function countString(ts) {
      const characters = ["a", "b", "c"];
      let ct = 0;

      for (var i = 0; i < ts.length; i++) {
        if (characters.includes(ts[i])) {
          ct++;
        }
      }
      console.log(`ct: ${ct}`);

      //same as above - modern js
      ct = 0;
      for (var char of ts) {
        if (characters.includes(char)) {
          // like C# contains
          ct++;
        }
      }

      console.log(`ct: ${ct}`);

      return ct;
    }

    console.log(`chars included in your string: ${countString("abheben")}`);
  }

  useVoidAny() {
    debugger;

    function handleClick(): void {
      var g = "I don't return anything.";
      console.log(g);
    }

    //let nonsens: void = 10; //Conversion error
    let nonsens: void = undefined;

    let likeadelegate: void = handleClick();
    //execute it
    likeadelegate;
  }

  useEnums() {
    debugger;

    enum Happyness {
      happy = 2,
      unhappy = 4,
      ok = 6
    }

    let isHappy: Happyness = Happyness.happy;

    enum VoucherStatus {
      draft,      
      complete,
      pending
    }

    var status: VoucherStatus;
    status = VoucherStatus.draft;
    status = VoucherStatus.complete;
    //status = VoucherStatus.unfinished; // compile-time error
    //status = "on the way"; // compile-time error

    if (status === VoucherStatus.complete) {
    }

    function handleVoucher(v: Voucher, status: VoucherStatus) {
      switch (status) {
        case VoucherStatus.complete:
          console.log(`got voucher ${v}: will pay`);
          break;
        case VoucherStatus.draft:
          console.log(`got voucher ${v}: will save to O365`);
          break;
        case VoucherStatus.pending:
          console.log(`got voucher ${v}: will call the accountant`);
          break;
        default:
          console.log("...");
          break;
      }
    }

    handleVoucher(<Voucher>{ ID: 1, Text: "Media Markt", Amount: 22, Date: new Date() },status);
  }

  useTypings() {
    //using moment
    let dt = new Date(1990, 3, 2);
    console.log("Using time format: ", moment(dt).format("LTS"));

    //using jQuery
    let myArray = ["Angular", "React", "SPFx"];
    console.log("myArray is an Array: ", $.isArray(myArray));
  }

  introArrays() {
    debugger;

    //declaration using type followed by []
    var customers: string[] = ["Alex", "Giro", "Sonja", "Soi", "David"];
    //declaration using generic array type
    let nbrs: Array<number> = [3, 4, 5];

    console.log(customers.length + "Persons in Array");
    customers[2] = "Brunhilde";
    console.log("Person with index 1 is" + customers[1]);

    //for ... of
    let list: number[] = [4, 5, 6];

    for (let i in list) {
      console.log(i); // "0", "1", "2", -> index
    }

    for (let i of list) {
      console.log(i); // "4", "5", "6"
    }

    // array destructuring
    let arrNbr = [8, 4, 100, -5, 20];
    let [first, second, third] = arrNbr;

    // output: 100, 4, 8
    console.log(third, second, first);

    let myArray = [1, ["hello"], true],
      [a, b, c] = myArray;

    // output: 1, ['hello']
    console.log(a, b);
  }

  arrayHelpers() {
    debugger;

    var fruits = [
      { name: "apples", quantity: 2, price: 3, region: "europe" },
      { name: "bananas", quantity: 0, price: 5, region: "caribean" },
      { name: "cherries", quantity: 5, price: 8, region: "europe" }
    ]; //-> Json Objects from REST call

    //remember ECMA Script 5 pattern
    var result = [];
    for (var i = 0; i < fruits.length; i++) {
      var item = fruits[i];
      if (item.quantity < 5) {
        result.push(item);
      }
    }
    console.log(`There areas ${result.length} items in the Array`);

    //forEach
    fruits.forEach(function(fruit) {
      fruit.quantity++;
    });

    fruits.forEach((item: any) => {
      item.quantity++;
      console.log(item);
    });

    fruits.forEach(item => item.quantity++);

    //find -> returns first item
    var cherry = fruits.find(function(fruit) {
      return fruit.name === "cherries";
    });
    console.log(cherry);

    //filter -> returns array
    var cheap = fruits.filter(function(item) {
      return item.price < 6;
    });
    console.log(cheap);

    //map -> shape arr
    var names = fruits.map(function(item) {
      return item.name;
    });

    //reduce:  You want to find a cumulative or concatenated value based on elements across the array

    var rockets = [
      { country: "Russia", launches: 32 },
      { country: "US", launches: 23 },
      { country: "China", launches: 16 },
      { country: "Europe(ESA)", launches: 7 },
      { country: "India", launches: 4 },
      { country: "Japan", launches: 3 }
    ];

    var launches = rockets.reduce(function(prevVal, elem) {
      return prevVal + elem.launches;
    }, 0);

    launches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0);  //same as above

    console.log("launche so far: ", launches);

    //splice
    var dogs = ["whippet", "galgo espanol", "magyar whistler", "magyar agar"];
    dogs.splice(2, 0, "chart polski");
    console.log(dogs); //["whippet", "galgo espanol", "chart polski", "magyar whistler", "magyar agar"]
    dogs.splice(3, 1);
    console.log(dogs); //["whippet", "galgo espanol", "chart polski", "magyar agar"]
  }

  //-> C# Dictionary
  maps() {
    debugger;

    var myMap = new Map();
    var keyString = "a string",
      keyObj = {},
      keyFunc = function() {
        console.log("function in map array");
      };
    // setting the values
    myMap.set(keyString, "value associated with 'a string'");
    myMap.set(keyObj, "value associated with keyObj");
    myMap.set(keyFunc(), "value associated with keyFunc");
    console.log("Map size: " + myMap.size); // 3

    // getting the values
    myMap.get(keyString); // "value associated with 'a string'"
    myMap.get("a string"); // "value associated with 'a string'" because keyString === 'a string'
    myMap.get(keyObj); // "value associated with keyObj"
  }

  //-> Indexed Array
  sets() {
    debugger;

    var mySet = new Set();
    mySet.add(1);
    mySet.add("some text");
    var o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(Math.sqrt(25)); // true
    mySet.has("Some Text".toLowerCase()); // true
    mySet.has(o); // true
    var size = mySet.size; // 4
    mySet.delete(5); // removes 5 fro
  }

  restParams() {
    debugger;

    function playLotto(name: string, ...bets: number[]) {
      console.log(`${name} is playing the following lottery numbers: `);
      bets.forEach((nbr: number) => console.log(nbr));
    }

    playLotto("Hannes", 3, 12, 45, 48);
    playLotto("Hugo", 3, 12, 45, 48, 55, 22);

    var shop: any = new Array();
    shop.category = new Map();

    shop.add = function(categoryName, ...products) {
      var row = shop.category[categoryName];
      if (row == undefined) {
        shop.category.set(categoryName, new Array());
      }

      products.forEach(function(item) {
        shop.category.get(categoryName).push(item);
      });
    };

    shop.add("fruits", "apple");
    shop.add("dairy", "milk", "cheese", "yoghurt");
    shop.add("pastries", "donuts", "croissants");
    shop.add("cleaning", "soap", "body lotion", "shampoo", "tooth brush");

    console.log("There are the following products in the store", shop);
  }

  spreadOperator() {
    console.log(Math.max(3, 5, 1)); // 5

    let arr = [3, 5, 1];
    //console.log( Math.max(arr) ); // NaN
    console.log(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

    let arr1 = [1, -2, 3, 90];
    let arr2 = [8, 3, -8, 1];

    console.log("Maximum is", Math.max(1, ...arr1, 2, ...arr2, 25)); // 90

    //Sample from Above

    function playLotto(name: string, ...bets: number[]) {
      console.log(`${name} is playing the following lottery numbers: `);
      bets.forEach((nbr: number) => console.log(nbr));
    }

    playLotto("Hannes", 3, 12, 45, 48);

    let numbers = [3, 12, 45, 48];
    //calling a function with ...rest param using ...spread
    playLotto("Hannes", ...numbers);
  }
}
