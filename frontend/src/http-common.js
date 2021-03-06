import axios from "axios";

const environment = process.env.NODE_ENV;
// for local dev add or change
// 'http://localhost:8081/api'
export default axios.create({
  baseURL: environment === 'development' ? 'http://localhost:8081/api' : 'https://sm-study.space/api',
  headers: {
    "Content-type": "application/json"
  }
});
