export default class QuestionModel {
  #id: number
  #utterance: string
  #answers: any[]
 // #answered: boolean
  #guessed: boolean

  constructor(id: number, utterance: string, answers: any[], guessed: boolean){
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
}
