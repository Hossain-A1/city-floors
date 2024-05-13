"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import useLoginUser from "@/hooks/useLoginUser";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { userLoginPost } from "@/lib/userLoginPost";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/redux/features/auth/authSlice";
interface SignUpFormData {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { loginWithFB, loginWithGoogle } = useLoginUser();
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch()
  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);

      const data = await userLoginPost("/api/auth/login", formData);

      if (data) {
        setLoading(false);
        setFormData({
          email: "",
          password: "",
        });
        dispatch(login(data))
        toast.success("Register successfull");
        router.push("/");
      } else {
        setLoading(false);
      }
    },
    [formData, router,dispatch]
  );

  return (
    <main className='sp mt-5 container min-h-screen  grid lg:grid-cols-2 grid-cols-1 gap-5'>
      <div className='flex flex-col items-center justify-center gap-5 w-full h-full'>
        <div className='flex flex-col items-center gap-3 w-full '>
          <h3>Log in to your account.</h3>
          <h6>Welcome back!select method to login: </h6>

          <div className='flex w-full h-full lg:flex-row flex-col items-center justify-center gap-5'>
            <button
              onClick={loginWithGoogle}
              className='border shadow-sm py-2.5 lg:w-40 w-full rounded flex justify-center items-center gap-1 text-center font-medium text-sm'
            >
              <FcGoogle className='text-xl' /> Google
            </button>
            <button
              onClick={loginWithFB}
              className='border shadow-sm py-2.5  lg:w-40 w-full rounded flex justify-center items-center gap-1 text-center font-medium text-sm'
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
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 '>
            <input
              className='py-2.5 eq px-4  rounded outline-none border bg-light focus:border-blue shadow-sm'
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              className='py-2.5 eq px-4 rounded outline-none border bg-light focus:border-blue shadow-sm'
              type='password'
              placeholder='Password'
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <Button type='submit' variant='secondary' isLoading={loading}>
              Login
            </Button>
            <hr />
            <div className='flex flex-col items-center gap-3'>
              <strong>{`Don't have an account?`}</strong>
              <Link href='signup' className='text-orange text-sm'>
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-center flex-col gap-5 items-center max-lg:hidden'>
        <figure className='h-[26rem] w-[26rem] rounded-full shadow-md overflow-hidden'>
          <Image
            src='https://t3.ftcdn.net/jpg/03/91/11/12/240_F_391111200_hKQDOi6Edd6LsA7jM2KJ4ZKDdxUAzh4W.jpg'
            alt='login'
            height='720'
            width='1280'
            priority
            className='h-full w-full'
          />
        </figure>

        <div className='flex flex-col gap-5 items-center'>
          <h2>Login to CityFloors</h2>
          <small>You can access our all features after log in.</small>
          <div className='flex items-center gap-2'>
            <span className='h-4 w-14 bg-blue p-2 rounded-full'></span>
            <span className='h-4 w-4 bg-orange p-2 rounded-full'></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
