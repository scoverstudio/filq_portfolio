import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setupAxios } from "./AxiosSetup.actions"

const AxiosSetup = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setupAxios())
    }, [])

    return ""
}

export default AxiosSetup