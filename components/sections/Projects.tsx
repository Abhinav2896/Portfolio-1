"use client";

import { motion } from "framer-motion";
import { featuredProjects, compactProjects } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SiGithub, SiLinkfire } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-space font-bold tracking-tight text-center mb-16">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard glowOnHover className={`overflow-hidden ${project.isFlagship ? 'border-accent-cyan/30 border-2' : ''}`}>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    <div className="flex-1 space-y-6">
                      <div>
                        {project.isFlagship && (
                          <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-2 block">Flagship Project</span>
                        )}
                        <h3 className="text-2xl md:text-4xl font-space font-bold mb-2">{project.title}</h3>
                        <p className="text-lg text-accent-violet">{project.tagline}</p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, techIdx) => {
                          const Icon = tech.icon;
                          return (
                            <span key={techIdx} className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-glass-hover border border-glass-border">
                              <Icon className="w-4 h-4" /> {tech.name}
                            </span>
                          );
                        })}
                      </div>

                      <ul className="space-y-3 pt-2">
                        {project.description.map((desc, dIdx) => (
                          <li key={dIdx} className="text-foreground/80 flex items-start">
                            <span className="text-accent-cyan mr-3 mt-1.5 opacity-70 w-1.5 h-1.5 rounded-full shrink-0 bg-accent-cyan" />
                            <span className="leading-relaxed text-sm md:text-base">{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4 pt-4">
                        {project.liveLink && (
                          <MagneticButton variant="primary" asLink={project.liveLink} className="py-2.5">
                            <FaExternalLinkAlt className="mr-1 w-3 h-3" /> Visit Live Site
                          </MagneticButton>
                        )}
                        {project.githubLink && !project.isFlagship && (
                          <MagneticButton variant="glass" asLink={project.githubLink} className="py-2.5">
                            <SiGithub className="mr-1 w-4 h-4" /> GitHub Repo
                          </MagneticButton>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Compact Projects Row */}
        <div className="mt-20">
          <h3 className="text-xl font-space font-semibold mb-8 text-center text-foreground/70">More on GitHub</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {compactProjects.map((project) => (
              <a 
                key={project.id} 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <GlassCard className="p-6 h-full border-glass-border/50 group-hover:border-accent-violet/40 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <SiGithub className="w-6 h-6 text-foreground/50 group-hover:text-accent-violet transition-colors" />
                    <FaExternalLinkAlt className="w-3 h-3 text-foreground/30 group-hover:text-foreground/70 transition-colors" />
                  </div>
                  <h4 className="text-lg font-space font-bold mb-2 group-hover:text-accent-cyan transition-colors">{project.title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">{project.tagline}</p>
                </GlassCard>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://github.com/Abhinav2896" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent-cyan transition-colors group">
              See all repositories on GitHub <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
