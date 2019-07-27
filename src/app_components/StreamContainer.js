import React from "react";
import { connect } from 'react-redux'


class StreamContainer extends React.Component {

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

export default connect(mapStateToProps) (StreamContainer)
