import "./Video.css";

function Video({ id, title, channel, views, time, verified, children, deleteVideo, editVideo }) {
  console.log("Video");
  // let channelJSX;
  // if (verified) {
  //   channelJSX = <div className="channel">{channel} ✅</div>;
  // } else {
  //   channelJSX = <div className="channel">{channel}</div>;
  // }
  return (
    <>
      <div className="container">
        <button className="close" onClick={()=>deleteVideo(id)}>X</button>
        <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div className="pic-img">
          <img
            src={"https://picsum.photos/id/" + id + "/240/150"}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}
        </div>
        <div className="views">
          {views} views
          <span>.</span> {time}
        </div> 
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
