export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
        <p className="text-gray-500 mb-4 md:mb-0">
          © {new Date().getFullYear()} Shovan Shrestha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
