// 1. Install Node.js, TypeScript and VS Code on your computer.
console.log('Hello World!')

// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let person: string = 'Eric'
console.log(`Hello ${person}, would you like to learn some Python today?`)

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name: string = 'Ali Haider'
console.log(
  `Titlecase: ${person_name.toLowerCase()}, Uppercase: ${person_name.toUpperCase()}, Lowercase: ${person_name.toLocaleLowerCase()}`
)

let company: string = 'Verge Future'
let pid: number = 25626
let isPublished = true
let x: any = 'Hello 123'

let ids: number[] = [2, 5]
let arr: any[] = [1, 'Hello', 25, true]

//Tuple
let tup: [number, string, boolean] = [25626, 'Ali Haider', true]

//Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Mansoob'],
  [2, 'Ali'],
  [3, 'Nouman'],
]

//Union

let sid: number | string
sid = 25626

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Down)

//Object
type User = {
  id: number
  name: string
}

const user: User = {
  id: 25,
  name: 'John',
}

//Type Assertion
let cid: any = 'Hello'
let customerId = cid as number

customerId = 25626

//Add Function
function addNum(x: number, y: number): number {
  //:number used for return type
  return x + y
}

console.log(addNum(1, 10))

//Void or Union Type in function
function log(message: string | number) {
  return message
}

console.log(log(1))
console.log('Hello! Ali I am testing message')
