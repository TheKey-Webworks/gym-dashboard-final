import { AxiosError } from "axios";
import platformApi from "./axioscfg";

export async function getAllGymUsersBasicData() {
    try {
        const response = await platformApi.get("/platform/platform-user-data/basic-data")
        const data = response.data
        return { ...data, statusCode: response?.status }
    } catch (error) {
        const notSuccessResponse = error as AxiosError
        const data = notSuccessResponse?.response?.data as object
        return { ...data, statusCode: notSuccessResponse?.status }
    }
}