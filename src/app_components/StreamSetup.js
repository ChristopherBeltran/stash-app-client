import React from 'react';
import { getSources } from '../actions/sources.js'
import { connect } from 'react-redux'


class StreamSetup extends React.Component {

    componentDidMount() {
        this.props.getSources()
      }

    render(){
        return(
            <div>
                <h1>You made it!</h1>
            </div>
        )
    }
}

export default connect(null, { getSources })(StreamSetup);



//on mount will trigger the action to fetch /sources from API
//will save state as sources
//pass state down as props to source container
//source container