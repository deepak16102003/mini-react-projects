import React from "react";
import { useState } from "react";

const textStyle = {
    maxWidth: "40rem",
};

const rawText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt doloribus debitis, excepturi quis incidunt quaerat,
                laborum labore quae, quos tempore deserunt! Nulla praesentium
                eaque sunt dolorum architecto ut molestias nesciunt dolorem
                maiores perferendis minus eos debitis veniam reprehenderit,
                quibusdam odio tempora sapiente ullam quaerat totam incidunt!
                Modi molestias quae repellat facilis, iure recusandae corrupti
                dignissimos alias sit velit tempore libero autem aut a quidem
                natus, voluptatibus repudiandae hic deleniti dolor ea, labore
                doloremque eos dolores? Ut maiores neque officiis! Libero ullam
                nihil quas provident doloremque eveniet id exercitationem rem
                repellendus, aspernatur cumque voluptatum at fuga accusamus
                neque dicta?.`;

function TextExpander() {
    const [show, setShow] = useState(false);

    //Derived State
    const text = show ? rawText : rawText.slice(0, 100);

    function handleClick() {
        setShow((show) => !show);
    }
    return (
        <div style={textStyle}>
            <p>{text}</p>
            <button onClick={handleClick}>
                {show ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}

export default TextExpander;
