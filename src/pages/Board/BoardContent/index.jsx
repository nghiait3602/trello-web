import { Box, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const COLLUMN_HEADER_HEIGHT = "50px";
const COLLUMN_FOOTER_HEIGHT = "56px";
function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: (theme) => theme.trelloCustom.boardContentHeight,
        display: "flex",
      }}
    >
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            height: COLLUMN_HEADER_HEIGHT,
            display: "flex",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Typography>Colunm Title</Typography>
          <Box>
            <Tooltip title="More options">
              <KeyboardArrowDownIcon
                id="basic-column-dropdown"
                aria-controls={open ? "basic-menu-column-dropdown" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "text.primary", cursor: "pointer" }}
              />
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-column-dropdown",
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archeive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{}}>List card</Box>

        <Box
          sx={{
            height: COLLUMN_FOOTER_HEIGHT,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          footer
        </Box>
      </Box>
    </Box>
  );
}

export default BoardContent;
