import React, { Component } from 'react';

export class Content extends Component {
  render() {
    const { img, title, description } = this.props;

    return (
      <div className='container'>
        <div className="card mx-5 mt-5" >
          {img && <img src={img} className="card-img-top" style={{height: '50vh'}} alt={title} />}
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
