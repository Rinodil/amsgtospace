import React, { useState } from 'react';

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const teamMembers = [
    {
      name: "Dr. Frank Drake",
      title: "Astrophysicist & Astronomer",
      role: "Co-Designer of the Arecibo Message",
      photo: "https://i.imgur.com/VESP1MY.jpeg ",
      bio: "Dr. Frank Drake is known for formulating the Drake Equation and was one of the principal architects of the Arecibo message, designing its scientific content.",
    },
    {
      name: "Dr. Carl Sagan",
      title: "Astronomer & Astrophysicist",
      role: "Co-Designer of the Arecibo Message",
      photo: "https://i.imgur.com/tsyyQ9g.png ",
      bio: "Renowned for his work in planetary science and public outreach, Dr. Sagan played a pivotal role in shaping the iconic Arecibo message's visual design and symbolic meaning.",
    },
    {
      name: "Richard Isaacman",
      title: "Cornell Graduate Student",
      role: "Contributor to Visual Representation",
      photo: "https://placehold.co/200x200?text=Richard+Isaacman ",
      bio: "As a graduate student at Cornell, Richard contributed to refining the structure and layout of the message’s visual components.",
    },
    {
      name: "Linda May (Norden)",
      title: "Cornell Graduate Student",
      role: "Content Developer",
      photo: "https://placehold.co/200x200?text=Linda+May ",
      bio: "Linda May assisted in compiling the data and determining how information should be encoded within the message for clarity to potential extraterrestrial recipients.",
    },
    {
      name: "Dr. James C.G. Walker",
      title: "Professor, Cornell University",
      role: "Scientific Advisor",
      photo: "https://placehold.co/200x200?text=James+C.G.+Walker ",
      bio: "Provided critical guidance on incorporating fundamental scientific concepts into the message, ensuring it conveyed meaningful universal truths.",
    },
    {
      name: "Dr. Donald Campbell",
      title: "Research Associate, Arecibo Observatory",
      role: "Technical Supervisor of Broadcast",
      photo: "https://placehold.co/200x200?text=Donald+Campbell ",
      bio: "Led the technical execution of the transmission at the Arecibo Observatory, ensuring that the message was accurately broadcast with precision equipment.",
    },
    {
      name: "Antonio Crespo Suarez",
      title: "Electrical Engineer, Arecibo Observatory",
      role: "Telescope Calibration & Operation",
      photo: "https://i.imgur.com/X2GbmVo.jpeg ",
      bio: "Played a key role in calibrating and operating the Arecibo telescope during the message's transmission, ensuring the signal was properly aimed at the M13 star cluster.",
    },
  ];

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"}>
      {/* Dark/Light Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full shadow-lg transition-all ${
            darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-blue-600"
          }`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className={`relative h-screen flex flex-col items-center justify-center text-center px-6 transition-colors duration-500 ${
        darkMode ? "bg-gradient-to-b from-indigo-950 via-purple-900 to-black" : "bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600"
      }`}>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
          The Arecibo Message
        </h1>
        <p className="text-lg md:text-xl max-w-2xl opacity-90 mb-8">
          A historic interstellar communication crafted by brilliant minds, sent toward the stars in 1974.
        </p>
        <a
          href="#team"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Meet the Team
        </a>

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="w-full align-middle" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0z" fill={darkMode ? "white" : "#1f2937"}></path>
          </svg>
        </div>
      </section>

      {/* Message Details Section */}
      <section id="message" className={`py-20 px-6 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gray-800"}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">The Arecibo Message</h2>
          <div className={`p-8 rounded-xl shadow-xl transition-colors duration-500 ${darkMode ? "bg-gray-800" : "bg-gray-700"}`}>
            <p className="text-lg leading-relaxed">
              The Arecibo message is an interstellar radio message carrying basic information about humanity and Earth that was sent to the globular cluster Messier 13 in 1974. It was meant as a demonstration of human technological achievement, rather than a real attempt to enter into a conversation with extraterrestrials.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
              The message was broadcast into space a single time via frequency modulated radio waves at a ceremony to mark the remodeling of the Arecibo Telescope in Puerto Rico on 16 November 1974. The message was aimed at the current location of M13, about 25,000 light years from Earth, because M13 was a large and relatively close collection of stars that was available in the sky at the time and place of the ceremony.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
              When correctly translated into graphics, characters, and spaces, the 1,679 bits of data contained within the message represent:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
              <li>The numbers from 1 to 10</li>
              <li>The atomic numbers of hydrogen, carbon, nitrogen, oxygen, and phosphorus</li>
              <li>The formulas for the sugars and bases in the nucleotides of DNA</li>
              <li>A graphic representation of the double helix structure of DNA</li>
              <li>A figure of a human being and its height</li>
              <li>A diagram of the Solar System</li>
              <li>A depiction of the Arecibo Telescope and its diameter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Message Image Section */}
      <section className={`py-20 px-6 transition-colors duration-500 ${darkMode ? "bg-black" : "bg-gray-900"}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Message Visualized</h2>
          <div className="relative group">
            <img
              src="https://i.imgur.com/fB0Agpy.jpeg "
              alt="Arecibo Message Diagram"
              className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl"></div>
            <p className="mt-4 text-sm text-center text-gray-400 italic">
              The Arecibo Message as transmitted — a binary-coded image representing life, science, and our cosmic address.
            </p>
          </div>
        </div>
      </section>

      {/* Team Recognition Section */}
      <section id="team" className={`py-20 px-6 transition-colors duration-500 ${darkMode ? "bg-black" : "bg-gray-900"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Minds Behind the Message</h2>

          {/* Grid of Scientists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedPerson(selectedPerson === member ? null : member)}
                className={`p-6 rounded-xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-700 to-gray-800"
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                    onError={(e) => e.target.src = "https://placehold.co/200x200?text=Image+Error "}
                  />
                  <div>
                    <h3 className="font-bold text-xl group relative">
                      {member.name}
                      <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-0 bg-black bg-opacity-90 text-white text-xs p-2 rounded-md transition-opacity whitespace-nowrap">
                        Click to view details
                      </span>
                    </h3>
                    <p className="text-sm text-gray-400">{member.title}</p>
                    <p className="text-xs text-blue-400">{member.role}</p>
                  </div>
                </div>
                {selectedPerson === member && (
                  <div className="mt-4 text-sm text-gray-300 animate-fade-in">
                    <p>{member.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-sm transition-colors duration-500 ${darkMode ? "bg-black text-gray-500" : "bg-gray-900 text-gray-400"}`}>
        <p>© 2025 Arecibo Message Recognition. In honor of humanity's first intentional message to the stars.</p>
      </footer>
    </div>
  );
}
