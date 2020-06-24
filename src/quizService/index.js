const qBank = [
  {
    question:
      "In which standard did Parth failed ?",
    answers: ["2", "4", "8", "10"],
    correct: "4",
    questionId: "099099"
  },
  {
    question:
      'How many cups of tea did Parth used to drink everyday?',
    answers: ["3", "2", "6", "10"],
    correct: "6",
    questionId: "183452"
  },
  {
    question:
      "What kind of songs does Parth vibe to?",
    answers: ["English", "Bhojpuri", "Hindi", "All of them"],
    correct: "Bhojpuri",
    questionId: "267908"
  },
  {
    question: "Which of these is Parth's real lob?",
    answers: [
      "Rajni",
      "Aparna",
      "Memes",
      "None"
    ],
    correct: "Memes",
    questionId: "333247"
  },
  {
    question: "Parth's favourite WWE wrestler ?",
    answers: ["John Cena", "The Rock", "Randy Orton", "Hulk Hogan"],
    correct: "John Cena",
    questionId: "496293"
  },
  {
    question:
      "Which of the following is his favourite Meme page ?",
    answers: [
      "vaivahik.memes",
      "Adultgram",
      "Error69",
      "RVCJ"
    ],
    correct: "RVCJ",
    questionId: "588909"
  },
  {
    question:
      "Parth's favoourite dream bike ?",
    answers: ["Yamaha RX 100", "Kawasaki Ninja 650", "Harley Davidson", "Suzuki Hayabusa"],
    correct: "Yamaha RX 100",
    questionId: "648452"
  },
  {
    question: "Which of these state would Parth prefer for his next holiday trip ?",
    answers: ["Madhya Pradesh", "Kerala", "Orrisa", "Rajasthan"],
    correct: "Rajasthan",
    questionId: "786649"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
