const student = {
  fistName : "Michael",
  lastName : "McLean",
  strengths : ['Maths, Arts'],
  exams: {
    midterm: 92,
    final: 88
  },
}
const average = (student.exams.midterm + student.exams.final)/2
console.log(average);