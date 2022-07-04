import React from 'react'
import "./PastryCards.css"
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';


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
          {pastry.price}
        </Typography>
          <button size="small" color="primary">Add to Cart</button>
        </CardContent>
      
      
    </Card>
  
  )
}
export default PastryCard

