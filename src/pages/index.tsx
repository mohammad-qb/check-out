//@ts-ignore
import * as React from "react";
//@ts-ignore
import Head from "next/head";
//@ts-ignore
import { Typography, Button, Box, Avatar } from "@material-ui/core";
//@ts-ignore
import { useStyles } from "../styles/index.module";

export default function Home() {
  const classes = useStyles();
  return (
    <div className="container">
      <Head>
        <title>Check out ✔ </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Notable&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body style={{ padding: 0, margin: 0 }}>
        <header>
          <nav className={classes.navbar}>
            <div>
              <Typography variant="h5" className={classes.logo}>
                <span className={classes.spanLogin}>.Check Out</span>
              </Typography>
            </div>
            <div>
              <Button variant="contained" className={classes.loginBtn}>
                Login
              </Button>
              <Button variant="outlined" className={classes.signupBtn}>
                Sign up
              </Button>
            </div>
          </nav>
        </header>
        <main className={classes.main}>
          <Box className={classes.box}>
            <Typography variant="h5">
              <span className={classes.logoBox}>.Check Out</span> For Furniture
            </Typography>
            <p className={classes.par}>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              <br />
              used in laying out print, graphic or web designs.{" "}
            </p>
          </Box>
        </main>
      </body>
    </div>
  );
}
