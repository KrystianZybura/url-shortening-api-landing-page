import Form from "./components/Form";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import Output from "./components/Output";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container">
        <Introduction />
        <Form />
        <Output />
      </main>
    </>
  );
}

export default App;
