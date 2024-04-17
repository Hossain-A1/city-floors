interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2.5' >
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default SectionTitle;
