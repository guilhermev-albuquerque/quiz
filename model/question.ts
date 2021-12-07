import { shuffle } from '../functions/arrays';
import AnswerModel from './answer';

export default class QuestionModel {
  #id: number;
  #statement: string;
  #answers: AnswerModel[];
  #guessed: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[],
    guessed = false,
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#guessed = guessed;
  }

  get id() {
    return this.#id;
  }

  get statement() {
    return this.#statement;
  }

  get answers() {
    return this.#answers;
  }

  get guessed() {
    return this.#guessed;
  }

  get notAnswered() {
    return !this.#answers;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true;
    }

    return false;
  }

  answerIndex(index: number): QuestionModel {
    const guessed = this.#answers[index]?.correct;
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;
      const mustReveal = selectedAnswer || answer.correct;
      return mustReveal ? answer.toReveal() : answer;
    });
    return new QuestionModel(this.id, this.statement, answers, guessed);
  }

  scramblesAnswer(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#statement,
      scrambledAnswers,
      this.#guessed,
    );
  }

  static fromObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map((resp) => AnswerModel.fromObject(resp));
    return new QuestionModel(obj.id, obj.statement, answers, obj.guessed);
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answers: this.#answers.map((resp) => resp.toObject()),
      guessed: this.#guessed,
    };
  }
}
