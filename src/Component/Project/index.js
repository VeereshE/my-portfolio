import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Project = () => {
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
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
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
                src={
                  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765782/pic_2_zfnuwq.png"
                }
                className="list-project"
                alt="project"
              />
              <h5 className="tittel_container">"JOB SEARCH APPLICATIONS"</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button>
                  <a
                    href="https://veereshediga.ccbp.tech/"
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
        </SwiperSlide>
        <SwiperSlide>
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
                src={
                  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1688738552/Screenshot_139_syscsy.png"
                }
                className="list-project"
                alt="project"
              />
              <h5 className="tittel_container">NXTTREND APPLICATIONS</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button>
                  <a
                    href="https://veerunxttrendz.ccbp.tech/"
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
        </SwiperSlide>
        <SwiperSlide>
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
                src={
                  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1688738917/Screenshot_140_noi98n.png"
                }
                className="list-project"
                alt="project"
              />
              <h5 className="tittel_container">COVID APPLICATIONS</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button>
                  <a
                    href="https://veerucovid19.ccbp.tech/"
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
        </SwiperSlide>
        <SwiperSlide>
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
                src={
                  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1688738917/Screenshot_140_noi98n.png"
                }
                className="list-project"
                alt="project"
              />
              <h5 className="tittel_container">COVID APPLICATIONS</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button>
                  <a
                    href="https://veerucovid19.ccbp.tech/"
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
        </SwiperSlide>
        <SwiperSlide>
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
                src={
                  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765847/pic_3_qfpwrq.png"
                }
                className="list-project"
                alt="project"
              />
              <h5 className="tittel_container">YOUTUBE APPLICATIONS</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button>
                  <a
                    href="https://veerucovid19.ccbp.tech/"
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
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
                src={
                  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765907/pic_1_kmhl3s.png"
                }
                className="list-project"
                alt="project"
              />
              <h5 className="tittel_container">
                STONE AND PAPPER APPLICATIONS
              </h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button>
                  <a
                    href="https://veerucovid19.ccbp.tech/"
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
        </SwiperSlide>
        <SwiperSlide>
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
                src={
                  "https://res.cloudinary.com/dgvec2ipx/image/upload/v1682765946/pic_4_ncwfqu.png"
                }
                className="list-project"
                alt="project"
              />
              <h5 className="tittel_container">TRAVEL APPLICATIONS</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button>
                  <a
                    href="https://veerucovid19.ccbp.tech/"
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
