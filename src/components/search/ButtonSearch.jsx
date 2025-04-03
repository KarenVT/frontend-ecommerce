const ButtonSearch = ({ nombre, isSelected, onSelect }) => {
  return (
    <div className="mt-5 pl-17 md:pl-0 md:mt-0 flex flex-row items-center justify-center gap-2.5">
      <button
        onClick={onSelect}
        className={`px-8 py-2 rounded outline-1 outline-offset-[-1px] outline-secondary flex justify-center items-center gap-2.5
         ${
           isSelected
             ? "bg-secondary text-white"
             : "border-gray-300 text-secondary"
         } 
          transition-all`}
      >
        <div className="justify-start text-base font-medium">{nombre}</div>
      </button>
    </div>
  );
};

export default ButtonSearch;
