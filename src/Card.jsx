import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';


const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Web development
        </Typography>
        <Typography variant="h5" component="div">
          Html{bull}css{bull}Js{bull}React
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Proffessional
        </Typography>
        <Typography variant="body2">
          learn fast as much as you can
          <br />
          {'"You can achieve this"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
