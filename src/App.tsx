import React from 'react';
import './App.css';

type TComment = {
  id: number;
  name: string;
  body: string;
};

function App() {
  const [data, setData] = React.useState<TComment[]>([]);
  const [dataIdx, setDataIdx] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  console.log(data);

  if (data.length < 1) return <h1>Yoo</h1>;

  return (
    <>
      <h1>Comment</h1>
      <h2>{data[dataIdx].name}</h2>
      <button onClick={() => setDataIdx((i) => i + 1)}>Next Comment</button>
      <button>Prev Comment</button>
    </>
  );
}

export default App;
