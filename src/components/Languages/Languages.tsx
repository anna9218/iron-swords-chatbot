import { languages } from '../constants.js';
import './Languages.scss';

function Languages() {
  return (
    <div style={{ paddingBottom: 24 }}>
      <div style={{ paddingBottom: 24 }}>Languages</div>
      {languages.map((language) => (
        <button className='language-button'>{language.text}</button>
      ))}
    </div>
  );
}

export default Languages;
