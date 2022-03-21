import { useState, useEffect } from 'react';

export function CoustomHooks(url) {
    const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch(url) // 'https://jsonplaceholder.typicode.com/users'
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      setLoading(false)
      setData(json)
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
}

export default CoustomHooks;


