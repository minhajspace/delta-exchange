import React from 'react'
import './styles/App.css';
import UsersList from './component/List';

const App = () => {
  return (
    <div className="App">
      <h1>FactWise Celebrities List</h1>
     <UsersList/>
    </div>
  );
}

export default App;
