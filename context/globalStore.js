import {doc, onSnapshot} from "firebase/firestore"
import {db, auth} from "../utility/firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {create} from "zustand"

export const useGlobalStore = create((set) => ({
    isLogged: false,
    user: null,
    userData: null,
    loading: true,

    setUser: (user) => set({user}),

    loadUserFromStorage: async () => {
        try {

            const storedUserAuth = await AsyncStorage.getItem('userAuth')
            if (storedUserAuth) {
                const parseUserAuth = JSON.parse(storedUserAuth)
                set({user: parseUserAuth, isLogged: true})
            }

            return auth.onAuthStateChanged(async (currentUser) => {
                if (currentUser) {
                    const userDocRef = doc(db, "users", currentUser.uid)
                    return onSnapshot(userDocRef, (doc) => {
                        if (doc.exists()) {
                            set({userData: doc.data(), isLogged: true})
                        } else {
                            set({userData: null})
                        }
                        set({loading: false})
                    }) // clean up on unmount
                } else {
                    set({isLogged: false, user: null, userData: null})
                    await AsyncStorage.removeItem('userAuth')
                    set({loading: false})
                }
            })

        } catch (error) {
            console.error("Error loading user data: ", error)
            set({loading: false})
        }
    }

}))


