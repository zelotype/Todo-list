import axios from 'axios';

const instance = () =>
  axios.create({
    baseURL: 'http://ec2-34-225-4-164.compute-1.amazonaws.com:8080/todo-app-ws',
  });

export const firePost = ({path, body }) => instance().post(path, body);
export const fireGet = ({path, params }) => instance().get(path, { params });
export const firePut = ({path, body }) => instance().put(path, body);
export const fireDelete = ({path }) => instance().delete(path);

export default instance;