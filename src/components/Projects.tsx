import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "HIVE",
    description: "A Drone Management and Monitoring System for medical deliveries.",
    tags: ["Nodejs", "Python", "Dronekit", "Sockets"],
    link: "https://www.unicefventurefund.org/story/unicef-innovation-fund-graduate-prokura-innovations/",
    image: "/images/hive.gif"
  },
  {
    title: "Precision Landing",
    description: "An event-based precision landing system for drones using computer vision.",
    tags: ["Python", "YOLO", "C"],
    link: "https://github.com/prokuranepal/landzone_detect_navigate",
    image: "/images/landzone.gif"
  },
  {
    title: "Apex Education Platform",
    description: "Django/Nextjs learning platform with live exams.",
    tags: ["Django", "Nextjs", "PostgreSQL", "GCP"],
    link: "https://github.com/atharvatechnology/apex-backend",
    image: "/images/apex.webp"
  },
  {
    title: "RONB News Platform",
    description: "Nestjs news platform with collaborative news recommendation.",
    tags: ["Nestjs", "Django", "Microservice", "AWS"],
    link: "https://github.com/shovan777/ronb-node-micro",
    image: "/images/ronb.webp"
  },
  {
    title: "Smart Battery Monitor",
    description: "Kalman filter based IoT solution to optimize battery health.",
    tags: ["KalmanFilter", "ESP32", "C++", "IoT"],
    link: "https://github.com/prokuranepal/prokura_bms",
    image: "/images/full_kl_vertical.png"
  },
  {
    title: "Seaweed Perception",
    description: "Computer vision system for automated boat racing robots.",
    tags: ["YOLO", "LIDAR Odometry", "ROS2"],
    link: "https://github.com/pgh-pep/SeaWeed/pull/44",
    image: "/images/seaweed.png"
  },
  {
    title: "RONB News Recommender",
    description: "Collaborative news recommendation ML service.",
    tags: ["Pytorch", "Microservices", "AWS", "DVC"],
    link: "https://github.com/atharvatechnology/news_recommender",
    image: "/images/rec.jpeg"
  },
  {
    title: "RONB News Classifier",
    description: "Nepali News Classifier using BERT model hosted on HuggingFace.",
    tags: ["Pytorch", "HuggingFace"],
    link: "https://huggingface.co/nepBros/nepali_news_classifier",
    image: "/images/news_classifier.jpeg"
  },
  {
    title: "Gauthali",
    description: "A community-driven platform for sharing and discovering local events.",
    tags: ["UAV", "Ardupilot", "ROS", "QuadPlane"],
    link: "https://github.com/shovan777/prokura-drone",
    image: "/images/uav.png"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
            >
              {/* Project Image */}
              <div className="h-56 w-full relative group-hover:bg-gray-50 transition-colors bg-gray-200 flex items-center justify-center overflow-hidden">
                 {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-gray-400 font-medium">Coming Soon</span>
                )}
              </div>
              <div className="p-8">
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
                  className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  View Project <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
