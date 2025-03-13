import { FormEvent, SetStateAction } from "react";
import { localLogin } from "../../api/authentication";
import Swal from 'sweetalert2'

export async function submitLogin(
    e: FormEvent,
    formData: { [key: string]: string },
    setError: React.Dispatch<SetStateAction<{ username: string, password: string }>>) {
    try {
        let hasErrors = false
        //prevent default
        e.preventDefault()

        //expresiones para validar los campos
        // const usernameExp = /^(?=.{3,})(?!.*@)[a-zA-Z0-9_]+$|^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,32}$/;


        if (!emailExp.test(formData.username)) {
            hasErrors = true
            setError((prevErrors) => ({ ...prevErrors, username: "Ingresá un email válido" }))
        }

        if (!passwordExp.test(formData.password)) {
            hasErrors = true
            setError((prevErrors) => ({ ...prevErrors, password: "Ingresá una contraseña segura" }))
        }

        if (hasErrors) {
            return
        } else {
            const result = await localLogin({ username: formData.username, password: formData.password })
            const { success, message, statusCode } = result as { success: boolean, message: string, statusCode: number }

            Swal.fire({
                title: message,
                icon: success ? "success" : statusCode === 500 ? "error" : "warning",
                confirmButtonText: "Aceptar",
                didClose() {
                    if (success) {
                        window.location.reload()
                    }
                },
            })
        }

    } catch (error) {
        console.error("Se produjo un error al enviar el formulario de login")
    }
}