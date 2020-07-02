//@ts-ignore
import { makeStyles } from "@material-ui/styles";
import HomeBG from "../images/homeBG.jpg";
import Logo from "../images/bgLogo.png";

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    boxShadow: "1px 1px 10px 1px #aaa",
  },
  logo: {
    fontFamily: "'Notable', sans-serif",
    textShadow: "1px 2px 10px #aaa",
    color: "#292929",
  },
  spanLogin: {
    background: ` #fff url(${Logo}) no-repeat center`,
    backgroundSize: "contain",
  },
  loginBtn: {
    backgroundColor: "dodgerblue",
    color: "#fff",
    borderColor: "dodgerblue",
    boxShadow: "0 0 0 0 #aaa",
    margin: "0 5px",
    "&:hover": {
      backgroundColor: "dodgerblue",
      color: "#fff",
    },
  },
  signupBtn: {
    color: "dodgerblue",
    borderColor: "dodgerblue",
    margin: "0 5px",
    "&:hover": {
      backgroundColor: "dodgerblue",
      color: "#fff",
    },
  },
  main: {
    background: `linear-gradient(120deg, rgb(0,0,0,0.5), transparent), url(${HomeBG}) no-repeat center`,
    backgroundSize: "cover",
    height: "90vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    textAlign: "center",
  },
  logoBox: {
    fontFamily: "'Notable', sans-serif",
    textShadow: "1px 2px 10px #aaa",
    color: "#292929",
    background: ` transparent url(${Logo}) no-repeat center`,
    backgroundSize: "contain",
  },
  par: {
    fontSize: "20px",
    fontFamily: "sans-serif",
  },
});
