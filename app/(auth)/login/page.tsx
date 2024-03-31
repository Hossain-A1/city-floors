"use client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import app from "../../../firebase/firebase-init";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const fbProvider = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const LoginPage = () => {
  const navigate = useRouter();
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
  return (
    <main className='py-20 container'>
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
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          voluptate modi suscipit illum, odit voluptas cum delectus voluptatum
          libero quidem omnis ea quo maxime ut, odio sint blanditiis corporis
          cumque!
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
