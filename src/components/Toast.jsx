import { useEffect, useState } from "react";
import "./Styles/Toast.css";

const Toast = ({ message, show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) return null;

  return (
    <div className="toast-wrapper">
      <div className={`toast-box ${!show ? "fade-out" : ""}`}>{message}</div>
    </div>
  );
};

export default Toast;
