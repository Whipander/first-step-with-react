export const DomaineCard = ({ pic, title, content }) => {
  return (
    <div className="rounded-xl hover:shadow-md flex flex-col transition-all items-center text-center px-8 pb-6 h-[70vh] bg-white w-full sm:w-1/3 max-h-[500px]">
      <img src={pic} alt={`${title} illustration`} className="w-36" />
      <h3 className="text-2xl mt-2 mb-4 font-header-serif font-semibold text-amber-400">
        {title}
      </h3>
      <p className="text-blue-950 text-[17px]">{content}</p>
    </div>
  );
};
