import React from "react";

const IntroVideo: React.FC = () => {
  return (
    <div className="intro-video">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {/* Intro Video Image Start */}
            <div className="intro-video-box">
              {/* Intro Image Start */}
              <div className="intro-video-image">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <figure className="image-anime">
                    <img src="images/intro-video-bg.jpg" alt="" />
                  </figure>
                </a>
              </div>
              {/* Intro Image End */}

              {/* Video Play Button Start */}
              <div className="video-play-button">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  play
                </a>
              </div>
              {/* Video Play Button End */}
            </div>
            {/* Intro Video Btn End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
