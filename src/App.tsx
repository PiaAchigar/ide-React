// import Panel from './components/Panel'
import Workspace from './components/Workspace';

function App() {
  console.log("Estoy en APP") 
  const blocks ='{"block": {@type": "text","@x": 70,"@y": 30,"field": {"@name": "TEXT"}}}'
  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
    ],
  };




  return (
    <>
    <Workspace toolboxConfiguration={toolboxCategories} initialXml={blocks}/>
    </>
  );

}

export default App;
