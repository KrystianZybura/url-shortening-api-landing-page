import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <header className="bg-light mx-2">
        <Navigation />
      </header>
      <main className="container">
        <Introduction />
      </main>
    </>
  );
}

export default App;
