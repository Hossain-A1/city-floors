"use client";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../../firebase/firebase-init";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
const fbProvider = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const LoginPage = () => {
  const navigate = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const handleLogin = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate.push("/"); 
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <main className='py-20 container  grid lg:grid-cols-2 grid-cols-1 gap-5'>
      <div className='space-y-3 lg:space-y-5'>
        <div className='flex flex-col items-center gap-3'>
          <h1>Log in to your account.</h1>
          <h6>Welcome back!select method to login: </h6>

          <div className='flex lg:flex-row flex-col items-center gap-5'>
            <button
              onClick={loginWithGoogle}
              className='border shadow-sm py-2 w-40 rounded flex justify-center items-center gap-1 text-center font-medium text-sm'
            >
              <FcGoogle className='text-xl' /> Google
            </button>
            <button
              onClick={loginWithFB}
              className='border shadow-sm py-2 w-40 rounded flex justify-center items-center gap-1 text-center font-medium text-sm'
            >
              <FaFacebook className='text-xl text-blue' /> Facebook
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <hr className='border border-blue w-12 lg:w-28' />
          <small>Or,continue with email</small>
          <hr className='border border-blue w-12 lg:w-28' />
        </div>
        <div className="">
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
            className="py-2 px-4 rounded outline-none border focus:border-blue"
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
             className="py-2 px-4 rounded outline-none border focus:border-blue"
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type='submit'>Login</button>
          </form>
          {error && <p className="text-red">{error}</p>}
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptates ratione nulla nam necessitatibus incidunt cum ipsa, nemo eius voluptas. Eligendi qui at sit incidunt delectus deserunt ab cupiditate rem.
      </div>
    </main>
  );
};

export default LoginPage;
