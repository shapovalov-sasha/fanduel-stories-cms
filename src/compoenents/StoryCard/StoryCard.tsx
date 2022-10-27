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
import Typography from "@mui/material/Typography";
import { Badge, Box, CardActionArea, Chip, Link } from "@mui/material";
import CustomizedMenus from "./CardMenu";
import moment from "moment";

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

interface StoryDetails {
  title: string;
  contentUrl: string;
  contentType: string;
  tags: string[];
  displayBefore: string;
  displayAfter: string;
  videoPath: string;
  likesCount: number;
  viewsCount: number;
  dislikesCount: number;
}

interface StoryCardProps {
  storyDetails: StoryDetails;
}

export default function StoryCard(props: StoryCardProps) {
  const {
    storyDetails: {
      title,
      tags,
      videoPath,
      contentType,
      displayBefore,
      contentUrl,
      likesCount,
    },
  } = props;
  return (
    <Card elevation={3} sx={{ width: 345, borderRadius: "12px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            {contentType[0] + contentType[1]}
          </Avatar>
        }
        action={<CustomizedMenus />}
        title={title}
        subheader={moment(displayBefore).format("DD MMMM, YYYY")}
      />
      <CardActionArea>
        <CardMedia controls component='video' height='394' src={videoPath} />
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
        <Typography variant='body2' py={1} color='text.primary'>
          <Link href={contentUrl}> {contentUrl}</Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Badge
            badgeContent={likesCount}
            color='info'
            sx={{
              padding: "2px",
            }}>
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
