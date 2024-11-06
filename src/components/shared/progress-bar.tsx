"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

interface ProgressBarProps {
  totalNumbers: number;
  activeNumbers: number;
}

export default function ProgessBar(props: ProgressBarProps) {
  const { totalNumbers, activeNumbers } = props;

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.primary.main,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <BorderLinearProgress
      variant="determinate"
      value={(activeNumbers / totalNumbers) * 100}
    />
  );
}
