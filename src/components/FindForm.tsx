import Magnify from "../icons/magnify";

type PropsFind = {
  children: JSX.Element;
  btn: () => void;
};

const FindForm = (props: PropsFind) => {
  return (
    <div className="w-full">
      <br />
      <div className="flex justify-center">
        {props.children}{" "}
        <button className="text-2xl" onClick={props.btn}>
          <Magnify />
        </button>
      </div>
      <br />
    </div>
  );
};

export default FindForm;
