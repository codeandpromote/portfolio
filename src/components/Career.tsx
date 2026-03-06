import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Creative Digimonks</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              My responsibilities include overseeing strategic growth, nurturing client relationships, and driving the development of impactful marketing and design solutions. At Creative Digimonks, I collaborate with a talented team to craft compelling digital experiences that resonate with our clients' audiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>One Devs</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              I focus on building high-performing teams, driving technical excellence, and delivering cutting-edge solutions tailored to meet the unique needs of our clients. My role involves strategic planning, product development, and ensuring the highest standards of quality and efficiency across all projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Web Developer</h4>
                <h5>Troika Infitous</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              I have developed web-based applications from design to coding with some languages like html, css, javascript, php, codeigniter, sql, wordpress and full implementation under the direction of the Senior Developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
