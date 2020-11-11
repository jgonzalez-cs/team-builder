import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Form data
const peopleList = [
  { name: 'Elon Musk', type: 'Engineer/Tesla CEO' },
  { name: 'Arnold Schwazenegger', type: 'Bodybuilder/Mr.Olympia' },
  { name: 'Alexander Hamilton', type: 'Founding Father/Secretary of Treasury' }
];

// Object containing two empty strings 
const initialFormValues = { name: '', type: '' };

function SimpleForm() {
  /* our peopleList goes to State, names will hold the array of objects */
  const [names, setNames] = useState(peopleList);
  const [formValues, setFormValues] = useState(initialFormValues);

  return <div>This is my form</div>
}

// render(
//   <>
//     <SimpleForm />
//     <App />
//   </>
//   , document.querySelector('#root')
// )


ReactDOM.render(
  peopleList,
  document.getElementById('root')
);




// ReactDOM.render(
//   <React.StrictMode>
//     <SimpleForm />
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
