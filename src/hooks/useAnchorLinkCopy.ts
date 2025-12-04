import { useEffect } from "react";

export function useAnchorLinkCopy(onCopied?: () => void) {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".anchor-link");

    const handler = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const parentId = target.parentElement?.id;

      const url = `${window.location.origin}${window.location.pathname}#${parentId}`;

      navigator.clipboard.writeText(url);
      window.location.hash = parentId || "";

      if (onCopied) onCopied?.();
    };

    links.forEach((link) => link.addEventListener("click", handler));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handler));
    };
  }, [onCopied]);
}
