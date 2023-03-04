// import Header from './components/Header'


import React from 'react';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = React.useState(null);
  React.useEffect( () => {
    fetch('/api')
    .then((res)=> res.json())
    .then((data)=>setData(data.message));
  }, [setData]);
  return (
    <div className='container'>
      <h1>Heera</h1>
      <p>Data== {}</p>
    </div>
  ) 
}

export default App;
