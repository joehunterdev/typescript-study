import { QUIZ_DATA } from "./constants";
import { Quiz, User, Question } from "./blueprint";

const user = new User("Joey");

const questions = QUIZ_DATA.map((q) => {
  return new Question(q.question, q.options, q.answer);
});

new Quiz(questions).run(); //loop here

//console.log(`Congratulations ${user.name}, you scored ${user.score}!`);