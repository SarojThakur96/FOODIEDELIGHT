import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProfileImage from "../../assets/ProfileImg.png";
// import { useDispatch } from "react-redux";
// import { USER_LOGOUT } from "../Redux/LogInSlice";
// import { useNavigate } from "react-router-dom";
type Props = {};

const Header = (props: Props) => {
  //   const route = useNavigate();
  //   const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const _LogoutHandler = () => {
    // route("/");
    // dispatch(USER_LOGOUT(0));
  };
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          marginTop: 0.5,
        }}
      >
        <MenuItem onClick={handleClose}>
          <h1 className="text-gray-300">Profile</h1>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <h1 className="text-gray-300">My account</h1>
        </MenuItem>
        <MenuItem onClick={_LogoutHandler}>Logout</MenuItem>
      </Menu>
      <div className="h-[5rem] flex items-center justify-end w-full space-x-6 border-b-[1px] px-6">
        <button onClick={handleClick}>
          <img
            src={ProfileImage}
            alt="profileImage"
            className=" w-12 h-12  rounded-xl object-cover cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
