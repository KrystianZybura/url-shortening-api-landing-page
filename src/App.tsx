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
      </main>
    </>
  );
}

export default App;
