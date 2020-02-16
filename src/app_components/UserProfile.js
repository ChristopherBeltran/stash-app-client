import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux"
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Build from "@material-ui/icons/Build";
import People from "@material-ui/icons/People";

// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Email from "@material-ui/icons/Email";
import { updateProfileForm } from '../actions/userProfile'

class UserProfile extends React.Component{

    handleFormChange = event => {
        //const { name, value } = event.target
        const updatedFormInfo = {
          ...this.props.formData,
          [event.target.name]: event.target.value
        }
        this.props.updateProfileForm(updatedFormInfo)
      }

    render(){
    const styles = {
            textCenter: {
              textAlign: "center"
            }
          };
           
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const formData = this.props.formData;

  return (
    <div id="user-profile">
      <CustomTabs
        headerColor="primary"
        tabs={[
          {
            tabName: "Profile",
            tabIcon: Person,
            tabContent: (
                <form>
                      <CustomInput
                        labelText="Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "text",
                          id: "name",
                          name: "name",
                          value: formData.name,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
            <br></br>
            <CustomInput
                labelText="Email"
                id="material"
                formControlProps={{
                    fullWidth: false
                }}
                inputProps={{
                    endAdornment: (<InputAdornment position="end"><Email/></InputAdornment>)
                }}
            />
            </form>
            )
          },
          {
            tabName: "Settings",
            tabIcon: Build,
            tabContent: (
              <p className={classes.textCenter}>
                think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. So when you get something that has
                the name Kanye West on it, it’s supposed to be pushing
                the furthest possibilities. I will be the leader of a
                company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am
                the nucleus.
              </p>
            )
          }
        ]}
      />
    </div>
  );
}
}

const mapStateToProps = (state) => {
    return {
        sources: state.sources,
        user: state.currentUser,
        stream: state.stream,
        loggedIn: !!state.currentUser,
        formData: state.userProfile
    }
}

export default connect(mapStateToProps, { updateProfileForm }) (UserProfile)

