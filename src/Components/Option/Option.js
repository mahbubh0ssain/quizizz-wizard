import "./Option.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Option = ({ option, rightWrongFunc, correctAnswer }) => {
  let notify = () => toast();
  const [cssClass, setCssClass] = useState("");
  const [disable, setDisable] = useState(false);
  const rightWrongToast = (option) => {
    if (option === correctAnswer) {
      notify = () => toast.success("YAY!  right answer ✅");
      return setCssClass(`bg-success text-white pe-none`);
    } else {
      notify = () => toast.error("Oops!  wrong answer ❌");
      return setCssClass(`bg-danger text-white pe-none`);
    }
  };

  return (
    <div>
      <button
        disable={disable}
        onClick={() => {
          rightWrongFunc(option);
          rightWrongToast(option);
          setDisable(true);
          notify();
        }}
        className={`opt w-100 text-start border rounded-3 m-1 p-2 ${cssClass}
       `}
      >
        {option}
        <ToastContainer />
      </button>
    </div>
  );
};

export default Option;
