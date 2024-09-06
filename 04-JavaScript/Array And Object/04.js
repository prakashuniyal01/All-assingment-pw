const students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
  ];
  
  // a) Add a Student
  function addStudent(student) {
    students.push(student);
  }
  
  // b) Update Student Information
  function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    }
  }
  
  // c) Delete a Student
  function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
      students.splice(index, 1);
    }
  }
  
  // d) List All Students
  function listAllStudents() {
    console.log(students);
  }
  
  // e) Find Students by Grade
  function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
  }
  
  // f) Calculate Average Age
  function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
  