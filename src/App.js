import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import TodoList from './Component/TodoList/TodoList'

function App() {
  
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  }, [])
  
  return (
    <div className='App'>
      {
        !load ? (
          <div className='loading'></div>
        ) : (
          <>
            <TodoList />
          </>
        )
      }
    </div>
  );
}

export default App;