import { AxiosError } from "axios";
import platformApi from "./axioscfg"
import Swal from "sweetalert2";

interface LoginCredentials {
    username: string;
    password: string;
}

async function getLoginStatus() {
    try {
        const response = await platformApi.get("/platform/authentication/get_login_status")
        const data = response.data
        return data
    } catch (error) {
        const d = error as AxiosError;

        if (d?.response) {
            return d.response
        }

        return error
    }
}

async function localLogin({ username, password }: LoginCredentials) {
    try {
        const response = await platformApi.post("/platform/authentication/login", { username, password })
        const data = response.data
        return { ...data, statusCode: response?.status }
    } catch (error) {
        const notSuccessResponse = error as AxiosError
        const data = notSuccessResponse?.response?.data as object
        return { ...data, statusCode: notSuccessResponse?.status }
    }
}

async function logout(closeDropdown: Function) {
    closeDropdown()
    try {
        const response = await platformApi.get("/platform/authentication/logout")
        const data = response.data
        const { message, success } = data as { message: string, success: boolean }


        Swal.fire({
            title: message,
            icon: "info",
            confirmButtonText: "Aceptar",
            backdrop: true,
            didClose() {

                window.location.reload()

            },
        })

    } catch (error) {
        const d = error as AxiosError;
        console.error(error)
        if (d?.response) {
            const data = d.response.data as { message: string, statusCode: number, success: boolean }
            const { message, statusCode, success } = data;

            Swal.fire({
                title: message,
                icon: statusCode === 500 ? "error" : "warning",
                confirmButtonText: "Aceptar"
            })

        }

        return error
    }
}


export { getLoginStatus, localLogin, logout }