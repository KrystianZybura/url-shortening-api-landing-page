import Aside from "./components/Aside";
import Form from "./components/Form";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import Output from "./components/Output";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <div className="container">
          <Introduction />
          <Form />
          <Output />
          <Statistics />
        </div>
        <Aside />
      </main>
    </>
  );
}

export default App;
