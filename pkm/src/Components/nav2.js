import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import newLogo from "../img/newLogo.png";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { useHistory, useLocation } from "react-router-dom";
import { signout } from "../action/auth-api";
import { colors } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { getUser } from "../Utils/Common";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems: "flex-end",
  },
}));

export default function ButtonAppBar() {
  const location = useLocation();
  const user = getUser();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleLogout = async () => {
    sessionStorage.clear();
    signout();
    history.push("/");
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: colors.blueGrey[900], height: "3rem" }}
      >
        <Toolbar>
          <IconButton edge="start" href="/">
            <img
              src={newLogo}
              style={{ height: "8rem", width: "9rem" }}
              alt=""
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AppBar
        position="static"
        style={{
          backgroundColor: colors.blueGrey[900],
          height: "3.5rem",
        }}
      >
        <Toolbar>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
            className="neon"
            onClick={handleToggle}
          >
            <text />
            <text />
            <text />
            <text />
            E-document
          </Button>

          <Button
            aria-haspopup="true"
            color="inherit"
            className="neon"
            onClick={() => {
              history.push("/");
            }}
            style={
              location.pathname === "/"
                ? { backgroundColor: "#666", color: "white" }
                : {}
            }
          >
            <text />
            <text />
            <text />
            <text />
            เอกสารเข้า
          </Button>

          <Button
            color="inherit"
            className="neon"
            onClick={() => {
              history.push("/doc_out");
            }}
            style={
              location.pathname === "/doc_out"
                ? { backgroundColor: "#666", color: "white" }
                : {}
            }
          >
            <text />
            <text />
            <text />
            <text />
            เอกสารออก
          </Button>

          <Button
            color="inherit"
            className="neon"
            onClick={() => {
              history.push("/Users");
            }}
            style={
              user.urole < 3
                ? { display: "none" }
                : location.pathname === "/Users"
                ? { backgroundColor: "#666", color: "white" }
                : {}
            }
          >
            <text />
            <text />
            <text />
            <text />
            ผู้ใช้
          </Button>
          <Button
            color="inherit"
            //style={{ position: "absolute", right: "220px" }}
            style={
              location.pathname === "/MyUsers"
                ? {
                    backgroundColor: "#666",
                    color: "white",
                    position: "absolute",
                    right: "220px",
                  }
                : { position: "absolute", right: "220px" }
            }
            className="neon"
            startIcon={<AccountCircleIcon />}
            onClick={() => {
              history.push("/MyUsers");
            }}
          >
            <text />
            <text />
            <text />
            <text />
            {user.uname}
          </Button>
          <Button
            color="inherit"
            className="neon1"
            type="cancel"
            onClick={handleLogout}
            startIcon={<ExitToAppOutlinedIcon />}
            style={{ position: "absolute", right: "100px" }}
          >
            <text />
            <text />
            <text />
            <text />
            Logout
          </Button>
          <div className="animation"></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
