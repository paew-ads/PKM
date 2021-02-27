import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import newLogo from "../img/newLogo.png";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useHistory } from "react-router-dom";
import { signout } from "../action/auth-api";
import { colors } from "@material-ui/core";

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
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleLogout = async () => {
    sessionStorage.clear();
    signout();
    history.push("/signin");
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

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: colors.blueGrey[900], height: "3rem" }}
      >
        <Toolbar>
          <IconButton edge="start" href="/">
            <img src={newLogo} style={{ height: "8rem", width: "9rem" }}></img>
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
              ข้อมูลลูกค้า
            </Typography>
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={() => {
                          history.push("/Customers");
                        }}
                      >
                        ข้อมูลลูกค้า
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          history.push("/addCustomers");
                        }}
                      >
                        เพิ่มลูกค้าใหม่
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <Button
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              history.push("/doc_in");
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

          <Button color="inherit">
            <Typography variant="h6" noWrap>
              รายงานการสั่งซื้อสินค้า
            </Typography>
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
