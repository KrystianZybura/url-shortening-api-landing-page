import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </>
  );
}

export default App;
