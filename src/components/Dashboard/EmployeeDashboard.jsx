import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import Report from '../Feedback/Report'


const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen' >
        <Header  changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
        <Report/>
    </div>
  )
}

export default EmployeeDashboard


