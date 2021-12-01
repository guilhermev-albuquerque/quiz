import QuestionModel from "../model/question";
import styles from "../styles/Question.module.css"
import Utterance from "./Utterance";

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value

  return (
    <div className={styles.question}>
      <Utterance text={question.utterance} />
    </div>
  )
}
