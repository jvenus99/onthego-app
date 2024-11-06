"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material";
import { ArrowForward, CircleRounded } from "@mui/icons-material";
import Image from "next/image";

interface Props {
  active?: boolean;
  draft?: boolean;
  title: string;
  sx?: SxProps<Theme>;
}

export default function ResearchCard(props: Props) {
  return (
    <>
      {props.title === "Ver todas" && (
        <Card
          sx={{
            background: (theme) => theme.palette.primary.main,
            width: "230px",
            minHeight: "242px",
            border: "2px solid",
            borderBottom: "18px solid",
            display: "flex",
            cursor: "pointer",
            ...props.sx,
          }}
        >
          <CardContent sx={{ p: 8, display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", pl: 15 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "secondary.main",
                  textTransform: "uppercase",
                }}
              >
                {props.title}
              </Typography>
              <ArrowForward sx={{ color: "secondary.main", mt: 22 }} />
            </Box>
          </CardContent>
        </Card>
      )}
      {props.title !== "Ver todas" && (
        <Card
          sx={{
            background: "secondary.main",
            width: "230px",
            minHeight: "242px",
            border: "2px solid",
            borderBottom: "18px solid",
            ...props.sx,
          }}
        >
          {props.active && (
            <CircleRounded
              sx={{ float: "right", width: "14px", pr: 2, color: "#0AD2A5" }}
            />
          )}
          {props.draft && (
            <Image
              src="/draft.svg"
              alt="Draft"
              width={24}
              height={24}
              style={{ float: "right", marginTop: 10, marginRight: "40%" }}
            />
          )}

          <CardContent sx={{ p: 8 }}>
            <Box sx={{ borderLeft: "2px solid", px: 8, py: 0, lineHeight: 0 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "primary.main",
                  textTransform: "uppercase",
                }}
              >
                {props.draft ? "Rascunho" : "Em campo"}
              </Typography>
              <Typography variant="h6" sx={{ color: "primary.main", mb: 6 }}>
                <b>{props.title}</b>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
}
