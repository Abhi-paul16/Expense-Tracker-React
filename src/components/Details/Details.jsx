import React from 'react'
import { Card , CardContent ,  CardHeader , Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles'
const Details = ({title}) => {
    const classes = useStyles();
  return (
    <Card className={ title === "income" ? classes.income : classes.expense }> 
        <CardHeader title={title} />
        <CardContent>
            <Typography variant="h5">$3,200</Typography>
            {/* <Doughnut data="DATA"/> */}
            </CardContent> 
        </Card>
  )
}

export default Details