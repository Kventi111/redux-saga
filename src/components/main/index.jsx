import React, { Component } from "react";

class App extends Component {
  // componentDidMount() {
  //   const {fetchDogs} = this.props
  //   console.log(fetchDogs());
  // }
  render() {
    const { imgUrl, loading, error } = this.props.dogs;
    return (
      <div className="App">
        <h1>Нажми чтобы загрузить фотографию собаки!</h1>
        <button onClick={() => this.props.fetchDogs()}>Загрузить !</button>{" "}
        <br />
        {loading ? ("Загрузка...") 
          : error ? ("Произошла трагедия приносим свои извинения!") 
          : (
          <img
            style={{
              width: "500px",
              height: "500px",
              border: "1px solid",
              padding : "10px"
            }}
            src={imgUrl}
            alt=""
          />
        )}
      </div>
    );
  }
}

export default App;
