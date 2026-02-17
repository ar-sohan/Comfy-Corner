## As_Salamu_Alaikum
### 1) What is the difference between null and undefined?
--> Null means a variable with no value and undefined means the variable is declared but not initialized. By no value I meant ""(an empty string) or null as a value. 
### 2) What is the use of the map() function in JavaScript? How is it different from forEach()?
--> forEach() : is very similar to any for loop, which help us to iterate over array of objects easily.

map(): map is a special method that help us to iterate over an array and returns the modified array.
### 3) What is the difference between == and ===?
--> == (double equal) does not check whether the data type is same or not. It only checks the value of entities in its both sides. If the data types are not the same it can perform 
"Type Coercion".

=== (strict equal/ triple equal) returns true if both the data type and the value are same and false otherwise.
### 4) What is the significance of async/await in fetching API data?
-->Async/await in fetching API data is significant. Because it let us write asynchronous code which look like synchronous data.
### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
--> Scope in simple terms refer to the are of a code, from where a variable can be accessed form.

Global scope : if a variable is declare outside a block or a function it is a global scope. We can declare global scope variable with var, let and const. But the var keyword is always a global scope.

Function or Block scope : A variable  inside a block like if-else block or inside a function can not be accessed outside from the function. This is called block scope. let and const are block/function sope.
