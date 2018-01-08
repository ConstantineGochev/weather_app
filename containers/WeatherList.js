import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line } from 'recharts';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map'



class WeatherList extends Component {
    constructor(props) {
        super();
       // this.state = {
       //    arr: []
       // }
       // this.render_weather = this.render_weather.bind(this);
    }

    render_weather(cityData) {
        const name = cityData.city.name
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        //const temps_min = cityData.list.map(weather => weather.main.temp_min);
       // this.setState({ arr: temps });
      
        //console.log(this.state.arr + 'this is my new arr')
        //console.log(temps_min)
        console.log(temps)

        return (
                <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                   <td><Chart data={temps} color="orange" units="C"/></td>
                   <td><Chart data={pressure} color="green" units="hPa"/></td>
                   <td><Chart data={humidity} color="brown" units="%"/></td>
                </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>{this.props.weather.map(this.render_weather)}</tbody>
            </table>
        );
    }
}

function map_state_to_props({ weather }) {
    return { weather };
}

/* sparklines
<Sparklines height={120} width={180} data={temps}>
    <SparklinesLine color="red" />
</Sparklines>
*/
export default connect(map_state_to_props)(WeatherList);