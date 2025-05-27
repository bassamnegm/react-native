import { useState } from "react";
export const useCounter = () => {
    const [count, setCount] = useState<number>(0);
    const inc = () => setCount(count + 1);
    const dec = () => setCount(count - 1);
    return { count, inc, dec }
}

