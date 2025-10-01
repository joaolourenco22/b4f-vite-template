import Counter from "./components/Counter";
import CounterButtons from "./components/CounterButtons";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-700">
      <h1 className="text-8xl font-extrabold text-white">
        BYTES<span className="text-teal-500">4</span>FUTURE
      </h1>
     
      <Counter />
      <CounterButtons />
    </div>
  );
}

export default App;
