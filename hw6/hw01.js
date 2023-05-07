var grade;

function grading(studentScore) {
  var altered = parseInt(studentScore / 10);
  switch (altered) {
    case 10:
    case 9:
      grade = "A";
      console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
      break;
    case 8:
    case 7:
      grade = "B";
      console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
      break;
    case 6:
      grade = "C";
      console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
      break;
    case 5:
      grade = "D";
      console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
      break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      grade = "F";
      console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
      break;
    default:
      console.log("점수 입력값이 올바르지 않습니다.");
  }
}
