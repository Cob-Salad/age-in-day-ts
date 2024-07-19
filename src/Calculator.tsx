import React, { useState } from "react";



const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>();

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAge(event.target.valueAsNumber);
    }

    const calcAge = (age) => {
        let ageInDays = age*365
        console.log(ageInDays)
    }

    return (
        <>
        <form onSubmit={calcAge(age)}>
            <div id="calculator">
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
                <input type="submit"/>
                <p> </p>
            </div>
        </form>
        </>
    )
}

export default Calculator;
