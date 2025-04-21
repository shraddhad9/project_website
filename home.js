const courseData = {
    DSA: {
      title: "Data Structures and Algorithms",
      desc: "Learn arrays, linked lists, trees, and graphs.",
      image: "dsa.jpg",
      video: "https://www.youtube.com/embed/AT14lCXuMKI",
      questions: [
        "What is the time complexity of inserting into a binary heap?",
          "Explain the difference between stack and queue.",
         " Explain the LIFO and FIFO principles with examples.",
         "What is the time complexity of searching in a linear array?",
         "Convert an infix expression to postfix notation."
      ],
    },
    DBMS: {
      title: "DBMS",
      desc: "Understand relational models, normalization, and transactions.",
      image: "dbms.png",
      video: "https://www.youtube.com/embed/kBdlM6hNDAE",
      questions: [
        "Explain 3NF with example.",
          "What are ACID properties?",
          "Define foreign key. How is it different from a primary key?",
          "What is a view in SQL? How is it different from a table?",
          "Define the difference between DELETE, TRUNCATE, and DROP commands in SQL."
      ],
    },
    OS: {
      title: "Operating Systems",
      desc: "Explore processes, memory, and file systems.",
      image: "os.jpg",
      video: "https://www.youtube.com/embed/26QPDBe-NB8",
      questions: [
        "What are the types of scheduling algorithms?",
          "Explain deadlock prevention.",
          "What are the necessary conditions for a deadlock?",
          "What is journaling in file systems?",
          "Explain the role of the file system in an OS."
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
          "Describe how ARP (Address Resolution Protocol) works.",
          "What is the role of the transport layer in network communication?",
          "Compare IPv4 and IPv6. What are the key differences?"
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
          "Design a DFA that accepts binary strings divisible by 3.",
          "Construct a CFG for palindromes over {a, b}.",
          "State and explain the pumping lemma for regular languages."
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
          "What is the role of a lexical analyzer?",
          "What is a dependency graph in SDT?",
          "Define basic blocks and flow graphs."
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

  const progress = {
    DSA: 0,
    DBMS: 0,
    OS: 0,
    CN: 0,
    TOC: 0,
    Compiler: 0
  };
  
      let currentCourse = null;
  
      function loadCourse(courseKey) {
        const data = courseData[courseKey];
        if (!data) return;
  
        document.getElementById("courseDetail").style.display = "block";
        document.getElementById("courseTitle").textContent = data.title;
        document.getElementById("courseDesc").textContent = data.desc;
        document.getElementById("courseVideo").src = data.video;
  
        const questionDiv = document.getElementById("courseQuestions");
        questionDiv.innerHTML = "";
        data.questions.forEach(q => {
          const p = document.createElement("p");
          p.textContent = `- ${q}`;
          questionDiv.appendChild(p);
        });
  
        currentCourse = courseKey;
      }
  
      function completeCourse() {
        if (!currentCourse) return;
        progress[currentCourse] = 100;
        updateProgressBars();
        alert(currentCourse + " marked as complete!");
      }
  
      function updateProgressBars() {
    document.getElementById("dsaProgress").style.width = progress.DSA + "%";
    document.getElementById("dbmsProgress").style.width = progress.DBMS + "%";
    document.getElementById("osProgress").style.width = progress.OS + "%";
    document.getElementById("cnProgress").style.width = progress.CN + "%";
    document.getElementById("tocProgress").style.width = progress.TOC + "%";
    document.getElementById("compilerProgress").style.width = progress.Compiler + "%";
  }