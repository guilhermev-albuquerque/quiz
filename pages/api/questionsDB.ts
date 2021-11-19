import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";


const questions: QuestionModel[] = [
  new QuestionModel(101, 'Qual animal transmite a doença de Chagas?', [
    AnswerModel.wrong('Abelha'),
    AnswerModel.wrong('Barata'),
    AnswerModel.wrong('Pulga'),
    AnswerModel.correct('Barbeiro')
  ]),

  new QuestionModel(102, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"?', [
    AnswerModel.wrong('Caju'),
    AnswerModel.wrong('Coco'),
    AnswerModel.wrong('Chuchu'),
    AnswerModel.correct('Abóbora')
  ]),

  new QuestionModel(103, 'Qual é o coletivo de cães?', [
    AnswerModel.wrong('Manada'),
    AnswerModel.wrong('Alcateia'),
    AnswerModel.wrong('Rebanho'),
    AnswerModel.correct('Matilha')
  ]),

  new QuestionModel(104, 'Qual é o triângulo com três lados iguais?', [
    AnswerModel.wrong('Equilátero'),
    AnswerModel.wrong('Trapézio'),
    AnswerModel.wrong('Isósceles'),
    AnswerModel.correct('Escaleno')
  ])
]

export default questions
