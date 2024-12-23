import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'
import ReportAdmin from '../Feedback/ReportAdmin'
const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask/>
            <ReportAdmin/>
        </div>
    )
}

export default AdminDashboard

