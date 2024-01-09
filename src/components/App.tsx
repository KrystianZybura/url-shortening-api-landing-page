import Aside from "./Aside";
import Footer from "./Footer";
import Form from "./Form";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Output from "./Output";
import Statistics from "./Statistics";
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
