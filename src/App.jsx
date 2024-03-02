import './App.css'
import { useState } from 'react';
import SearchBar from './Components/SearchBar'
import LangSwitcher from './Components/LangSwitcher'
import Coffe from './Components/Coffe';
import TermsConditions from './Components/TermsConditions';
import LoginForm from './Components/LoginForm';

function App() {
  // Lang
  const [lang, setLang] = useState("uk");
  //-------------------------------------

  // Coffee
  const [coffeeSize, setCoffeeSize] = useState("small");
  //----------------------------------------------------

  // Checkbox
  const [hasAccepted, setHasAccepted] = useState(false);
  //----------------------------------------------------

  // LoginForm
  const [values, setValues] = useState({
    login: "",
    password: ""
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
  evt.preventDefault();

  localStorage.setItem('userData', JSON.stringify(values))

  setValues({
      login: "",
      password: "",
  });
  };
  //------------------------------------------------------

  return (
    <>
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang}/>
      <Coffe value={coffeeSize} onSelect={setCoffeeSize}/>
      <TermsConditions value={hasAccepted} onSelect={setHasAccepted}/>
      <LoginForm value={values} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default App
