import { AppStyled } from "./Components/AppStyled";
import Conventing from "./Components/Conventing";
import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <>
      <AppStyled>
        {" "}
        <Conventing />
        <Filter />
      </AppStyled>
    </>
  );
}

export default App;
