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
import Button from 'components/CustomButtons/Button.jsx';

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

const StreamCard = ({ article, openArticleModal, hideArticleModal, articleModal, stream }) => {
  const classes = useStyles();

  const dateFormatter = (article) => {
    let a = moment(article.publishedAt, moment.ISO_8601)
    return (
      a.fromNow()
    )
  }

  const handleClick = (e) => {
    if(articleModal.display !== true){
    openArticleModal(article.title)
    }
  }

  const handleModal = () => {
    if(articleModal.display === true && articleModal.articleTitle === article.title){
      return(
      <ArticleModal stream={stream}hideArticleModal={hideArticleModal} article={article} articleModal={articleModal}></ArticleModal>
      )
    }
  }

  const imageHandler = (article) => {
    if (article.urlToImage !== "" || null){
      return(
        <CardMedia
        className={classes.media}
        image={article.urlToImage}
        onClick={ e => handleClick(e) }
      />
      )
    } else {
      return(
        <CardMedia
        className={classes.media}
        image=""
        onClick={ e => handleClick(e) }
        />
      )
    }
  }

  return (
     <Card className={classes.card} raised={true} >
     {handleModal()}
      <CardHeader
        onClick={ e => handleClick(e) }
        title={article.title}
        subheader={article.source.name}
      />
      {imageHandler(article)}
      <CardContent onClick={ e => handleClick(e) }>
        <Typography variant="body2" color="textSecondary" component="p">
        {article.description}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <StashButton article={article} />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p" align="right" padding="10px">
        {dateFormatter(article)}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default StreamCard;


