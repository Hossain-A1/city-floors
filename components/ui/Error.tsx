interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className='text-center text-red'>
      <h2>{error}</h2>
    </div>
  );
};

export default Error;
