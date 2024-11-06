"use client";
import { SxProps, Theme, useTheme } from "@mui/material";
import Button from "@mui/material/Button";

interface ButtonProps {
  backgroundColor?: string;
  text?: string;
  icon?: React.ReactNode;
  sx?: SxProps<Theme>;
  variant?: "contained" | "outlined" | "text";
}

export default function ButtonComponent(props: ButtonProps) {
  const theme = useTheme();
  return (
    <Button
      variant={props.variant ? props.variant : "contained"}
      sx={{
        p: 6,
        borderRadius: "4px",
        background:
          props.variant !== "contained" && props.backgroundColor
            ? props.backgroundColor
            : theme.palette.primary.main,
        ...props.sx,
      }}
      endIcon={props.icon}
    >
      <b>{props.text}</b>
    </Button>
  );
}
