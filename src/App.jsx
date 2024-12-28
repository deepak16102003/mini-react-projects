import Accordition from "./components/Accordition";
import Card from "./components/Card";
import DateCounter from "./components/DateCounter";
import StarRating from "./components/StarRating";
import TextExpander from "./components/TextExpander";
import AccorditionV3 from "./components/AccorditionV3";
import ImageSlider from "./components/ImageSlider";

import "./index.css";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4rem",

    padding: "4rem 0",
};

const accorditionContents = [
    {
        title: "About Hiper-Text-Markup-Language",
        details:
            "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    },
    {
        title: "About Casceding-Style-Sheet",
        details:
            "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },
    {
        title: "About Java-Script",
        details:
            "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
    },
    {
        title: "About React",
        details:
            "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
    },
];

function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
            <DateCounter />
            <ImageSlider />

            <div>
                <StarRating color="#be4bdb" defaultRating={3} size={5} />
                <StarRating color="#fab005" defaultRating={5} size={10} />
                <StarRating color="#74b816" defaultRating={4} size={15} />
            </div>

            <Accordition contents={accorditionContents} color="#2f9e44" />

            <AccorditionV3 contents={accorditionContents} color="#2f9e44" />
        </div>
    );
}

export default App;

// import Card from "./components/Card";
// import TextExpander from "./components/TextExpander";
// import DateCounter from "./components/DateCounter";
// import ImageSlider from "./components/ImageSlider";
// import StarRating from "./components/StarRating";
// import Accordition from "./components/Accordition";
// // import LiveQuestion from "./components/LiveQuestion";
// import "./index.css";

// const appStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     //height: "100vh",
//     flexDirection: "column",
//     gap: "4rem",
//     padding: "4rem 0",
//     //height: "100vh",
// };
// function App() {
//     return (
//         <div style={appStyle}>
//             <Card />
//             <TextExpander />
//             <DateCounter />
//             <ImageSlider />
//             <div>
//                 <StarRating color=" #ff66ff" defaultRating={2} size={5} />
//                 <StarRating color=" #1a53ff" defaultRating={3} size={8} />
//                 <StarRating color=" #66ff66" defaultRating={5} size={10} />
//             </div>

//             <Accordition />

//         </div>
//     );
// }

// export default App;
