import { useState, useCallback, useEffect } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, []);

  return {
    count,
    increment,
    decrement,
  };
};

export const Counter = () => {
  const { count, decrement, increment } = useCount();

  useEffect(() => {
    const onScroll = () => console.log("scroll");

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};
