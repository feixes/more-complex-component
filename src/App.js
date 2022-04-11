import { ComplexTitle } from "./components/ComplexTitle";
import { AlternativeTitle } from "./components/AlternativeTitle";
import { Random } from "./components/Random"

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <ComplexTitle title='more complex title' />
      <AlternativeTitle title='another title' />
      <Random />
    </div >
  );
}

export default App;
