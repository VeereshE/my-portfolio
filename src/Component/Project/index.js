import "./index.css";

const Project = () => {
  const data = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765782/pic_2_zfnuwq.png",
      tittel: "JOB SEARCH APPLICATIONS",
      projectLink: "https://veereshediga.ccbp.tech/",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1688738552/Screenshot_139_syscsy.png",
      tittel: "NXTTREND APPLICATIONS",
      projectLink: "https://veerunxttrendz.ccbp.tech/",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1688738917/Screenshot_140_noi98n.png",
      tittel: "COVID APPLICATIONS",
      projectLink: "https://veerucovid19.ccbp.tech/",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765847/pic_3_qfpwrq.png",
      tittel: "YOUTUBE APPLICATIONS",
      projectLink: "https://veerucovid19.ccbp.tech/",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765907/pic_1_kmhl3s.png",
      tittel: "STONE AND PAPPER APPLICATIONS",
      projectLink: "https://veerucovid19.ccbp.tech/",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765946/pic_4_ncwfqu.png",
      tittel: "TRAVEL APPLICATIONS",
      projectLink: "https://veerucovid19.ccbp.tech/",
    },
  ];
  return (
    <div id="Project" className="about-section section">
      <h2 className="name1">Project</h2>
      <hr className="line" />
      <h1 className="paragraph">
        My hand on Project build using Variour Technology.All projects is
        comprised of several key components that work together harmoniously to
        achieve our goals and deliver a seamless user experience. These
        components include.
      </h1>

      <div className="paragraph">
        <div className="myprojects">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0px",

                padding: "20px",
                justifyContent: "center",
              }}
              className="element"
            >
              <div>
                <img
                  src={item.imageUrl}
                  className="list-project"
                  alt="project"
                />
                <h5 className="tittel_container">{item.tittel}</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <button>
                    <a
                      href={item.projectLink}
                      style={{ textDecoration: "none" }}
                    >
                      View Project
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/VeereshE"
                      style={{ textDecoration: "none" }}
                    >
                      GitHub
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
