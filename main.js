import React from 'react'; // import potrzebnych bibliotek
import ReactDOM from 'react-dom';  // import potrzebnych bibliotek
import List from '.test_repo_1/list.jsx';
import Comp1 from './comp1.jsx';
import Buto from "./button.jsx";





ReactDOM.render(
  <div>
    <Comp1/>
    <Buto/>
    <List/>
  </div>

 
, document.getElementById('app'));