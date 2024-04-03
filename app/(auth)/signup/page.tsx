"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import useLoginUser from "@/hooks/useLoginUser";
import Button from "@/components/ui/Button";
import Link from "next/link";

const SignupPage = () => {
  const {
    handleLogin,
    loginWithFB,
    loginWithGoogle,
    emailHaldleChange,
    handleNameChange,
    passHanldeChange,
    name,
    email,
    password,
  } = useLoginUser();

  return (
    <main className='sp container min-h-screen   items-center  grid lg:grid-cols-2 grid-cols-1 gap-5'>
      <div className='flex  flex-col items-center justify-center gap-5 h-full w-full '>
        <div className='flex flex-col items-center  gap-3'>
          <h1>Sugnup to your account.</h1>
          <h6>Signup to get more features: </h6>

          <div className='flex w-full h-full  lg:flex-row flex-col items-center justify-center  gap-5'>
            <button
              onClick={loginWithGoogle}
              className='border shadow-sm py-2 lg:w-40 w-full rounded flex justify-center items-center gap-1 text-center font-medium text-sm'
            >
              <FcGoogle className='text-xl' /> Google
            </button>
            <button
              onClick={loginWithFB}
              className='border shadow-sm py-2 lg:w-40 w-full rounded flex justify-center items-center gap-1 text-center font-medium text-sm'
            >
              <FaFacebook className='text-xl text-blue' /> Facebook
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <hr className='border border-blue w-12 lg:w-20' />
          <small>Or,continue with email</small>
          <hr className='border border-blue w-12 lg:w-20' />
        </div>
        <div className=' w-full lg:w-[21rem] xl:w-[30rem]'>
          <form onSubmit={handleLogin} className=' flex flex-col gap-3'>
            <input
              className='py-2 eq px-4 rounded outline-none border bg-light focus:border-blue shadow-sm'
              type='text'
              placeholder='Name'
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              className='py-2 eq px-4 rounded outline-none border bg-light focus:border-blue shadow-sm'
              type='email'
              placeholder='Email'
              value={email}
              onChange={emailHaldleChange}
              required
            />
            <input
              className='py-2 eq px-4 rounded outline-none border bg-light focus:border-blue shadow-sm'
              type='password'
              placeholder='Password'
              value={password}
              onChange={passHanldeChange}
              required
            />
            <Button type='submit' variant='orange'>
              Sign up
            </Button>
            <hr />
            <div className='flex flex-col items-center gap-3'>
              <strong>Already have an account?</strong>
              <Link href='login' className='text-orange text-sm'>
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        voluptates ratione nulla nam necessitatibus incidunt cum ipsa, nemo eius
        voluptas. Eligendi qui at sit incidunt delectus deserunt ab cupiditate
        rem.
      </div>
    </main>
  );
};

export default SignupPage;
