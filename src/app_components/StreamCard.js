import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import StashButton from './StashButton.js'
import ArticleModal from './ArticleModal.js'

const moment = require('moment');

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const StreamCard = ({ article, openArticleModal, hideArticleModal, articleModalDisplay }) => {
  const classes = useStyles();

  const imageHandler = (article) => {
    if (article.urlToImage !== "" || null){
      return(
        <CardMedia
        className={classes.media}
        image={article.urlToImage}
      />
      )
    } else {
      return(
        <CardMedia
        className={classes.media}
        image=""
        />
      )
    }
  }

  const dateFormatter = (article) => {
    let a = moment(article.publishedAt, moment.ISO_8601)
    return (
      a.fromNow()
    )
  }

  const handleClick = () => {
    openArticleModal()
  }

  return (
     <Card className={classes.card} raised={true} onClick={handleClick}>
         <ArticleModal hideArticleModal={hideArticleModal} article={article} articleModalDisplay={articleModalDisplay}></ArticleModal>
      <CardHeader
        title={article.title}
        subheader={article.source.name}
      />
      {imageHandler(article)}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {article.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StashButton article={article} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p" align="right">
        {dateFormatter(article)}
        </Typography>
      </CardActions>
    </Card>
    
  );
}

export default StreamCard;


