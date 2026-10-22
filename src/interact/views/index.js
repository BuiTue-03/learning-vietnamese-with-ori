/** Which function draws which screen. */
import { homeView } from "./home.js";
import { lessonView } from "./lesson.js";
import { dialogueView } from "./dialogue.js";
import { quizView } from "./quiz.js";
import { typingView } from "./typing.js";
import { resultView } from "./result.js";
import { meView } from "./me.js";
import { authorView } from "./author.js";

export const VIEWS = {
  home: homeView, lesson: lessonView, dialogue: dialogueView, quiz: quizView,
  typing: typingView, result: resultView, me: meView, author: authorView
};
