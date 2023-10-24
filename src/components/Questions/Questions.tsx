import QuestionExample from './QuestionExample';
import './Question.scss';
import { questions } from '../constants';

function Questions() {
  return (
    <>
      <div style={{ paddingBottom: 24 }}>Examples:</div>
      <div className='questions'>
        {questions.map((questionsObj) =>
          questionsObj.questions.map((question) => (
            <QuestionExample text={question.text}></QuestionExample>
          ))
        )}
      </div>
    </>
  );
}

export default Questions;
