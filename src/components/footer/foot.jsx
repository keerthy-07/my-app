import "./foot.css";

function Foot(props) {
  return (
    <div className="foot">
        <div className="foot-links">
          <div className="foot-link"></div>
        <li>{props.company}</li>
        <li>{props.about}</li>
        <li>{props.team}</li>
        <li>{props.product}</li>
        <li>{props.blog}</li>
        <li>{props.pric}</li>
        </div>
        <p className="foot-text">
        © 2026 Mr_Jack.All Rights Reserved
      </p>
    </div>

     
    
  );
}

export default Foot;

