import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const AdmissionCard = ({ number, title, content, arrow, color }) => {
  return (
    <>
      <div
        className={`${color} w-96 h-64 flex flex-col gap-5 p-5 items-start text-start`}
      >
        <div className="text-5xl font-bold">{number}</div>
        {arrow ? (
          <div className="flex w-full justify-between text-blue-950 text-[17px] pr-5">
            <div className="w-[80%]">
              <span className="font-bold">{title} : </span>
              {content}
            </div>
            <FontAwesomeIcon
              icon={faArrowRight}
              color="white"
              className="text-5xl"
            />
          </div>
        ) : (
          <div className="text-blue-950 text-[17px]">
            <span className="font-bold">{title} : </span>
            {content}
          </div>
        )}
      </div>
    </>
  );
};
