import '../styles/password_generator.css'
import Button from "./Button.jsx";
import {generate} from "random-words";
import {useState} from "react";
import refreshImage from '../assets/images/svg/refresh.svg'

const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/';
let currentUI = 'randomPass';

const defaults = {
  randomPass: {
    password: '',
    numbersChecked: true,
    symbolsChecked: false,
    valueInRange: 20,
    rangeMin: 3,
    rangeMax: 100,
    copied: false,
    generatePass: function () {
      let usedSymbols = [...letters];
      if (this.numbersChecked) usedSymbols = [...usedSymbols, ...numbers];
      if (this.symbolsChecked) usedSymbols = [...specialCharacters, ...usedSymbols];

      this.password = ''
      for (let i = 0; i < this.valueInRange; i++) {
        const randomIndex = Math.floor(Math.random() * usedSymbols.length);
        this.password += usedSymbols[randomIndex];
      }
      return this.password;
    }
  },
  memorablePass: {
    password: '',
    capitalsChecked: false,
    fullWordsChecked: true,
    valueInRange: 4,
    rangeMin: 3,
    rangeMax: 15,
    copied: false,
    generatePass: function () {
      let words = generate({exactly: this.valueInRange, minLength: 4, maxLength: 6});
      if (this.capitalsChecked) words = [...words].map(string => string.toUpperCase());
      return this.fullWordsChecked ? this.password = [...words].join("-") : this.password = [...words].map((string) => string.substring(0, rand(3, 4))).join('-');
    }
  },
  pinPass: {
    password: null,
    valueInRange: 6,
    rangeMin: 3,
    rangeMax: 12,
    copied: false,
    generatePass: function () {
      return this.password = rand(10 ** this.valueInRange, 10 ** (this.valueInRange + 1) - 1);
    }
  }
}

//set initial passwords
Object.keys(defaults).forEach(key => {
  defaults[key].password = defaults[key].generatePass();
})

const getOldPasswords = () => JSON.parse(localStorage.getItem('old-passwords')) ?? [];

const PasswordGenerator = () => {
  const [passObj, setPassObj] = useState({...defaults[currentUI]});
  const [oldPasswords, setOldPasswords] = useState([...getOldPasswords()]);

  const {
    password,
    numbersChecked,
    symbolsChecked,
    capitalsChecked,
    fullWordsChecked,
    valueInRange,
    rangeMin,
    rangeMax,
    copied,
  } = passObj;

  const setUI = ({target}) => {
    currentUI = target.value;
    setPassObj({...defaults[target.value]});
  };

  const updatePass = (obj) => {
    const newObject = {...passObj, ...obj, copied: false};
    newObject.generatePass();
    setPassObj({...newObject});
  }
  const renderCheckbox = (boundProperty, elId, elLabel) => {
    return <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={elId}
        checked={passObj[boundProperty]}
        onChange={(e) => updatePass({[boundProperty]: e.target.checked})}
      />
      <label htmlFor={elId}>{elLabel}</label>
    </div>
  }
  const renderRange = () => {
    return <div className="range">
      <span>Length</span>
      <input
        type="range"
        value={valueInRange}
        min={rangeMin}
        max={rangeMax}
        onChange={(e) => updatePass({valueInRange: parseInt(e.target.value)})}
      />

      <span>{valueInRange}</span>
    </div>
  }

  const syncStoragePasswords = (password) => {
    let pastPasswords = JSON.parse(localStorage.getItem('old-passwords'));
    if (!pastPasswords) {
      localStorage.setItem('old-passwords', JSON.stringify([password]));
      return [password];
    }
    if (pastPasswords.includes(password)) {
      pastPasswords = pastPasswords.filter(item => item !== password);
    }
    if (pastPasswords.length >= 10) {
      pastPasswords.shift();
    }

    pastPasswords.push(password);
    localStorage.removeItem('old-passwords');
    localStorage.setItem('old-passwords', JSON.stringify(pastPasswords));
    return [...pastPasswords];
  }

  const handleCopy = () =>
    navigator.clipboard.writeText(password).then(() => {
      const oldPasswords = syncStoragePasswords(passObj.password);
      setOldPasswords([...oldPasswords]);
      setPassObj({...passObj, copied: true});
    });

  const generateSpan = (string) => [...`${string}`].map((char, index) => {
    if (numbers.includes(parseInt(char))) return <span className="digit" key={index}>{char}</span>
    if (letters.includes(char.toLowerCase())) return <span className="letter" key={index}>{char}</span>
    return <span className="symbol" key={index}>{char}</span>
  })

  const renderOldPasswords = (array) => {
    return <div className="old-passwords-wrapper">
      <div>OldPasswords:</div>
      <div className="old-passwords">
        {array.map(((item, index) =>
            <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  }

  return (
    <div className="pass-container">
      <div className="pass">
        <div className="password-container">
          <div>Generated password:</div>
          <div className="pass-output">{generateSpan(password)}</div>
        </div>
        <div className="pass-input">
          <div>Password type:</div>
          <div className="pass-input-row">
            <div className="select-wrapper">
              <select onChange={(e) => setUI(e)}>
                <option value="randomPass">Random password</option>
                <option value="memorablePass">Memorable password</option>
                <option value="pinPass">PIN</option>
              </select>
            </div>
            <Button className="pass-reset-btn" onClick={() => updatePass({...defaults[currentUI]})}>
              <img src={refreshImage} alt="refresh"/>
            </Button>
            <Button className="pass-copy-btn" onClick={handleCopy}>Copy password</Button>
          </div>
          <div>
          </div>
        </div>
        <div className="copy-indicator-wrapper">
          <div className={`copy-indicator${copied ? ' copied' : ''}`}>
            {copied ? 'Password copied' : 'Password not copied'}
          </div>
        </div>
        <div className="bonus-options">
          {valueInRange !== undefined && renderRange()}
          {numbersChecked !== undefined && renderCheckbox('numbersChecked', "num", "Numbers")}
          {symbolsChecked !== undefined && renderCheckbox('symbolsChecked', "sym", "Symbols")}
          {capitalsChecked !== undefined && renderCheckbox('capitalsChecked', "cap", "Capitalize")}
          {fullWordsChecked !== undefined && renderCheckbox('fullWordsChecked', "fullw", "Full words")}
        </div>
      </div>
      {oldPasswords.length !== 0 && renderOldPasswords(oldPasswords)}
    </div>
  );
}

export default PasswordGenerator;
