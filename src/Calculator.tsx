import React, { useState } from "react";
import styles from "./Calculator.module.css";


const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>("");
    const [ageInDays, setAgeInDays] = useState<number | null>(null);

    // Takes in the text box contents
    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAge(event.target.valueAsNumber);
    }

    // Calculate ageInDays
    const calcAge: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setAgeInDays(Number(age)*365)
        console.log(ageInDays)

    }


    return (
        <div className={styles.calculator}>
        <form onSubmit={calcAge} className={styles.calculatorForm}>
            <div id="calculator" className={styles.formGroup} >
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                id="name" 
                value={name} 
                placeholder="Little Vulcan"
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => 
                setName(event.target.value)}/>
                <label htmlFor="age">Age</label>
                <input
                type="number"
                id="age"
                value={age}
                placeholder="1000 y/o"
                onChange={handleAgeChange}/>
                <button type="submit">Submit Me</button>
            </div>
        </form>
        {/* If statement, will not show results until ageInDays is not null */}
        {ageInDays && <h3>Congrats {name ? name : "person"}! You are {ageInDays} days old!</h3>}
        </div>
    )
}

export default Calculator;
