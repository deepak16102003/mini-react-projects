import { useState } from "react";
import styles from "../style/DateCounter.module.css";

//COntrolled Elements
const today = new Date();

function getPrefix(dayCount) {
    let prefix = "";
    if (dayCount === "0" || dayCount === "-") prefix = "Today is ";
    else if (+dayCount > 0) prefix = `${dayCount} days after `;
    else if (+dayCount < 0) prefix = `${dayCount * -1} days before `;
    return prefix;
}

function formateDate(date) {
    return date.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

function isNumber(str) {
    return !isNaN(Number(str));
}

function DateCounter() {
    const [step, setStep] = useState(1);
    const [dayCount, setDayCount] = useState("0");

    // Derived state
    const currentDate = addDays(today, Number(dayCount === "-" ? 0 : dayCount));
    const prefix = getPrefix(dayCount);

    // const currentDate = addDays(today, Number(dayCount === "-" ? 0 : dayCount));

    function handleReset() {
        setStep(1);
        setDayCount("0");
    }

    function handleDayCount(e) {
        const value = e.target.value;
        if (isNumber(value) || value === "-") setDayCount(value);
    }

    function handleStepChange(e) {
        setStep(Number(e.target.value));
    }

    function plusDayCount() {
        if (isNumber(dayCount))
            setDayCount((dayCount) => `${Number(dayCount) + step}`);
    }

    function minusDayCount() {
        if (isNumber(dayCount))
            setDayCount((dayCount) => `${Number(dayCount) - step}`);
    }
    return (
        <div className={styles.container}>
            <div className={styles.rangeBox}>
                <input
                    className={styles.input}
                    type="range"
                    name=""
                    min="1"
                    max="10"
                    value={step}
                    onChange={handleStepChange}
                    id=""
                />
                <span>{step}</span>
            </div>

            <div className={styles.buttonBox}>
                <button className={styles.btn} onClick={minusDayCount}>
                    -
                </button>
                <input
                    type="text"
                    value={dayCount}
                    onChange={handleDayCount}
                    name=""
                    id=""
                />
                <button className={styles.btn} onClick={plusDayCount}>
                    +
                </button>
            </div>
            <p className={styles.txt}>
                {prefix} : {formateDate(currentDate)}
            </p>
            <button className={styles.btn} onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}

export default DateCounter;
