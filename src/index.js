import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";


// examples of global configurations that will make our code leaner!!!
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  requestconfig => {
    console.log(requestconfig);
    // idea behing interceptors - we can edit and
    //alter our request config before returning it!!
    return requestconfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    console.log(response);
    // idea behing interceptors - we can edit and
    //alter our request config before returning it!!
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
