import React from "react";
import { connect } from 'react-redux'
import { getStream } from '../actions/stream.js'


class StreamContainer extends React.Component {

    componentDidMount() {
        this.props.getStream()
    }


    render() {
        return (
            <div>
            Placeholder stream
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stream: state.stream
    }
}

export default connect(mapStateToProps, { getStream }) (StreamContainer)
