let sumOfGrades = scoreArray[0] + scoreArray[1] + scoreArray[2] + scoreArray[3];
let average = Math.round(sumOfGrades / 4);
result.innerHTML = `The grade average for all of your exams this semester is: ${average}`;
