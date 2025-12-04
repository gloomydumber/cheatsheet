import Button from "@mui/material/Button";

interface CheatSheetButtonProps {
  href: string;
  newTab?: boolean;
  children: React.ReactNode;
}

export default function CheatSheetButton({
  href,
  newTab = true,
  children,
}: CheatSheetButtonProps) {
  return (
    <Button
      href={href}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        window.open(href, newTab ? "_blank" : "_self", "noopener,noreferrer");
      }}
      sx={{
        textTransform: "none",
        color: "var(--cheatsheet-nodit-color)",
        backgroundColor: "transparent",
        transition: "0.5s ease",
        "&:hover": {
          backgroundColor: "rgba(0, 255, 153, 0.05)",
          color: "var(--cheatsheet-nodit-color)",
        },
      }}
    >
      {children}
    </Button>
  );
}
