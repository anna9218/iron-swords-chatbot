import Languages from './Languages/Languages';
import Questions from './Questions/Questions';
import './Chatbot.scss';

function Chatbot() {
  return (
    <div>
      <div style={{ paddingBottom: 88 }} className='chatbot-header'>
        SEE THE TRUTH: Israel vs Hamas AI ChatBot
      </div>
      <div className='chatbot-sections'>
        <Languages />
        <div style={{ paddingBottom: 88 }}>Instructions</div>
        <div>
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
