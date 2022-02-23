import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";

class AdminService {
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL + "/admins/allStudents");
  }
  createAdmin(admin) {
    return axios.post(STUDENT_API_BASE_URL + "/admins", admin);
  }
  updateAdmin(admin, adminId) {
    return axios.put(STUDENT_API_BASE_URL + "/admins/" + adminId, admin);
  }
  findByEmailAndPassword(admin) {
    return axios.post(STUDENT_API_BASE_URL + "/admins/login", admin);
  }
  getTimeTable() {
    return axios.get(STUDENT_API_BASE_URL + "/admin/time-table");
  }

  sendFeedback(feedbackObj) {
    return axios.post(STUDENT_API_BASE_URL + "/admin/feedback", feedbackObj);
  }
}
export default new AdminService();
