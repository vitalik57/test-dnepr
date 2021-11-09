import { AppStyled } from "./Components/AppStyled";
import Conventing from "./Components/Conventing";
import Filter from "./Components/Filter/Filter";
import Questions from "./Components/Questions";

function App() {
  return (
    <>
      <AppStyled>
        {" "}
        <Conventing />
        <Filter />
        <Questions />
      </AppStyled>
    </>
  );
}

export default App;
