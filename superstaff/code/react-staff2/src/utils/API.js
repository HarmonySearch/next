import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.2.202:8080",
  responseType: "json"
});
