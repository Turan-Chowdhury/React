import React from 'react'

import Layout from '../components/layouts/Layout'
import TaskEdit from '../components/tasks/TaskEdit'

export default function TaskEditPage(props) {
    return (
        <Layout>
            <TaskEdit props={props} />
        </Layout>
    )
}
