import React from "react";
import "./Portfolio.css";
import { BsArrowReturnRight } from "react-icons/bs";
// import me from '../../images/ss.JPG'
import weather1 from "../../images/portfolio/weather/1.jpeg";
import weather2 from "../../images/portfolio/weather/2.jpeg";
import weather3 from "../../images/portfolio/weather/3.jpeg";
import hospital1 from "../../images/portfolio/hospital/1.jpeg";
import hospital2 from "../../images/portfolio/hospital/2.jpeg";
import hospital3 from "../../images/portfolio/hospital/3.jpeg";
import hospital4 from "../../images/portfolio/hospital/4.jpeg";
import news1 from "../../images/portfolio/news/1.jpeg";
import news2 from "../../images/portfolio/news/2.jpeg";
import news3 from "../../images/portfolio/news/3.jpeg";
import attendence1 from "../../images/portfolio/attendence/1.jpeg";
import attendence2 from "../../images/portfolio/attendence/2.jpeg";
import attendence3 from "../../images/portfolio/attendence/3.jpeg";
import attendence4 from "../../images/portfolio/attendence/4.jpeg";
import attendence5 from "../../images/portfolio/attendence/5.jpeg";
import attendence6 from "../../images/portfolio/attendence/6.jpeg";
import resume1 from "../../images/portfolio/resume/1.jpeg";
import resume2 from "../../images/portfolio/resume/2.jpeg";
import resume3 from "../../images/portfolio/resume/3.jpeg";
import resume4 from "../../images/portfolio/resume/4.jpeg";
import resume5 from "../../images/portfolio/resume/5.jpeg";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Autoplay } from "swiper";
function Portfolio() {
  const data = [
    {
      id: 1,
      image: [{ image1: weather1 }, { image1: weather2 }, { image1: weather3 }],
      title: "Current Weather Website",
      description:
        "A full stack website that allows user to  see latest weather updates in our city or any location around the world by just typing the city name ... ",
      github:
        "https://github.com/ChaudharyRafay/ChaudharyRafay-weather-app.git",
      demo: "https://rafayweather-app.herokuapp.com/",
    },
    {
      id: 2,
      image: [
        { image1: hospital1 },
        { image1: hospital2 },
        { image1: hospital3 },
        { image1: hospital4 },
      ],
      title: "Book Appointment",
      description:
        "Book  appointments through online. A successfull booking slip can be generated that can be easily downloaded ...",
      github: "https://github.com/ChaudharyRafay/hospital.git",
      demo: "https://streamable.com/5zivyv",
    },
    {
      id: 3,
      image: [
        { image1: attendence1 },
        { image1: attendence2 },
        { image1: attendence3 },
        { image1: attendence4 },
        { image1: attendence5 },
        { image1: attendence6 },
      ],
      title: "Attendence Mangement ",
      description:
        "Mark attendence by the student on daily basis.Also request for leave.Admin see all attendence record,pending leaves record and much more..",
      github:
        "https://github.com/ChaudharyRafay/Attendence_mangment_system.git",
      demo: "https://streamable.com/bx1ki6",
    },
    {
      id: 4,
      image: [{ image1: news1 }, { image1: news2 }, { image1: news3 }],
      title: "Daily News",
      description:
        "A News website that allow user to see latest top-headlines news in our country with specific category(sports,politics etc). All data are fetch using built in real time current situation.",
      github: "https://github.com/ChaudharyRafay/Daily-News-Website.git",
      demo: "https://streamable.com/fnm8tw",
    },
    {
      id: 5,
      image: [
        { image1: resume1 },
        { image1: resume2 },
        { image1: resume3 },
        { image1: resume4 },
        { image1: resume5 },
      ],
      title: "Resume",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quidem, optio, tenetur obcaecati odit possimus voluptate ducimus ad quo nisi laudantium cum adipisci temporibus, in repellat maiores excepturi enim! Nesciunt?Saepe cumque explicabo quisquam autem laboriosam quam reici",
      github: "https://github.com/ChaudharyRafay/Resume.git",
      demo: "https://streamable.com/dis3l2",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2 data-aos="zoom-in">Portfolio</h2>

      <Swiper
        className="container testimonials_container "
        data-aos="zoom-in"
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          250: {
            // width: 300,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          600: {
            slidesPerView: 2,
          },
          1024: {
            // width: 900,
            slidesPerView: 3,
          },
        }}
      >
        {data.map(({ image, title, description, github, demo }, index) => {
          return (
            <div>
              <SwiperSlide key={index} className="portfolio_item">
                <div className="portfolio_item-image">
                  <Carousel
                    animation="slide"
                    swipe
                    duration={200}
                    navButtonsAlwaysInvisible
                    activeIndicatorIconButtonProps={{
                      style: {
                        color: "#ffc576", // 2
                      },
                    }}
                  >
                    {image.map((i, index) => {
                      return (
                        <Paper>
                          <img
                            className="image_div"
                            key={index}
                            src={i.image1}
                            alt="ok"
                          />
                        </Paper>
                      );
                    })}
                  </Carousel>
                </div>

                <h3>{title}</h3>
                <h5 className="description">
                  {description.slice(0, 90) + "..."}
                </h5>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
        <div className="left_arrow">
          <BsArrowReturnRight className="left_arrow-icon" />{" "}
          <h5 style={{ color: "#ffc576" }}>Swipe Left to more</h5>
        </div>
      </Swiper>
    </section>
  );
}

export default Portfolio;
