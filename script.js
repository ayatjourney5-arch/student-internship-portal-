/* =========================================
   INTERNHUB - STUDENT INTERNSHIP PORTAL
   SpireX Foundation - Task 16
========================================= */


const internships = [
  {
    id: 1,
    title: "Frontend Development Intern",
    company: "TechNova Labs",
    category: "Technology",
    type: "Remote",
    location: "Remote",
    duration: "3 Months",
    stipend: "PKR 25K",
    skills: ["HTML", "CSS", "JavaScript"],
    logo: "T",
    logoClass: "blue-logo",
    description:
      "Work with the development team to create responsive and accessible web interfaces for modern digital products.",
    requirements: [
      "Basic knowledge of HTML, CSS and JavaScript",
      "Understanding of responsive design",
      "Good problem-solving skills",
      "Willingness to learn"
    ]
  },

  {
    id: 2,
    title: "UI/UX Design Intern",
    company: "NovaTech Solutions",
    category: "Design",
    type: "Hybrid",
    location: "Islamabad",
    duration: "4 Months",
    stipend: "PKR 30K",
    skills: ["Figma", "UI Design", "Research"],
    logo: "N",
    logoClass: "purple-logo",
    description:
      "Assist designers in creating user-friendly digital experiences, wireframes and high-fidelity prototypes.",
    requirements: [
      "Basic understanding of UI/UX principles",
      "Figma knowledge is preferred",
      "Creative thinking",
      "Portfolio or academic projects are a plus"
    ]
  },

  {
    id: 3,
    title: "Digital Marketing Intern",
    company: "DigitalEdge",
    category: "Marketing",
    type: "Remote",
    location: "Remote",
    duration: "3 Months",
    stipend: "PKR 20K",
    skills: ["SEO", "Social Media", "Content"],
    logo: "D",
    logoClass: "orange-logo",
    description:
      "Support marketing campaigns, social media planning, SEO research and content creation.",
    requirements: [
      "Interest in digital marketing",
      "Good written communication",
      "Basic social media knowledge",
      "Analytical mindset"
    ]
  },

  {
    id: 4,
    title: "Data Science Intern",
    company: "Insight Analytics",
    category: "Technology",
    type: "On-site",
    location: "Lahore",
    duration: "6 Months",
    stipend: "PKR 35K",
    skills: ["Python", "SQL", "Data"],
    logo: "I",
    logoClass: "green-logo",
    description:
      "Work with data analysts to clean datasets, build reports and explore useful business insights.",
    requirements: [
      "Basic Python knowledge",
      "Interest in data analytics",
      "Understanding of basic statistics",
      "Strong analytical skills"
    ]
  },

  {
    id: 5,
    title: "Content Writing Intern",
    company: "CreativeWorks",
    category: "Marketing",
    type: "Remote",
    location: "Remote",
    duration: "3 Months",
    stipend: "PKR 18K",
    skills: ["Writing", "Research", "SEO"],
    logo: "C",
    logoClass: "blue-logo",
    description:
      "Create engaging blog posts, social media copy and website content for different audiences.",
    requirements: [
      "Strong English writing skills",
      "Research ability",
      "Basic SEO understanding",
      "Creativity"
    ]
  },

  {
    id: 6,
    title: "Business Development Intern",
    company: "GrowthPoint",
    category: "Business",
    type: "Hybrid",
    location: "Rawalpindi",
    duration: "4 Months",
    stipend: "PKR 22K",
    skills: ["Research", "Communication", "Sales"],
    logo: "G",
    logoClass: "orange-logo",
    description:
      "Assist the business development team with market research, lead generation and client communication.",
    requirements: [
      "Good communication skills",
      "Interest in business",
      "Research skills",
      "Ability to work in a team"
    ]
  },

  {
    id: 7,
    title: "AI Research Intern",
    company: "FutureMind AI",
    category: "Technology",
    type: "Remote",
    location: "Remote",
    duration: "5 Months",
    stipend: "PKR 40K",
    skills: ["Python", "AI", "Research"],
    logo: "F",
    logoClass: "purple-logo",
    description:
      "Explore artificial intelligence concepts and assist researchers with experiments and technical documentation.",
    requirements: [
      "Interest in AI and machine learning",
      "Basic Python",
      "Research mindset",
      "Strong learning ability"
    ]
  },

  {
    id: 8,
    title: "Graphic Design Intern",
    company: "PixelCraft Studio",
    category: "Design",
    type: "On-site",
    location: "Karachi",
    duration: "3 Months",
    stipend: "PKR 25K",
    skills: ["Canva", "Photoshop", "Branding"],
    logo: "P",
    logoClass: "green-logo",
    description:
      "Create visual content for digital campaigns, social media and brand communication.",
    requirements: [
      "Basic graphic design skills",
      "Canva or Photoshop knowledge",
      "Good visual sense",
      "Creative portfolio preferred"
    ]
  }
];


