import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import video1 from "../../assets/1.mp4";
import video2 from "../../assets/2.mp4";
import video3 from "../../assets/3.mp4";
import video4 from "../../assets/4.mp4";
import Typography from "@mui/material/Typography";
import { Badge, Box, CardActionArea, Chip } from "@mui/material";
import CustomizedMenus from "./CardMenu";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const tags = [
  "Sport",
  "NBA",
  "Tip of the day",
  "Best Bet",
  "Bonus",
  "Responsible Gambling",
];

export default function StoryCard() {
  return (
    <Card elevation={3} sx={{ width: 345, borderRadius: "12px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={<CustomizedMenus />}
        title='Super Bowl'
        subheader='September 14, 2016'
      />
      <CardActionArea>
        <CardMedia controls component='video' height='394' src={video3} />
      </CardActionArea>
      <CardContent>
        {tags.map((value) => (
          <Chip
            key={value}
            label={value}
            color='primary'
            variant='outlined'
            size='small'
            sx={{ margin: "3px" }}
          />
        ))}
        <Typography variant='body2' color='text.primary'>
          PROMO
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
