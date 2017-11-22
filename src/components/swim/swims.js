import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as swimActions from '../../actions/swimActions'

class Swims extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            swim: { title: "" }
        }

        this.onTitleChange = this.onTitleChange.bind(this)
        this.onClickSave = this.onClickSave.bind(this)
    }

    onTitleChange(event) {
        const swim = this.state.swim
        swim.title = event.target.value
        this.setState({ swim: swim })
    }

    onClickSave() {
        this.props.dispatch(swimActions.createSwim(this.state.swim))
    }

    swimRow(swim, index) {
        return <div key={index}>{swim.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Swims</h1>
                {this.props.swims.map(this.swimRow)}
                <h2>Add Swim</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.swim.title} />
                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        )
    }
}

Swims.propTypes = {
    swims: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        swims: state.swims
    }
}

export default connect(mapStateToProps)(Swims);