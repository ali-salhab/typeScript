// let sales : number =12_34_5678
// let course :string ="typescript"
// let is_publish  =true
// let level;


// function render(doc: string){
//     console.log(doc)
// }
// let number:number[] =[1,2,3]

// number.forEach(n=> console.log(n.toFixed()))




// const enum Size {
//     Small=1,Medium,Large
// }
// let userSize=0
// console.log("useuserr current size ",userSize)
// tuples
// let user:[number , string]=[1,"ali"]
// console.log(user[0].toFixed())
// enums 
// enum Sizes{
//     Small,Medieum,Large=12
// }
// console.log(Sizes.Large)

// functions 

// function CalculateTax(income:number=12):number | undefined{
//     let x=0;
//     if ((income || 2022) < 50_000){
//         return income* 45 + x;
//     }
//     // return income * 1.2 ;

// }

// let x = CalculateTax();
// console.log(x)

// objects 

// type Employee = {
//   readonly  id:number,
//     name?:string,
//     retire : (date:Date)=> void
// }
// let employee: Employee= {id:1,retire:(date:Date)=>{
//     console.log(date)
// }}
// employee.name="12";
// employee.retire(new Date())

// function KgtoLbs(weight : number | string ):number {

//   // when we try acces weight functions we cant acces string options or numbers options we see only common methods between string and number so we use 
//   // narrowing so we will narrow down this union type to more specific type 
//   if(typeof weight ==='number'){
//    return  parseInt(weight.toFixed());
//   }else{
//   return  parseInt(weight.length.toString());
//   }

// }


// KgtoLbs(10);
// KgtoLbs("10 KG")

// let weight: number & string ;
// this represent an object which in the same time is number and string 
// this relaistic is possible 

// type Draggable ={
//   drag : ()=> void 
// }
// type ReSizable ={
// resize:()=>void
// }

// type UiWidget = Draggable & ReSizable;
// let textbox:UiWidget={
//   drag:()=>{},
//   resize:()=>{}

// }
// console.log(textbox)


// type Quantity =

// 100 | 20

// let quantity:Quantity = 100
// console.log(quantity)




// function greet (name:string|null
// ){
//   // here name id truthy not null and not undefined 
//   if (name ) console.log('hello {$name}')
//   else console.log("null or undefined name")
// }

// greet("null");

// we use Pascal name convention 
// type Customer={
//   birthdate? :Date
// }

// function getCustomer(id:number ):Customer | null | undefined{
//   return id === 0 ? null : {
//     birthdate:new Date()
//   } 
// }
// let customer=getCustomer(0);

// // ?. optional property access opertor

// // if(customer != null && customer !== undefined)
// console.log(customer?.birthdate?.getFullYear())
// // ?.[]  optional element access operator 
// // console.log(array?.[0])
// // optional call operator 
// let log :any =(a:string)=>{
//   console.log(a)
// }
// log?.();


// let speed : number | null =null;
// let ride = {
//   speed: speed != null ? speed : 30
// }

// falsy values in js 
// null "" false 0 undefined 
// the document object represent a html page loaded in the browser 
// let phone = <HTMLInputElement>document.getElementById('phone') ;

// console.log(phone?.value)
// this functon return either null or HTMLElement
//  Document.getElementById(elementId: string): HTMLElement | null
// HTMLElement : is a class defined in java script represent any kind of html element
//  it is parent class for sub classed like HTMLIputElement
// HTMLIputElement this class conatin property called value to read the value written by the user 
// but type script donot know this so we use type assertion to access the value of phone 





// // the unknown Type 
// function render (document : unknown ){

// if (typeof document ==='string'){
//   document.charAt(0);
// }
//   document.move();
//   document.run();

// }


// we annoutaed this function with never to tell the compiler this function will never return 
// function processEvents():never{
//     while (true){
//         console.log("processing")
//     }
// }

// function reject(message:string):never{
//     throw new Error(message)
// }
// processEvents();
// reject("kkkkkk");
// // this line will never executed 
// console.log("hello word ")function processEvents():never{
//     while (true){
//         console.log("processing")
//     }
// }

// function reject(message:string):never{
//     throw new Error(message)
// }
// processEvents();
// reject("kkkkkk");
// // this line will never executed 
// console.log("hello word ")



