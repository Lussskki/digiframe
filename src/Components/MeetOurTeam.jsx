import React from "react";
import Profile from "../../public/assets/our-team/Ellipse 2.png";
import Circle from "../../public/assets/our-team/Ellipse 3.png";
import Project from "../../public/assets/our-team/Rectangle 46.png";
import Project2 from "../../public/assets/our-team/Rectangle 47.png";
import Project3 from "../../public/assets/our-team/Rectangle 48.png";
import Project4 from "../../public/assets/our-team/Rectangle 49.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CSS/MeetOurTeam/MeetOurTeam.css";

const profiles = Array(8).fill({
  name: "Giorgi Iortkipanidze",
  role: "Founder, CEO, Graphic & UI/UX Designer",
  description:
    "I founded United Digital Solutions to help clients make the right digital decision.",
  image: Profile,
});

const projects = [
  Project, Project2, Project3, Project4, Project, Project2, Project3, Project4,
  Project, Project2, Project3, Project4, Project, Project2, Project3, Project4,
  Project, Project2, Project3, Project4
]

const MeetOurTeam = () => {
  return (
    <main className="meet-our-team">
      <h1 className="meet-our-team-head">Meet Our Team</h1>
      <div className="team-leader">
        <img src={Profile} alt="" className="team-image" />
        <div className="team-content">
          <h3 className="team-name">Giorgi Iortkipanidze</h3>
          <p className="team-role">Founder, CEO, Graphic & UI/UX Designer</p>
          <p className="team-description">
            I founded United Digital Solutions to help clients make the right
            digital decision.
          </p>
          <div className="team-icons">
            <span className="team-circle">
              <img src={Circle} alt="" />
            </span>
            <span className="team-circle">
              <img src={Circle} alt="" />
            </span>
            <span className="team-circle">
              <img src={Circle} alt="" />
            </span>
          </div>
        </div>
      </div>
      <article className="team-members">
        {profiles.map((profile, index) => (
          <section key={index} className="team-member">
            <div className="team-card">
              <img src={profile.image} alt="" className="team-image" />
              <div className="team-content">
                <h3 className="team-name">{profile.name}</h3>
                <p className="team-role">{profile.role}</p>
                <p className="team-description">{profile.description}</p>
                <div className="team-icons">
                  <span className="team-circle">
                    <img src={Circle} alt="" />
                  </span>
                  <span className="team-circle">
                    <img src={Circle} alt="" />
                  </span>
                  <span className="team-circle">
                    <img src={Circle} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </article>
      <div className="slide-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <section className="slide-team-member">
                <div className="slide-team-card">
                  <img src={profile.image} alt="" className="team-image" />
                  <div className="slide-team-content">
                    <h3 className="slide-team-name">{profile.name}</h3>
                    <p className="slide-team-role">{profile.role}</p>
                    <p className="slide-team-description">
                      {profile.description}
                    </p>
                    <div className="slide-team-icons">
                      <span className="slide-team-circle">
                        <img src={Circle} alt="" />
                      </span>
                      <span className="slide-team-circle">
                        <img src={Circle} alt="" />
                      </span>
                      <span className="slide-team-circle">
                        <img src={Circle} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <article className="team-projects">
        <section className="team-project-slide">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <img src={project} alt={`Project ${index + 1}`} className="project-image" />
              </SwiperSlide>
            ))}
        </Swiper>
        </section>
      </article>
    </main>
  );
};

export default MeetOurTeam;
