// import React from 'react'
import { useState } from "react";
import "../style/imageSlider.css";
// import "../animalImage/cat.jpeg"
const animalImage = [
    { name: "start" },
    { name: "tiger", eat: "meat", src: "./tiger.jpeg", sound: "roaring" },
    { name: "cat", eat: "milk", src: "./cat.jpeg", sound: "Meow" },
    { name: "dog", eat: "chapati", src: "./dog.jpeg", sound: "bark" },
    { name: "cow", eat: "grace", src: "./cow.jpeg", sound: "maa.." },
    { name: "end" },
];
function ImageSlider() {
    const [count, setCount] = useState(1);
    function nextImage() {
        if (count === animalImage.length - 2) return;
        setCount(count + 1);
    }
    function previusImage() {
        if (count === 1) return;
        setCount(count - 1);
    }
    return (
        <div className="card">
            <div className="image">
                <p>{animalImage[count === 0 ? count : count - 1].name}</p>
                <button onClick={previusImage}>previus</button>
                <div className="imageContainer">
                    <img src={animalImage[count].src} alt="animal" />
                    {/* <img src="./tiger.jpeg" alt="" /> */}
                </div>
                <button onClick={nextImage}>next</button>
                <p>
                    {
                        animalImage[
                            count === animalImage.length - 1 ? count : count + 1
                        ].name
                    }
                </p>
            </div>
            <div className="discription">
                <p>Name: {animalImage[count].name}</p>
                <p>Eat: {animalImage[count].eat}</p>
                <p>Sound: {animalImage[count].sound}</p>
                <p>Name: {animalImage[count].name}</p>
            </div>
        </div>
    );
}
export default ImageSlider;
