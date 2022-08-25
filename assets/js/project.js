AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Caspar Health Web Platform",
    cardImage: "assets/images/project-page/CasparHealthWebPlatform.png",
    description: "Caspar Health is an online platform that is trying to shape the future of prevention and rehabilitation. The product is used by 81 clinics in Europe and Asia and helps all of their 35,000 patients receive the best quality care—both during and after their hospital stay.",
    tagimg: "",
    Previewlink: "https://app.caspar-health.com/",
    Githublink: "",
  },
  {
    title: "Print on Demand App for Shopify",
    cardImage: "assets/images/project-page/PrintonDemandAppforShopify.png",
    description: "Designed and developed the manual order creation process and CSV order import functionality for a POD app. Allowed sellers to generate bulk orders from external eCommerce platforms using TypeScript, Redis, and MongoDB.",
    tagimg: "",
    Previewlink: "https://apps.shopify.com/fuel-print-on-demand/",
    Githublink: "",
  },
  {
    title: "Agility Infographic",
    cardImage: "assets/images/project-page/AgilityInfographic.png",
    description: "An interactive infographic about agility. The idea for this infographic was to transform many pages of text into a fun, easy to understand infographic. It was developed using HTML, Sass, and jQuery. All animations were created using CSS.",
    tagimg: "",
    Previewlink: "https://giuliacardieri.github.io/infographic/",
    Githublink: "",
  },
  {
    title: "Woollip Pillow Website",
    cardImage: "assets/images/project-page/WoollipPillowWebsite.png",
    description: "This is a special pillow that helps you obtain good sleep during travel. I created this website and added many excellent features.",
    tagimg: "",
    Previewlink: "https://woollip.com/en/",
    Githublink: "",
  },
  {
    title: "Edamama",
    cardImage: "assets/images/project-page/Edamama.png",
    description: "This is an organic and healthy online food store. I designed and coded the landing pages, animated banners and designed graphics, updated the navigation layout, and customized the product page.",
    tagimg:"",
    Previewlink: "https://edamama.de/",
    Githublink: "",
  },
  {
    title: "Kartabita",
    cardImage: "assets/images/project-page/Kartabita.png",
    description: "Kartabita.ru is a website that I fully designed and developed, where users can play card games (written in JavaScript). Currently, the site traffic totals about 17,000 visitors and 300,000 views per day.",
    tagimg: "",
    Previewlink: "http://www.kartabita.ru/",
    Githublink: "",
  },
  {
    title: "Finam Website’s Personal Office",
    cardImage: "assets/images/project-page/FinamWebsite.png",
    description:
      "I worked for one of Russia's largest financial companies, Finam, where I refactored the website’s personal office from jQuery to React.",
    tagimg: "",
    Previewlink: "https://edox.finam.ru/",
    Githublink: "",
  },
  {
    title: "La Prairie New Line PDP and LP",
    cardImage: "assets/images/project-page/la.png",
    description: "Supported a project with edge technology scroll and parallax animations on the landing pages. Fixed inconsistent visuals and design throughout the website. Implemented a third-party video player service for product detail page videos and landing page video backgrounds.",
    tagimg:
      "",
    Previewlink: "https://www.laprairie.com/",
    Githublink: "",
  },
  {
    title: "Caspar Health Product Website",
    cardImage: "assets/images/project-page/CasparHealthProductWebsite.png",
    description:
      "While working for Goreha/Caspar, I helped with the development of the company's website that contains the main product and services information.",
    tagimg:
      "",
    Previewlink: "https://caspar-health.com/",
    Githublink: "",
  },
  {
    title: "Nutrition Stripped",
    cardImage: "assets/images/project-page/NutritionStripped.png",
    description: "Complete redesign, rebuild, and maintenance over a year for a high-traffic nutrition blog using WordPress. Included a store and a member's area dashboard for controlling access to specific content. Beyond the static front-of-house, it included filterable content, favorites, and downloads directory based on membership level and products purchased.",
    tagimg:
      "",
    Previewlink: "http://nutritionstripped.com/",
    Githublink: "",
  },
  {
    title: "Upper Canada Soap",
    cardImage: "assets/images/project-page/uppercanadasoap.png",
    description: "Built using TenUpper Canada Soap offers many brands, including Danielle Beauty, Therawell, and Wanderflower. I worked with a designer in developing this brand site, which includes various dynamic areas, such as the brands' section, the news area, and the contact page.sorflow.",
    tagimg:
      "",
    Previewlink: "https://uppercanadasoap.com/",
    Githublink: "",
  },
  {
    title: "Smileo",
    cardImage: "assets/images/project-page/Smileo.png",
    description: "For this tooth whitening product website, I designed and developed the WordPress site from scratch based on the client's drawings. I integrated a before and after slider, custom coded the product page, and developed checkout customization.",
    tagimg:
      "",
    Previewlink: "https://smileo.com/",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
