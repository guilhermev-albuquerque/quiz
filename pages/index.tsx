import { useState } from 'react'
import Question from '../components/Question'
import AnswerModel from '../model/answer'
import QuestionModel from '../model/question'


const questionMock = new QuestionModel(1, 'Better color?', [
  AnswerModel.wrong('green'),
  AnswerModel.wrong('blue'),
  AnswerModel.wrong('yellow'),
  AnswerModel.correct('black'),
])

export default function Home() {
  const [question, setQuestion] = useState(questionMock)

  function onResponse(index: number) {
    console.log(index);
    setQuestion(question.answerIndex(index))
  }


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Question value={question}
      onResponse={onResponse} />
    </div>
  )
}
