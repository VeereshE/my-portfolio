import "./index.css";

const About = () => {
  const data = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696335492/Screenshot_150_hzopkh.png",
      tittle: "Nxtwave CCBP program ",
      subtittle:
        "Well trained in nxtwave with Full stack developnment program ",
      year: "2022- 2023",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696336040/Screenshot_151_vnbgnb.png",
      tittle: "Ballari Institute Of Technology & Management ",
      subtittle:
        "Completed my Graduaction in the collage with branch off civil engineering",
      year: "2016-2018",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696336215/Screenshot_152_hstfqs.png",
      tittle: "Sri Chaitanya PU Collage",
      subtittle: "Completed my Schooling",
      year: "2003-2016",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgvec2ipx/image/upload/v1696328299/DavpublicSchool_oqteer.png",
      tittle: "Dayanand Anglo Vedic Public School",
      subtittle: "Completed my Schooling",
      year: "2003-2016",
    },
  ];

  return (
    <div id="About" className="about-section">
      <h2 className="name1">About Me</h2>
      <hr className="line" />
      <center>
        <h3 className="paragraph">
          I have great hand on experience in making project . I have created
          stunning skills and like to showcase my skill by make project to my
          hiring team and talents. I had attention to details and passion for
          design make me a top choics for those looking to elevate their
          professional image. Trush me to bring my profile and skill and stand
          out from the crowd. I am ecited to apply for the position of Front End
          Developer My skills in creating responsive and attractive user
          interfaces fro web applications.
        </h3>
        <div className="full_container">
          {data.map((item, index) => (
            <div key={index} className="image_text">
              <img alt="" src={item.imageUrl} className="imageContainer" />
              <h6>{item.tittle}</h6>
              <h6>{item.subtittle}</h6>
              <h6>{item.year}</h6>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default About;
