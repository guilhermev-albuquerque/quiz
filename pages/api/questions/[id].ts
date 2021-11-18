import questions from "../questionsDB"

export default (req, res) => {
  res.status(200).json(questions[0])
}
