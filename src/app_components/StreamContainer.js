import React from "react";
import { connect } from 'react-redux'
import { getStream } from '../actions/stream.js'
import StreamCard from './StreamCard.js'


class StreamContainer extends React.Component {

    //componentDidMount() {
    //    this.props.getStream()
    //}




    render() {
        const stream = this.props.stream
        console.log(stream)
        const renderCards = stream.map((article, index) => {
                return(
                <StreamCard key={index} article={article}></StreamCard>
                )
            })
        return (
            <div>
            {renderCards}
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
