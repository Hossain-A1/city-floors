"use client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../../firebase/firebase-init";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const LoginPage = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <main className='py-20 container'>
      <div>
        <h2>Log in to your account.</h2>
        <h6>Welcome back!select method to login: </h6>

        <div className='flex items-center gap-5'>
          <button
            onClick={loginWithGoogle}
            className='border shadow-sm py-2 w-40 rounded flex justify-center items-center gap-1 text-center font-medium text-sm'
          >
            <FcGoogle className='text-xl' /> Google
          </button>
          <button className='border shadow-sm py-2 w-40 rounded flex justify-center items-center gap-1 text-center font-medium text-sm'>
            <FaFacebook className='text-xl text-blue' /> Facebook
          </button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