// classses in typescript
// we can define class in typescript and we can use it to create objects
// we use pascal name convention for class name so that we capitalize the first letter of each word in the class name
// 

// class Account{
//     id : number;
//     name : string;
//     balance : number;

//     constructor(id:number,name:string,balance:number){
//         this.id=id;
//         this.name=name;
//         this.balance=balance;
//     }

//     // any function create inside class we call it method 
//     deposit(amount:number):void{
//         if (amount <= 0){
//             throw new Error("amount must be greater than zero")
//         }else{
//         this.balance +=amount;

//         }
//     }   
    
// }
// // using the new operator to create an object from the class
// let account =new Account(1,"ali",1000);
// account.deposit(500);

// console.log(account instanceof Account)
// console.log(account)





// class Account {

//     // we cant change this property we can only init it fron constructor
// //    readonly id:number ;
//     // owner: string ;
//     // 
//     // private _balance: number ;
//     nickname?:string
    
//     constructor(public readonly id:number,public owner:string,private _balance:number){
//         // this.id=id;
//         // this.owner=owner;
//         // this._balance=balance;
//     }
//     deposite(amount : number){
//         if (amount <= 0){
//             throw new Error("amount must be greater than zero")
//         }
//         this._balance +=amount;
//     }
//     get balance(){
//         return this._balance
//     }
//     set balance(value:number){
//         if (value < 0){
//             throw new Error("balance cannot be negative")
//         }
//         this._balance=value;
//     }
// }

// let account = new Account(1,"ali",1000);
// account.deposite(122)
// console.log(account.balance)


// static members in class
// class Ride {
//     static activeRides:number = 0;

// static start(){
//     this.activeRides++;
// }
// static stop(){
//     this.activeRides--;
// }

// }

// Ride.start();
// Ride.start();
// console.log(Ride.activeRides)



// inheritance
// parent/Base/super class 
// class Person{
//     constructor(public firstName:string,public lastName:string){

//     }
//  get fullName(){
//     return this.firstName + " " + this.lastName;
//  }

//  walk ()
// {
//     console.log("walking")
// }
// }

// // child/derived/sub class
// class Student extends Person{
//     constructor(firstName:string,lastName:string,public studentId:number){
//         // here we call the constructor of the parent class to initialize the firstName and lastName properties
//     super(firstName,lastName)
//     }


// }


// class Teacher extends Person{
//     constructor(firstName:string,lastName:string,public teacherId:number){
//         super(firstName,lastName)
//     }  
//     teach(){
//         console.log("teaching")
//     }


//     override get fullName(){
//         return "Dr. " + super.fullName;
//     }
// }

// // here for every iteration will call full name difference and this is polimorphism in action
// function printNames(persons:Person[]){
//     for (let person of persons){
//         console.log(person.fullName)
//     }
// }



// abstract classes 




// abstract class Shape{
//     constructor(public color:string){}

// // here in this level we dont know the shape so we cant render it to solve this problem we use abstract method we define the shape of the method and letter define its implementation in the subclass
//    abstract render():void
// }

// class Circle extends Shape{
//     constructor(public radius:number ,color:string){
//         super(color)
//     }
//   override  render(){
//         console.log("here we render a circle ")
//     }
// }

// let shape = new Shape();

// let circle=new Circle(1,"red")
// circle.render();


// interfaces in typescript
// interface can be used to define the shape of an object and it can be implemented by a class 
// classes is a blueprint for creating objects and it can contain properties and methods


abstract class Calender{
    constructor(public name:string){}

  abstract  addEvent():void
   abstract removeEvent():void

}

interface Calendar{
    name:string;
    addEvent():void;
    removeEvent():void;
}

class OutlookCalender implements Calendar{
    constructor(public name:string){}

    addEvent(): void {
        console.log("here we add event to outlook calender")
    }
    removeEvent(): void {
        console.log("here we remove event from outlook calender")
    }

}

class GoogleCalender implements Calendar{
    constructor(public name:string){}

    addEvent(): void {
        console.log("here we add event to google calender")
    }
    removeEvent(): void {
        console.log("here we remove event from google calender")
    }

}




// what the differences between abstract classes and interfaces
// 1- abstract classes can contain implementation for some methods but interfaces cannot contain any implementation 
// 2- a class can implement multiple interfaces but it can only extend one abstract class 
// 3- abstract classes can have constructors but interfaces cannot have constructors