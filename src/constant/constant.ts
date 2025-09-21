export const navLink = [
  { id: 1, name: "About Us", url: "/about" }, // Add leading slash
  { id: 2, name: "Publication", url: "/publication" }, // Add leading slash
  {
    id: 3,
    name: "Academics",
    url: "/academics",
    subItems: [
      { id: 31, name: "School Timing", url: "/academics/school-timing" },
      { id: 32, name: "Activities", url: "/academics/activities" },
      { id: 33, name: "Academic Calendar", url: "/academics/academic-calendar" },
    ],
  },
  { id: 4, name: "Online Home School", url: "/online-school" }, // Add leading slash
  { id: 5, name: "Admission", url: "/admission" }, // Add leading slash
  { id: 6, name: "Feedback", url: "/feedback" }, // Add leading slash
];