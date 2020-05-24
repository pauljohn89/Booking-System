import axios from "axios";

class BookingService {
    retrieveAllBookings() {
        return axios.get(`https://localhost:44329/api/DbBookings`);
        //console.log('hiiii')
    }

    //deleteTodo(name, id) {
    //    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    //    //console.log('hiiii')
    //}

    //retrieveTodo(name, id) {
    //    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    //}

    //updateTodo(name, id, todo) {
    //    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
    //}

    //addTodo(name, todo) {
    //    return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
    //}

}
export default new BookingService()
