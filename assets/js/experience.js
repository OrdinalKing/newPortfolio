AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    
     title: "Internship",
    cardImage: "assets/images/experience-page/toronto.png",
    place: "University of Toronto",
    time: "(July, 2013 - October, 2014)",
    desp: "<li>Created the HTML portion of online classes as part of my role.</li> <li>Designed online web tests for students with Adobe Captivate and JavaScript.</li> <li>Designed online web tests for students with HTML/CSS and JavaScript.</li>",
  },
  {
    title: "JavaScript Developer",
    cardImage: "assets/images/experience-page/liberty_global.png",
    place: "Liberty Global, UK",
    time: "(October, 2014 - December, 2015)",
    desp: "<li>Developed and improved performance of TV setup box software running on JavaScript engine SpiderMonkey.</li><li>Developed a TV box weather app.</li><li>Worked closely with the designer and implemented the designs to TV setup box applications.</li><li>Smoke tested every day and gathered data from tests.</li><li>Improved performance of TV program schedule applications by refactoring JavaScript functions.</li>",
  },
  {
    title: "Front End Developer",
    cardImage: "assets/images/experience-page/suitsupply.png",
    place: "Suitsupply, US",
    time: "(January, 2016 - November, 2018)",
    desp: "<li>Set up new front-end architecture and worked with the MVC model.</li><li>Redesigned the homepage, PDP, listing pages, checkout, cart page, third-party payment systems, variations, blog articles, glossary, and more.</li><li>Supported integration of custom live chat for the customer support team.</li><li>Redesigned the main navigation header to be responsive.</li><li>Implemented an enterprise slider library with scroll and parallax animations.</li>",
  },
  {
    title: "React Developer",
    cardImage: "assets/images/experience-page/bcg.png",
    place: "BCG GAMMA (remote)",
    time: "(December, 2018 - August, 2019)",
    desp: "<li>Developed a prototype used to visualize transportation routes using React, Antd, and Deck.gl.</li><li>Built a scheduling tool in the form of a Gantt chart using React and Material-UI.</li><li>Researched and selected libraries and tools.</li><li>Balanced requirements, UX, and deadlines in order to get most of the business value in a limited timeframe.</li><li>Designed APIs and manipulated big data.</li><li>Composed scripts—with Python and Node.js—to parse complex data structures.</li>",
  },
  {
    title: "Senior Front End Developer",
    cardImage: "assets/images/experience-page/goreha.png",
    place: "Goreha (remote)",
    time: "(January, 2016 - November, 2018)",
    desp: "<li>Led the front-end development of a multi-lingual digital rehabilitation platform.</li><li>Used Angular 5 and NgRx to make the Reactive front end.</li><li>Migrated and merged an admin panel application into the platform.</li><li>Built from scratch a product website with React and GatsbyJS.</li>",
  },
  {
    title: "Lead Senior Front End Engineer",
    cardImage: "assets/images/experience-page/intuit.png",
    place: "Intuit (US)",
    time: "(August, 2021 -July, 2022)",
    desp: "<li>Developed Open CMS components.</li><li>Developed various reusable AEM components.</li><li>Developed YouTube video components with playlists using YouTube API.</li><li>Created and managed Optimizely experiments.</li><li>Worked closely with the design team to improve website consistency and style guide.</li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section




