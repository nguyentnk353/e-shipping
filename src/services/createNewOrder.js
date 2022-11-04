import React from 'react'
import axios from 'axios';
export function createNewOrder() {
    const url = 'https://deliver-store.tk/api/category/all-Category';
    
    return axios
      .get(url, {})
      .then((response) => response.data)
      .catch((err) => console.log(err));
}
