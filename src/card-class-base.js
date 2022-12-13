import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.color }}
        className="blog-container"
      >
        <div className="blog-header">
          <div className="blog-author--no-cover">
            <h3>Russ Beye</h3>
          </div>
        </div>

        <div className="blog-body">
          <div className="blog-title">
            <h1>
              <a href="/">This Post Has No Cover Image</a>
            </h1>
          </div>
          <div className="blog-summary">
            <p>
              Here is an example of a post without a cover image. You don't
              always have to have a cover image. In fact, leaving them out from
              time to time and disrupt the predictive flow and make the overall
              design more interesting. Something to think about.
            </p>
          </div>
          <div className="blog-tags">
            <ul>
              <li>
                <a href="/">design</a>
              </li>
              <li>
                <a href="/">web dev</a>
              </li>
              <li>
                <a href="/">css</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="blog-footer">
          <ul>
            <li className="published-date">12 days ago</li>
            <li className="comments">
              <a href="/">
                <span className="numero">Comments: 8</span>
              </a>
            </li>
            <li className="shares">
              <a href="/">
                <span className="numero">Share: 3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
Card.defaultProps = {
  color: "#ff8cc7"
};

export default Card;
