import React from 'react'
import { Card , CardContent ,  CardHeader , Typography , Grid , Divider } from '@mui/material'
import useStyles from './styles'
import { Form } from './Form/Form'

const Main = () => {
    const classes = useStyles();
    return (
    <Card className='' >
        <CardHeader title="Expense Tracker" subheader = "Powerd by Speechly " />
        <CardContent>
            <Typography variant="h5">Total Balance $100</Typography>
            <Typography variant="subtitle1" style={ {lineHeight: '1.5em ' , marginTop: '20px' }}>
                {/* Info card */}
                Try saying :Add Income for 100$ in catagory food for monday..
                </Typography>
            <Divider />
          <Form/>
        </CardContent>
       
         <CardContent className={classes.cardContent}>
               <Grid container spacing={2}>
                   <Grid item xs={12} >
                       {/* list */}
                   </Grid>
                </Grid>    
         </CardContent>
          
    </Card>
  )
}

export default Main