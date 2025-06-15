import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServiceCard({ img, tittle, txt1, txt2, link }) {
  return (
    <div className="max-w-sm w-full bg-white dark:bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
      <Card
        elevation={0} // Let Tailwind handle shadow
        sx={{
          backgroundColor: 'transparent',
          color: 'inherit',
          fontFamily: 'Montserrat Alternates',
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt={tittle}
          className="object-cover"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: 'Montserrat Alternates' }}
            className="text-black dark:text-[#948979]"
          >
            {txt1}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: 'Montserrat Alternates' }}
            className="text-gray-600 dark:text-gray-400"
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
    </div>
  );
}
