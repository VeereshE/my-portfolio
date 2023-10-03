import "./index.css";

const Home = () => {
  return (
    <div className="tittle-container" id="Home">
      <div className="text-and-image-container">
        <div className="text-container">
          <h1 className="greeting">Hy! I Am</h1>
          <h1 className="my-name">Veeresh Ediga</h1>
          <p className="paragraph">
            Frontend Developer with high level of experience in Web designing
            and development
            <br /> producting the Quatity work
          </p>
          <div className="button-container">
            <a href="https://www.linkedin.com/in/veereshediga6363/">
              <button className="button" type="button">
                View More
              </button>
            </a>
            <a
              href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Veeresh__2023-02-20-104419.pdf"
              hrefLang="download"
            >
              <button className="button1" type="button1">
                Download
              </button>
            </a>
          </div>
        </div>
        <div className="my-container-images">
          <img
            src="https://res.cloudinary.com/dgvec2ipx/image/upload/v1696327165/WhatsApp_Image_2023-10-03_at_3.23.03_PM_cjdnvn.jpg"
            alt="mylogpicture"
            className="myimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
