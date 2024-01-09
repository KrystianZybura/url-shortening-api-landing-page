import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import Output from "./components/Output";
import Statistics from "./components/Statistics";
import { Container } from "./components/styled";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Introduction />
        <Form />
        <Container className="py-5">
          <Output />
          <Statistics />
        </Container>
        <Aside />
      </main>
      <Footer />
    </>
  );
}

export default App;
