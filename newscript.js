const courseData = {
    DSA: {
      title: "Data Structures and Algorithms",
      desc: "Learn arrays, linked lists, trees, and graphs.",
      image: "dsa.jpg",
      video: "https://www.youtube.com/embed/AT14lCXuMKI",
      questions: [
        "What is the time complexity of inserting into a binary heap?",
        "Explain the difference between stack and queue.",
        "Explain the LIFO and FIFO principles.",
      ],
    },
    DBMS: {
      title: "DBMS",
      desc: "Understand relational models, normalization, and transactions.",
      image: "dbms.png",
      video: "https://www.youtube.com/embed/kBdlM6hNDAE",
      questions: [
        "Explain 3NF with an example.",
        "What are ACID properties?",
        "Define foreign key and its difference from a primary key.",
      ],
    },
    OS: {
      title: "Operating Systems",
      desc: "Explore processes, memory, and file systems.",
      image: "os.jpg",
      video: "https://www.youtube.com/embed/26QPDBe-NB8",
      questions: [
        "What are the types of scheduling algorithms?",
        "Explain deadlock prevention techniques.",
      ],
    },
    CN: {
      title: "Computer Networks",
      desc: "Learn OSI model, TCP/IP, protocols, and routing.",
      image: "cn.jpg",
      video: "https://www.youtube.com/embed/IPvYjXCsTg8",
      questions: [
        "Explain the OSI model.",
        "Difference between TCP and UDP.",
      ],
    },
    TOC: {
      title: "Theory of Computation",
      desc: "Understand automata theory, CFGs, and Turing machines.",
      image: "toc.jpg",
      video: "https://www.youtube.com/embed/EuBBz3bI-aA",
      questions: [
        "Define DFA and give an example.",
        "What is the pumping lemma?",
      ],
    },
    Compiler: {
      title: "Compiler Design",
      desc: "Lexical analysis, parsing, and syntax-directed translation.",
      image: "cd.jpg",
      video: "https://www.youtube.com/embed/nzfFjhq2rjc",
      questions: [
        "Explain the phases of a compiler.",
        "What is syntax-directed translation?",
      ],
    },
  };
  
  // Load course cards
  function loadCourses() {
    const courseGrid = document.querySelector(".course-grid");
  
    Object.keys(courseData).forEach((key) => {
      const course = courseData[key];
  
      const card = document.createElement("div");
      card.classList.add("course-card");
  
      card.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h4>${course.title}</h4>
        <p>${course.desc}</p>
        <button class="btn" onclick="loadCourse('${key}')">Learn More</button>
      `;
  
      courseGrid.appendChild(card);
    });
  }
  
  // Initialize the course grid
  window.onload = loadCourses;
  
  // Show course details
  function loadCourse(courseKey) {
    const data = courseData[courseKey];
    if (!data) return;
  
    document.getElementById("courseDetail").style.display = "block";
    document.getElementById("courseTitle").textContent = data.title;
    document.getElementById("courseDesc").textContent = data.desc;
    document.getElementById("courseVideo").src = data.video;
  
    const questionDiv = document.getElementById("courseQuestions");
    questionDiv.innerHTML = "";
    data.questions.forEach((q) => {
      const p = document.createElement("p");
      p.textContent = `- ${q}`;
      questionDiv.appendChild(p);
    });
  }
  
  
  // Mark course as complete
  function completeCourse() {
    alert("Course marked as complete!");
  }
  
  let isLoggedIn = false; // Simulates login status (false by default)
  
  // Load course cards
  function loadCourses() {
      const courseGrid = document.querySelector(".course-grid");
  
      Object.keys(courseData).forEach((key) => {
          const course = courseData[key];
  
          const card = document.createElement("div");
          card.classList.add("course-card");
  
          card.innerHTML = `
              <img src="${course.image}" alt="${course.title}">
              <h4>${course.title}</h4>
              <p>${course.desc}</p>
              <button class="btn" onclick="loadCourse('${key}')">Learn More</button>
          `;
  
          courseGrid.appendChild(card);
      });
  }
  
  // Check login status before showing course details
  function loadCourse(courseKey) {
      if (!isLoggedIn) {
          alert("Please log in first to access course details!");
          window.location.href = "signin.html"; // Redirect to the login page
          return;
      }
  
      const data = courseData[courseKey];
      if (!data) return;
  
      document.getElementById("courseDetail").style.display = "block";
      document.getElementById("courseTitle").textContent = data.title;
      document.getElementById("courseDesc").textContent = data.desc;
      document.getElementById("courseVideo").src = data.video;
  
      const questionDiv = document.getElementById("courseQuestions");
      questionDiv.innerHTML = "";
      data.questions.forEach((q) => {
          const p = document.createElement("p");
          p.textContent = `- ${q}`;
          questionDiv.appendChild(p);
      });
  }
  
  // Simulate login on the sign-in page
  function simulateLogin() {
      isLoggedIn = true; // Change login status to true
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to the main page
  }
  
  // Initialize the course grid
  window.onload = loadCourses; 
  function simulateLogin() {
      isLoggedIn = true; // Change login status to true
  
      // Show confirmation dialog and redirect on OK
      if (confirm("Login successful! Click OK to continue.")) {
          window.location.href = "index.html"; // Redirect to the main page
      }
  }
  
  // Handle login form submission in signin.html
  document.getElementById("signin-form").addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      simulateLogin(); // Simulate login and redirect
  });

  document.getElementById("signin-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    // Simulate validation (replace this with actual backend logic if needed)
    if (username === "admin" && password === "password") {
        alert("Sign-In successful!");
        window.location.href = "newindex.html"; // Redirect to index.html
    } else {
        alert("Invalid username or password. Please try again!");
    }
});