/* =========================================
   APPLICATION DATA
========================================= */

let applications = [
  {
    internshipId: 2,
    applied: "20 Sep 2026",
    status: "Under Review"
  },
  {
    internshipId: 4,
    applied: "18 Sep 2026",
    status: "Interview"
  },
  {
    internshipId: 5,
    applied: "15 Sep 2026",
    status: "Accepted"
  },
  {
    internshipId: 7,
    applied: "12 Sep 2026",
    status: "Under Review"
  }
];


let savedInternships = [3, 6];


/* =========================================
   ELEMENTS
========================================= */

const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".page-section");
const pageTitle = document.getElementById("pageTitle");
const internshipGrid = document.getElementById("internshipGrid");
const savedGrid = document.getElementById("savedGrid");
const applicationRows = document.getElementById("applicationRows");

const internshipSearch =
  document.getElementById("internshipSearch");

const categoryFilter =
  document.getElementById("categoryFilter");

const typeFilter =
  document.getElementById("typeFilter");

const globalSearch =
  document.getElementById("globalSearch");

const modal =
  document.getElementById("internshipModal");

const modalContent =
  document.getElementById("modalContent");

const closeModal =
  document.getElementById("closeModal");

const toast =
  document.getElementById("toast");

const toastText =
  document.getElementById("toastText");


/* =========================================
   NAVIGATION
========================================= */

navItems.forEach(item => {

  item.addEventListener("click", () => {

    const section = item.dataset.section;

    if (!section) return;

    showSection(section);

  });

});


function showSection(sectionId) {

  sections.forEach(section => {
    section.classList.remove("active-section");
  });

  const target =
    document.getElementById(sectionId);

  if (target) {
    target.classList.add("active-section");
  }

  navItems.forEach(item => {

    item.classList.remove("active");

    if (item.dataset.section === sectionId) {
      item.classList.add("active");
    }

  });


  const titles = {
    dashboard: "Dashboard",
    internships: "Explore Internships",
    applications: "My Applications",
    saved: "Saved Internships",
    profile: "My Profile"
  };

  pageTitle.textContent =
    titles[sectionId] || "Dashboard";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (sectionId === "applications") {
    renderApplications();
  }

  if (sectionId === "saved") {
    renderSaved();
  }

}


/* =========================================
   INTERNSHIP CARD
========================================= */

function createInternshipCard(internship) {

  const isSaved =
    savedInternships.includes(internship.id);

  return `
    <article class="internship-card">

      <div class="card-top">

        <div class="company-logo ${internship.logoClass}">
          ${internship.logo}
        </div>

        <button
          class="save-btn ${isSaved ? "saved" : ""}"
          onclick="toggleSave(${internship.id})"
          title="Save internship"
        >
          ${isSaved ? "♥" : "♡"}
        </button>

      </div>

      <h3>${internship.title}</h3>

      <span class="company-name">
        ${internship.company}
      </span>

      <div class="card-tags">

        ${internship.skills.map(skill => `
          <span class="tag">${skill}</span>
        `).join("")}

      </div>

      <div class="card-info">

        <div>
          <span>LOCATION</span>
          <strong>${internship.location}</strong>
        </div>

        <div>
          <span>DURATION</span>
          <strong>${internship.duration}</strong>
        </div>

        <div>
          <span>STIPEND</span>
          <strong>${internship.stipend}</strong>
        </div>

      </div>

      <div class="card-bottom">

        <button
          class="apply-btn"
          onclick="applyForInternship(${internship.id})"
        >
          Apply Now
        </button>

        <button
          class="details-btn"
          onclick="openDetails(${internship.id})"
        >
          Details
        </button>

      </div>

    </article>
  `;
}


