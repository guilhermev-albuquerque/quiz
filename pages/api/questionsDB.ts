import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";


const questions: QuestionModel[] = [
  new QuestionModel(306, 'Qual animal transmite a doença de Chagas?', [
    AnswerModel.wrong('Abelha'),
    AnswerModel.wrong('Barata'),
    AnswerModel.wrong('Pulga'),
    AnswerModel.correct('Barbeiro')
  ]),

  new QuestionModel(306, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum" ?', [
    AnswerModel.wrong('Caju'),
    AnswerModel.wrong('Coco'),
    AnswerModel.wrong('Chuchu'),
    AnswerModel.correct('Abóbora')
  ])
]

export default questions
