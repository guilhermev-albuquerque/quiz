import { useState } from 'react';
import Question from '../components/Question';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';

const questionMock = new QuestionModel(1, 'Qual melhor time de PE?', [
  AnswerModel.wrong('Íbis'),
  AnswerModel.wrong('Timbu'),
  AnswerModel.wrong('Popoti'),
  AnswerModel.correct('Santa Cruz'),
]);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  function onResponse(index: number) {
    setQuestion(question.answerIndex(index));
  }

  function timeOver() {
    if (question.notAnswered) {
      setQuestion(question.answerIndex(-1));
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Question value={question} onResponse={onResponse} timeOver={timeOver} />
    </div>
  );
}
