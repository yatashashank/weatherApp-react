import React, { Component } from 'react';

class Form extends Component {

    render() {



        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="city.." />
                <input type="text" name="country" placeholder="country.." /><br></br>
                <button >Submit</button>
            </form>
        );
    }
}

export default Form;