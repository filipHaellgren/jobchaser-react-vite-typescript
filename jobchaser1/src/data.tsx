// data.tsx
export interface Job {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export const jobs: Job[] = [
    {
      id: 1,
      company: "Photosnap",
      logo: "./src/assets/images/photosnap.svg",
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: []
    },
    {
      id: 2,
      company: "Manage",
      logo: "./src/assets/images/manage.svg",
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"]
    },
    {
      id: 3,
      company: "Account",
      logo: "./src/assets/images/account.svg",
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"]
    },
    {
      id: 4,
      company: "MyHome",
      logo: "./src/assets/images/myhome.svg",
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: []
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: "./src/assets/images/loop-studios.svg",
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Ruby"],
      tools: ["Sass"]
    },
    {
      id: 6,
      company: "FaceIt",
      logo: "./src/assets/images/faceit.svg",
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"]
    },
    {
      id: 7,
      company: "Shortly",
      logo: "./src/assets/images/shortly.svg",
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"]
    },
    {
      id: 8,
      company: "Insure",
      logo: "./src/assets/images/insure.svg",
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"]
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: "./src/assets/images/eyecam-co.svg",
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"]
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: "./src/assets/images/the-air-filter-company.svg",
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"]
    }
  ];

