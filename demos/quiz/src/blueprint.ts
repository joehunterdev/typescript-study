// User
interface IUser {
  name: string;
  score: number;
}

class User implements IUser {
  name: string;
  score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }
}

// Question
interface IQuestion {
  question: string;
  options: string[];
  answer: string;
}

class Question implements IQuestion {
  question: string;
  options: string[];
  answer: string; //TODO: make private

  constructor(question: string, options: string[], answer: string) {
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

// Quiz
interface IQuiz {
  questions: Question[]; // Array of question objects
  answers: string[]; // Array of user's answers
  score: number; // Array of user's answers
}

import * as readline from "readline";

class Quiz implements IQuiz {
  questions: Question[];
  answers: string[] = []; // Array of user's answers
  score: number = 0; // Array of user's answers

  constructor(questions: Question[]) {
    this.questions = questions;
  }

  async run() {
    for (let i = 0; i < this.questions.length; i++) {
      await this.showQuestion(i);
      this.checkAnswer(i);
    }
  }

  private showQuestion = (i: number): Promise<string> => {
    let display =
      this.questions[i].question +
      "\r\n" +
      JSON.stringify(this.questions[i].options);

    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(display, (userInput: string) => {
        rl.close();
        this.answers[i] = userInput; // Store the user's input in the answers[] array

        resolve(userInput);
      });
    });
  };

  //TODO: When to check answer?
  public checkAnswer(i: number) {
    console.log("You answers: " + this.answers);
    if (this.answers[i]) {
      console.log("You answers: " + this.answers);
      if (this.answers[i] === this.questions[i].answer) {
        this.score++;
        console.log("Correct!");
        console.log("Your score is: " + this.score);
      } else {
        console.log("Incorrect!");
      }
    }
  }
}

export { User, Question, Quiz };
