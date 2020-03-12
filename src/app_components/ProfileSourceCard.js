import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.jsx";
import SourceSwitch from "./SourceSwitch.js"
import Divider from '@material-ui/core/Divider'

class ProfileSourceCard extends React.Component {

  render(){

    let streamSources = this.props.streamSources;
    let streamId = this.props.user.relationships.stream.data.id;


    const sources = streamSources.map((source, index) => {
      return(
      <div>
      <h4>{source.attributes.name}</h4>
      <SourceSwitch id={source.id} streamId={streamId} updateExistingStream={this.props.updateExistingStream} avail={false}></SourceSwitch>
      <Divider></Divider>
      </div>
      )
    });

  return (
    <Card id="user-sources-card" className="cards">
    <h3>My Sources</h3>
      <CardContent>
      {sources}
      </CardContent>
    </Card>
  );
}
}

export default(ProfileSourceCard);