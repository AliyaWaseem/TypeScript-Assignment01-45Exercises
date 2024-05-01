//Exercise:21
// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

// Datatype of student object:
interface student {
    myName: string
    fatherName: string
    Batch: number
    rollNo: number
    onSite: boolean
}

// student object values:
let object: student = {
    myName: "Aliya",
    fatherName: "Muhammad Azeem",
    Batch: 1,
    rollNo: 478713,
    onSite: true,
}
console.log(object);

// Datatype of car object:
interface car {
    Brand: string
    Model: string
    Year: number
    Automatic: boolean
}

// Car object values:
let car = {
    Brand: "Honda",
    Model: "Civic",
    Year: 2024,
    Automatic: true,
}

console.log(car);
