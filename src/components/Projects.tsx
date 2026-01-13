'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "HIVE",
    description: "A Drone Management and Monitoring System for medical deliveries.",
    tags: ["Nodejs", "Python", "Dronekit", "Sockets"],
    link: "https://www.unicefventurefund.org/story/unicef-innovation-fund-graduate-prokura-innovations/",
    images: ["/images/hive.gif"]
  },
  {
    title: "Precision Landing",
    description: "An event-based precision landing system for drones using computer vision.",
    tags: ["Python", "YOLO", "C", "AI"],
    link: "https://github.com/prokuranepal/landzone_detect_navigate",
    images: ["/images/landzone.gif"]
  },
  {
    title: "Apex Education Platform",
    description: "Django/Nextjs learning platform with live exams.",
    tags: ["Django", "Nextjs", "PostgreSQL", "GCP"],
    link: "https://github.com/atharvatechnology/apex-backend",
    images: ["/images/apex.webp"]
  },
  {
    title: "RONB News Platform",
    description: "Nestjs microservice news platform with collaborative news recommendation.",
    tags: ["Nestjs", "Django", "pytorch", "Microservice", "AWS", "AI"],
    link: "https://github.com/shovan777/ronb-node-micro",
    images: ["/images/ronb.webp"]
  },
  {
    title: "Smart Battery Monitor",
    description: "Kalman filter based IoT solution to optimize battery health.",
    tags: ["KalmanFilter", "ESP32", "C++", "IoT"],
    link: "https://github.com/prokuranepal/prokura_bms",
    images: ["/images/full_kl_vertical.png"]
  },
  {
    title: "Seaweed Perception",
    description: "Computer vision system for automated boat racing robots.",
    tags: ["YOLO", "LIDAR Odometry", "ROS2", "AI"],
    link: "https://github.com/pgh-pep/SeaWeed/pull/44",
    images: ["/images/seaweed.png"]
  },
  {
    title: "RealRate Agentic Chatbot",
    description: "Llamaindex based agentic chatbot for financial recommendations.",
    tags: ["FastAPI", "OpenAI", "AI", "Llamaindex", "VectorDB"],
    link: "http://realrate.ai/rankings",
    images: ["/images/realrate.jpeg", "/images/chat.jpeg"]
  },
  // {
  //   title: "RONB News Recommender",
  //   description: "Collaborative news recommendation ML service.",
  //   tags: ["Pytorch", "Microservices", "AWS", "DVC"],
  //   link: "https://github.com/atharvatechnology/news_recommender",
  //   images: ["/images/rec.jpeg"]
  // },
  {
    title: "RONB News Classifier",
    description: "Nepali News Classifier using BERT model hosted on HuggingFace.",
    tags: ["Pytorch", "HuggingFace", "AI"],
    link: "https://huggingface.co/nepBros/nepali_news_classifier",
    images: ["/images/news_classifier.jpeg"]
  },
  {
    title: "Gauthali",
    description: "A community-driven platform for sharing and discovering local events.",
    tags: ["UAV", "Ardupilot", "ROS", "QuadPlane"],
    link: "https://github.com/shovan777/prokura-drone",
    images: ["/images/uav.png"]
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval);
    }
  }, [project.images]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group flex flex-col h-full">
      {/* Project Image */}
      <div className="relative w-full h-56 bg-gray-200 group-hover:bg-gray-100 transition-colors overflow-hidden shrink-0">
        {project.images && project.images.length > 0 ? (
          <Image
            src={`${basePath}${project.images[currentImageIndex]}`}
            alt={`${project.title} - Preview ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized={project.images[currentImageIndex].endsWith('.gif')}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 font-medium">Coming Soon</div>
        )}
        
        {/* Indicators for multiple images */}
        {project.images && project.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
            {project.images.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                  idx === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors mt-auto"
        >
          View Project <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
