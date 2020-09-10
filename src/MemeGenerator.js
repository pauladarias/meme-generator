import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  // * Create 2 input fields, one for the topText and one for the bottomText
  // * Remember that these will be "controlled forms", so make sure to add
  // * all the attributes you'll need for that to work

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <br />
          <button>Gen</button>
        </form>

        <h1>{this.state.topText}</h1>
        <h1>{this.state.bottomText}</h1>
      </div>
    );
  }
}

export default MemeGenerator;
