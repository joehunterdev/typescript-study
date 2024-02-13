interface IQuiz {

    questions: IQuestion[]; //array of questions
    answers: string[]; //array of options
    checkAnswer(answer: string): boolean; //check if answer is correct
    getQuestion(): string; //get question
}

export { IQuiz };
//need a function to create a quiz