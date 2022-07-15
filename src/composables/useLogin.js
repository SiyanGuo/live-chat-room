import { ref } from "vue"
import { projectAuth } from "../firebase/config";

const error = ref(null)
const login = async (email, password) => {

    error.value = null;
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        if (!response) {
            throw new Error('Login failed')
        }
        error.value = null
        return response
    } catch (err) {
        error.value = err.message
        console.log(error.value);
    }

}

const useLogin = () => {

    return { error, login }
}

export default useLogin