import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {

  const numbers = [1,2,3,4,5,55,66,77]
  console.log(numbers)
  const result = numbers.map(function(num){
    return num + 2
  })
  console.log(result)

  return <Route path="/:category?" component={NewsPage} />;
  
};

export default App;
