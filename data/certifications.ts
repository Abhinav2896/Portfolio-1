export type Certification = {
  id: string;
  category: string;
  details: string;
};

export const certifications: Certification[] = [
  {
    id: "ai-ml",
    category: "AI/ML (15+)",
    details: "Google Cloud (ML, Gen AI), IBM (AI Engineering), DeepLearning.AI (Deep Learning, Neural Networks, NLP) and other AI/ML Specializations."
  },
  {
    id: "tech-dev",
    category: "Technology & Development (50+)",
    details: "Chandigarh University, Coursera, LinkedIn Learning — AI/ML, Cloud Computing, Software Development."
  }
];