/* =========================================
   RENDER INTERNSHIPS
========================================= */

function renderInternships() {

  const search =
    internshipSearch.value
      .toLowerCase()
      .trim();

  const category =
    categoryFilter.value;

  const type =
    typeFilter.value;


  const filtered =
    internships.filter(internship => {

      const searchableText = `
        ${internship.title}
        ${internship.company}
        ${internship.category}
        ${internship.skills.join(" ")}
      `.toLowerCase();

      const matchesSearch =
        searchableText.includes(search);

      const matchesCategory =
        category === "all" ||
        internship.category === category;

      const matchesType =
        type === "all" ||
        internship.type === type;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType
      );

    });


  if (!filtered.length) {

    internshipGrid.innerHTML = `
      <div class="empty-state">
        <strong>No internships found</strong>
        Try changing your search or filters.
      </div>
    `;

    return;
  }


  internshipGrid.innerHTML =
    filtered.map(createInternshipCard).join("");
}


/* =========================================
   FEATURED INTERNSHIPS
========================================= */

function renderFeatured() {

  const featured =
    internships.slice(0, 4);

  document.getElementById("featuredList").innerHTML =
    featured.map(internship => `
      <div class="featured-item">

        <div class="company-logo ${internship.logoClass}">
          ${internship.logo}
        </div>

        <div>
          <strong>${internship.title}</strong>
          <span>
            ${internship.company} • ${internship.location}
          </span>
        </div>

        <div class="item-right">
          <strong>${internship.stipend}</strong>
          <span>${internship.duration}</span>
        </div>

      </div>
    `).join("");
}


/* =========================================
   SEARCH + FILTERS
========================================= */

internshipSearch.addEventListener(
  "input",
  renderInternships
);

categoryFilter.addEventListener(
  "change",
  renderInternships
);

typeFilter.addEventListener(
  "change",
  renderInternships
);


globalSearch.addEventListener("keydown", event => {

  if (event.key === "Enter") {

    const value =
      globalSearch.value.trim();

    showSection("internships");

    internshipSearch.value = value;

    renderInternships();

  }

});


/* =========================================
   DETAILS MODAL
========================================= */

function openDetails(id) {

  const internship =
    internships.find(item => item.id === id);

  if (!internship) return;


  modalContent.innerHTML = `

    <div class="modal-company">

      <div class="company-logo ${internship.logoClass}">
        ${internship.logo}
      </div>

      <div>
        <h2>${internship.title}</h2>
        <p>${internship.company} • ${internship.location}</p>
      </div>

    </div>


    <div class="card-tags">

      <span class="tag">${internship.category}</span>
      <span class="tag">${internship.type}</span>
      <span class="tag">${internship.duration}</span>
      <span class="tag">${internship.stipend}</span>

    </div>


    <div class="modal-section">

      <h3>About the Internship</h3>

      <p>
        ${internship.description}
      </p>

    </div>


    <div class="modal-section">

      <h3>Requirements</h3>

      <ul>

        ${internship.requirements.map(
          requirement => `<li>${requirement}</li>`
        ).join("")}

      </ul>

    </div>


    <button
      class="apply-btn"
      style="width:100%;padding:12px"
      onclick="applyForInternship(${internship.id}); closeDetails();"
    >
      Apply for this Internship →
    </button>

  `;

  modal.classList.add("show");

}


function closeDetails() {
  modal.classList.remove("show");
}


closeModal.addEventListener(
  "click",
  closeDetails
);


modal.addEventListener("click", event => {

  if (event.target === modal) {
    closeDetails();
  }

});


/* =========================================
   APPLY
========================================= */

function applyForInternship(id) {

  const internship =
    internships.find(item => item.id === id);

  if (!internship) return;


  const alreadyApplied =
    applications.some(
      application =>
        application.internshipId === id
    );


  if (alreadyApplied) {

    showToast(
      "You have already applied for this internship."
    );

    return;
  }


  applications.unshift({
    internshipId: id,
    applied: "23 Sep 2026",
    status: "Under Review"
  });


  updateStats();

  showToast(
    `Application sent to ${internship.company}!`
  );

}


