import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.jsx";
import SourceSwitch from "./SourceSwitch.js"
import Divider from '@material-ui/core/Divider'

class ProfileAvailSourceCard extends React.Component {

  render(){

    let sources = this.props.sources;
    let userSources = this.props.userSources;
    let streamId = this.props.user.relationships.stream.data.id;


    var i;
    for (i = 0; i < sources.length; i++) {
      for(const userSource of userSources){
        if(sources[i].name !== undefined){
          if(sources[i].name === userSource.attributes.name){
            sources.splice(i, 1);
          }
        }
      }
    }

    const sourceList = sources.map((source, index) => {
      return(
      <div key={index}>
      <h4>{source.name}</h4>
      <SourceSwitch id={source.id} streamId={streamId} updateExistingStream={this.props.updateExistingStream} avail={true}></SourceSwitch>
      <Divider></Divider>
      </div>
      )
    });

  return (
    <Card id="available-sources-card" className="cards">
    <h3>Available Sources</h3>
      <CardContent>
      {sourceList}
      </CardContent>
    </Card>
  );
}
}

export default(ProfileAvailSourceCard);