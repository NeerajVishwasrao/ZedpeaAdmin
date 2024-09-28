export interface NewExam {
    leagueId: string,
    examTitle: string,
    description: string,
    grade: string,
    q1: string,
    q2: string,
    q3: string,
    q4: string,
    q5: string,
    q6: string,
    q7: string,
    q8: string,
    q9: string,
    q10: string
  }

  export interface FireNewQuiz {
    pid: string,
    pname: string,
    desc: string,
    grade: string,
    img: string,
    mentor: string,
    status: string,
    subject: string
  }

  export interface FireNewExam {
    leagueid: string,
    grade: string,
    newquiz: FireNewQuiz
  }


