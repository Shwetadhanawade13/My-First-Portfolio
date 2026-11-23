// =============================================
// SHWETA DHANAWADE — COMPLETE PORTFOLIO DATA FROM RESUME
// =============================================

export const personalInfo = {
  name: "Shweta Dhanawade",
  firstName: "Shweta",
  title: "Aspiring Software Developer | Python Developer | Data Analyst",
  titles: [
    "Aspiring Software Developer",
    "Java Developer",
    "Data Analyst",
    "Python Programmer",
    "Problem Solver",
  ],
  bio: "Passionate about building innovative software solutions and transforming data into meaningful insights. I enjoy learning new technologies, solving problems, and creating projects that make a difference.",
  about:
    "I am an enthusiastic and motivated aspiring Software Developer and Data Analyst. I have knowledge of programming, database management, data analysis, and frontend development. I enjoy working on practical projects, exploring new technologies, and improving my technical and problem-solving skills. I am looking for an opportunity to start my professional career and contribute to a growing organization.",
  email: "dhanawadeshweta6@gmail.com",
  phone: "+91 9209153212",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Shwetadhanawade13",
  linkedin: "https://www.linkedin.com/in/shweta-dhanawade-5a5352418/",
  available: true,
};

export const stats = [
  { label: "Projects Completed", value: 4, suffix: "+", icon: "🚀" },
  { label: "Technologies Learned", value: 16, suffix: "+", icon: "💡" },
  { label: "Certifications", value: 3, suffix: "", icon: "🏆" },
  { label: "Continuous Learning", value: 365, suffix: "+", icon: "📚" },
];

