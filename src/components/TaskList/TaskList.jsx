
import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import ComplitTask from './ComplitTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return <div>No tasks available or data is loading...</div>; // Fallback for undefined or invalid data
  }

  return (
    <div
      id="tasklist"
      className="h-[50%] gap-5 flex items-center justify-start w-full mt-10 p-7 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        } else if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        } else if (elem.complete) {
          return <ComplitTask key={idx} data={elem} />;
        } else if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        } else {
          return null; // Handles cases where none of the conditions match
        }
      })}
    </div>
  );
};

export default TaskList;
