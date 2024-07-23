import React, { useState } from "react";



const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>("");
    const [ageInDays, setAgeInDays] = useState(0)

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
        <>
        <form onSubmit={calcAge}>
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
                <h3>Congrats {name}! You are {ageInDays} days old!</h3>
            </div>
        </form>
        </>
    )
}

export default Calculator;