/* =========================================
   SAVE INTERNSHIP
========================================= */

function toggleSave(id) {

  if (savedInternships.includes(id)) {

    savedInternships =
      savedInternships.filter(
        savedId => savedId !== id
      );

    showToast("Removed from saved internships.");

  } else {

    savedInternships.push(id);

    showToast("Internship saved!");

  }


  renderInternships();

  renderSaved();
}


/* =========================================
   SAVED PAGE
========================================= */

function renderSaved() {

  const saved =
    internships.filter(
      internship =>
        savedInternships.includes(internship.id)
    );


  if (!saved.length) {

    savedGrid.innerHTML = `
      <div class="empty-state">
        <strong>No saved internships yet</strong>
        Save opportunities you want to revisit later.
      </div>
    `;

    return;
  }


  savedGrid.innerHTML =
    saved.map(createInternshipCard).join("");
}


/* =========================================
   APPLICATION TRACKER
========================================= */

function renderApplications(
  statusFilter = "all"
) {

  let filtered =
    applications;


  if (statusFilter !== "all") {

    filtered =
      applications.filter(
        application =>
          application.status === statusFilter
      );

  }


  if (!filtered.length) {

    applicationRows.innerHTML = `
      <div class="empty-state">
        <strong>No applications found</strong>
        Applications matching this status will appear here.
      </div>
    `;

    return;
  }


  applicationRows.innerHTML =
    filtered.map(application => {

      const internship =
        internships.find(
          item =>
            item.id === application.internshipId
        );

      if (!internship) return "";


      const statusClass =
        application.status
          .toLowerCase()
          .replace(" ", "");


      return `

        <div class="application-row">

          <div class="app-name">

            <div class="company-logo ${internship.logoClass}">
              ${internship.logo}
            </div>

            <div>
              <strong>${internship.title}</strong>
              <span>${internship.category}</span>
            </div>

          </div>

          <span>${internship.company}</span>

          <span>${application.applied}</span>

          <span>
            <span class="status ${statusClass}">
              ${application.status}
            </span>
          </span>

          <button
            class="row-menu"
            onclick="openDetails(${internship.id})"
          >
            •••
          </button>

        </div>

      `;

    }).join("");

}


/* =========================================
   APPLICATION FILTER TABS
========================================= */

document
  .querySelectorAll(".application-tab")
  .forEach(tab => {

    tab.addEventListener("click", () => {

      document
        .querySelectorAll(".application-tab")
        .forEach(item =>
          item.classList.remove("active")
        );

      tab.classList.add("active");

      renderApplications(
        tab.dataset.status
      );

    });

  });


/* =========================================
   STATS
========================================= */

function updateStats() {

  document.getElementById(
    "applicationCount"
  ).textContent = applications.length;


  document.getElementById(
    "reviewCount"
  ).textContent =
    applications.filter(
      application =>
        application.status === "Under Review"
    ).length;


  document.getElementById(
    "acceptedCount"
  ).textContent =
    applications.filter(
      application =>
        application.status === "Accepted"
    ).length;

}


/* =========================================
   TOAST
========================================= */

let toastTimer;

function showToast(message) {

  toastText.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2800);

}


/* =========================================
   PROFILE
========================================= */

document
  .getElementById("saveProfile")
  .addEventListener("click", () => {

    showToast(
      "Profile changes saved successfully!"
    );

  });


/* =========================================
   HELP CENTER
========================================= */

document
  .getElementById("helpBtn")
  .addEventListener("click", () => {

    showToast(
      "Need help? Contact the student support team."
    );

  });


/* =========================================
   NOTIFICATIONS
========================================= */

document
  .getElementById("notificationBtn")
  .addEventListener("click", () => {

    showToast(
      "You have 3 new internship updates."
    );

  });


/* =========================================
   MOBILE MENU
========================================= */

document
  .getElementById("mobileMenu")
  .addEventListener("click", () => {

    document
      .querySelector(".sidebar")
      .classList.toggle("open");

  });


/* =========================================
   INITIAL LOAD
========================================= */

renderFeatured();

renderInternships();

renderSaved();
renderApplications();

updateStats();
