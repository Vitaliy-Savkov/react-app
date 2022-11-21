import "./App.css";

import Header from "./components/Header";
import Workplace from "./components/Workplace";
import Partners from "./components/Partners";
import Quality from "./components/Quality";
import Employees from "./components/Employees";

function App() {
  return (
    <div className="App">
      <Header />
      <Workplace />
      <Partners />
      <Quality />
      <Employees />
    </div>
  );
}

export default App;
