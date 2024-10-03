import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { Cloud, ContentCut } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupsIcon from "@mui/icons-material/Groups";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AttachFileIcon from "@mui/icons-material/AttachFile";
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
        p: "10px 0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "inherit",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar-track": { m: 2 },
        }}
      >
        {/* Box column 1*/}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
                5
              )})`,
          }}
        >
          {/* Box header */}
          <Box
            sx={{
              height: COLLUMN_HEADER_HEIGHT,
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Colunm Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <KeyboardArrowDownIcon
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
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
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopyIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPasteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
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

          {/* Box list  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: "0 5px",
              m: "0 5px",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) =>
                `calc(
            ${theme.trelloCustom.boardContentHeight} 
            - ${theme.spacing(5)}
            - ${COLLUMN_FOOTER_HEIGHT} 
            - ${COLLUMN_HEADER_HEIGHT}
            )`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ced0da",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "bfc2cf",
              },
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://cdn.pixabay.com/photo/2017/06/12/16/35/bharat-2396074_640.jpg"
                title="Con meo"
              />
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Méo mèo meo mèo meo</Typography>
              </CardContent>
              <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button
                  size="small"
                  startIcon={<GroupsIcon fontSize="small" />}
                >
                  20
                </Button>
                <Button
                  size="small"
                  startIcon={<ModeCommentIcon fontSize="small" />}
                >
                  20
                </Button>
                <Button
                  size="small"
                  startIcon={<AttachFileIcon fontSize="small" />}
                >
                  20
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Box footer */}
          <Box
            sx={{
              height: COLLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Button startIcon={<AddCardIcon fontSize="small" />}>
              Add new card
            </Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
        {/* box colum 2 */}
        <Box
          sx={{
            minWidth: "300px",
            maxWidth: "300px",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
            ml: 2,
            borderRadius: "6px",
            height: "fit-content",
            maxHeight: (theme) =>
              `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(
                5
              )})`,
          }}
        >
          {/* Box header */}
          <Box
            sx={{
              height: COLLUMN_HEADER_HEIGHT,
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Colunm Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <KeyboardArrowDownIcon
                  id="basic-column-dropdown"
                  aria-controls={
                    open ? "basic-menu-column-dropdown" : undefined
                  }
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
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopyIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPasteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
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

          {/* Box list  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: "0 5px",
              m: "0 5px",
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: (theme) =>
                `calc(
            ${theme.trelloCustom.boardContentHeight} 
            - ${theme.spacing(5)}
            - ${COLLUMN_FOOTER_HEIGHT} 
            - ${COLLUMN_HEADER_HEIGHT}
            )`,
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ced0da",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "bfc2cf",
              },
            }}
          >
            <Card
              sx={{
                cursor: "pointer",
                boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
                overflow: "unset",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://cdn.pixabay.com/photo/2017/06/12/16/35/bharat-2396074_640.jpg"
                title="Con meo"
              />
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Méo mèo meo mèo meo</Typography>
              </CardContent>
              <CardActions sx={{ p: "0 4px 8px 4px" }}>
                <Button
                  size="small"
                  startIcon={<GroupsIcon fontSize="small" />}
                >
                  20
                </Button>
                <Button
                  size="small"
                  startIcon={<ModeCommentIcon fontSize="small" />}
                >
                  20
                </Button>
                <Button
                  size="small"
                  startIcon={<AttachFileIcon fontSize="small" />}
                >
                  20
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: "pointer", overflow: "unset" }}>
              <CardContent
                sx={{
                  p: 1.5,
                  "&:last-child": {
                    p: 1.5,
                  },
                }}
              >
                <Typography>Card 1</Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Box footer */}
          <Box
            sx={{
              height: COLLUMN_FOOTER_HEIGHT,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Button startIcon={<AddCardIcon fontSize="small" />}>
              Add new card
            </Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: "pointer" }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BoardContent;
