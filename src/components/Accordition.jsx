import { useState } from "react";
import styles from "../style/Accordition.module.css";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

function Accordition(props) {
    const {contents} = props;
    const [open, setOpen] = useState(null);

    // open == null > all closed
    // open == 1 > 1sth row is opend

    // isOpend = open === index

    // curr  index
    //   1     1      => null
    //   1     2      => 2

    function handleClick(index) {
        setOpen((currState) => (currState === index ? null : index));
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
                        isOpen={open === index}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

function Row(prop) {
    const { title, details, handleClick, index, isOpen } = prop;

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

export default Accordition;
