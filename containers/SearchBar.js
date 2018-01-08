import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch_weather } from '../actions/index';




class SearchBar extends Component {
    constructor(props) {
        super();
        this.state = {term:''}
        this.on_input_change = this.on_input_change.bind(this);// bindvame this zashtoto kato vikame funkciqta this e v drug kontest ovewrite local method
        this.on_form_submit = this.on_form_submit.bind(this);
    }
   on_input_change(e) {
        //console.log(e.target.value)
        this.setState({ term: e.target.value })
    }
    on_form_submit(e) {
        e.preventDefault();
        // mqsto kudeto da vzimame datata
        this.props.fetch_weather(this.state.term);
        this.setState({ term: ''})
    }
   //tuk shte e sushtoto ako viknem funkciqta on_form_submit v callback
    render() {
        return (
            <form onSubmit={this.on_form_submit} className="input-group">
                <input className="form-control"
                    placeholder="Get a 5 day forecast for a destination in Greece"
                    value={this.state.term}
                    onChange= { this.on_input_change}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
     )
        /*return (
            <div>asa</div>
                )
        */
        }
}

function map_dispatch_to_props(dispatch) {
    return bindActionCreators({ fetch_weather }, dispatch);
}

export default connect(null, map_dispatch_to_props)(SearchBar);


