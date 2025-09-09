// Interface for the constructor parameters
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class instance (methods & properties)
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the instance interface
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student: StudentClassInterface = new StudentClass("Ali", "Al-Fahad");
console.log(student.displayName());    // Ali
console.log(student.workOnHomework()); // Currently working
