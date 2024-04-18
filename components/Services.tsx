import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
const Services = () => {
  return (
    <div className='lg:h-60 h-full w-full bg-black text-light grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 items-center gap-5 p-5'>
      <div className='p-10 bg-dark/10 justify-center flex  gap-2.5 items-start shadow-md shadow-blue rounded  '>
        <span>
          <CiDeliveryTruck className='text-blue text-4xl' />
        </span>
        <div className='flex items-start flex-col justify-center gap-1'>
          <h2>flee shipping</h2>
          <h4 className='text-light'>Above $5 only</h4>
        </div>
      </div>
      <div className='p-10 bg-dark/10 justify-center flex  gap-2.5 items-start shadow-md shadow-blue rounded  '>
        <span>
          <IoDocumentTextSharp className='text-blue text-4xl' />
        </span>
        <div className='flex items-start flex-col justify-center gap-1'>
          <h2>Certified cityfloors</h2>
          <h4 className='text-light'>100% Guarantee</h4>
        </div>
      </div>
      <div className='p-10 bg-dark/10 justify-center flex  gap-2.5 items-start shadow-md shadow-blue rounded  '>
        <span>
          <FaMoneyBillAlt className='text-blue text-4xl' />
        </span>
        <div className='flex items-start flex-col justify-center gap-1'>
          <h2>Huge Savings</h2>
          <h4 className='text-light'>At Lowest Price</h4>
        </div>
      </div>
      <div className='p-10 bg-dark/10 justify-center flex  gap-2.5 items-start shadow-md shadow-blue rounded  '>
        <span>
          <MdAssignmentReturn className='text-blue text-4xl' />
        </span>
        <div className='flex items-start flex-col justify-center gap-1'>
          <h2>Easy Returns</h2>
          <h4 className='text-light'>No Questions Asked</h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
