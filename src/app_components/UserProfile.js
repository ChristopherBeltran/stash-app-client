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
import { updateProfileForm, setProfileForm } from '../actions/userProfile'
import Button from "components/CustomButtons/Button.jsx";
import { updateUser } from '../actions/currentUser'
import { getStreamSources } from '../actions/stream'


class UserProfile extends React.Component{

    componentDidMount(){
        let user = this.props.user
        this.props.getStreamSources(user.relationships.stream.data.id)
    }

    handleFormChange = event => {
        //const { name, value } = event.target
        const updatedFormInfo = {
          ...this.props.formData,
          [event.target.name]: event.target.value
        }
        this.props.updateProfileForm(updatedFormInfo)
      }

      handleSubmit = event => {
        event.preventDefault()
        this.props.updateUser(this.props.user, this.props.formData)
      }
    
      buttonHandler = () => {
        const values = Object.values(this.props.formData)
        var blankFields = 2
    
        for(const v of values){
          if(v !== ""){
            blankFields --
          }
        }
    
        if(blankFields === 2){
          return(
            <Button default disabled={true} color="primary" size="lg" type="submit">
            Update Info
          </Button>
          )
        } else {
          return(
            <Button default color="primary" size="lg" type="submit">
            Update Info
          </Button>
            )
          }
        }

       

    render(){
    const formData = this.props.formData;
    const user = this.props.user;

  return (
    <div id="user-profile">
      <CustomTabs
        headerColor="primary"
        tabs={[
          {
            tabName: "Profile",
            tabIcon: Person,
            tabContent: (
                <form onSubmit={this.handleSubmit} >
                      <CustomInput
                        id="regular"
                        name="name"
                        value={formData.name}
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "text",
                          id: "regular",
                          name: "name",
                          placeholder: user.attributes.name,
                          value: formData.name,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <People/>
                            </InputAdornment>
                          )
                        }}
                      />
            <br></br>
            <CustomInput
                        id="regular"
                        name="email"
                        value={formData.email}
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "text",
                          id: "regular",
                          name: "email",
                          placeholder: user.attributes.email,
                          value: formData.email,
                          onChange: (event) => this.handleFormChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email/>
                            </InputAdornment>
                          )
                        }}
                      />
                      <br></br>
                      {this.buttonHandler()}
            </form>
            )
          },
          {
            tabName: "Stream Settings",
            tabIcon: Build,
            tabContent: (
              <p>
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

export default connect(mapStateToProps, { updateProfileForm, setProfileForm, updateUser, getStreamSources }) (UserProfile)

