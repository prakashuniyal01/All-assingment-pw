const student = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    grade: 'A',
  };
  
  function displayStudentInfo(student) {
    for (const key in student) {
      console.log(`${key}: ${student[key]}`);
    }
  }
  
  displayStudentInfo(student);
  