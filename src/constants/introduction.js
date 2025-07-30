import dedent from 'dedent';

export const introduction = {
    title: "Introduction",
    content: dedent(`
Let' start with the very first program in any programming language, the "Hello, world!", here is a sample code for this program.
~~~
fn main() {
    println!("Hello World!");
}
~~~
Let’s review this “Hello, world!” program in detail. Here’s the first piece of the puzzle:
~~~
fn main() {
}
~~~
These lines define a function named main. The main function is special: it is always the first code that runs in every executable Rust program. Here, the first line declares a function named main that has no parameters and returns nothing. If there were parameters, they would go inside the parentheses ().
The function body is wrapped in {}. Rust requires curly brackets around all function bodies. It’s good style to place the opening curly bracket on the same line as the function declaration, adding one space in between.
~~~
println!("Hello, world!");
~~~
This line does all the work in this little program: it prints text to the screen. There are three important details to notice here.
First, println! calls a Rust macro. If it had called a function instead, it would be entered as println (without the !). Second, you see the "Hello, world!" string. We pass this string as an argument to println!, and the string is printed to the screen.
Third, we end the line with a semicolon (;), which indicates that this expression is over and the next one is ready to begin. Most lines of Rust code end with a semicolon.
`),
    baseCode: `fn main() {
    println!("Hello, world!");
}
`,
    examples: []
}