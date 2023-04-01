import { useFirebase } from "../utils/useFirebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
export default function useFirebaseAuth() {
    const {auth} = useFirebase()

    async function createUser({email,password}){
        const user = await createUserWithEmailAndPassword(auth,email,password)
        return user.user
    }

    async function logUser({email,password}){
        const user = await signInWithEmailAndPassword(auth,email,password)
        return user.user
    }
    return {createUser,logUser}
}