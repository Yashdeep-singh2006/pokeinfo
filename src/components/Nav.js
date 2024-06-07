import React, { Component } from 'react';
import Logo from '../images/Pokeinfo.png'

export class Nav extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const searchValue = this.props.inputRef.current.value.toLowerCase();
    this.props.onSearch(searchValue); // Call the onSearch method passed from App
  };

  render() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary px-lg-5">
          <div className="container-fluid">
            <img src={Logo} style={{height: '50px', width: '140px'}} alt='...' />
            <form className="d-flex" role="search" onSubmit={this.handleFormSubmit}>
              <input
                id="search"
                ref={this.props.inputRef}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
