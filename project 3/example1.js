class MyClass {
  constructor() {
    console.log('CONSTRUCTOR IS HERE');
    this.value = 'value';
    this.createdTime = new Date();
  }
}

const myVar1 = new MyClass();
const myVar2 = new MyClass();

console.log('OUR VAR :', myVar1, myVar2);
// const myVar2 = new MyClass();
// const myVar3 = new MyClass();
// const myVar4 = new MyClass();
