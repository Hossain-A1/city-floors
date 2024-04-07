import React from "react";

const SectionTitle = ({
  title: { title: title = "" },
  subtitle: { subtitle: subtitle = "" },
}) => {
  return (
    <div className='space-y-2.5'>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
