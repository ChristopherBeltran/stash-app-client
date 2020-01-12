import React from "react";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";

const ErrorNotifications = ({ errors }) => {

  return (
    <div>
      <SnackbarContent
        message={
          <p align="center">
            {errors[0]}
          </p>

        }
        close
        color="danger"
        icon={Warning}
      />
      <Clearfix />
    </div>
  );
}

export default ErrorNotifications