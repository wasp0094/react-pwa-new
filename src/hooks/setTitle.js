import { useEffect } from "react";
import { useTitleBar } from "../context/TitleContext";

export function useSetTitle(new_title) {
  const { title, setTitle, setVisible } = useTitleBar();
  const prev_title = title;
  useEffect(() => {
    if (title !== new_title) {
      if (new_title === "Home") setVisible(false);
      else setVisible(true);
      setTitle(new_title);
      document.title = new_title;
    }
    return () => {
      document.title = prev_title;
    };
    //eslint-disable-next-line
  }, []);
}
