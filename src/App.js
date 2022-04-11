
import './App.css';
import { Grid } from '@mui/material';
import Details from './components/Details/Details';
import useStyles from './styles';
import Main from './components/Main/Main';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <Grid className={classes.grid} container spacing={0} alignItems="center"  sx={{ justifyContent: 'space-around' }} style={{height: "100vh"}}>
       <Grid item xs={12} sm={4}>
         <Details title = "income"  />
         </Grid>
         <Grid item xs={12} sm={3}>
        <Main/>
         </Grid>
         <Grid item xs={12} sm={4}>
         <Details title = "expenses" />
         </Grid>

     </Grid>
    </div>
  );
}

export default App;
