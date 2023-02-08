import React from "react";
import ResumeBlock from "./ResumeBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
// import "../../img/MyResume.pdf";

export default function Resume() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.resume.map((resume, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ResumeBlock image={resume.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
