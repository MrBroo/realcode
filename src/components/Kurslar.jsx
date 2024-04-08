import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

export default function Kurslar() {
  return (
    <Box sx={{ padding: "0 150px", mb: 8 }}>
      <Typography variant="h3" mb={3}>Bizning Kurslar</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ display: "flex", backgroundColor: '#f9fafb' }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  backgroundColor: "#f26529",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaHtml5
                  style={{ color: "#fff", width: "70px", height: "70px" }}
                />
              </Box>
              <Box ml={2}>
                <Typography variant="h5">HTML, CSS</Typography>
                <Typography variant="subtitle1" color={{ color: "#667085" }}>
                  2 oy
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ display: "flex", backgroundColor: '#f9fafb' }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  backgroundColor: "#f2c300",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IoLogoJavascript
                  style={{ color: "#fff", width: "70px", height: "70px" }}
                />
              </Box>
              <Box ml={2}>
                <Typography variant="h5">JavaScript</Typography>
                <Typography variant="subtitle1" color={{ color: "#667085" }}>
                  3 oy
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ display: "flex", backgroundColor: '#f9fafb' }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  backgroundColor: "#07a8d7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaReact
                  style={{ color: "#fff", width: "70px", height: "70px" }}
                />
              </Box>
              <Box ml={2}>
                <Typography variant="h5">React</Typography>
                <Typography variant="subtitle1" color={{ color: "#667085" }}>
                  3 oy
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ display: "flex", backgroundColor: '#f9fafb' }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  backgroundColor: "#00af47",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DiNodejs
                  style={{ color: "#fff", width: "80px", height: "80px" }}
                />
              </Box>
              <Box ml={2}>
                <Typography variant="h5">Node.js</Typography>
                <Typography variant="subtitle1" color={{ color: "#667085" }}>
                  3 oy
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent sx={{ display: "flex", backgroundColor: '#f9fafb' }}>
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "12px",
                  backgroundColor: "#005fa9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TbBrandCSharp
                  style={{ color: "#fff", width: "70px", height: "70px" }}
                />
              </Box>
              <Box ml={2}>
                <Typography variant="h5">C# (csharp)</Typography>
                <Typography variant="subtitle1" color={{ color: "#667085" }}>
                  3 oy
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
