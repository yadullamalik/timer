import { useEffect, useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);
  const stop = 10;

  useEffect(() => {
    let id = setInterval(() => {
      setCount((p) => {
        if (p == stop) {
          clearInterval(id);
          return stop;
        }
        return p + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
    </div>
  );
};
