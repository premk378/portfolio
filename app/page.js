"use client";

import "./page.css";
import Image from "next/image";
import pic from "../public/profileImage.jpeg";
import profileData from "./profileData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faIdCard, faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const awardsRef = useRef(null);

  const {
    name,
    role,
    objective,
    details,
    educationDetails,
    experienceDetails,
    skills,
    awards,
    channels,
  } = profileData;

  const educationHtml = educationDetails.map((edu) => {
    return (
      <div className="educationContainer" key={edu.key}>
        <div className="icon">
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <div className="details">
          <div className="year">{edu.year}</div>
          <div className="degree">{edu.degree}</div>
          <div className="college">{edu.college}</div>
          <div className="grades">{edu.grades}</div>
        </div>
      </div>
    );
  });

  const experienceHtml = experienceDetails.map((exp) => {
    return (
      <div className="experienceContainer" key={exp.key}>
        <div className="icon">
          <Image alt="Company Logo" className="companyLogo" src={exp.logo}></Image>
        </div>
        <div className="details">
          <div className="year">{exp.period}</div>
          <div className="company">{exp.company}</div>
          <div className="designation">{exp.designation}</div>
          <div className="responsibilities">
            <ul>
              {exp.responsibilities.map(res => <li key={`res${Math.random()*101}`}>{res}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  });

  const channelsHtml = channels.map((channel) => {
    return (
      <div className="channel" key={channel.key}>
        <div className="channelLogo">
          <FontAwesomeIcon icon={channel.icon} />
        </div>
        <div className="channelText">{channel.text}</div>
        <div className="channelValue">{channel.value}</div>
      </div>
    );
  });

  const skillsHtml = skills.map((skill) => {
    return (
      <div className="skill" key={skill.key}>
        <div className="details">
          <div className="skillName">{skill.name}</div>
          <div className="percentage">{skill.percentage}%</div>
        </div>
        <div className="bar">
          <div
            className="filled"
            style={{ flexBasis: `${skill.percentage}%` }}
          ></div>
          <div
            className="empty"
            style={{ flexBasis: `${100 - skill.percentage}%` }}
          ></div>
        </div>
      </div>
    );
  });

  const awardsHtml = awards.map((award) => {
    return (
      <div className="awardContainer" key={award.key}>
        <div className="icon">
          <FontAwesomeIcon icon={faIdCard} />
        </div>
        <div className="details">
          <div className="year">{award.year}</div>
          <div className="name">{award.name}</div>
          <div className="company">{award.company}</div>
        </div>
      </div>
    );
  });

  const detailsHtml = details.map((detail) => {
    return (
      <div className="detail" key={detail.key}>
        <div className="prop">{detail.prop}:</div>
        <div className="value">{detail.value}</div>
      </div>
    );
  });

  const scrollToSection = (ref, block) => {
    const barHeight = block || "80px";
    ref.current.style.scrollMargin = barHeight;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">PORTFOLIO</div>
        <div className="menus">
          <div className="item" onClick={() => scrollToSection(homeRef)}>
            Home
          </div>
          <div className="item" onClick={() => scrollToSection(aboutRef)}>
            About
          </div>
          <div className="item" onClick={() => scrollToSection(resumeRef)}>
            Resume
          </div>
          <div className="item" onClick={() => scrollToSection(contactRef)}>
            Contact
          </div>
        </div>
      </div>
      <div className="intro" ref={homeRef}>
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="introText">HEY! I AM</div>
          <div className="name">{name}</div>
          <div className="role">
            I'm a <span className="roleDesc">{role}</span>
          </div>
          <div className="arrowDown" onClick={() => scrollToSection(aboutRef)}>
          <FontAwesomeIcon icon={faCircleDown} />
          </div>
        </div>
      </div>
      <div className="about" ref={aboutRef}>
        <div className="image">
          <Image alt="Profile Image" className="img" src={pic} width="400px" height="500px" />
        </div>
        <div className="aboutMe">
          <div className="aboutMeText">About Me</div>
          <div className="objective">{objective}</div>
          {detailsHtml}
          <div className="cv">
            <a href="/resume.pdf" download="cv">
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
      <div className="resume" ref={resumeRef}>
        <div className="sections">
          <div
            className="section"
            onClick={() => scrollToSection(educationRef, "180px")}
          >
            Education
          </div>
          <div
            className="section"
            onClick={() => scrollToSection(experienceRef)}
          >
            Experience
          </div>
          <div className="section" onClick={() => scrollToSection(skillsRef)}>
            Skills
          </div>
          <div className="section" onClick={() => scrollToSection(awardsRef)}>
            Trainings
          </div>
        </div>
        <div className="scroller">
          <div className="education" ref={educationRef}>
            <div className="title">Education</div>
            {educationHtml}
          </div>
          <div className="experience" ref={experienceRef}>
            <div className="title">Experience</div>
            {experienceHtml}
          </div>
          <div className="skills" ref={skillsRef}>
            <div className="title">Skills</div>
            <div className="skillsContainer">{skillsHtml}</div>
          </div>
          <div className="awards" ref={awardsRef}>
            <div className="title">Trainings</div>
            {awardsHtml}
          </div>
        </div>
      </div>
      <div className="contactMe" ref={contactRef}>
        <div className="text">Contact Me</div>
        <div className="channels">{channelsHtml}</div>
      </div>
    </div>
  );
}
