import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <header className="bg-light px-2">
        <Navigation />
      </header>
      <main>
        <Introduction />
      </main>
    </>
  );
}

export default App;
