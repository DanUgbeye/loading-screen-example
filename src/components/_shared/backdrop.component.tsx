import React, { useEffect } from "react";
import { ChildrenProps } from "../../app.types";
import { useScrollLock } from "../../hooks/useScrollLock.hook";

function Backdrop({
  children,
  onClick,
}: ChildrenProps & { onClick?: () => void }) {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div onClick={() => onClick && onClick()} className=" fixed inset-0 bg-black/60 grid place-items-center h-full w-full ">
      {children}
    </div>
  );
}

export default Backdrop;
