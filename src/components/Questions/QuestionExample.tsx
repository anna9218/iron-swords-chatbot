import './Question.scss';

interface Props {
  text: string;
}

function QuestionExample({ text }: Props) {
  return (
    <div className='question-example'>
      <button className='question-example--button'>{text}</button>
    </div>
  );
}

export default QuestionExample;
