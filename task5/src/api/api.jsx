import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getTasks = async () => {
  try {
    const resp = await axios.get(`${API_URL}/tasks`);
    return resp.data;
  }
  catch (err) {
    throw new Error(`Error: ${err.message}`);
  }
}

export const createTask = async (taskJSON) => {
  try {
    const resp = await axios.post(`${API_URL}/tasks`, taskJSON);
    return resp.data;
  }
  catch (err) {
    throw new Error(`Error: ${err.message}`);
  }
}

export const getTaskHeavy = async (idJSON) => {
  try {
    const resp = await axios.get(`${API_URL}/tasks/${idJSON.id}`);
    return resp.data;
  }
  catch (err) {
    throw new Error(`Error: ${err.message}`);
  }
}

export const updateStatus = async (id, statusJSON) => {
  try {
    const resp = await axios.patch(`${API_URL}/tasks/${id}/status`, statusJSON)
    return resp.data;
  }
  catch (err) {
    throw new Error(`Error: ${err.message}`)
  }
}

export const deleteStatus = async (id) => {
  try {
    const resp = await axios.delete(`${API_URL}/tasks/${id}`);
    return resp.data;
  }
  catch (err) {
    throw new Error(`Errpr: ${err.message}`)
  }
}

export const getLogs = async () => {
  try {
    const resp = await axios.get(`${API_URL}/logs`);
    return resp.data;
  }
  catch (err) {
    throw new Error(`Error: ${err.message}`);
  }
}