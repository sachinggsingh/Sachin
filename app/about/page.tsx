import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiTypescript,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { TextAnimate } from "@/components/magicui/text-animate";

const technologies = [
    {
        icon: <IoLogoJavascript className="text-yellow-400" />,
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        icon: <FaJava className="text-red-400" />,
        name: "Java",
        url: "https://www.java.com/en",
    },
    {
        icon: <SiTypescript className="text-blue-500" />,
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
    },
    {
        icon: <SiNextdotjs className="text-black dark:text-white" />,
        name: "Next.js",
        url: "https://nextjs.org",
    },
    {
        icon: <SiNodedotjs className="text-green-600" />,
        name: "Node.js",
        url: "https://nodejs.org",
    },
    {
        icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
        name: "Express",
        url: "https://expressjs.com",
    },
    {
        icon: <SiMongodb className="text-green-700" />,
        name: "MongoDB",
        url: "https://www.mongodb.com",
    },
    {
        icon: <GrMysql className="text-green-700" />,
        name: "MySql",
        url: "https://www.mysql.com",
    },
];

const learning = [
    {
        icon: <FaDocker className="h-7 w-7"/>,
        name: "Docker",
        url: "https://www.docker.com/",
    },
    { icon: <FaGolang className="h-7 w-7" />, name: "Golang", url: "https://go.dev" },
];

const AboutPage = () => {
    return (
        <section className="max-w-2xl mx-auto py-16 px-4">
            <h1 className="text-5xl font-bold mb-2">About Me</h1>
            <div className="mb-8 text-lg">
                <TextAnimate animation="blurIn" as="h1" once>
                    Nameste! from a  Backend Developer with a strong foundations and curosity to learn more.</TextAnimate >
            </div>

            <h2 className="text-3xl font-semibold mb-4">Good with</h2>
            <ul className="mb-6 flex flex-wrap gap-4">
                {technologies.map((tech) => (
                    <li key={tech.name}>
                        <LinkPreview
                            url={tech.url}
                            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            <span className="text-xl">{tech.icon}</span>
                            <span className="text-xm">{tech.name}</span>
                        </LinkPreview>
                    </li>
                ))}
            </ul>
            <h2 className="text-3xl font-semibold mb-2 py-4">
                {" "}
                Learning and diving into{" "}
            </h2>
            <ul className="mb-6 flex flex-wrap gap-4">
                {learning.map((tech) => (
                    <li key={tech.name}>
                        <LinkPreview
                            url={tech.url}
                            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            <span className="text-xl">{tech.icon}</span>
                            <span className="text-xm">{tech.name}</span>
                        </LinkPreview>
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-semibold mb-2">Internship Experience</h2>
            <div className="mb-6">
                • First internship was at{" "}
                <span className="font-semibold">
                    <LinkPreview
                        url="https://coderone.in"
                        className="font-semibold text-red-500 dark:text-green-400 hover:underline"
                    >
                        CoderOne{" "}
                    </LinkPreview>
                </span>{" "}
                as a <span className="font-semibold">Full Stack Developer</span>, where
                I worked on{" "}
                <span className="font-semibold">
                    <LinkPreview
                        url="https://github.com/sachinggsingh/SystemFeedBack"
                        className="font-semibold text-blue-700 dark:text-violet-400 hover:underline"
                    >
                        Full Stack FeedBack System{" "}
                    </LinkPreview>
                </span>
                . This experience helped me gain hands-on skills in backend Technologies
                and Frontend Technologies
            </div>
            <div className="mb-6">
                • Second internship was at{" "}
                <span className="font-semibold">
                    <LinkPreview
                        url="https://cognifyz.com"
                        className="font-semibold text-red-500 dark:text-green-400 hover:underline"
                    >
                        Cognifyz Technologies{" "}
                    </LinkPreview>
                </span>{" "}
                as a <span className="font-semibold">Full Stack Developer</span>, where
                I worked on{" "}
                <span className="font-semibold">
                    <LinkPreview
                        url="https://github.com/sachinggsingh/Expense_Manager"
                        className="font-semibold text-blue-700 dark:text-violet-400 hover:underline"
                    >
                        Full Stack Expense Manager{" "}
                    </LinkPreview>
                </span>
                . This experience helped me gain hands-on skills in real-world
                development and teamwork.
            </div>
             <div className="mb-6">
                • Third Internship at{" "}
                <span className="font-semibold">
                    <LinkPreview
                        url="https://www.linkedin.com/company/getnomik/?originalSubdomain=in"
                        className="font-semibold text-red-500 dark:text-green-400 hover:underline"
                    >
                        Getnomik{" "}
                    </LinkPreview>
                </span>{" "}
                as a <span className="font-semibold">Backend Developer</span>
                , 
                where
                I startrd from {" "}
                building and optimizing the code architecure of the platform.
                Enhancing my skills in the backend technologies, database management and problem-solving abilities.
            </div>
            <h2 className="text-2xl font-semibold mb-2">Current Project</h2>
            <div className="mb-12">
                I am currently working on{" "} PawPerfection
                <span className="font-semibold">
                    {" "}
                    <LinkPreview
                        url="https://github.com/sachinggsingh/PawPerfection"
                        className="font-semibold text-yellow-500 dark:text-brown-500 hover:underline"
                    >
                        Personal Project{" "}
                    </LinkPreview>
                </span>{" "}
                which is a Mern-stack web app.
            </div>
        </section>
    );
};

export default AboutPage;
