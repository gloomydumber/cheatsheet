import { useEffect } from "react";
import { registerCopyButton } from "@rehype-pretty/transformers";

export function useRegisterCopyButton() {
  useEffect(() => {
    registerCopyButton();
  }, []);
}
