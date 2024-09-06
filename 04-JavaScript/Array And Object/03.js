const student = { name: 'John', age: 20 };

// a) Prevent further extensions of the student object
Object.preventExtensions(student);

// b) Check if student object is extensible
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher
const teacher = { subject: 'Math' };

// d) Seal the teacher object
Object.seal(teacher);

// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// f) Print extensibleStatus and sealedStatus
console.log({ extensibleStatus, sealedStatus });
