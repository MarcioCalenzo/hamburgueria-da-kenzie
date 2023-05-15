import axios from "axios";

const Api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/products",
  timeout: 4000,
});
export default Api;
