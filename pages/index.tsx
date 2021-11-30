import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'


export default function Home() {
  const teste = new QuestionModel(1, 'better color', [
    AnswerModel.wrong('green'),
    AnswerModel.wrong('blue'),
    AnswerModel.wrong('yellow'),
    AnswerModel.correct('black'),
  ])

  return (
    <Question value={teste} />
  )
}
