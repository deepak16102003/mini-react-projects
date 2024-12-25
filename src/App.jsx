import Card from "./components/Card";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/DateCounter";
import ImageSlider from "./components/ImageSlider";
import StarRating from "./components/StarRating";
import "./index.css";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //height: "100vh",
    flexDirection: "column",
    gap: "4rem",
    padding: "4rem 0",
    //height: "100vh",
};
function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
            <DateCounter />
            <ImageSlider />
            <StarRating />
        </div>
    );
}

export default App;
