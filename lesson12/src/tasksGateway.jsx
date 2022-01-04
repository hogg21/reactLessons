
const baseUrl = 'https://61b7b29564e4a10017d18c6f.mockapi.io/api/v1/tasks';
export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;utf-8'
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Fail to create task')
        }
    })
}
export const fetchTasksList = () =>
  fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
export const updateTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;utf-8'
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Fail to create task')
        }
    })
}
export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    }).then(response => {
        if (!response.ok) {
            throw new Error('Fail to delete task')
        }
    })
}