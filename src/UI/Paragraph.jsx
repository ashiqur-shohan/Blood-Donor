const Paragraph = ({ children, color = "text-gray", margin = "mb-10" }) => {
  return <p className={`${color} ${margin} text-lg leading-8`}>{children}</p>;
};

export default Paragraph;
