import './App.css'
import { useState } from 'react';
import SearchBar from './Components/SearchBar'
import LangSwitcher from './Components/LangSwitcher'
import Coffe from './Components/Coffe';
import TermsConditions from './Components/TermsConditions';
import LoginForm from './Components/LoginForm';
import FeedbackForm from './Components/FeedbackForm';
import * as Yup from "yup";


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

  // FeedbackForm
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(15, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string().min(5, "Too short").max(256, "Too long").required("Required"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
  });

  const initialValues = {
    username: "",
    email: "",
    message: "",
    level: "good",
  };

  const handleSubmitFeedback = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  //---------------------------------------------------------------------------------------

  return (
    <>
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang}/>
      <Coffe value={coffeeSize} onSelect={setCoffeeSize}/>
      <TermsConditions value={hasAccepted} onSelect={setHasAccepted}/>
      <LoginForm value={values} handleChange={handleChange} handleSubmit={handleSubmit} />
      <FeedbackForm feedbackSchema={FeedbackSchema} initialValues={initialValues} handleSubmit={handleSubmitFeedback}/>
    </>
  )
}

export default App
