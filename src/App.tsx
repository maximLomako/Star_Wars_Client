import React, {useState} from 'react';
import './App.css';
import {TextAreaField} from "./components/TextAreaField/TextAreaField";
import {ItemsList} from "./components/ItemsList/ItemsList";

const App = () => {

  const [state, setState] = useState<string>('');
  const changeInputValue = (newValue: string) => {
    setState(newValue);
  }

  return (
    <div className="App">
      <TextAreaField
        value={state}
        changeInputValue={changeInputValue}
      />
      <ItemsList />
    </div>
  );
}

export default App;
