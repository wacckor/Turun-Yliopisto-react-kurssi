import axios from 'axios'
//const baseUrl = 'http://localhost:3001/persons'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const addNew =(nameObject) => {
    const request = axios.post(baseUrl, nameObject)
    return request.then(response => response.data)
}

const deleteById = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}


export default {deleteById, addNew, getAll}