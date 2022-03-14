import React, { useEffect, useState, useRef, Children } from "react";
import { createPortal } from "react-dom";

import styles from "./Dialog.module.css";

type DialogProps = {
  isOpened: boolean;
  withBackdrop?: boolean;
  children: JSX.Element;
};

const Dialog = ({ isOpened, withBackdrop, children }: DialogProps) => {
  const ref = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("modal-root");
    setMounted(true);
  }, []);
  
  const modalContent = isOpened ? (
    <div className={withBackdrop ? styles["Backdrop-WithBackdrop"] : styles["Backdrop"]}>
      <div className={styles["Backdrop-Modal"]}>
        {children}
      </div>
    </div>
  ) : null;

  return mounted ? createPortal(modalContent, ref.current) : null;
};

export default Dialog;
