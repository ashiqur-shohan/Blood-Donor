const PrimaryButton = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className={`bg-red-600 hover:bg-primary border-2 border-transparent hover:border-primary text-white rounded-none uppercase px-6 h-12 text-sm font-extrabold tracking-widest`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
