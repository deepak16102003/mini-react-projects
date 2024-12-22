import Card from "./components/Card";
import "../index.css";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
};
function App() {
    return (
        <div style={handleClose}>
            <div style={appStyle}>
                <Card />
            </div>
        </div>
    );
}

export default App;
