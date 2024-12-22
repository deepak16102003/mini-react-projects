import { useState } from "react";

const CardStyle = {
    backgroundColor: "#f1f3f5",
    padding: "1rem",
    width: "fit-content",
    borderRadius: "1rem",
    border: "2px solid grey",
    width: "20rem",
};

const active = {
    backgroundColor: "#ae3ec9",
    color: "#fff",
};
const cardContainer = {
    display: "flex",
    gap: "1rem",
    width: "100%",
    justifyContent: "space-between",
};

const massageStyle = {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
    marginTop: "2rem",
};
const numStyle = {
    display: "inline-block",
    height: "2rem",
    width: "2rem",
    borderRadius: "100%",
    // backgroundColor: "#ae3ec9",
    color: "black",
    backgroundColor: "#fff",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // color: "#fff",
};

const buttonContainer = {
    display: "flex",
    justifyContent: "space-between",
};

const btnStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "#ae3ec9",
    borderRadius: "1rem",
    color: "#fff",
    cursor: "pointer",
};

const messages = [
    "😎 Learn HTML",
    "😃 Learn CSS",
    "😇 Learn JavaScript",
    "🤖 Learn React JS",
];

function Card() {
    const [step, setStep] = useState(1);
    function minusStep() {
        if (step === 1) return;
        setStep(step - 1);
    }

    function plusStep() {
        if (step === 4) return;
        setStep(step + 1);
    }

    return (
        <div style={CardStyle}>
            <div style={cardContainer}>
                <div style={step >= 1 ? { ...numStyle, ...active } : numStyle}>
                    <span>1</span>
                </div>
                <div style={step >= 2 ? { ...numStyle, ...active } : numStyle}>
                    <span>2</span>
                </div>
                <div style={step >= 3 ? { ...numStyle, ...active } : numStyle}>
                    <span>3</span>
                </div>
                <div style={step >= 4 ? { ...numStyle, ...active } : numStyle}>
                    <span>4</span>
                </div>
            </div>

            <p style={massageStyle}>{messages[step - 1]}</p>

            <div style={buttonContainer}>
                <button onClick={minusStep} style={btnStyle}>
                    Previous
                </button>
                <button onClick={plusStep} style={btnStyle}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Card;
