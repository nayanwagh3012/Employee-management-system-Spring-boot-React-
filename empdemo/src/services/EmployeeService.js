import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React from "react";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService extends React.Component {
  constructor() {
    super(); // You need to call super() in the constructor of a subclass.
    this.state = {};
    this.setState = this.setState.bind(this); // Bind the setState function to the instance.
  }
  async getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_REST_API_URL);
  }

  async createEmployee(employee) {
    try {
      const response = await axios.post(
        `${EMPLOYEE_BASE_REST_API_URL}/addEmp/`,
        employee
      );
      return response.data;
    } catch (error) {
      console.error("Error creating employee:", error);
      throw error;
    }
  }

  async getEmployeeById(employeeId) {
    return await axios.get(
      EMPLOYEE_BASE_REST_API_URL + "/findEmp/" + employeeId
    );
  }

  async updateEmployee(employeeId, employee) {
    return await axios.put(
      `${EMPLOYEE_BASE_REST_API_URL}/update/${employeeId}`,
      employee
    );
  }

  async deleteEmployee(employeeId) {
    try {
      const response = await axios.delete(
        `${EMPLOYEE_BASE_REST_API_URL}/removeEmp/${employeeId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting employee:", error);
      throw error;
    }
  }
}

export default new EmployeeService();
