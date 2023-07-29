import { useState, useEffect } from 'react';

function FetchHook(url) {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('fetching has a problem');
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { todos, loading, error };
}

export default FetchHook;
