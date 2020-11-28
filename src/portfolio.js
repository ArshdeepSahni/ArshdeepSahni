
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Arshdeep Singh",
  title: "Hello, I'm Arshdeep",
  subTitle: emoji("A passionate Software and Web App Developer. Amazon AWS Data-Exchange Challenge Winner."),
  resumeLink: "https://drive.google.com/file/d/1smCroEv5xWilRoBw4WuAcaumpSx7c3A5/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/arshdeepsahni",
  linkedin: "https://www.linkedin.com/in/arshdeep-singh-418a9b194/",
  gmail: "arsh22sahni@gmail.com",
  gitlab: "https://gitlab.com/arsh22sahni",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  instagram: 'https://www.instagram.com/myself_arshdeep/',
  twitter: 'https://twitter.com/Arshdeep__2001'
};

// Your Skills Section

const skillsSection = {
  title: "Skills am good at",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive WEB and MOBILE applications."),
    emoji("⚡ Application Programming Interface (API) integration."),
    emoji("⚡ OPEN-SOURCE Contributor.")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-foursquare"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Blockchain",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Chitkara University",
      logo: require("./assets/images/cuiet_logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2019 - July 2023",
      desc: "Published 2 Patents during Graduation.",
      descBullets: [
        "Recoginised by the University's Social handles on Winning AWS Data-Exchange Challenge",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   ]
    // }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Application Development",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "UI/UX",
      progressPercentage: "85%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "77%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer Intern",
      company: "Codify Apps",
      companylogo: require("./assets/images/codify.jpg"),
      date: "August 2019 – Feburary 2020",
      desc: "Computer Software Company work in the field of Restaurant Automation, Data Analysis and Machine Learning.",
      // desc: "Computer Software",
      descBullets: [
        "Worked on Ioninc v4 Framework while handling the design of Mobile App 'QuickOrderApp'",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Campus Ambassador",
      company: "Yuvaan, DTU",
      companylogo: require("./assets/images/yuvaan.jpg"),
      date: "December 2019 – Feburary 2020",
      desc: "The Biggest Youth LitFest in India. Literature & Film Festival of Delhi Technological University",
    },
    {
      role: "Technical Intern",
      company: "Hexanovate",
      companylogo: require("./assets/images/hexa.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Hexanovate understand what exactly a business needs. Right from idea cultivation, its launch, & future growth. Place for growth-oriented Software and Marketing Solutions."
    },
    {
      role: "Web Application Developer Intern",
      company: "Aztlan",
      companylogo: require("./assets/images/aztlan.jpg"),
      date: "March 2020 – Present",
      desc: "Providing intuitive and innovative software.",
      descBullets: [
        "Working on Flutter Framework for the product Web App 'Workpeer'"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "18313c244c19ab4ae10bf49cd735aa9172f19914",
  githubUserName: "ArshdeepSahni", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Amazing Full Stack Projects",
  subtitle: "Some Great Innovative Projects",
  projects: [
    {
      // title="ndsv",
      image: require("./assets/images/trackmycovidmob.png"),
      link: "https://github.com/ArshdeepSahni/aws_covid_care"
    },
    {
      image: require("./assets/images/sheheroesmob.png"),
      link: "https://github.com/ArshdeepSahni/SheHeroes"
    },
    {
      image: require("./assets/images/mahol.png"),
      link: "https://github.com/ArshdeepSahni/Mahol"
    },

  ]
};




// ----------------------------
const proz = {

  title: emoji("Achievement"),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I am proud of!",

  achievementsCards: [
    {
      title: "AWS Data-Exchange Challenge Winner",
      subtitle: "Me along with my team developed 'TrackMyCovid' cross-platform application which won the Amazon AWS Data-Exhange Challenge among 6 winners out of 1356 Paticipants",
      image: require("./assets/images/aws.jpeg"),
      footerLink: [
        { name: "WebSite", url: "https://awsdataexchange.devpost.com/" },
        { name: "Project", url: "https://devpost.com/software/qwe-8a2wtn" },
        { name: "Recognition", url: "https://youtu.be/6QI5b88ERts?t=2206" },
      ]
    },
    {
      title: "RallyToUS Hackathon Winner",
      subtitle: "Me along with my team developed 'TrackMyCovid' cross-platform application which won 2 Awards in the RallyToUS Hackathon among 125 Paticipants",
      image: require("./assets/images/rally.png"),
      footerLink: [
        { name: "WebSite", url: "https://rally.devpost.com/" },
        { name: "Project", url: "https://devpost.com/software/qwe-8a2wtn" },]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};
// -----------------------------








// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications"),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I am proud of!",

  achievementsCards: [
    {
      title: "AWS Data-Exchange Challenge Winner",
      subtitle: "Me along with my team developed 'TrackMyCovid' cross-platform application which won the Amazon AWS Data-Exhange Challenge among 6 winners out of 1356 Paticipants",
      image: require("./assets/images/aws.jpeg"),
      footerLink: [
        { name: "WebSite", url: "https://awsdataexchange.devpost.com/" },
        { name: "Project", url: "https://devpost.com/software/qwe-8a2wtn" },
        { name: "Recognition", url: "https://youtu.be/6QI5b88ERts?t=2206" },
      ]
    },
    {
      title: "RallyToUS Hackathon Winner",
      subtitle: "Me along with my team developed 'TrackMyCovid' cross-platform application which won 2 Awards in the RallyToUS Hackathon among 125 Paticipants",
      image: require("./assets/images/rally.png"),
      footerLink: [
        { name: "WebSite", url: "https://rally.devpost.com/" },
        { name: "Project", url: "https://devpost.com/software/qwe-8a2wtn" },]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "My Blogs for community",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://dev.to/arshdeepsahni/add-new-widget-on-pressing-button-in-flutter-1fkf",
      title: "Custom Widget",
      description: "Add new Widget on Pressing Button in Flutter"
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ]
};

// Talks Sections

const talkSection = {
  title: "Hackathons",
  subtitle: emoji("I LOVE TO DEVELOP INNOVATIVE PROJECTS FOR THE BETTERMENT OF COMMUNITY. THEREFORE HERE ARE SOME OF THE 'MEMORIES' OF THE HACKATHONS I PARTICIPATED AND WON SOME..."),

  talks: [
    {
      title: "OCTAHACKS 2.0",
      subtitle: "PROJECT : CODE-ERROR",
      // slides_url: "https://github.com/ArshdeepSahni/CRUX-CODERROR",
      event_url: "https://curin.chitkara.edu.in/news/chitkara-university-newgen-iedc-supported-octahacks-2-0-a-nationwide-30-hour-hackathon-was-organized-by-chitkara-university-punjab-on-september-20-21-2019/"
    },
    {
      title: "Hack-O-Wasp 2.0",
      subtitle: "PROJECT : CODE-ERROR",
      slides_url: "https://github.com/ArshdeepSahni/CRUX-CODERROR",
      event_url: "https://www.townscript.com/e/hackowasp-20"
    },
    {
      title: "AWS Data-Exchange Challenge",
      subtitle: "PROJECT : TrackMyCovid",
      slides_url: "https://github.com/ArshdeepSahni/aws_covid_care",
      event_url: "https://awsdataexchange.devpost.com/"
    },
    {
      title: "RallyToUS",
      subtitle: "PROJECT : TrackMyCovid",
      slides_url: "https://github.com/ArshdeepSahni/aws_covid_care",
      event_url: "https://rally.devpost.com/"
    },
    {
      title: "Hack4She",
      subtitle: "PROJECT : SheHeroes",
      slides_url: "https://devfolio.co/submissions/sheheroes",
      event_url: "https://devfolio.co/hackforshe/dashboard"
    },
    {
      title: "Octahacks 3.0",
      subtitle: "PROJECT : SheHeroes",
      slides_url: "https://devfolio.co/submissions/sheheroes",
      event_url: "https://devfolio.co/dsc-ciet-octahacks/dashboard"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast"),
  subtitle: "I LOVE TO TALK ABOUT MY EXPERIENCES AND TECHNOLOGY UPDATES",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://cordss.com/podcasts?title=&pod_category=all"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919872453423",
  email_address: "arsh22sahni@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "Arshdeep__2001"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, proz, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
