import React, { createContext, useEffect, useState } from 'react'
import Auth from '@react-native-firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [userToken, setUserToken] = useState(null)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //   const googleSignIn = () =>{
  //     setLoading(true);
  //     return signInWithPopup(auth, googleProvider);
  // }
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //   const updateUser = (userInfo) => {
  //     return updateProfile(auth.currentUser, userInfo);
  //   };

  //   const removeUser = (user) => {
  //     setLoading(true);
  //     return deleteUser(user);
  //   }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log('user observing')
  //     setUser(currentUser)
  //     setLoading(false)
  //   })

  //   return () => unsubscribe()
  // }, [])
  const authInfo = {
    user,
    setUser,

    userToken,
    createUser,
    signIn,
    // updateUser,
    // removeUser,
    logOut,
    // googleSignIn,
    loading,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
