export interface ReqQuestion {
    subject: string,
    author: string,
    grade: string
}

export interface Question {
  qnumber: string,
  title: string,
  topic: string,
  qdesc: string,
  diagram: string,
  template: string,
  grade: string,
  qsubject: string,
  author: string
}

export interface NewQuestion {
  qnumber: string,
  title: string,
  topic: string,
  qdesc: string,
  diagram: string,
  template: string,
  grade: string,
  qsubject: string,
  author: string,
  qstatus: string,
  comments: string
}

export interface UpdateQuestion {
  qnumber: string,
  title: string,
  topic: string,
  description: string,
  qstatus: string,
  comments: string
}

export interface FireQuestion {
  status: string,
  sessionid: string
}

export interface FireQset {
  userid: string,
  pid: string,
  date: string,
  status: string,
  qset: FireQuestion[]
}