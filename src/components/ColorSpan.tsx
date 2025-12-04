import React from "react";

interface ColorSpanProps {
  color?: string;
  children: React.ReactNode;
}

export default function ColorSpan({
  color = "inherit",
  children,
}: ColorSpanProps) {
  return <span style={{ color }}>{children}</span>;
}
