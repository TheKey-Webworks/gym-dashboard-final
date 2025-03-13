import React, { SetStateAction } from "react";

interface InputEvent {
    name: string;
    value: string;
}

function inputChangeHandler<T>(
    setState: React.Dispatch<React.SetStateAction<T>>,
    input: InputEvent,
    setError: React.Dispatch<SetStateAction<{ username: string, password: string }>>
) {
    try {
        setState((previousState) => ({
            ...previousState,
            [input.name]: input.value
        }));

        setError((prevErr) => ({ ...prevErr, [input.name]: "" }))
    } catch (error) {
        console.log("Se produjo un error al actualizar el estado del formulario.");
        console.error(error);
    }
}

export default inputChangeHandler;
