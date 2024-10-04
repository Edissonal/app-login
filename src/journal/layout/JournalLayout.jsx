import { Box } from '@mui/system'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar';

const drawerWidth =280;

export const JournalLayout = ({children}) => {
  return (
     <Box  sx={{display:'flex'}}>

      <NavBar drewerWidth={drawerWidth}/>
      <SideBar drewerWidth={drawerWidth}></SideBar>
        <Box
            component={'main'}
            sx={{flexGrow:1,paddingTop:10, paddingX:3}}
        >
            {children}
            <toolbar></toolbar>
        </Box>

     </Box>
  )
}
