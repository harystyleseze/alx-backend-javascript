# Node.js Basics Project

Welcome to the **Node.js Basics** project. This project contains a series of exercises and challenges designed to familiarize you with basic Node.js concepts such as modules, file operations, HTTP servers, and the Express framework.

- **Username:** harystyleseze
- **Name:** Harrison Eze
- **GitHub Repository:** [alx-backend-javascript](https://github.com/harystyleseze/alx-backend-javascript)
- **Project Directory:** 0x05-Node_JS_basic

## Table of Contents

1. [Executing Basic JavaScript with Node.js](#1-executing-basic-javascript-with-nodejs)
2. [Using Process stdin](#2-using-process-stdin)
3. [Reading a File Synchronously with Node.js](#3-reading-a-file-synchronously-with-nodejs)
4. [Reading a File Asynchronously with Node.js](#4-reading-a-file-asynchronously-with-nodejs)
5. [Creating a Small HTTP Server using Node's HTTP Module](#5-creating-a-small-http-server-using-nodes-http-module)
6. [Creating a More Complex HTTP Server using Node's HTTP Module](#6-creating-a-more-complex-http-server-using-nodes-http-module)
7. [Creating a Small HTTP Server using Express](#7-creating-a-small-http-server-using-express)
8. [Creating a More Complex HTTP Server using Express](#8-creating-a-more-complex-http-server-using-express)
9. [Organizing a Complex HTTP Server using Express](#9-organizing-a-complex-http-server-using-express)

---

## 1. Executing Basic JavaScript with Node.js

In the file `0-console.js`, a function `displayMessage` is created that prints a string argument to the standard output (STDOUT).

**Task**: Print "Hello NodeJS!" using the function `displayMessage`.

**File**: `0-console.js`

Example:
```bash
$ node 0-main.js
Hello NodeJS!
```

---

## 2. Using Process stdin

The program `1-stdin.js` prompts the user for their name, and displays the name input by the user.

**Task**: 
- Display `Welcome to Holberton School, what is your name?`.
- Accept the user input and output `Your name is: <name>`.
- Display `This important software is now closing` when the program ends.

**File**: `1-stdin.js`

Example:
```bash
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
This important software is now closing
```

---

## 3. Reading a File Synchronously with Node.js

The `2-read_file.js` file contains a function `countStudents` which reads a database file (`database.csv`) synchronously.

**Task**: 
- If the database is available, output the number of students and the list of students in each field.
- If the database is not found, throw an error `Cannot load the database`.

**File**: `2-read_file.js`

Example:
```bash
$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

## 4. Reading a File Asynchronously with Node.js

The `3-read_file_async.js` file contains a function `countStudents` which reads the database file asynchronously.

**Task**: 
- The script should return a Promise and use asynchronous file reading to process the database.
- If the database is available, log the number of students and list students in each field.
- If not, output an error: `Cannot load the database`.

**File**: `3-read_file_async.js`

Example:
```bash
$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
```

---

## 5. Creating a Small HTTP Server using Node's HTTP Module

In the file `4-http.js`, a small HTTP server is created using Node's HTTP module.

**Task**:
- The server should listen on port `1245`.
- Any endpoint should return the message `Hello Holberton School!` as plain text.

**File**: `4-http.js`

Example:
```bash
$ node 4-http.js
$ curl localhost:1245
Hello Holberton School!
```

---

## 6. Creating a More Complex HTTP Server using Node's HTTP Module

In the file `5-http.js`, a more complex HTTP server is created using Node's HTTP module.

**Task**:
- Listen on port `1245`.
- The `/` endpoint should display `Hello Holberton School!`.
- The `/students` endpoint should display the list of students from the `database.csv` file.

**File**: `5-http.js`

Example:
```bash
$ node 5-http.js database.csv
$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

## 7. Creating a Small HTTP Server using Express

In the file `6-http_express.js`, an HTTP server is created using the Express module.

**Task**:
- The server listens on port `1245`.
- The `/` endpoint should return `Hello Holberton School!`.

**File**: `6-http_express.js`

Example:
```bash
$ node 6-http_express.js
$ curl localhost:1245
Hello Holberton School!
```

---

## 8. Creating a More Complex HTTP Server using Express

In the file `7-http_express.js`, a more complex HTTP server is created using Express.

**Task**:
- The server listens on port `1245`.
- The `/` endpoint should return `Hello Holberton School!`.
- The `/students` endpoint should return the list of students in the `database.csv` file.

**File**: `7-http_express.js`

Example:
```bash
$ node 7-http_express.js database.csv
$ curl localhost:1245/students
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

## 9. Organizing a Complex HTTP Server using Express

In the directory `full_server/`, organize a full Express server.

### Tasks:
1. **Utils File (`full_server/utils.js`)**: Create a function `readDatabase` that reads the database asynchronously and returns an object with the list of students per field.
2. **App Controller (`full_server/controllers/AppController.js`)**: Create a method `getHomepage` to display "Hello Holberton School!".
3. **Students Controller (`full_server/controllers/StudentsController.js`)**: 
    - Create methods to get all students and students by major.
    - Handle errors and display proper responses.
4. **Routes (`full_server/routes/index.js`)**: Link the routes to the controllers.
5. **Server (`full_server/server.js`)**: Create the Express server that uses the routes and listens on port `1245`.

### Example:
```bash
$ npm run dev
$ curl localhost:1245/students
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

---

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/harystyleseze/alx-backend-javascript.git
    ```

2. Navigate to the project directory:
    ```bash
    cd alx-backend-javascript/0x05-Node_JS_basic
    ```

3. Install dependencies for Express and other modules:
    ```bash
    npm install express
    ```

4. Run the scripts:
    ```bash
    node 0-main.js
    node 1-stdin.js
    node 2-read_file.js
    node 3-read_file_async.js
    ```

---

## Author

- **Name**: Harrison Eze
- **GitHub Profile**: [harystyleseze](https://github.com/harystyleseze)
