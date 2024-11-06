"use client";
import { CircleOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";

interface ProgressCircleProps {
  totalNumbers: number;
  activeNumbers: number;
}

export default function ProgessCircle(props: ProgressCircleProps) {
  const { totalNumbers, activeNumbers } = props;

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {Array.from({ length: totalNumbers }).map((_, index) => (
        <CircleOutlined
          key={index}
          sx={{
            color: index < activeNumbers ? "#0AD2A5" : "#E0E0E0",
            width: "20px",
            height: "20px",
          }}
        />
      ))}
    </Box>
  );
}
