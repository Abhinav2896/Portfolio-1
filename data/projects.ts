import { IconType } from "react-icons";
import { SiReact, SiTypescript, SiSupabase, SiStripe, SiVercel, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiTailwindcss, SiLangchain } from "react-icons/si";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string[];
  techStack: { name: string; icon: IconType }[];
  liveLink?: string;
  githubLink?: string;
  isFlagship?: boolean;
};

export const featuredProjects: Project[] = [
  {
    id: "india-museum",
    title: "India Museum Platform",
    tagline: "Full-Stack Freelance Project",
    isFlagship: true,
    liveLink: "https://www.indiamuseumri.org",
    techStack: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Supabase", icon: SiSupabase },
      { name: "Stripe", icon: SiStripe },
      { name: "Vercel", icon: SiVercel },
    ],
    description: [
      "Developed and deployed a full-stack virtual museum platform for a US-based 501(c)(3) nonprofit, delivering 5 exhibition categories, live donation processing, and a complete admin system.",
      "Built a React + Vite + TypeScript + TailwindCSS frontend with filterable, category-based galleries and role-protected routes secured by Clerk HS256 JWT authentication.",
      "Implemented 3 Vercel serverless API routes for Stripe payment processing, Supabase PostgreSQL with Row-Level Security, and IRS-compliant email receipts via Resend, ensuring end-to-end ownership of a production system."
    ]
  },
  {
    id: "logic-llm",
    title: "LogicLLM",
    tagline: "AI Code Review Tool with RAG",
    liveLink: "https://logic-llm-ai-code-optimization-auto.vercel.app",
    githubLink: "https://github.com/Abhinav2896/LogicLLM-Ai-Code-Optimization-Automation",
    techStack: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "LangChain", icon: SiLangchain },
      { name: "Vercel", icon: SiVercel }
    ],
    description: [
      "Full-stack AI code review tool (React, Node.js/Express, Python FastAPI RAG microservice) analyzing code via Gemini, returning bugs/improvements/an optimized rewrite as structured JSON.",
      "In-memory FAISS vector store using LangChain + HuggingFace all-MiniLM-L6-v2 embeddings over a best-practices knowledge base, top-K retrieval via cosine similarity.",
      "Distributed tracing via x-request-id propagation, regex-based JSON fallback parsing, deterministic scoring for robust error handling."
    ]
  },
  {
    id: "breezemail-ai",
    title: "BreezeMail AI",
    tagline: "AI Email Generator with RAG",
    liveLink: "https://breeze-mail-ai.vercel.app",
    githubLink: "https://github.com/Abhinav2896/BreezeMail-Ai",
    techStack: [
      { name: "Next.js", icon: SiReact }, // Using React as a proxy for Next.js if Next icon isn't ideal
      { name: "TypeScript", icon: SiTypescript },
      { name: "LangChain", icon: SiLangchain },
      { name: "Vercel", icon: SiVercel }
    ],
    description: [
      "Full-stack AI email generator on Next.js App Router, glassmorphic React/TypeScript SPA + serverless API route proxying structured-JSON requests to Gemini (gemini-flash-latest).",
      "RAG subsystem via LangChain + gemini-embedding-001 dense embeddings, build-time indexing of a writing-guidelines knowledge base, cosine-similarity retrieval with cited sources.",
      "Defensive backend parsing — markdown-fence stripping, strict EmailContent schema validation, AbortController timeouts."
    ]
  }
];

export const compactProjects = [
  {
    id: "sentinel",
    title: "Sentinel",
    tagline: "AI-Powered Behavioral Analytics for Criminal Interrogation Support",
    githubLink: "https://github.com/Abhinav2896/AI-Powered-Behavioral-Analytics-for-Criminal-Interrogation-Support."
  },
  {
    id: "offroad-vision",
    title: "OffRoad Autonomous Vision",
    tagline: "DeepLabV3+ Semantic Segmentation for UGVs",
    githubLink: "https://github.com/Abhinav2896/OffRoad_Autonomous_Vision_Duality_AI"
  },
  {
    id: "deepemotion-sense",
    title: "DeepEmotionSense-ML",
    tagline: "Real-time facial emotion recognition CNN",
    githubLink: "https://github.com/Abhinav2896/DeepEmotionSense-ML"
  }
];
