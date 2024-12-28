// import React from 'react'
import { useState } from "react";
import "../style/imageSlider.css";

const animalImage = [
    { name: "start" },
    {
        name: "tiger",
        eat: "meat",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6IBcNQcrVfwt9MauCm6bk4hILe3Bn2pMztzoEd4qMxmp2fYw5nB8IR4nKVImB0GimdjbAcw&s",
        sound: "roaring",
    },
    {
        name: "cat",
        eat: "milk",
        src: "data:image/jpeg;base64,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",
        sound: "Meow",
    },
    {
        name: "dog",
        eat: "chapati",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxReslaSKXVvVd3_usUG2uPh3zvAGwf6QxE0IkOwXyaX86R_F8KMBQEU&s",
        sound: "bark",
    },
    {
        name: "cow",
        eat: "grace",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlbBlAM_ApsdbBMs1KQBNHYhZyifnhowlB6cab7ZeK564HRcMtwpvUN_-vb6FCKpoRlCFDg&s",
        sound: "maa..",
    },
    { name: "end" },
];
function ImageSlider() {
    const [count, setCount] = useState(1);
    function nextImage() {
        if (count === animalImage.length - 2) return;
        setCount(count + 1);
    }
    function previousImage() {
        if (count === 1) return;
        setCount(count - 1);
    }
    return (
        <div className="container">
            <div className="buttonBox">
                <p>{animalImage[count === 0 ? count : count - 1].name}</p>
                <button onClick={previousImage}>previus</button>
                <div className="imageContainer">
                    <img src={animalImage[count].src} alt="animal" />
                    {/* <img src="./tiger.jpeg" alt="" /> */}
                </div>
                <button onClick={nextImage}>next</button>
                <p className="txt">
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
            </div>
        </div>
    );
}
export default ImageSlider;
