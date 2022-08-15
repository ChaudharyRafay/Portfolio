import React from "react";
import "./Review.css";
import client1 from "../../images/pic-1.png";
import client2 from "../../images/pic-2.png";
import client3 from "../../images/pic-3.png";
import client4 from "../../images/pic-4.png";
import client5 from "../../images/pic-5.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper";

function Review() {
  var data = [
    {
      id: 1,
      avatar: client1,
      name: "Abdullah Zafar",
      review:
        "We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.",
    },
    {
      id: 2,
      avatar: client2,
      name: "Ayesha ",
      review:
        "We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.",
    },
    {
      id: 3,
      avatar: client3,
      name: "Shayan Abbasi",
      review:
        "We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.",
    },
    {
      id: 4,
      avatar: client4,
      name: "Muhammad Faisal",
      review:
        "We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.",
    },
    {
      id: 5,
      avatar: client5,
      name: "Qamar Mujtaba",
      review:
        "We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.",
    },
  ];
  return (
    <section id="review">
      <h5>Review from clients</h5>
      <h2 data-aos="flip-left">Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        data-aos="flip-down"
        data-aos-duration="3000"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
      >
        {data.map((d, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={d.avatar} alt="avatar" />
              </div>
              <h5 className="client_name">{d.name}</h5>
              <small className="client_review">{d.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Review;
