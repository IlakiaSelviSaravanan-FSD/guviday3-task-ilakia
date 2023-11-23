let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

// Convert objects to JSON strings with sorted keys
let jsonString1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let jsonString2 = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted JSON strings
if (jsonString1 === jsonString2) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}