import ehnote from "../public/ehnote.png";

import {
  faMapLocation,
  faSquarePhone,
  faComment,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const profileData = {
  name: "Priti Kumari",
  role: "Web Developer",
  objective:
    "I am an aspiring web developer, self-motivated and seeking for a career opportunity to utilize my skills, practical trainings and provide significant contribution to the success of the employer effectively. Willingness to work a challenging environment with a purpose of growth, knowledge and creativity, in order to achieve organizational goals.",
  details: [
    {
      key: "name",
      prop: "Name",
      value: "Priti Kumari",
    },
    {
      key: "dob",
      prop: "Date of Birth",
      value: "January 12 2000",
    },
    {
      key: "address",
      prop: "Address",
      value: "Hyderabad, 500032",
    },
    {
      key: "email",
      prop: "Email",
      value: "im.pritikr@gmail.com",
    },
    {
      key: "phone",
      prop: "Phone",
      value: "9999999999",
    },
  ],
  educationDetails: [
    {
      key: "bca",
      year: "2018 to 2022",
      degree: "Bachelor of Computer Applications",
      college: "Tilka Manjhi Bhagalpur University",
      grades: "Percentage: 68%",
    },
    {
      key: "ru12",
      year: "2016 to 2018",
      degree: "Intermediate",
      college: "Rajkiye Ucch Vidyalaya, Jamui",
      grades: "Percentage: 58.17%",
    },
    {
      key: "dav10",
      year: "2015 to 2016",
      degree: "Class X",
      college: "DAV Public School, Pandaveshwar",
      grades: "CGPA: 7.0",
    },
  ],
  experienceDetails: [
    {
      key: "ehnote",
      company: "EHNOTE",
      period: "June 2023 to Present",
      designation: "Technical Support Associate",
      responsibilities: [
        "Design and Develop UI for the application.",
        "Providing required assistance to end users of the application.",
      ],
      logo: ehnote,
    }
  ],
  skills: [
    {
      key: "java",
      name: "Java",
      percentage: 60,
    },
    {
      key: "html",
      name: "HTML",
      percentage: 75,
    },
    {
      key: "css",
      name: "CSS",
      percentage: 75,
    },
    {
      key: "js",
      name: "Javascript",
      percentage: 70,
    },
    {
      key: "sql",
      name: "SQL",
      percentage: 80,
    },
  ],
  awards: [
    {
      key: "st1",
      year: "December 2022 - May 2023",
      name: "Full Stack Development Training",
      company: "JSpiders",
    }
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
      value: "9999999999",
      icon: faSquarePhone,
    },
    {
      key: "email",
      text: "Email Address",
      value: "im.pritikr@gmail.com",
      icon: faEnvelope,
    },
    {
      key: "linkedin",
      text: "LinkedIn",
      value: "https://www.linkedin.com/in/priti-kumari-40b24b226/",
      icon: faComment,
    },
  ],
};

export default profileData;
