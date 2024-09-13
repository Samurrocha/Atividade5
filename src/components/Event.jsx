import { useState } from 'react';

const FocusBlur = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const keyDown = (event) => {
        const p = document.querySelector(".key");
        p.textContent = `Você pressionou a tecla ${event.key}`;
    };

    const handleClick = (event) => {
        console.log(`Você pressionou um ${event.target}!`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Um nome foi enviado: ${inputValue}`);
    };

    return (
        <div className="container" onClick={handleClick}>
            <h2>React onFocus and onBlur Example</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={keyDown}
                    placeholder="Click or tab to focus"
                />

                <input type="submit" value="Enviar" />
            </form>

            <div className="message">
                {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p>}
            </div>
            <p>Input value: {inputValue}</p>
            <p className="key"></p>
        </div>
    );
};

export default FocusBlur;
