import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CounterComponent from '../components/counter/CounterComponent';
import { getTaskDataAction } from '../redux/actions/taskAction';
import Layout from './../components/layouts/Layout';
import TaskCreate from './../components/tasks/TaskCreate';
import TaskList from './../components/tasks/TaskList';

function TaskListPage() {

  const [isCreateMode, setIsCreateMode] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.taskReducer.tasks);

  useEffect(() => {
    dispatch(getTaskDataAction())
  }, []);

  return (
    <div className="App">
      <Layout>
        
        <br/> <br/> 
        <CounterComponent />
        <br/> 
          
        {
          isCreateMode && (
            <TaskCreate />
          )
        }

        <TaskList tasks={tasks} createMode={() => setIsCreateMode(isCreateMode? false : true )} />

      </Layout>
    </div>
  );
}

export default TaskListPage;
