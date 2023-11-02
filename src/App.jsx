import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styled/Global.styled";
import { Container } from "./components/styled/Container.styled";
import Home from "./components/blocks/Home";

function App() {
  const theme = {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
          <Home />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
