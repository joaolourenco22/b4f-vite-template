import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

export default function CounterButtons() {
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </>
    )
}