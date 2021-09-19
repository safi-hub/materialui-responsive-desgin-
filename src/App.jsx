import './App.css';

import { makeStyles } from '@material-ui/core';

import NavBar from './components/navBar.component';
import { Grid } from '@material-ui/core';
import LeftBar from './components/leftBar.component';
import Feed from './components/feed.component';
import Rightbar from './components/rightBar.component';
import Add from './components/add.component';


const useStyles = makeStyles((theme) => ({
right:{
  [theme.breakpoints.down('sm')]: {
    display:"none",
},
}
}));

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <NavBar/>
      <Grid container>
<Grid item sm={2} xs={2}> 
<LeftBar/> 
</Grid>
<Grid item sm={7} xs={10}> 
<Feed/>
</Grid>
<Grid item sm={3} className={classes.right}>
 <Rightbar/>
   </Grid>
      </Grid>
      <Add/>
    </div>

  );
}


