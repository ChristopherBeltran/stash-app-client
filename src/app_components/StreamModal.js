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
import BookmarkIcon from '@material-ui/icons/Bookmark';


import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class StreamModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  }

  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
    this.props.resetFirstTimeUser()
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}>
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose("modal")}>
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle} align="center" >Welcome to your Stream!</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}>
            <p id="stream-modal-p"align="center" fontSize="larger" style={{paddingBottom: '15px' }}>All your news can be found right here.</p>
            <h5 align="center" style={{ fontSize: 'large', margin: '5px' }}>Articles can also be saved for later with the</h5>
            <div id="stash-text">
            <BookmarkIcon htmlColor='#9c27b0' style={{ top: '3px', display: 'inline-block', position: 'relative'}}></BookmarkIcon><h5 align="center" style={{ fontSize: 'large', display: 'inline-block', margin: '5px' }}>Stash button</h5>
            </div>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter +" " +classes.modalFooterCenter}>
            <Button
              onClick={() => this.handleClose("modal")}
              color="info">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(StreamModal);