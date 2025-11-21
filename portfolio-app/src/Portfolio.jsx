import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-300 p-4">
      <div className="max-w-5xl mx-auto space-y-3">
        
        {/* Header Section with Yellow Border */}
        <div className="border-4 border-yellow-500 rounded-xl overflow-hidden">
          <div className="bg-white p-6 flex items-start gap-6">
            <div className="w-28 h-28 flex-shrink-0 border-4 border-yellow-500 rounded-full overflow-hidden transition-transform hover:scale-110 hover:shadow-2xl">
              <img 
                src="/avatar.jpg" 
                alt="Ntsika Ngilane"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 bg-white rounded-lg p-4 transition-transform hover:scale-105 hover:shadow-2xl">
              <h1 className="text-xl font-bold text-gray-900 mb-2">Ntsika Ngilane</h1>
              <p className="text-xs text-gray-700 leading-relaxed">
                Junior software developer and emerging systems architect with strong experience across mobile, web, backend, and AI-assisted software development. Passionate about building secure, scalable digital ecosystems that blend modern UI/UX, system-level thinking, and real-world practicality. Hands-on experience with IoT medical devices, wearable tech, BLE integrations, cloud-connected dashboards, and educational AI systems.
              </p>
            </div>
          </div>
        </div>

        {/* Proficiency and Skills Row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Proficiency */}
          <div className="bg-white rounded-xl p-4 transition-transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Proficiency</h2>
            <div className="space-y-2">
              <div>
                <div className="text-xs text-gray-700 mb-1">Mobile Development (Flutter, Kotlin)</div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-700 mb-1">Web Development (HTML, CSS, JS)</div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-700 mb-1">Backend & APIs (Python, Java, C#)</div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-700 mb-1">Database Design (SQL & NoSQL)</div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-700 mb-1">IoT & BLE Integration</div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-700 mb-1">AI & Machine Learning</div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-700 mb-1">Security & Cryptology</div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl p-4 transition-transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Skills</h2>
            <div className="grid grid-cols-3 gap-2">
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Flutter</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Kotlin</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Python</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Java</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">C#</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">JavaScript</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">HTML & CSS</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">React Native</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Tailwind CSS</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Material UI</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">REST APIs</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Firebase</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Git & GitHub</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">IoT & BLE</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">SQL & NoSQL</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Cloud Systems</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Figma</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Linux</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">Cryptology</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">System Design</button>
              <button className="bg-gray-200 hover:bg-gray-400 px-2 py-1.5 rounded text-xs text-gray-800 font-medium">AI Integration</button>
            </div>
          </div>
        </div>

        {/* Projects Section with Yellow Border */}
        <div className="border-4 border-yellow-500 rounded-xl overflow-hidden">
          <div className="bg-white p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Projects</h2>
            <div className="grid grid-cols-4 gap-3">
              {/* Project 1 - Green */}
              <div className="bg-teal-600 text-white rounded-lg p-3 relative transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-2 right-2 text-orange-500 text-lg">♥</div>
                <h3 className="font-bold text-sm mb-2">Insulin Management System</h3>
                <p className="text-xs leading-relaxed mb-2">
                  <span className="bg-orange-500 px-1.5 py-0.5 rounded text-xs font-bold">IN PROGRESS</span>
                  <br/><br/>
                  Comprehensive medical IoT ecosystem for diabetic management with BLE insulin pump, glucose sensor, Flutter multi-platform apps, and web dashboard with real-time analytics.
                </p>
                <div className="mt-2">
                  <p className="font-bold text-xs mb-1">Technologies:</p>
                  <p className="text-xs">Flutter, BLE, IoT, APIs, Firebase</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-100 rounded-lg p-3 relative transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-2 right-2 text-orange-500 text-lg">♥</div>
                <h3 className="font-bold text-sm mb-2">LINQ Health-Tech Startup</h3>
                <p className="text-xs leading-relaxed mb-2">
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">IN PROGRESS</span>
                  <br/><br/>
                  Founded health-tech startup developing insulin pump ecosystem with full business plan, web systems, and technical architecture for South African healthcare.
                </p>
                <div className="mb-2">
                  <p className="font-bold text-xs mb-1">Technologies:</p>
                  <p className="text-xs">System Design, Business Planning</p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-100 rounded-lg p-3 relative transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-2 right-2 text-orange-500 text-lg">♥</div>
                <h3 className="font-bold text-sm mb-2">NARA Platform</h3>
                <p className="text-xs leading-relaxed mb-2">
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">IN PROGRESS</span>
                  <br/><br/>
                  Full-featured web platform with authentication, dashboard architecture, database integration, and modern UI/UX design using Tailwind and Material UI.
                </p>
                <div>
                  <p className="font-bold text-xs mb-1">Technologies:</p>
                  <p className="text-xs">React, Tailwind, APIs, Database</p>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-gray-100 rounded-lg p-3 relative transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-2 right-2 text-orange-500 text-lg">♥</div>
                <h3 className="font-bold text-sm mb-2">AI Education Platform</h3>
                <p className="text-xs leading-relaxed mb-2">
                  <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">IN PROGRESS</span>
                  <br/><br/>
                  Research platform analyzing AI impact in education. Reviewed 107 scholarly sources covering personalized learning, ethics, and intelligent tutoring systems.
                </p>
                <div>
                  <p className="font-bold text-xs mb-1">Research Areas:</p>
                  <p className="text-xs">AI ethics, assessment automation, equity</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education and Tools Row */}
        <div className="grid grid-cols-3 gap-3">
          {/* Experience & Achievements - Yellow Border */}
          <div className="col-span-2 border-4 border-yellow-500 rounded-xl overflow-hidden">
            <div className="bg-white p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Experience & Achievements</h2>
              
              <div className="space-y-2">
                {/* Achievement 1 */}
                <div className="bg-teal-700 text-white rounded-lg p-3 transition-transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-sm">Multi-Platform Mobile & Web Development</h3>
                      <p className="text-xs">Independent Developer</p>
                    </div>
                    <span className="text-xs bg-orange-500 px-2 py-0.5 rounded font-bold">ONGOING</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Currently building multiple full-stack applications including Flutter multi-platform apps, Kotlin Android native development, and responsive web applications. Specializing in BLE integration, IoT connectivity, secure backend systems, and modern UI/UX design patterns.
                  </p>
                </div>

                {/* Achievement 2 */}
                <div className="bg-white rounded-lg p-3 transition-transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-sm">Founder - Health-Tech Startups (LINQ & NARA)</h3>
                      <p className="text-xs">Startup Development</p>
                    </div>
                    <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded font-bold">IN PROGRESS</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Currently developing LINQ, a health-tech startup focused on insulin pump ecosystems, and NARA, a full-featured web platform. Creating comprehensive business plans, system architectures, and technical models targeting South African and international markets.
                  </p>
                </div>

                {/* Achievement 3 */}
                <div className="bg-white rounded-lg p-3 transition-transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-sm">AI in Education Research</h3>
                      <p className="text-xs">Academic Research & Analysis</p>
                    </div>
                    <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded font-bold">ONGOING</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Conducting extensive research on AI applications in education across South Africa and Hong Kong. Analyzing 107+ scholarly sources, developing thematic frameworks on AI ethics, personalized learning, and intelligent tutoring systems for academic publications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools - Yellow Border */}
          <div className="border-4 border-yellow-500 rounded-xl overflow-hidden">
            <div className="bg-white p-4 h-full flex flex-col">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Tools</h2>
              <div className="grid grid-cols-3 gap-2 flex-1 content-start">
                <div className="bg-blue-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Flutter</div>
                <div className="bg-orange-600 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Kotlin</div>
                <div className="bg-yellow-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">JS</div>
                <div className="bg-blue-600 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Python</div>
                <div className="bg-purple-600 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">C#</div>
                <div className="bg-red-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Java</div>
                <div className="bg-orange-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Firebase</div>
                <div className="bg-gray-800 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Git</div>
                <div className="bg-pink-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Figma</div>
                <div className="bg-teal-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">REST</div>
                <div className="bg-indigo-600 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">SQL</div>
                <div className="bg-green-600 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Linux</div>
                <div className="bg-blue-400 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">React</div>
                <div className="bg-cyan-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">Tailwind</div>
                <div className="bg-purple-500 w-full aspect-square rounded flex items-center justify-center text-white font-bold text-xs hover:scale-110 transition-transform">VS Code</div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Interests Section - Yellow Border */}
        <div className="border-4 border-yellow-500 rounded-xl overflow-hidden">
          <div className="bg-white p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Professional Interests</h2>
            
            <div className="space-y-2">
              {/* Interest 1 */}
              <div className="bg-teal-600 text-white rounded-lg p-3 transition-transform hover:scale-105 hover:shadow-2xl">
                <h3 className="font-bold text-sm mb-1">System Architecture & Backend Engineering</h3>
                <p className="text-xs leading-relaxed">
                  Passionate about designing scalable backend systems, REST API architecture, database optimization, and cloud-connected infrastructure. Currently expanding expertise in advanced backend engineering, microservices, and distributed systems.
                </p>
              </div>

              {/* Interest 2 */}
              <div className="bg-gray-100 rounded-lg p-3 transition-transform hover:scale-105 hover:shadow-2xl">
                <h3 className="font-bold text-sm mb-1">Cryptology & Cybersecurity</h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  Strong interest in applied cryptography, secure system design, and data protection. Focused on implementing security best practices in medical data workflows, IoT device communications, and building secure authentication systems.
                </p>
              </div>

              {/* Interest 3 */}
              <div className="bg-gray-100 rounded-lg p-3 transition-transform hover:scale-105 hover:shadow-2xl">
                <h3 className="font-bold text-sm mb-1">AI & Machine Learning Applications</h3>
                <p className="text-xs leading-relaxed text-gray-700">
                  Exploring generative AI applications, educational AI tools, and intelligent tutoring systems. Committed to ethical AI implementation and researching long-term impacts on digital skill development and personalized learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA with Contact Info */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white mb-2">
              Let's chat! I'm ready to work on exciting projects.
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:workngilane@gmail.com" className="text-sm hover:underline">workngilane@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-sm">062 928 0010</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-sm">+27 81 674 5941</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm">Pretoria East, Moreleta Park, South Africa</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
