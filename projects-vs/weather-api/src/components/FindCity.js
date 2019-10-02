import React from "react";
import axios from "axios";

class FindCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      cityInput: ""
    };
  }

  // When the user submits the form, an axios get request is sent to mapquest api, then returns an updated state list of results as buttons that the user can select
  handleSubmit = event => {
    event.preventDefault();
    axios
      .get(
        `http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_API_KEY}&location=${this.state.cityInput}`
      )
      .then(res => {
        this.setState({
          result: res.data.results[0].locations.map(loc => {
            return {
              city: loc.adminArea5,
              state: loc.adminArea3,
              latLng: loc.latLng
            };
          })
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* <h2>Find City: &nbsp; </h2> */}
        <form onSubmit={this.handleSubmit} className="find-city-form">
          <input
            type="text"
            name="city"
            onChange={event => {
              // Every time a user types a letter in the form, onChange event listenter inside the input form, runs the handleChange user defines and updates changes into state so that this.state is equal to what shows up in the form.
              this.setState({ cityInput: event.target.value });
            }}
            value={this.state.cityInput}
            placeholder="Enter City, State, or Zip Code"
            autoComplete="off"
          />
          <div className="find-city-submit" onClick={this.handleSubmit}>
            Find
          </div>
        </form>

        <div className="find-results">
          {this.state.result.map((loc, index) => (
            <button
              onClick={() => {
                // When button from displayed list is selected, it will clear the rest of the result buttons.
                this.setState({ result: [], cityInput: "" }); // updates FindCity - the child
                this.props.shareLocation(loc); // updates method in the context it's created in (passed props up to App.js because it is shares the method)
                this.props.history.push("/");
              }}
              key={index}
            >
              {loc.city}, {loc.state}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FindCity;
