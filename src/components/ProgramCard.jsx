export const ProgramCard = ({ percentage, title }) => {
  return (
    <div
      className="rounded-3xl bg-[#FFEFD5] h-[230px] w-[270px]
     flex flex-col gap-5 p-5"
    >
      <div className="text-[#DFA408] text-5xl font-bold">{percentage}</div>
      <div className="font-bold text-2xl text-blue-950">{title}</div>
    </div>
  );
};
