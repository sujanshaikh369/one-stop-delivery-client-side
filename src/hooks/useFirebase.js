import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthorization from "../components/Firebase/firebase.init";

initializeAuthorization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  //user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //sign in with google accout
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //sign up with email and password
  const createAccountWithGoogle = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in with email and password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handle user name
  const createUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        const newUser = { ...user, displayName: name };
        setUser(newUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //user log out functionalti

  const handleLogOut = () => {
    console.log("logouttttt");
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    setError,
    setUser,
    signInWithGoogle,
    createAccountWithGoogle,
    loginWithEmailAndPassword,
    isLoading,
    setIsLoading,
    handleLogOut,
    createUserName,
  };
};

export default useFirebase;