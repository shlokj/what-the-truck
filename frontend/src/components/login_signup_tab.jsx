import React from "react";
import { Grid, Paper } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "./login.jsx";
import SignUp from "./signup.jsx";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const paperStyle = {
  margin: "auto",
};

export default function LoginSignupTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={6}>
        <img
          src="https://i.pinimg.com/originals/d9/4a/49/d94a495eca526d82ebbe0640aea413a9.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="logo and truck images"
        />
      </Grid>
      <Grid item style={paperStyle}>
        <Paper elevation={20}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="loginSignupTabBar"
          >
            <Tab label="Log In" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Login handleChange={handleChange} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUp handleChange={handleChange} />
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};
