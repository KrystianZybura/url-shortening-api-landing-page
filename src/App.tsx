import Form from "./components/Form";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container">
        <Introduction />
        <Form />
      </main>
    </>
  );
}

export default App;
