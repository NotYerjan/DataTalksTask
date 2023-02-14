import "./App.css";
import Card from "./components/Card";

function App() {
  const content = {
    title: "This is a card's title",
    imgSrc: "/image.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ad obcaecati unde id molestias quos commodi quis! Velit, repellendus dolor. Quaerat minima deleniti non voluptatibus eius quis omnis quas nulla! Ex esse itaque id quam necessitatibus sint doloribus recusandae fugit dicta in culpa, vero eveniet doloremque pariatur, saepe dignissimos quae perspiciatis sed nulla aliquam. Cumque laboriosam aperiam dolorum quidem rem. Beatae ipsa soluta ipsam debitis veritatis, repudiandae unde rem labore sed? Soluta perferendis illo saepe id eos facilis eius, doloremque sit molestias. Consectetur magnam est fugiat quo corrupti, modi aliquid.",
  };
  return (
    <div className="App">
      <Card content={content} />
    </div>
  );
}

export default App;
