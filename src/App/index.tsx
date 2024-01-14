import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import Output from "./components/Output";
import Statistics from "./components/Statistics";
import { Container } from "./styled";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Introduction />
        <Form />
        <Container>
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
