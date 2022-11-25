import "./App.css";

import Header from "./components/Header";
import Workplace from "./components/Workplace";
import Partners from "./components/Partners";
import Quality from "./components/Quality";
import Employees from "./components/Employees";
import Interests from "./components/Interests";
import Call from "./components/Call";
import Ebook from "./components/Ebook";
import BookCall from "./components/BookCall";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App-container">
      <div className="App">
        <Header />
        <Workplace />
        <Partners />
        <Quality />
        <Employees />
        <Interests />
        <Call />
        <Ebook />
        <BookCall />
        <Signup />
        <Footer />
      </div>
    </div>
  );
}

export default App;
