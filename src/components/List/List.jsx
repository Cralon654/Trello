import React from 'react';
import Title from '../Title/Title.jsx';
import Task from '../Task/Task.jsx';
import InputMore from '../InputMore/InputMore.jsx'
import '../List/List.css'
const List = (props) => {

  return (
 
    <div class="card border-light mb-3" style="max-width: 18rem;">
      <div class="card-header"><Title/></div>
      <div class="card-body">
        <h5 class="card-title">Light card title</h5>
        <p class="card-text"><Task/></p>
        <InputMore/>
      </div>
    </div>
  )
}

export default List