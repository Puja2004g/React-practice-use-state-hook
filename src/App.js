import React from "react";
import { useState } from "react";

function GoalForm(props){
  const [formData, setFormData] = useState({goal:"", by:"today"});

  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "", by: ""});
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Goal" name="goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" placeholder="by" name="by" value={formData.by} onChange={changeHandler} />
        <button disabled={!formData.goal}>Submit Goal</button>
      </form>
    </>
  )
}

function ListOfGoals(props){
  return(
    <ul>
      {props.allGoals.map((g)=>(
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
}

function App(){
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals,goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals}/>
    </div>
  )
}

export default App;