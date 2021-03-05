import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import newLogo from "../img/newLogo.png";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { useHistory } from "react-router-dom";
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
        style={{ backgroundColor: colors.blueGrey[900], height: "3rem" }}
      >
        <Toolbar>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleToggle}
          >
            <Typography variant="h6" noWrap>
              E-document
            </Typography>
          </Button>

          <Button
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            <Typography variant="h6" noWrap>
              เอกสารเข้า
            </Typography>
          </Button>

          <Button
            color="inherit"
            onClick={() => {
              history.push("/doc_out");
            }}
          >
            <Typography variant="h6" noWrap>
              เอกสารออก
            </Typography>
          </Button>

          <Button
            color="inherit"
            onClick={() => {
              history.push("/Users");
            }}
            style={user.urole < 3 ? { display: "none" } : {}}
          >
            <Typography variant="h6" noWrap>
              ผู้ใช้
            </Typography>
          </Button>
          <Button
            color="inherit"
            style={{ position: "absolute", right: "220px" }}
            startIcon={<AccountCircleIcon />}
            onClick={() => {
              history.push("/MyUsers");
            }}
          >
            {user.uname}
          </Button>
          <Button
            color="inherit"
            type="cancel"
            onClick={handleLogout}
            startIcon={<ExitToAppOutlinedIcon />}
            style={{ position: "absolute", right: "100px" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
