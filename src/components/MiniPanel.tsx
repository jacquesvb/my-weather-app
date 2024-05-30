type PanelProps = {
  children?: JSX.Element;
  loading: boolean;
  error: boolean;
};

const MiniPanel = (props: PanelProps) => {
  if (props.loading) {
    if (props.error) {
      return (
        <div className="bg-gradient-to-r from-red-400  to-red-800 my-2.5 rounded-2xl shadow-md shadow-black  w-11/12 h-40 text-white tablet:w-11/12">
          <p className="text-4xl text-center text-yellow-200 font-Poppins  tablet:text-2xl desktop:text-4xl">
            ERROR
          </p>
          <br />
          <p className="text-white text-2xl text-center">
            {" "}
            We can't find your city...
          </p>
        </div>
      );
    } else {
      return (
        <div className="bg-gradient-to-r from-slate-600  to-slate-800 my-2.5 rounded-2xl shadow-md shadow-black  w-11/12 h-40 text-white tablet:w-11/12">
          <p className="text-4xl text-center text-yellow-200 font-Poppins  tablet:text-2xl desktop:text-4xl">
            Loading....
          </p>
          <br />
        </div>
      );
    }
  } else {
    return (
      <div className="bg-gradient-to-r from-blue-500  to-indigo-700 my-2.5 rounded-2xl shadow-md shadow-black  w-11/12 h-36 text-white tablet:w-11/12 tablet:h-40 ">
        {props.children}
      </div>
    );
  }
};

export default MiniPanel;
