import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServiceCard({ img, tittle, txt1, txt2, link }) {
  return (
    <Card
      elevation={16}
      sx={{
        maxWidth: 400,
        maxHeight: 600,
        fontFamily: 'Montserrat Alternates',
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={img}
        title={tittle}
        className="object-cover"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: 'Montserrat Alternates' }}
        >
          {txt1}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontFamily: 'Montserrat Alternates' }}
        >
          {txt2}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{ fontFamily: 'Montserrat Alternates' }}
        >
          Share
        </Button>
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{ fontFamily: 'Montserrat Alternates' }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
