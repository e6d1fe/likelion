const tmi = [
  {
    question: "내가 가장 좋아하는 카페는?",
    answer: "외대 컴플리트 커피",
  },
  {
    question: "내가 어릴 때 살던 동네는?",
    answer: "혜화동",
  },
  {
    question: "내가 서울에서 가장 좋아하는 동네는?",
    answer: "잠원동",
  },
  {
    question: "가장 좋았던 여행지는?",
    answer: "뉴욕",
  },
  {
    question: "내 폰은 다크모드일까 라이트모드일까?",
    answer: "라이트모드",
  },
];

const question = document.getElementById("tmi").firstElementChild;
const answer = document.getElementById("tmi").lastElementChild;
const todaysTmi = tmi[Math.floor(Math.random() * tmi.length)];

question.innerText = "🤔 " + todaysTmi.question;
answer.innerText = todaysTmi.answer;
