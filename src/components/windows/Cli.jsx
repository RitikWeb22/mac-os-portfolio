import React from "react";
import Terminal from "react-console-emulator";
import MacWindows from "./MacWindows";
import "./cli.scss";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

const COMMANDS = {
  about: {
    description: "Short bio / summary about Ritik",
    usage: "about",
    fn: () =>
      `Hi — I'm Ritik, a Product-focused Full-Stack Software Engineer.\n` +
      `I build modern, scalable, AI-powered web products using MERN, Next.js and GenAI.\n` +
      `Open-source & production-first mindset.`,
  },

  skills: {
    description: "Show tech stack and proficiency",
    usage: "skills",
    fn: () => [
      "Frontend:",
      "- React.js (95%)",
      "- Next.js (90%)",
      "- Tailwind CSS (90%)",
      "- GSAP / Framer (70%)",
      "",
      "Backend:",
      "- Node.js (90%)",
      "- Express.js (90%)",
      "- MongoDB (85%)",
      "- PostgreSQL (75%)",
      "",
      "AI / GenAI:",
      "- OpenAI APIs",
      "- Image detection & prompt engineering",
      "",
      "Tools:",
      "- Git, Docker, AWS, Figma, Linux",
    ],
  },

  projects: {
    description: "List featured projects",
    usage: "projects",
    fn: () => [
      "Featured Projects:",
      "- AI Interior Design Generator",
      "- Refund Image Verification System",
      "- Figma-like Web Editor",
      "",
      "Type `project <name>` for details (e.g. project ai interior design generator).",
    ],
  },

  project: {
    description: "Show details for a specific project",
    usage: "project <name>",
    fn: (...args) => {
      const name = args.join(" ").trim().toLowerCase();
      if (!name) return "Usage: project <name>";

      if (
        name.includes("interior") ||
        name.includes("design") ||
        name.includes("ai interior")
      ) {
        return [
          "AI Interior Design Generator",
          "Description: Generates interior design concepts from user prompts and images using GenAI.",
          "Tech: Next.js, Tailwind CSS, OpenAI, Vercel",
          "Notes: Production-ready UI + serverless inference (replace with actual architecture details).",
        ];
      }

      if (
        name.includes("refund") ||
        name.includes("verification") ||
        name.includes("image")
      ) {
        return [
          "Refund Image Verification System",
          "Description: Detects manipulated or AI-generated images to reduce refund fraud.",
          "Tech: MERN, GenAI, image-detection pipelines",
          "Notes: Focused on high-precision detection and easy integration with e-commerce flows.",
        ];
      }

      if (
        name.includes("figma") ||
        name.includes("editor") ||
        name.includes("web editor")
      ) {
        return [
          "Figma-like Web Editor",
          "Description: Layer-based visual editor with drag, zoom, history, and export features.",
          "Tech: Vanilla JS, Canvas API, DOM + custom history/undo stacks",
          "Notes: Good baseline to extend into collaborative editing / export pipelines.",
        ];
      }

      return `No project found matching "${name}". Type \`projects\` to see available projects.`;
    },
  },

  experience: {
    description: "Short professional experience summary",
    usage: "experience",
    fn: () => [
      "Professional Experience:",
      "- 2023 - Present: Full-Stack Software Engineer (Independent Developer)",
      "  • Built production-ready MERN & Next.js apps",
      "  • Deployed on Vercel & AWS; improved frontend performance (Lighthouse gains)",
      "",
      "- 2021 - 2023: Frontend Developer / Product work",
      "  • High-fidelity animations, interactive UIs",
    ],
  },

  contact: {
    description: "Show contact info (replace placeholders)",
    usage: "contact",
    fn: () => [
      "Contact:",
      "- Email: your.email@domain.com  (replace with your real email)",
      "- GitHub: https://github.com/your-username",
      "- LinkedIn: https://www.linkedin.com/in/your-profile",
      "- Location: India / Remote",
    ],
  },

  github: {
    description: "Open GitHub profile in a new tab",
    usage: "github",
    fn: () => {
      const url = "https://github.com/your-username"; // replace
      if (typeof window !== "undefined") window.open(url, "_blank");
      return `Opening GitHub: ${url}`;
    },
  },

  linkedin: {
    description: "Open LinkedIn profile in a new tab",
    usage: "linkedin",
    fn: () => {
      const url = "https://www.linkedin.com/in/your-profile"; // replace
      if (typeof window !== "undefined") window.open(url, "_blank");
      return `Opening LinkedIn: ${url}`;
    },
  },

  resume: {
    description: "Open / download resume (replace path)",
    usage: "resume",
    fn: () => {
      const url = "/Ritik_Resume.pdf"; // replace with hosted resume path
      if (typeof window !== "undefined") window.open(url, "_blank");
      return `Opening resume: ${url}`;
    },
  },
};

const welcomeMessage = `
#  Welcome to Ritik's Portfolio CLI
#  Type 'help' to see available commands.
#
#  Quick tips:
#   - Try: about, skills, projects, project <name>
#   - Open profile links: github, linkedin, resume
#
#  Example:
#   > project ai interior design generator
`;

const Cli = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindows
      windowName={windowName}
      windowState={windowState}
      setWindowState={setWindowState}
    >
      <div className="cli-window">
        <Terminal
          commands={COMMANDS}
          welcomeMessage={welcomeMessage}
          errorText={
            "No worries! Even developers mistype sometimes 😄. Try `help` to see valid commands."
          }
          promptLabel={"Ritik:~$"}
          promptLabelStyle={{ color: "#08b308" }}
          inputStyle={{ color: "#08b308" }}
          messageStyle={{ color: "#87ceeb" }}
        />
      </div>
    </MacWindows>
  );
};

export default Cli;
