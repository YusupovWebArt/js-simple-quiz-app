export const questions = [
    {
        question: "What is the correct way to declare a variable in modern JavaScript?",
        options: [
            "var x = 5",
            "let x = 5",
            "const x = 5",
            "variable x = 5"
        ],
        correctAnswer: 1,
        explanation: "In modern JavaScript, 'let' and 'const' are preferred over 'var' for variable declaration. 'let' allows reassignment while 'const' is for constants."
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: [
            "push()",
            "append()",
            "add()",
            "insert()"
        ],
        correctAnswer: 0,
        explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        options: [
            "To make a function run faster",
            "To declare an asynchronous function that returns a Promise",
            "To prevent a function from executing",
            "To make a function private"
        ],
        correctAnswer: 1,
        explanation: "The 'async' keyword declares an asynchronous function that automatically returns a Promise and allows the use of 'await' inside it."
    },
    {
        question: "Which operator is used for strict equality comparison in JavaScript?",
        options: [
            "==",
            "===",
            "=",
            "!="
        ],
        correctAnswer: 1,
        explanation: "The === operator performs strict equality comparison, checking both value and type without type coercion."
    },
    {
        question: "What is the purpose of the 'map' array method?",
        options: [
            "To filter array elements",
            "To create a new array with transformed elements",
            "To sort array elements",
            "To remove elements from an array"
        ],
        correctAnswer: 1,
        explanation: "The map() method creates a new array with the results of calling a function for every array element."
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        options: [
            "They are exactly the same",
            "null is assigned by JavaScript, undefined is assigned by developers",
            "undefined is assigned by JavaScript, null is assigned by developers",
            "They are different data types with different purposes"
        ],
        correctAnswer: 3,
        explanation: "null is an assigned value representing no value or no object, while undefined typically means a variable has been declared but not defined."
    },
    {
        question: "What is the purpose of the 'try...catch' statement?",
        options: [
            "To try different code variations",
            "To handle and manage errors in code",
            "To improve code performance",
            "To debug code"
        ],
        correctAnswer: 1,
        explanation: "try...catch is used for error handling in JavaScript. The try block contains code that might throw an error, and the catch block handles that error."
    },
    {
        question: "What is event bubbling in JavaScript?",
        options: [
            "A way to create multiple events",
            "When an event triggers on a child element and propagates up through its parents",
            "A method to remove event listeners",
            "A type of event that occurs in loops"
        ],
        correctAnswer: 1,
        explanation: "Event bubbling is when an event starts at the most specific element and then flows upward through its parent elements in the DOM."
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
            "To reference the current function",
            "To reference the current file",
            "To reference the current object",
            "To reference the parent element"
        ],
        correctAnswer: 2,
        explanation: "The 'this' keyword refers to the current object in context, which can change depending on how and where it is used."
    },
    {
        question: "What is closure in JavaScript?",
        options: [
            "A way to close browser windows",
            "A function that has access to variables in its outer scope",
            "A method to end loops",
            "A way to close database connections"
        ],
        correctAnswer: 1,
        explanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned."
    },
    {
        question: "What is the purpose of JSON.stringify()?",
        options: [
            "To validate JSON data",
            "To parse JSON data",
            "To convert JavaScript objects to JSON strings",
            "To format JSON data"
        ],
        correctAnswer: 2,
        explanation: "JSON.stringify() converts a JavaScript object or value to a JSON string, making it easy to send data to a server."
    },
    {
        question: "What is the difference between let and const?",
        options: [
            "There is no difference",
            "let is block-scoped, const is function-scoped",
            "let allows reassignment, const doesn't",
            "const is faster than let"
        ],
        correctAnswer: 2,
        explanation: "Both let and const are block-scoped, but let allows reassignment of values while const doesn't allow reassignment after initialization."
    },
    {
        question: "What is the purpose of the spread operator (...)?",
        options: [
            "To spread a virus",
            "To expand elements like arrays or objects",
            "To create spaces in strings",
            "To multiply numbers"
        ],
        correctAnswer: 1,
        explanation: "The spread operator (...) allows an array or object to be expanded into individual elements, making it useful for array manipulation and function arguments."
    },
    {
        question: "What is the purpose of preventDefault()?",
        options: [
            "To prevent JavaScript errors",
            "To stop event bubbling",
            "To prevent default browser behavior",
            "To prevent variable declaration"
        ],
        correctAnswer: 2,
        explanation: "preventDefault() stops the default action of an HTML element from happening. For example, preventing a form from submitting or a link from following its href."
    },
    {
        question: "What is the purpose of localStorage in JavaScript?",
        options: [
            "To store data temporarily in memory",
            "To store data permanently in the browser",
            "To store data on the server",
            "To store data in cookies"
        ],
        correctAnswer: 1,
        explanation: "localStorage allows you to store key-value pairs in the browser with no expiration time, persisting even after the browser is closed."
    }
];
