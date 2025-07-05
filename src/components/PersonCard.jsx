const PersonCard = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl overflow-clip shadow-lg p-6 text-blue-950 flex flex-col items-center h-96">
      <img
        src={member.imageSrc}
        alt={member.name}
        className="size-48 rounded-full object-cover mb-4"
      />
      <h3 className="text-2xl font-semibold font-header-serif">
        {member.name}
      </h3>
      <p className="text-sm/6 text-center mt-2">{member.job}</p>
    </div>
  );
};

export default PersonCard;