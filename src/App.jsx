import React, { Component } from "react";
import NameList from "./Components/nameListComponents/NameList";
import VidList from "./Components/vidListComponent/VidList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: String,
      data: Array,
      videoData : Array 
    };
  }

  lookupAtress = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    value = value.replace(/ /g, "");

    let url = `https://jav-rest-api-htpvmrzjet.now.sh/api/actress?name=${value}`;

    let rawData = await fetch(url).catch((err) => console.log(err));
    let tojson;
    try {
      tojson = await rawData.json();
    } catch (err) {
      console.log(err);
    }
    this.setState({ data: tojson });
  };

  lookupVideo = async (id) => {
    let url = `https://jav-rest-api-htpvmrzjet.now.sh/api/videos/${id}`
    let rawData = await fetch(url).catch((err) => console.log(err));
    let tojson
    try {
      tojson = await rawData.json();
      this.setState({ videoData: tojson });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const listName =
      this.state.data.result !== undefined &&
      this.state.data.result.map((item) => {
        return (
          <NameList
            url={item.imageUrl}
            name={item.name}
            id={item.id}
            key={item.id}
            nameJp={item.japanName}
            click={() => this.lookupVideo(item.id)}
          />
        );
      });

    const listVideo = 
      this.state.videoData.result !== undefined &&
      this.state.videoData.result.map(item => {
        return (
          <VidList
            siteUrl={item.siteUrl}
            name={item.name}
            date={item.date}
            key={item.name}
            picUrl={item.imageUrl}
          />
        );
      })

    return (
      <div className="App">
        <div className="App__left">
          <form action="#">
            <label className="NameActressLabel">Find Your Idol : </label>
            <input
              type="text"
              className="NameActress"
              onChange={(e) => this.lookupAtress(e)}
              placeholder="Put Your Name Idol Here....."
            />
          </form>

          <format>
            <span className="FormatId">
              Id<i className="fas fa-caret-down"></i>
            </span>
            <span className="FormatName">
              Name Actress<i className="fas fa-caret-down"></i>
            </span>
            <span className="FormatName">
              Japanese Name<i className="fas fa-caret-down"></i>
            </span>
          </format>

          <div className="NameList">
            <ul>{listName}</ul>
          </div>
        </div>
        <div className="App__right">
          <ul>{listVideo}</ul>
        </div>
      </div>
    );
  }
}

export default App;
