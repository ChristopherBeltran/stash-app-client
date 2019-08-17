import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from "components/CustomButtons/Button.jsx";
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';
import ArticleModal from './ArticleModal.js'

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
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  }
}));

const StashCard = ({ article, handleRemove, stash, openArticleModal, hideArticleModal, articleModal }) => {
  const classes = useStyles();

  const imageHandler = (article) => {
    if (article.url_to_image !== "" || null){
      return(
        <CardMedia
        className={classes.media}
        image={article.url_to_image}
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


  const handleButtonClick = () => {
    handleRemove(article, stash)
  }

  const handleClick = (e) => {
    if(articleModal.display !== true){
    openArticleModal(article.title)
    }
  }

  const handleModal = () => {
    if(articleModal.display === true && articleModal.articleTitle === article.title){
      return(
      <ArticleModal hideArticleModal={hideArticleModal} article={article} articleModal={articleModal}></ArticleModal>
      )
    }
  }

  return (
     <Card className={classes.card} raised={true}>
     {handleModal()}
      <CardHeader
        title={article.title}
        subheader={article.source.name}
        onClick={ e => handleClick(e) }
      />
      {imageHandler(article)}
      <CardContent onClick={ e => handleClick(e) }>
        <Typography variant="body2" color="textSecondary" component="p">
        {article.description}
        </Typography>
      </CardContent>
      <CardActions >
        <Tooltip title="Remove From Stash" aria-label="remove" placement="right-end">
        <Button justIcon round color="danger" size="sm" align="left" onClick={handleButtonClick}><RemoveIcon></RemoveIcon></Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default StashCard;