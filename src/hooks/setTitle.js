import { useEffect } from "react";
import { useTitleBar } from "../context/TitleContext";

export function useSetTitle(new_title) {
  const { title, setTitle } = useTitleBar();
  useEffect(() => {
    if (title !== new_title) {
      setTitle(new_title);
      document.title = new_title;
    }
  }, []);
}
