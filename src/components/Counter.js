import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.show);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  }

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  }

  const incrementMoreHandler = () => {
    dispatch({ type: "incrementBy10", payload: 10 });

  }

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button type='button' onClick={incrementHandler}>increment</button>
        <button type='button' onClick={incrementMoreHandler}>increment by 10</button>
        <button type='button' onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
