import { IconType } from "react-icons";
import { 
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiHtml5, SiMysql,
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiFramer,
  SiNodedotjs, SiFastapi, SiExpress,
  SiTensorflow, SiPytorch, SiHuggingface, SiOpencv, SiLangchain,
  SiGit, SiGithub, SiDocker, SiVercel, SiCloudflare, SiSupabase, SiPostgresql, SiStripe, SiClerk
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";

export type SkillCategory = {
  title: string;
  skills: { name: string; icon?: IconType; isLabelOnly?: boolean }[];
};

export const techStack: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: SiMysql },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt }
    ]
  },
  {
    title: "Frontend & Frameworks",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vite", icon: SiVite },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer }
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", isLabelOnly: true },
      { name: "WebSockets", isLabelOnly: true },
      { name: "Express.js", icon: SiExpress }
    ]
  },
  {
    title: "AI / ML / GenAI",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "OpenCV", icon: SiOpencv },
      { name: "MediaPipe", isLabelOnly: true },
      { name: "LLMs", isLabelOnly: true },
      { name: "Agentic AI", isLabelOnly: true },
      { name: "GenAI", isLabelOnly: true },
      { name: "RAG", isLabelOnly: true },
      { name: "MLOps", isLabelOnly: true },
      { name: "CNNs", isLabelOnly: true },
      { name: "NLP", isLabelOnly: true },
      { name: "Multi-Modal AI", isLabelOnly: true },
      { name: "Wav2Vec2", isLabelOnly: true }
    ]
  },
  {
    title: "Cloud, Data & DevOps",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Stripe", icon: SiStripe },
      { name: "Clerk", icon: SiClerk },
      { name: "Resend", isLabelOnly: true },
      { name: "CI/CD Pipelines", isLabelOnly: true },
      { name: "n8n", isLabelOnly: true }
    ]
  }
];
