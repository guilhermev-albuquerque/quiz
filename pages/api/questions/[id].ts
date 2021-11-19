import questions from "../questionsDB"

export default (req, res) => {
  const selectedId = +req.query.id

  const onlyQuestion = questions.filter(question => question.id === selectedId)

  if (onlyQuestion.length === 1) {
    const selectedQuestion = onlyQuestion[0].scramblesAnswer()
    res.status(200).json(selectedQuestion.toObject())
  } else {
    res.status(200).json(questions[0].toObject())
  }
}
