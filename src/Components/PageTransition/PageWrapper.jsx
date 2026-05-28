import { useEffect, useState } from "react";
import "./PageWrapper.css";

export default function PageWrapper({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);

    const timer = setTimeout(() => {
      setShow(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div className={`page-wrapper ${show ? "show" : ""}`}>
      {children}
    </div>
  );
}