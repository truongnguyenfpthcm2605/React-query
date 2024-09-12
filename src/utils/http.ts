import axios, { AxiosInstance } from "axios";

// create base api gobal
// using axios
class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance =
      axios.create({
        baseURL: "https://fakestoreapi.com",
        timeout: 10000,
        headers: {
          "Context-Type": "application/json",
        },
      });
  }
}

const http = new Http().instance
export default http;
