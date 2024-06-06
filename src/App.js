import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.navInputRef = React.createRef();
    this.state = {
      title: 'Pokemon',
      description: 'Search a pokemon',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4XvFoKQwBOS4athpKjZmSgHaD8%26pid%3DApi&f=1&ipt=cce1a2e3a3ae0f5168efb694d50fbef0a1b6b54fdb6f6f97b8ea8930baa29f94&ipo=images',
    };
  }

  handleSearch = (searchValue) => {
    // Make an API call
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Update state with the fetched data
        this.setState({
          title: data.name,
          description: data.abilities.map(ability => ability.ability.name).join(', '),
          img: data.sprites.front_default,
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  render() {
    return (
      <>
        <Nav inputRef={this.navInputRef} onSearch={this.handleSearch} />
        <Content 
          title={this.state.title} 
          description={this.state.description} 
          img={this.state.img} 
        />
        <Footer />
      </>
    );
  }
}
