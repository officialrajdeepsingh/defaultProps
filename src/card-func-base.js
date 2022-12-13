export default function Card(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="blog-container">
      <div className="blog-header">
        <div className="blog-cover">
          <div className="blog-author">
            <h3>Russ Beye</h3>
          </div>
        </div>
      </div>

      <div className="blog-body">
        <div className="blog-title">
          <h1>
            <a href="/">I Like To Make Cool Things</a>
          </h1>
        </div>
        <div className="blog-summary">
          <p>
            I love working on fresh designs that{" "}
            <a href="https://www.youtube.com/watch?v=hANtM1vJvOo">breathe</a>.
            To that end, I need to freshen up my portfolio here because it does
            exactly the opposite. For the next month I will be working almost
            exclusively on my portfolio. Sounds like a lot of fun!
          </p>
        </div>
        <div className="blog-tags">
          <ul>
            <li>
              <a href="/">css</a>
            </li>
            <li>
              <a href="/">web design</a>
            </li>
            <li>
              <a href="/">codepen</a>
            </li>
            <li>
              <a href="https://twitter.com/russbeye">twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="blog-footer">
        <ul>
          <li className="published-date">2 days ago</li>
          <li className="comments">
            <a href="/">
              <span className="numero"> Comments: 4</span>
            </a>
          </li>
          <li className="shares">
            <a href="/">
              <span className="numero">Shares: 1</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
Card.defaultProps = {
  color: "#dfa7ff"
};
