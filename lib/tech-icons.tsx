import React from "react";
import NextJs from "@/components/technologies/NextJs";
import ReactIcon from "@/components/technologies/ReactIcon";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import JavaScript from "@/components/technologies/JavaScript";
import Html from "@/components/technologies/Html";
import CSS from "@/components/technologies/CSS";
import GithubIcon from "@/components/technologies/Github";
import Figma from "@/components/technologies/Figma";
import Netlify from "@/components/technologies/Netlify";
import Vercel from "@/components/technologies/Vercel";
import Shadcn from "@/components/technologies/Shadcn";
import NodeJs from "@/components/technologies/NodeJs";
import Motion from "@/components/technologies/Motion";
import NestJs from "@/components/technologies/NestJs";
import Postman from "@/components/technologies/Postman";
import MongoDB from "@/components/technologies/MongoDB";
import ExpressJs from "@/components/technologies/ExpressJs";
import Prisma from "@/components/technologies/Prisma";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import AWS from "@/components/technologies/AWS";
import ThreeJs from "@/components/technologies/ThreeJs";
import Bun from "@/components/technologies/Bun";
import SocketIo from "@/components/technologies/SocketIo";
import Appwrite from "@/components/technologies/Appwrite";
import Sanity from "@/components/technologies/Sanity";
import BootStrap from "@/components/technologies/BootStrap";

export const TECH_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    // Frontend
    "Next Js": NextJs,
    "Next.js": NextJs,
    "React Js": ReactIcon,
    "React": ReactIcon,
    "React.js": ReactIcon,
    "Tailwind CSS": TailwindCss,
    "TailwindCSS": TailwindCss,
    "TypeScript": TypeScript,
    "JavaScript": JavaScript,
    "JavaScript/jQuery": JavaScript,
    "Html/Css": Html,
    "Html/CSS": Html,
    "HTML/CSS": Html,
    "CSS": CSS,
    "Html": Html,
    "Bootstrap": BootStrap,
    "BootStrap": BootStrap,
    "Three.js": ThreeJs,
    "ThreeJs": ThreeJs,
    "Motion": Motion,
    "Framer Motion": Motion,
    "Shadcn": Shadcn,
    "ShadCn": Shadcn,
    "shadcn/ui": Shadcn,

    // Backend
    "Node Js": NodeJs,
    "Node.js": NodeJs,
    "NodeJS": NodeJs,
    "NestJs": NestJs,
    "Nest.js": NestJs,
    "Express": ExpressJs,
    "Express.js": ExpressJs,
    "ExpressJs": ExpressJs,
    "Bun": Bun,
    "Socket.io": SocketIo,
    "SocketIO": SocketIo,

    // Database
    "MongoDB": MongoDB,
    "PostgreSQL": PostgreSQL,
    "Prisma": Prisma,

    // Cloud & Tools
    "Git/Github": GithubIcon,
    "Figma": Figma,
    "Netlify": Netlify,
    "Vercel": Vercel,
    "Postman": Postman,
    "AWS": AWS,
    "Appwrite": Appwrite,
    "Sanity": Sanity,
};
