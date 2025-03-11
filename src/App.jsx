import React from 'react'
import Form from './components/Form'
//import { accordionData } from './utils/content.js';
//import Accordion from './components/Accordion';
//import Testimonials from './components/Testimonials'
//import HiddenSearchBar from './components/HiddenSearchBar'
// import ToggleBackgroundColor from './components/ToggleBackgroundColor'
//import Calculator from './components/Calculator'
//import Meals from './components/Meals'
//import Todo from './components/Todo'
//import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      {/* <Counter /> 
      <Todo />
      <Meals /> 
      <Calculator /> 
      <ToggleBackgroundColor />
      <HiddenSearchBar />  
      <Testimonials />
      <div className='accordion'>
        {accordionData.map(({title, content}) => (
          <Accordion title={title} content={content}/>
        ))}
      </div>*/}
      <Form />
    </div>
  )
}

export default App