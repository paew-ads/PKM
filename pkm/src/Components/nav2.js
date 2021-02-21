import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import logo from "../img/PKM.png";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { purple } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

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
      <AppBar position="static" style={{ backgroundColor: purple[300] }}>
        <Toolbar>
          <IconButton edge="start" href="/">
            <Avatar src={logo} style={{ height: "2.8rem", width: "2.8rem" }} />
          </IconButton>

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
                      <MenuItem> ข้อมูลลูกค้า </MenuItem>
                      <MenuItem>เพิ่มลูกค้าใหม่</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

          <Button aria-haspopup="true" color="inherit">
            <Typography variant="h6" noWrap>
              ข้อมูลสินค้า
            </Typography>
          </Button>

          <Button color="inherit">
            <Typography variant="h6" noWrap>
              การสั่งซื้อสินค้า
            </Typography>
          </Button>

          <Button color="inherit">
            <Typography variant="h6" noWrap>
              รายงานการสั่งซื้อสินค้า
            </Typography>
          </Button>
          <Button
            color="secondary"
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
