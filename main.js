import React from 'react'; // import potrzebnych bibliotek
import ReactDOM from 'react-dom';  // import potrzebnych bibliotek
import List from '.test_repo_1/list.jsx';
import Comp1 from './comp1.jsx';
import Buto from "./button.jsx";
import Text from "./text.jsx";
import Paragraph from "./paragraph.jsx";




ReactDOM.render(
  <div>
    <Comp1/>
    <Buto/>
    <List/>
    <Test/>
    <Paragraph/>
  </div>

 
, document.getElementById('app'));
