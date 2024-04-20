"use client";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import SectionTitle from "./ui/SectionTitle";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Support = () => {
  const router = useRouter();
  const fromsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Your message has been successfull!");
    router.push("/");
  };
  return (
    <main id='support' className='sp bg-dark/5 bg-opacity-10 space-y-5'>
      <div>
        <SectionTitle title='unlimited support' />
      </div>
      <form onSubmit={fromsubmit} className='w-full max-w-lg mx-auto mt-8'>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block  font-medium text-lg text-dark'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='py-3 px-6 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-lg font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='py-3 px-6 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='phoneNumber'
            className='block text-lg font-medium text-gray-700'
          >
            Phone Number
          </label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            className='py-3 px-6 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-lg font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            required
            className='py-3 px-6 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          />
        </div>
        <div className='text-center'>
          <Button type='submit' variant='outline'>
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Support;
