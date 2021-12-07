import { useState, useEffect } from 'react';
import Quiz from '../components/Quiz';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';

const questionMock = new QuestionModel(1, 'Qual melhor time de PE?', [
  AnswerModel.wrong('Íbis'),
  AnswerModel.wrong('Timbu'),
  AnswerModel.wrong('Popoti'),
  AnswerModel.correct('Santa Cruz'),
]);

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(questionMock);

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await resp.json();
    setQuestionsIds(questionsIds);
  }

  async function loadQuestions(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.fromObject(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestions(questionsIds[0]);
  }, [questionsIds]);

  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion);
  }

  function nextStep() {}

  return (
    <Quiz
      question={question}
      last={true}
      answeredQuestion={answeredQuestion}
      nextStep={nextStep}
    />
  );
}
