export const variablesAndMutability = {
    title: "Variables and Mutability",
    content: `
Now, moving on to another fundamental concept in Rust, which we may add is very important for anyone who is coming from Python. This lessson mainly focusses on how the default behaviour of variables in Rust is Immutability.

~~~
let var = 5;
println!("value of var is: {}", var);
~~~

This is a basic variable declaration, which by default sets the variable as immutable.
Now, if we try to change the value of \`var\` to lets say 6, it will give us an error saying: 

~~~
var = 6;
println!("value of var is: {}", var);
~~~
Now, lets try using the **\`mut\`** keyword which makes the variable mutable and allows us to change its value.
~~~
let mut var = 5;
println!("value of var is: {}", var);
var = 6;
println!("value of var is: {}", var);
// No erros and updated the value of \`var\` to 6.
~~~

Now, moving on to the data types of these variables in Rust. There are several data types in Rust, but we will start with the most common ones here.
- **i32**: 32-bit signed integer (*default for integers*).
- **u32**: 32-bit unsigned integer.
- **f32**: 32-bit floating point number.
- **f64**: 64-bit floating point number (*default for floats*).
- **bool**: Boolean value, either true or false.
- **char**: Single character, which can be any Unicode character.
- **String**: Collection of characters.

Rust can usually infer the data type of a variable, but we can also explicitly specify it if required.
~~~
fn main() {
    let age: u32 = 30;
    println!("Age: {}", age);
    // Age: 30
}
~~~


`,
    baseCode: `let name = "Harry";
    println!("My name is {}", name);

    let mut age = 25;
    println!("My age is {}", age);
    age = 26;
    println!("My age is {}", age);

`,
    examples: [
        {
            title: "Sum from 1 to N",
            code: `use std::io;
fn main() {
    let mut input = String::new();
    println!("Enter a number to find sum from 1 to that number");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let number: i32 = input.trim().parse().expect("Failed to parse line");
    println!("Number you enetered: {}", number);
    let mut sum = 0;
    for x in 1..(number + 1) {
        sum += x;
    }
    println!("Sum (calculated from loop) = {}", sum);
    println!("Sum (calculated from formula) = {}", number * (number + 1) / 2);
}`
        },
        {
            title: "Circular Area with Radius as Input",
            code: `use std::io;

fn main(){
    let mut input = String::new();
    let pie = 3.14;
    println!("Enter the radius ?");
    io::stdin().read_line(&mut input).expect("Failed to read line");

    let number: f32 = input.trim().parse().expect("Failed to parse line");
    println!("Number: {}", number);
    let area = pie * number * number;
    println!("Area = {}", area);
}`
        },
        {
            title: "Convert total time to seconds",
            code: `use std::io;

fn main() {
    let sec = 60;
    let mut days = String::new();
    println!("Enter days ?");
    io::stdin().read_line(&mut days).expect("Failed to read line");
    let daysParsed: i32 = days.trim().parse().expect("Failed to parse line");
    
    println!("Enter hours ?");
    let mut hours = String::new();
    io::stdin().read_line(&mut hours).expect("Failed to read line");
    let hoursParsed: i32 = hours.trim().parse().expect("Failed to parse line");
    
    println!("Enter minutes ?");
    let mut minutes = String::new();
    io::stdin().read_line(&mut minutes).expect("Failed to read line");
    let minutesParsed: i32 = minutes.trim().parse().expect("Failed to parse line");
    
    println!("Enter seconds ?");
    let mut seconds = String::new();
    io::stdin().read_line(&mut seconds).expect("Failed to read line");
    let secondsParsed: i32 = seconds.trim().parse().expect("Failed to parse line");

    let total_time = secondsParsed  + minutesParsed * sec + hoursParsed * sec * sec * sec;
    println!("Total time: {} seconds", total_time);
}`
        }
        , {
            title: "Min, Max and Middle of three Inputs",
            code: `use std::io;
use std::cmp;

fn main() {
    let sec = 60;
    let mut first = String::new();
    println!("Enter first number ?");
    io::stdin().read_line(&mut first).expect("Failed to read line");
    let a: i32 = first.trim().parse().expect("Failed to parse line");

    let mut second = String::new();
    println!("Enter second number ?");
    io::stdin().read_line(&mut second).expect("Failed to read line");
    let b: i32 = second.trim().parse().expect("Failed to parse line");

    let mut third = String::new();
    println!("Enter third number ?");
    io::stdin().read_line(&mut third).expect("Failed to read line");
    let c: i32 = third.trim().parse().expect("Failed to parse line");
  
    let minimum = cmp::min(a, cmp::min(b, c));
    let maximum = cmp::max(a, cmp::max(b, c));
    let middle = a + b + c - minimum - maximum;
    println!("Min: {}, Max: {}, Middle: {}.", minimum, maximum, middle);
}`
        }
    ]
}