import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { SiRedux } from "react-icons/si";


export const projects = [
  {
    title: "Resume-AI",
    description: (
      <>
        <p>
          A Resume-AI web app that generates summary for the user&apos;s input and their resume template for the ats score and the recommendations to improve the resume and ats score of the user.
        </p>
      </>
    ),
    badge: "Full Stack",
    image: "https://images.stockcake.com/public/b/1/9/b193908a-64a3-4f96-b357-17cd7f41a6db_large/professional-resume-review-stockcake.jpg",
    github: "https://resume-ai-three-eta.vercel.app",
    techStack: [
      { icon: <RiNextjsFill className="text-w-white" />, name: "Next.js" },
      { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
      {icon: <RiGeminiFill className="text-green-700" />, name: 'Gemini API' },
      { icon: <SiMongodb className="text-red-800" />, name: 'MongoDB' },
      { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
      { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express' },
    ]
  },
  {
    title: "Job Dekho",
    description: (
      <>
        <p>
          A TypeScript-MySQL job portal web app. Features include job search, application tracking, and employer dashboards.
        </p>
      </>
    ),
    badge: "BackEnd",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
    github: "https://github.com/sachinggsingh/Job-Dekho",
    techStack: [
      { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
      { icon: <SiMysql className="text-red-800" />, name: 'MySQL' },
      { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
      { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express' },
    ]
  },
  {
    title: "WebIDE",
    description: (
      <>
        <p>
          An online compiler with the AI assistant to sumarize the code. Which let&apos;s you know what you are doing and what are you writing
        </p>
      </>
    ),
    badge: "Full Stack",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://personalized-editor.vercel.app",
    techStack: [
      { icon: <RiNextjsFill className="text-w-white" />, name: "Next.js" },
      { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
      { icon: <SiReact className="text-cyan-400" />, name: 'React' },
      { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
      { icon: <RiGeminiFill className="text-green-700" />, name: 'Gemini API' },
      { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express' },
    ]
  },
  {
    title: "Authentication",
    description: (
      <>
        <p>
          Authentication system implemented in both JavaScript and TypeScript. The JavaScript version uses MongoDB, while the TypeScript version is built with PostgreSQL. Both implementations include JWT-based authentication with token blacklisting/blocking using Redis for enhanced security. Additionally, the entire system is containerized using Docker for
        </p>
      </>
    ),
    badge: "Backend",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600",
    github: "https://personalized-editor.vercel.app",
    techStack: [
      { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express' },
      { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
      { icon: <IoLogoJavascript className="text-yellow-400" />, name: 'JavaScript' },
      { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
      { icon: <SiPostgresql className="text-violet-400" />, name: "PostgreSQL" },
      { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
      { icon: <FaDocker className="text-reed-400" />, name: "Docker" },
    ]
  },
  {
    title: "PawPerfection",
    description: (
      <>
        <p>
          A Pet Training system from where you can train your pet at home only by your own self.
        </p>
      </>
    ),
    badge: "Full Stack",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/sachinggsingh/PawPerfection",
    techStack: [
      { icon: <IoLogoJavascript className="text-yellow-400" />, name: 'JavaScript' },
      { icon: <SiReact className="text-cyan-400" />, name: 'React' },
      { icon: <SiRedux className="text-violet-700" />, name: 'Redux toolkit' },
      { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
      { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
      { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express' },
    ]
  },
  {
    title: "Expense Manager",
    description: (
      <>
        <p>
          A full stack expense management system built with React, Node.js, and MongoDB. Allows users to track expenses, set budgets, and visualize spending.
        </p>
      </>
    ),
    badge: "Full Stack",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/sachinggsingh/Expense_Manager",
    techStack: [
      { icon: <IoLogoJavascript className="text-yellow-400" />, name: 'JavaScript' },
      { icon: <SiReact className="text-cyan-400" />, name: 'React' },
      { icon: <SiRedux className="text-violet-700" />, name: 'Redux toolkit' },
      { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
      { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
      { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express' },
    ]
  },
  {
    title: "Feedback System",
    description: (
      <>
        <p>
          A feedback collection platform for organizations, built with Node.js, Express, and MongoDB. Supports anonymous feedback and analytics.
        </p>
      </>
    ),
    badge: "Full Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/sachinggsingh/SystemFeedBack",
    techStack: [
      { icon: <IoLogoJavascript className="text-yellow-400" />, name: 'JavaScript' },
      { icon: <SiReact className="text-cyan-400" />, name: 'React' },
      { icon: <SiNodedotjs className="text-green-600" />, name: 'Node.js' },
      { icon: <SiMongodb className="text-green-700" />, name: 'MongoDB' },
      { icon: <SiExpress className="text-gray-700 dark:text-gray-200" />, name: 'Express' },
    ]
  },
];