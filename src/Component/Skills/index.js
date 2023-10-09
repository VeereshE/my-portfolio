import "./index.css";
const Skills = () => {
  const data = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485003/2a1283c5418e1e78b44c8af8d78836f0388d5bfe-144x144_xqsgry.png",
      tittel: "HTML",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485003/a5c9a11e901de862022ff83a8ab515e0897dbff0-144x144_upqc1i.png",
      tittel: "CSS",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485003/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480_xpwzrk.png",
      tittel: "JavaScript",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485003/e03e11358505eeeb2b208ef8bf35082ce04b38db-64x64_lpmbny.png",
      tittel: "Python",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485004/af5277687788ab534e47ca233f48e4cb707d700f-2560x2040_cflsi3.png",
      tittel: "Bootstrap",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485004/64a533080635690cf844a9edba0149cde18c5f3f-144x144_xhgyl9.png",
      tittel: "Material Ui",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485004/c0e8cfd4c037569fc01986bd5619a94e17aef45b-96x96_e2sqoh.png",
      tittel: "MongoDB",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485004/cd85a02037ca20978485a615089ce54902d43014-480x480_nc6lfr.png",
      tittel: "Node js",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485004/1b109799fcd054f4d078d598bdd95c808d472de9-512x512_jvwkxl.png",
      tittel: "Talwin CSS",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485004/0dc64cc62641907929bfe82ab9ba579e09c2fec8-2500x2500_ayakgi.png",
      tittel: "Postman",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485003/660968d04eee5fb30a5541b8adecf226318f0598-480x480_lxq8xg.png",
      tittel: "GitHub",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696485004/567ea6f25d34e2d6368538ee70b22726b1d7fd49-2300x2000_q0aywy.png",
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
      {/* <div className="paragraph">   
        <div className="myprojects">
          {data.map((item, index) => (
            <div className="element">
              <div>
                <img
                  src={item.imageUrl}
                  className="list-project1"
                  alt="project"
                />
                <h5 className="tittel_container">{item.tittel}</h5>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="skills_list_container">
        {data.map((item, index) => (
          <div key={index} className="skills_list">
            <img src={item.imageUrl} alt="" />
            <h6>{item.tittel}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
