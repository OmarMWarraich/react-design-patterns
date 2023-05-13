import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return (
    <h1 style={{backgroundColor:"green"}}>
      {name || "Left!"}
    </h1>
  );
}

const RightHandComponent = ({ message }) => {
  return (
    <h1 style={{backgroundColor:"red"}}>
      {message || "Right!"}
    </h1>
  );
}

function App() {
  return (
    <SplitScreen leftWeight={3} rightWeight={1}>
      <LeftHandComponent name="Omar"/>
      <RightHandComponent message="hello"/>
    </SplitScreen>
  );
}

export default App;
