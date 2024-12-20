import axios from "axios";


export class TodosPage {
  constructor(token) {
    this.baseUrl = process.env.BASE_URL;
    this.token = token;
  }

  async request(method, endpoint, data = null, headers = {}) {
    try {
      const response = await axios({
        method,
        url: `${this.baseUrl}/${endpoint}`,
        data,
        headers: {
          "x-challenger": this.token,
          ...headers,
        },
      });
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
      throw error;
    }
  }

  getTodos(endpoint = "todos", accept = "application/json") {
    return this.request("GET", endpoint, null, {
      Accept: accept,
    });
  }
}
