import { IQuiz } from '../interfaces/IQuiz';

class Quiz  implements IQuiz {

    questions: IQuestion[]; //array of questions
    answers: string[]; //array of options
    checkAnswer(answer: string): boolean; //check if answer is correct
    getQuestion(): string; //get question
    
    // constructor(public question: string, public answer: string, public score: number) {
    //     this.question = question;
    //     this.answer = answer;
    //     this.score = score;
    // }

    // getQuestion(): string {
    //     return this.question;
    // }
    // getAnswer(): string {
    //     return this.answer;
    // }
    // incrementScore(): number {
    //     this.score += 1;
    //     return this.score;
    // }

}

export { Quiz };