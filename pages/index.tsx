import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'


export default function Home() {
  const teste = new QuestionModel(1, 'Better color?', [
    AnswerModel.wrong('green'),
    AnswerModel.wrong('blue'),
    AnswerModel.wrong('yellow'),
    AnswerModel.correct('black'),
  ])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question value={teste} />
    </div>
  )
}
