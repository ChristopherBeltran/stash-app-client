import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class ArticleModal extends React.Component{

  render(){
    const { classes } = this.props;
    const { article } = this.props;
    const { articleModal, hideArticleModal } = this.props;

    const handleClose = () => {
      hideArticleModal();
    }

    const contentFormat = () => {
      if(article.content !== null){
      let formattedContent = article.content.replace(/ *\[[^\]]*]/, '')
      return formattedContent
      }
    }
    const handleClass = () => {
      if(this.props.darkMode === true){
        return(
          "night-modal"
        )
      }
    }

    return (
      <div id="article-modal" className="article-modal">
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={articleModal.display}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          id="article-modal"
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader, handleClass()}>
            <IconButton
              className={classes.modalCloseButton}
              id="modal-close"
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={handleClose}>
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle} align="center">{article.title}</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody, handleClass()}>
            <h5>{contentFormat()}</h5>
          </DialogContent>
          <DialogActions
            className={ classes.modalFooter +" " +classes.modalFooterCenter, handleClass()}>
            <Button
              onClick={handleClose}
              id="modal-close">
              CLOSE
            </Button>
            <Button 
            type="button"
            color="primary"
            href={article.url}
            target="_blank">
            Full Article</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(ArticleModal);