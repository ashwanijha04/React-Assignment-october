import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';
import {useState} from 'react'

export default function MaterialCard(props) {

  const [isLiked, setIsLiked] = useState(false);
  const [userData, setUserData] = useState([]);


  function handleLike(){
    console.log(isLiked);
    setIsLiked(!isLiked);
  }

  var likeIcon;

  if(!isLiked) {
    likeIcon = <ThumbUpAltTwoToneIcon/>
  } else {
    likeIcon = <ThumbDownAltTwoToneIcon/>
  }

  useEffect(()=>{

  }, [])


  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined" >
      <CardMedia
        component="img"
        alt="green iguana"
        image={props.imageUrl}
        height = "300"
      />
      <br></br>

      <CardContent>
        <div className=''>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          <div className='cardContent'>
            <Typography variant="body2" color="text.secondary">
                <IconButton aria-label="add to favorites">
                <EmailIcon />
                </IconButton>
                {props.email}
            </Typography>
          </div>

        </div>

        <div className='cardContent'>
                <IconButton aria-label="add to favorites">
                  <LocalPhoneIcon />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                    {props.phone} 
                </Typography>
        </div>

        <div className='cardContent'>
          <IconButton aria-label="add to favorites">
            <LanguageIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
              {props.website} 
          </Typography>
        </div>
      </CardContent>

      <CardActions>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          {likeIcon}
        {/* <ThumbUpAltTwoToneIcon/> */}
          {/* {isLiked?<ThumbUpAltTwoToneIcon/>:<FavoriteIcon />} */}
        </IconButton>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
}