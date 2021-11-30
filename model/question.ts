import { shuffle } from "../functions/arrays"
import AnswerModel from "./answer"

export default class QuestionModel {
  #id: number
  #utterance: string
  #answers: AnswerModel[]
  #guessed: boolean

  constructor(id: number, utterance: string, answers: AnswerModel[], guessed = false){
    this.#id = id
    this.#utterance = utterance
    this.#answers = answers
    this.#guessed = guessed
  }

  get id() {
    return this.#id
  }

  get utterance() {
    return this.#utterance
  }

  get answers() {
    return this.#answers
  }

  get guessed() {
    return this.#guessed
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true
    }

    return false
  }

  answerIndex(index: number): QuestionModel {
    const guessed = this.#answers[index]?.correct
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i
      const mustReveal = selectedAnswer || answer.correct
      return mustReveal ? answer.toReveal() : answer
    })
    return new QuestionModel(this.id, this.utterance, answers, guessed)
  }

  scramblesAnswer(): QuestionModel {
    let scrambledAnswers = shuffle(this.#answers)
    return new QuestionModel(this.#id, this.#utterance, scrambledAnswers, this.#guessed)
  }

  toObject() {
    return {
      id: this.#id,
      utterance: this.#utterance,
      answers: this.#answers.map(resp => resp.toObject()),
      guessed: this.#guessed
    }
  }
}
