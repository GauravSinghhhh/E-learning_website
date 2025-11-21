const courses = {
  class9: [
  {
    id: "g9math",
    title: "Class 9 Mathematics – Complete Course",
    author: "R. Mehta",
    duration: "25h",
    level: "Grade 9",
    subject: "math",
    img: "https://picsum.photos/seed/math9/600/400",
    description: "NCERT Class 9 maths with concept videos and practice problems.",
    lessons: [{ id: "l1", title: "Number Systems", minutes: 40 }]
  },
  {
    id: "g9eng",
    title: "Class 9 English – Reading & Grammar",
    author: "N. Rao",
    duration: "12h",
    level: "Grade 9",
    subject: "english",
    img: "https://picsum.photos/seed/eng9/600/400",
    description: "Improve reading, comprehension and grammar for Class 9.",
    lessons: [{ id: "l1", title: "Tenses & Grammar", minutes: 35 }]
  },

  /* ✅ NEW — Class 9 Science */
  {
    id: "g9science",
    title: "Class 9 Science – Physics, Chemistry & Biology",
    author: "M. Khanna",
    duration: "26h",
    level: "Grade 9",
    subject: "science",
    img: "https://picsum.photos/seed/science9/600/400",
    description: "Complete Class 9 science covering physics, chemistry and biology concepts.",
    lessons: [{ id: "l1", title: "Motion & Force", minutes: 42 }]
  },

  /* ✅ NEW — Class 9 Social Science */
  {
    id: "g9sst",
    title: "Class 9 Social Science – Geography, History, Civics",
    author: "S. Prakash",
    duration: "22h",
    level: "Grade 9",
    subject: "sst",
    img: "https://picsum.photos/seed/sst9/600/400",
    description: "Full NCERT Class 9 Social Science with maps, timelines, and civics modules.",
    lessons: [{ id: "l1", title: "French Revolution", minutes: 38 }]
  }
],

  class10: [
    {
      id: "g10sci",
      title: "Class 10 Science – Physics, Chem, Bio",
      author: "P. Sharma",
      duration: "30h",
      level: "Grade 10",
      subject: "science",
      img: "https://picsum.photos/seed/science10/600/400",
      description: "Comprehensive CBSE Class 10 Science course covering physics, chemistry and biology modules.",
      lessons: [{ id: "l1", title: "Light & Optics", minutes: 50 }]
    },
    {
      id: "g10math",
      title: "Class 10 Mathematics – Board Preparation",
      author: "K. Jain",
      duration: "28h",
      level: "Grade 10",
      subject: "math",
      img: "https://picsum.photos/seed/math10/600/400",
      description: "Board-oriented math practice, examples and shortcuts.",
      lessons: [{ id: "l1", title: "Quadratic Equations", minutes: 45 }]
    },
    {
      id: "g10sst",
      title: "Class 10 Social Science – History, Civics, Geography",
      author: "R. Mehta",
      duration: "26h",
      level: "Grade 10",
      subject: "socialscience",
      img: "https://picsum.photos/seed/sst10/600/400",
      description:
        "Complete Class 10 SST syllabus with History, Civics, Economics, and Geography modules.",
      lessons: [{ id: "l1", title: "Nationalism in India", minutes: 40}]
    }
  ],

  class11: [
    {
      id: "g11phy",
      title: "Class 11 Physics – Mechanics",
      author: "Dr. A. Verma",
      duration: "35h",
      level: "Grade 11",
      subject: "science",
      img: "https://picsum.photos/seed/physics11/600/400",
      description: "Mechanics, thermodynamics and waves for Class 11.",
      lessons: [{ id: "l1", title: "Laws of Motion", minutes: 55 }]
    },
    {
      id: "g11chem",
      title: "Class 11 Chemistry – Foundations",
      author: "S. Bansal",
      duration: "30h",
      level: "Grade 11",
      subject: "science",
      img: "https://picsum.photos/seed/chem11/600/400",
      description: "Inorganic and basic organic chemistry topics.",
      lessons: [{ id: "l1", title: "Atomic Structure", minutes: 40 }]
    }
  ],

  class12: [
    {
      id: "g12chem",
      title: "Class 12 Chemistry – Organic + Inorganic",
      author: "S. Bansal",
      duration: "40h",
      level: "Grade 12",
      subject: "science",
      img: "https://picsum.photos/seed/chem12/600/400",
      description: "Detailed Class 12 chemistry with solved problems and PYQ practice.",
      lessons: [{ id: "l1", title: "Electrochemistry", minutes: 45 }]
    },
    {
      id: "g12cs",
      title: "Class 12 Computer Science – Python & SQL",
      author: "A. Khatri",
      duration: "22h",
      level: "Grade 12",
      subject: "cs",
      img: "https://picsum.photos/seed/cs12/600/400",
      description: "Python programming, file handling, SQL queries and practicals.",
      lessons: [{ id: "l1", title: "Python Basics", minutes: 35 }]
    }
  ],

  college: [
    {
      id: "dsacourse",
      title: "Data Structures & Algorithms",
      author: "R. Kulkarni",
      duration: "50h",
      level: "B.Tech CSE",
      subject: "cs",
      img: "https://picsum.photos/seed/dsa/600/400",
      description: "Arrays, trees, graphs, sorting, searching and interview prep.",
      lessons: [{ id: "l1", title: "Sorting", minutes: 50 }]
    },
    {
      id: "webdevfull",
      title: "Full Stack Web Development (HTML/CSS/React)",
      author: "K. Mishra",
      duration: "45h",
      level: "B.Tech CSE",
      subject: "web",
      img: "https://picsum.photos/seed/webdevfull/600/400",
      description: "Modern frontend with React + basics of server-side concepts.",
      lessons: [{ id: "l1", title: "React Basics", minutes: 55 }]
    },
    {
      id: "mlcourse",
      title: "Machine Learning – Foundations",
      author: "Dr. P. Iyer",
      duration: "60h",
      level: "B.Tech / Intermediate",
      subject: "ml",
      img: "https://picsum.photos/seed/mladvance/600/400",
      description: "Supervised, unsupervised learning and basics of neural nets.",
      lessons: [{ id: "l1", title: "Linear Regression", minutes: 50 }]
    },
    {
      id: "oscourse",
      title: "Operating Systems – Core Concepts",
      author: "N. Singh",
      duration: "35h",
      level: "B.Tech",
      subject: "os",
      img: "https://picsum.photos/seed/os/600/400",
      description: "Processes, scheduling, deadlocks, memory and file systems.",
      lessons: [{ id: "l1", title: "CPU Scheduling", minutes: 50 }]
    }
  ]
};

export default courses;
