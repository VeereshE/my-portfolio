const Skills = () => {
  const data = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682774175/Screenshot_79_h0ph7l.png",
      tittel: "HTML, CSS, JavaScript",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682774318/Screenshot_81_hk9tki.png",
      tittel: "Python",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682774460/Screenshot_83_ujxi36.png",
      tittel: "Node js",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682774613/Screenshot_85_qvpmrs.png",
      tittel: "MongoDB",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682774814/Screenshot_87_fu8z9l.png",
      tittel: "React js",
    },
  ];
  return (
    <div id="Skills" className="about-section">
      <h2 className="name1">Skills</h2>
      <hr className="line" />
      <h3 className="paragraph">
        I am ecited to apply for the position of Front End Developer My skills
        in creating responsive and attractive user interfaces fro web
        applications. As a front-end developer,I am proficient in HTML,CSS,and
        JavaScript , have experience with modern frameworks such as React,and
        are familiar with version control tools such as Git, and have a good
        understanding of web performance optimization technologies .I am good at
        problem solving
      </h3>
      <div className="paragraph">
        <div className="myprojects">
          {data.map((item, index) => (
            <div
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
