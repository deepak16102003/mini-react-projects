import { useState } from "react";
import styles from "../style/Accordition.module.css";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

function AccorditionV2(props) {
    const { contents } = props;
    //const [open, setOpen] = useState(new Array(contents.length).fill(false));

    const [open, setOpen] = useState([false, false, false, false]);

    // open == null > all closed
    // open == 1 > 1sth row is opend

    // isOpend = open === index

    // curr  index
    //   1     1      => null
    //   1     2      => 2

    function handleClick(index) {
        setOpen(function (currState) {
            currState[index] = !currState[index];
            return [...currState];
        });
    }

    return (
        <div className={styles.container}>
            {contents.map(function (content, index) {
                return (
                    <Row
                        title={content.title}
                        details={content.details}
                        handleClick={handleClick}
                        index={index}
                        isOpen={open[index]}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

function Row(props) {
    const { title, details, handleClick, index, isOpen } = props;

    return (
        <div className={styles.row}>
            <h3 onClick={() => handleClick(index)} className={styles.title}>
                <span>
                    {title} {isOpen ? <HiMiniMinus /> : <HiMiniPlus />}
                </span>
            </h3>

            {isOpen && <p className={styles.details}>{details}</p>}
        </div>
    );
}

export default AccorditionV2;