export const skills = {
  languages: [
    { name: "Java", icon: "☕", color: "from-orange-500 to-red-500" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "C", icon: "🔵", color: "from-blue-600 to-blue-400" },
    { name: "C++", icon: "⚙️", color: "from-blue-700 to-indigo-500" },
    { name: "PHP", icon: "🐘", color: "from-indigo-600 to-purple-500" },
    { name: ".NET (C#)", icon: "🔷", color: "from-purple-600 to-blue-600" },
  ],
  web: [
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-orange-400" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-cyan-400" },
    { name: "JavaScript", icon: "🟨", color: "from-yellow-500 to-amber-500" },
    { name: "React.js", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  ],
  database: [
    { name: "MySQL", icon: "🐬", color: "from-blue-600 to-orange-500" },
    { name: "SQL Server", icon: "🗄️", color: "from-red-600 to-rose-400" },
    { name: "SQL", icon: "📊", color: "from-sky-600 to-blue-400" },
  ],
  analytics: [
    { name: "Power BI Desktop", icon: "📈", color: "from-yellow-600 to-orange-500" },
    { name: "Microsoft Excel", icon: "📊", color: "from-green-600 to-emerald-500" },
    { name: "Pandas", icon: "🐼", color: "from-purple-600 to-purple-400" },
    { name: "NumPy", icon: "🔢", color: "from-blue-600 to-cyan-500" },
    { name: "Matplotlib", icon: "📉", color: "from-pink-500 to-rose-500" },
    { name: "Power Query & DAX", icon: "⚡", color: "from-amber-500 to-yellow-400" },
    { name: "KPI Analysis", icon: "🎯", color: "from-violet-500 to-purple-400" },
  ],
  tools: [
    { name: "Git", icon: "🌿", color: "from-orange-600 to-red-500" },
    { name: "GitHub", icon: "🐙", color: "from-gray-700 to-gray-500" },
    { name: "VS Code", icon: "💻", color: "from-blue-600 to-blue-400" },
    { name: "Visual Studio", icon: "🛠️", color: "from-purple-700 to-indigo-600" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "RoomiLink AI",
    subtitle: "AI-Powered Roommate & Room Discovery Platform",
    duration: "09/2026 – 10/2026",
    description:
      "A full-stack web application that helps students and working professionals find suitable rooms and compatible roommates using AI-based matching, lifestyle preferences, budget, location, and amenity compatibility.",
    contribution:
      "Engineered frontend architecture, authentication UI, profile onboarding workflows, room discovery dashboard, roommate matching interface, and digital living agreement system. Integrated suspicious listing detection to boost platform safety and user trust.",
    tags: ["React.js", "AI Matching", "Auth UI", "Lifestyle Filters", "Tailwind CSS"],
    github: "https://github.com/vaishnavimore1311/RoomiLink-AI",
    live: null,
    featured: true,
    color: "from-purple-600 via-violet-600 to-indigo-700",
    badge: "AI & Full-Stack",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Sales Analytics Project",
    subtitle: "E-Commerce Data Analysis & Business Intelligence",
    duration: "Academic Project",
    description:
      "A comprehensive end-to-end e-commerce sales data analytics project delivering actionable business intelligence through data cleaning, multi-dimensional sales analysis, key performance indicators (KPIs), and executive dashboards.",
    contribution:
      "Performed data wrangling with Python, Pandas & NumPy, extracted sales KPIs, calculated revenue breakdowns using SQL queries, and designed interactive visualization reports using Power BI and Microsoft Excel.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Power BI", "Excel"],
    github: "https://github.com/Shwetadhanawade13/Sales-Analytics-Project",
    live: null,
    featured: true,
    color: "from-pink-600 via-rose-600 to-purple-700",
    badge: "Data Analytics",
    icon: "📊",
  },
  {
    id: 3,
    title: "Smart Parking Management System",
    subtitle: "Automated Slot Allocation & Parking Administration",
    duration: "01/2026 – 03/2026",
    description:
      "A web-based intelligent parking management system designed with automated vehicle slot allocation to streamline parking operations, monitor bay occupancy in real time, and reduce congestion.",
    contribution:
      "Built responsive, modern UI with HTML, CSS, and JavaScript. Designed robust backend with ASP.NET MVC (C#) and integrated SQL Server for tracking vehicle entries, slot reservation logs, user details, and billing.",
    tags: ["ASP.NET MVC", "C#", "SQL Server", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Shwetadhanawade13",
    live: null,
    featured: false,
    color: "from-blue-600 via-cyan-600 to-teal-700",
    badge: "Web & Database",
    icon: "🚗",
  },
  {
    id: 4,
    title: "Online Pizza Delivery",
    subtitle: "Interactive Food Ordering & Dynamic Cart Platform",
    duration: "01/2025 – 06/2025",
    description:
      "A responsive pizza ordering web application featuring a dynamic shopping cart, interactive pizza customization (crust, toppings, size selection), and real-time automated price calculation.",
    contribution:
      "Developed responsive frontend interfaces with HTML, CSS, JavaScript, and powered dynamic backend session handling and order management using PHP and MySQL database.",
    tags: ["PHP", "MySQL", "JavaScript", "Dynamic Cart", "CSS3"],
    github: "https://github.com/Shwetadhanawade13",
    live: null,
    featured: false,
    color: "from-amber-600 via-orange-600 to-red-700",
    badge: "Full-Stack Web",
    icon: "🍕",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Core Java Certification",
    issuer: "Technical Training & Programming Institute",
    skillsCovered: ["OOPs Concepts", "Java Collections", "Exception Handling", "Multithreading"],
    icon: "☕",
    color: "from-orange-500 to-red-500",
    link: null,
  },
  {
    id: 2,
    title: "C & C++ Programming Certification",
    issuer: "Technical Training Institute",
    skillsCovered: ["Procedural Programming", "Pointers & Memory", "Data Structures", "OOP in C++"],
    icon: "⚙️",
    color: "from-blue-500 to-indigo-600",
    link: null,
  },
  {
    id: 3,
    title: "MySQL Certification",
    issuer: "Database Training Program",
    skillsCovered: ["Relational Database Design", "Complex SQL Queries", "Joins & Indexing", "Transactions"],
    icon: "🐬",
    color: "from-cyan-500 to-blue-600",
    link: null,
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Adarsh College, Vita",
    location: "Sangli, Maharashtra, India",
    duration: "Expected 04/2026",
    score: "Percentage: 76%",
    icon: "🎓",
    color: "purple",
    details: [
      "Core focus on Software Engineering, Data Structures, Algorithms, and Object-Oriented Programming.",
      "Comprehensive coursework in Database Management Systems (DBMS), Web Technologies, and Analytics.",
      "Active participant in technical seminars, coding practicals, and collaborative software projects.",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (Class 12 - HSC)",
    institution: "New English School and Junior College, Bhalawani",
    location: "Sangli, Maharashtra, India",
    duration: "Completed 03/2023",
    score: "Percentage: 53.67%",
    icon: "🏫",
    color: "blue",
    details: [
      "Specialized in Science stream with Physics, Chemistry, and Mathematics.",
      "Built logical and analytical foundation for computer applications and engineering concepts.",
    ],
  },
  {
    id: 3,
    degree: "Secondary School Certificate (Class 10 - SSC)",
    institution: "Shelakbav High School, Shelakbav",
    location: "Sangli, Maharashtra, India",
    duration: "Completed 04/2021",
    score: "Percentage: 75%",
    icon: "📚",
    color: "pink",
    details: [
      "Graduated with Distinction (75%), demonstrating strong academic foundation and discipline.",
      "Participated actively in mathematics, science exhibitions, and extracurricular programs.",
    ],
  },
];
