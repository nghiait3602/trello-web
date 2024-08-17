import ModeSelect from '../../components/ModeSelect';
import Box from '@mui/material/Box';
function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default AppBar;
