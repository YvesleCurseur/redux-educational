import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {

  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div>
      {isLogged ? 
      (
        <>
          <h1>Counter is {counter}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
      ) : 
        <>
        <h2>You are not logged in</h2>
        <button onClick={() => dispatch(login(true))}>Login</button>
        </>
      }
    </div>
  );
}

export default App;
