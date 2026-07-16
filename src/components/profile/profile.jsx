import "./profile.css";

function Profile(props) {
  return (
    <>
      <div className="cover"></div>

      <div className="profile">
        <div className="left">
          <img src={props.image} alt="img" />

          <h2>{props.name}</h2>

          <div className="stats">
            <p>Posts: {props.posts}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
          </div>

          <p className="about">{props.about}</p>

          <h4>MORE ABOUT ME →</h4>
        </div>

        <div className="right">
          <button className="follow">FOLLOW</button>
        </div>
      </div>
    </>
  );
}

export default Profile;