export default function Skills() {
  const skills = [
    "Python", "C++", "JavaScript", "Node.js", "PostgreSQL","GraphQL",
    "TypeScript", "React", "Next.js", "MongoDB","Tailwind CSS", 
    "Git", "Docker", "GCP", "AWS" 
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-sm font-medium border border-gray-100 hover:shadow-md transition-shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
