export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  // Filter students by city and update their grades
  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeEntry = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeEntry ? gradeEntry.grade : 'N/A',
      };
    });
}
