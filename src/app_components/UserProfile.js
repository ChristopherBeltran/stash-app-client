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
import { getStreamSources, updateExistingStream } from '../actions/stream'
import ProfileSourceCard from './ProfileSourceCard'
import ProfileAvailSourceCard from './ProfileAvailSourceCard'
import Grid from '@material-ui/core/Grid';
import GridItem from '../components/Grid/GridItem.jsx'
import Loading from './Loading.js'



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
    const streamSources = this.props.streamSources
    const addToStream = this.props.addToStreamSources
    const removeFromStream = this.props.removeFromStreamSources

    if(streamSources !== null){

      //const sourceCards = streamSources.map((source, index) => {
          //return (
          //<GridItem key={index} xs={10} sm={4} md={4}>
          //<ProfileSourceCard key={index} source={source} user={user}></ProfileSourceCard>
          //</GridItem>
          //<List subheader={<ListSubheader>Your Sources</ListSubheader>} >
          //<ProfileSourceList key={index} source={source} user={user} added={true} addToStream={addToStream} removeFromStream={removeFromStream}></ProfileSourceList>
          //</List>

          //)
          //})

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
                  <Grid container justify="space-evenly" spacing={4}>
                    <GridItem xs={10} sm={4} md={4}>
                      <ProfileSourceCard streamSources={streamSources} updateExistingStream={this.props.updateExistingStream}></ProfileSourceCard>
                    </GridItem>
                    <GridItem xs={10} sm={4} md={4}>
                      <ProfileAvailSourceCard stream={this.props.stream}sources={this.props.sources} userSources={streamSources} updateExistingStream={this.props.updateExistingStream}></ProfileAvailSourceCard>
                    </GridItem>
                  </Grid>
              )
            }
          ]}
        />
      </div>
    )
  } else {
    return(
      <div>
        <Loading></Loading>
      </div>
    )
  }
}
}


const mapStateToProps = (state) => {
    return {
        sources: state.sources,
        user: state.currentUser,
        stream: state.stream,
        loggedIn: !!state.currentUser,
        formData: state.userProfile,
        streamSources: state.streamSources
    }
}

export default connect(mapStateToProps, { updateProfileForm, setProfileForm, updateUser, getStreamSources, updateExistingStream }) (UserProfile)

