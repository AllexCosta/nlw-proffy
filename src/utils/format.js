const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Portugês",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function getSubject(subjectNumber) {
  const index = +subjectNumber -1;
  return subjects[index]
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}