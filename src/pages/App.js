import Accordion from "../components/Accordion";

function App() {
  const items = [
    { label: "Is Bae A Bae", content: "Yes Bae is A Bae", id: "asfdsafdsf" },
    { label: "Is Bae A Love", content: "Yes Bae is A Love", id: "dsdsafdsaf" },
    {
      label: "Is Bae A First Sight",
      content: "Yes Bae is A Bae is a First Sight :(",
      id: "assddf",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
