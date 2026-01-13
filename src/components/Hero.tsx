export default function Hero() {
  return (
    <section className="bg-gray-50 flex flex-col justify-center items-center py-32 md:py-48 text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        Hi, I&apos;m <span className="text-blue-600">Shovan</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
        A passionate building beautiful and functional intelligent systems.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          View Work
        </a>
        <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
          Contact Me
        </a>
      </div>
    </section>
  );
}
