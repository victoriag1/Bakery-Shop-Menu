import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';

// In this pastrycard component we are passing down the pastry attribute and using MaterialUI
// to style our pastry cards and display each specific card. 
function PastryCard({pastry}) {
  return (
    <Card sx={{ maxWidth: 345 }}> 
      <CardMedia
      component = "img"
      height="140"
      image={pastry.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pastry.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pastry.price}</Typography>
    
        </CardContent>
      
      
    </Card>
  
  )
}
export default PastryCard

