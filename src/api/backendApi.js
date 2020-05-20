import { firePost, fireGet, firePut, fireDelete } from './baseApi';

export const login = (email, pass) =>
  firePost({
    path: '/login',
    body: {
      email: email,
      password: pass,
    },
  });

  export const getMemberById = id =>
  fireGet({
      path: `/members/${id}`,
  })

  export const createMember = newUser =>
  firePost({
      path: '/members',
      body: {
          ...newUser
      }
  })

  export const addFriend = (memberId, friendId) =>
  firePut({
      path: `/members/${memberId}/${friendId}`,
  })

  export const deleteFriend = (memberId, friendId) =>
  fireDelete({
      path: `/members/${memberId}/${friendId}`,
  })
  
  export const getAllTask = memberId =>
  fireGet({
      path: `/members/${memberId}/tasks`
  })

  export const createTask = (memberId, task) =>
  firePost({
      path: `/members/${memberId}/tasks`,
      body: {
          ...task
      }
  })

  export const updateTask = (memberId, task) =>
  firePut({
      path: `/members/${memberId}/tasks/${task.id}`,
      body: {
          ...task
      }
  })

  export const deleteTask = (memberId, taskId) =>
  fireDelete({
      path: `/members/${memberId}/tasks/${taskId}`,
  })




