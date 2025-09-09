# TypeScript Project: Incremental Learning Exercises

## Overview

This repository contains **incremental exercises** to learn core **TypeScript** concepts:

- Basic types
- Interfaces
- Classes
- DOM manipulation
- Generics
- Namespaces
- Declaration merging
- Ambient namespaces
- Basic nominal typing

Each task builds on prior ones and must compile without TypeScript errors.

---

## Learning Objectives

- Basic types in TypeScript  
- Interfaces, classes, and functions  
- Working with the DOM in TypeScript  
- Generic types  
- Using namespaces and merging declarations  
- Using an ambient namespace to type an external library  
- Basic nominal typing with TypeScript

---

## Requirements

- **Allowed editors**: `vi`, `vim`, `emacs`, `Visual Studio Code`  
- **All files** must end with a newline  
- Code transpiles on **Ubuntu 18.04**  
- **TS scripts checked** with `Jest 24.9.*`  
- A `README.md` at the project root is **mandatory**  
- Use `.ts` extension when possible  
- The **TypeScript compiler must show no warnings or errors**  
- Configuration files provided by the project:
  - `package.json`
  - `.eslintrc.js`
  - `tsconfig.json`
  - `webpack.config.js`

---

## Project Structure

task_0 -> Student interface + DOM table (copy all 4 config files here)
task_1 -> Teacher/Directors, printTeacher, StudentClass (use provided configs)
task_2 -> Advanced types and functions
task_3 -> Ambient namespaces (RowID, RowElement, crud.js, crud.d.ts, main.ts)
task_4 -> Namespaces & declaration merging
task_5 -> Brand convention & nominal typing


---

## Tasks Summary

### **Task 0** (`task_0/js/main.ts`)
- Define `Student` (firstName, lastName, age, location)
- Create two students and a `studentsList`
- Render a table in **Vanilla JS** with first name and location
- Webpack must report: _"No type errors found"_

---

### **Task 1** (`task_1/js/main.ts`)
- `Teacher` interface:
  - `firstName`, `lastName` (readonly)
  - `fullTimeEmployee`
  - `yearsOfExperience?` (optional)
  - `location`
  - Allow additional string keys with any value
- `Directors` extends `Teacher` with `numberOfReports`
- `printTeacher` function and `printTeacherFunction` interface (e.g., “J. Doe”)

---

### **Task 4** (`task_1/js/main.ts`)
- `StudentClass` with constructor(firstName, lastName)
- Methods:
  - `workOnHomework()` → “Currently working”
  - `displayName()` → firstName
- Describe class and constructor through interfaces
- Must compile with no TypeScript errors

---

### **Task 5** (`task_2/js/main.ts`)
- `DirectorInterface` and `TeacherInterface` (workFromHome, getCoffeeBreak, role-specific work)
- `Director` and `Teacher` classes implement required strings
- `createEmployee(salary: number | string)`:
  - Returns `Teacher` if salary < 500
  - Otherwise returns `Director`

---

### **Task 6** (`task_2/js/main.ts`)
- `isDirector` type predicate
- `executeWork` calls appropriate method based on role

---

### **Task 7** (`task_2/js/main.ts`)
- `Subjects = 'Math' | 'History'`
- `teachClass(todayClass)` → “Teaching Math” or “Teaching History”

---

### **Task 8** (`task_3`)
- `interface.ts`:
  - `type RowID = number`
  - `interface RowElement { firstName; lastName; age? }`
- Copy `crud.js` and declare types in `crud.d.ts`
- `main.ts`:
  - Triple-slash reference to `crud.d.ts`
  - Import types and CRUD functions
  - Demonstrate insert/update/delete
  - Compile with no TypeScript errors

---

### **Task 9** (`task_4/js/subjects`)
- `Subjects` namespace:
  - `Teacher` interface
  - `Subject` class with `setTeacher`
- `Cpp`, `Java`, `React` classes:
  - Add optional `experienceTeachingX` to `Teacher` via declaration merging
  - Implement:
    - `getRequirements()`
    - `getAvailableTeacher()` (returns “No available teacher” when not experienced)

---

### **Task 10** (`task_5/js/main.ts`)
- `MajorCredits` and `MinorCredits`:
  - Contain `credits` and a **brand property**
- `sumMajorCredits()` and `sumMinorCredits()`:
  - Add credits and return the branded type

