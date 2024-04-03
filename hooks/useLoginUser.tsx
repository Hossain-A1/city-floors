import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../firebase/firebase-init";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";

const useLoginUser = () => {
  const navigate = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const emailHaldleChange = (e) => {
    setEmail(e.target.value);
  };

  const passHanldeChange = (e) => {
    setPassword(e.target.value);
  };

  const fbProvider = new FacebookAuthProvider();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate.push("/");
    } catch (error: any) {
      toast.error(`Login field!${error}`);
    }
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const credential = data.user;
        if (credential) {
          navigate.push("/");
          toast.success("Login has Success!");
        }
      })
      .catch((error) => toast.error(`Login field!${error}`));
  };
  const loginWithFB = () => {
    signInWithPopup(auth, fbProvider)
      .then((data) => {
        const credential = data.user;
        if (credential) {
          navigate.push("/");
          toast.success("Login has Success!");
        }
      })
      .catch((error) => toast.error(`Login field!${error}`));
  };

  return {
    handleLogin,
    loginWithFB,
    loginWithGoogle,
    handleNameChange,
    emailHaldleChange,
    passHanldeChange,
    name,
    email,
    password,
  };
};

export default useLoginUser;
