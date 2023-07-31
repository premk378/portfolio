import ot from "../public/opentext.png";
import dbs from "../public/dbs.png";
import deloitte from "../public/deloitte.png";
import cts from "../public/cognizant.png";
import tcs from "../public/tcs.png";

import {
  faMapLocation,
  faSquarePhone,
  faComment,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const profileData = {
  name: "Prem Kumar Yadav",
  role: "Web Developer",
  objective:
    "Full stack web developer with around 6 years of experience in web development. My expertise ranges from front-end UI designing to REST APIs development. Proficient in Java, Spring Boot, SQL as well as Javascript frameworks ReactJS and Angular.",
  details: [
    {
      key: "name",
      prop: "Name",
      value: "Prem Kumar Yadav",
    },
    {
      key: "dob",
      prop: "Date of Birth",
      value: "June 29 1995",
    },
    {
      key: "address",
      prop: "Address",
      value: "Hyderabad, 500089",
    },
    {
      key: "email",
      prop: "Email",
      value: "prem.aec67@gmail.com",
    },
    {
      key: "phone",
      prop: "Phone",
      value: "7001384343",
    },
  ],
  educationDetails: [
    {
      key: "btech",
      year: "2013 to 2017",
      degree: "Bachelor of Technology in Computer Science",
      college: "Asansol Engineering College",
      grades: "CGPA: 8.04",
    },
    {
      key: "jnv12",
      year: "2012 to 2013",
      degree: "Class XII",
      college: "Jawahar Navodaya Vidyalaya",
      grades: "Percentage: 91.6%",
    },
    {
      key: "jnv10",
      year: "2010 to 2011",
      degree: "Class X",
      college: "Jawahar Navodaya Vidyalaya",
      grades: "CGPA: 10.0",
    },
  ],
  experienceDetails: [
    {
      key: "ot",
      company: "OpenText",
      period: "May 2023 to Present",
      designation: "Sr. Software Engineer",
      responsibilities: [
        "Maintain ReactJS components of the application UI",
        "Made the project compliant with Content Security Policy",
      ],
      logo: ot,
    },
    {
      key: "dbs",
      company: "DBS Tech India",
      period: "Jan 2022 to May 2023",
      designation: "Specialist Full Stack Developer",
      responsibilities: [
        "Owned GCIN module of the corporate KYC application.",
        "External company search integration into the KYC application.",
        "Develop and enhance UI Components in Angular 7, REST APIs in Spring Boot.",
        "Delivered several end to end BPMN workflows.",
      ],
      logo: dbs,
    },
    {
      key: "deloitte",
      company: "Deloitte",
      period: "Jan 2021 to Dec 2021",
      designation: "Consultant",
      responsibilities: [
        "Configure application for various Insurance carriers.",
        "Automate form submission using Puppeteer and NodeJS.",
      ],
      logo: deloitte,
    },
    {
      key: "cts",
      company: "Cognizant",
      period: "April 2020 to Dec 2020",
      designation: "Programmer Analyst",
      responsibilities: [
        "Developing and maintaining REST APIs in an Spring Boot Application.",
        "Writing Batch jobs using Spring Batch.",
        "Automated transalation validation of the application for different languages.",
      ],
      logo: cts,
    },
    {
      key: "tcs",
      company: "Tata Consultancy Services",
      period: "August 2017 to March 2020",
      designation: "Systems Engineer",
      responsibilities: [
        "Understanding business requirements, develop and maintain features for a Health Insurance Application.",
        "Writing REST APIs in Spring based Application.",
        "Developing UI features using HTML and Angular JS.",
      ],
      logo: tcs,
    },
  ],
  skills: [
    {
      key: "java",
      name: "Java",
      percentage: 85,
    },
    {
      key: "sb",
      name: "Spring Boot",
      percentage: 80,
    },
    {
      key: "jpa",
      name: "JPA",
      percentage: 75,
    },
    {
      key: "html",
      name: "HTML",
      percentage: 85,
    },
    {
      key: "css",
      name: "CSS",
      percentage: 85,
    },
    {
      key: "js",
      name: "Javascript",
      percentage: 85,
    },
    {
      key: "angular",
      name: "Angular",
      percentage: 85,
    },
    {
      key: "react",
      name: "ReactJS",
      percentage: 60,
    },
    {
      key: "next",
      name: "NextJS",
      percentage: 50,
    },
    {
      key: "sql",
      name: "SQL",
      percentage: 90,
    },
  ],
  awards: [
    {
      key: "st1",
      year: "December 2022",
      name: "Super Techie",
      company: "DBS Tech India",
    },
    {
      key: "st2",
      year: "July 2022",
      name: "Super Rookie",
      company: "DBS Tech India",
    },
    {
      key: "aa1",
      year: "August 2021",
      name: "Applause Award",
      company: "Deloitte",
    },
    {
      key: "aa2",
      year: "July 2021",
      name: "Applause Award",
      company: "Deloitte",
    },
  ],
  channels: [
    {
      key: "address",
      text: "Address",
      value: "Hyderabad, Telangana 500089",
      icon: faMapLocation,
    },
    {
      key: "contact",
      text: "Contact Number",
      value: "7001384343",
      icon: faSquarePhone,
    },
    {
      key: "email",
      text: "Email Address",
      value: "prem.aec67@gmail.com",
      icon: faEnvelope,
    },
    {
      key: "linkedin",
      text: "LinkedIn",
      value: "https://www.linkedin.com/in/premk378/",
      icon: faComment,
    },
  ],
};

export default profileData;
