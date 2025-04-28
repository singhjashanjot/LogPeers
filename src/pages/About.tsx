import { motion } from "framer-motion";
import { LinkedInIcon, GitHubIcon, CheckIcon, XIcon } from "@/components/atoms/icons";
import GridPattern from "@/components/ui/grid-pattern";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/molecules/footer";
import { useEffect, useState } from "react";
import ThreeDDecorative from "@/components/threejs/ThreeDDecorative";

// Team member data
const team = [
    {
        name: "Jashanjot Singh",
        role: "Co-founder",
        description:
            "Visionary developer focused on creating educational products that simplify complex learning processes.",
        photo: "/jashan_badge .png",
        linkedin: "https://linkedin.com/in/jashanjotsingh01",
        github: "https://github.com/jashanjot-singh",
    },
    {
        name: "Gursimran Singh",
        role: "Co-founder",
        description:
            "Passionate about democratizing access to quality education through intuitive digital platforms.",
        photo: "/gursimran.png",
        linkedin: "https://linkedin.com/in/gursimrxnsingh",
        github: "https://github.com/gursimrxn",
    },
];

// Comparison data
const comparisonData = [
    {
        feature: "Organized Course Notes",
        logpeers: true,
        others: false,
    },
    {
        feature: "Verified Study Resources",
        logpeers: true,
        others: false,
    },
    {
        feature: "Minimalistic Learning Design",
        logpeers: true,
        others: false,
    },
    {
        feature: "Focus on Student Efficiency",
        logpeers: true,
        others: false,
    },
    {
        feature: "No Clutter, Pure Learning",
        logpeers: true,
        others: false,
    },
];

export default function AboutPage() {
  // State to track mouse position for parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-[#02030B] flex flex-col relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GridPattern
          width={16}
          height={16}
          className="fill-transparent dark:fill-transparent stroke-blue-300/30 dark:stroke-blue-500/15"
          strokeDasharray="0"
          x={0}
          y={0}
        />
      </div>
      
      {/* Hero Section with 3D pen element */}
      <section className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="relative flex justify-center items-center">          
          {/* Content - Center */}
          <motion.div
            className="flex-1 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="crazyfont text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black dark:text-white mb-6">
              About <span className="text-blue-700">LogPeers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 dark:opacity-70">
              A revolutionary educational platform centralizing
              learning resources, notes, and course materials for
              students, promoting smart and efficient learning.
              Founded in 2024, LogPeers brings together the best
              aspects of modern digital learning with the structure
              and clarity of traditional educational approaches. We
              blend elegant design with powerful functionality to
              create an environment where knowledge is accessible,
              organized, and engaging. 
            </p>
          </motion.div>
          
          {/* 3D Pen Element - Increased size */}
          <motion.div 
            className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] pointer-events-none absolute right-0 top-1/2 transform -translate-y-1/2"
            style={{
              x: mousePosition.x * 0.3,
              y: mousePosition.y * 0.3,
              transform: "translateZ(0) translateY(-50%)",
              willChange: "transform"
            }}
          >
            <ThreeDDecorative type="pen" className="w-full h-full" />
          </motion.div>
        </div>
      </section>
      
      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-4 md:py-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center relative">
            {/* Book animation - Positioned at extreme left */}
            <div className="w-full md:w-1/4 flex justify-center md:absolute md:left-[-150px] md:top-0">
              <div className="relative w-[450px] h-[320px]">
                <svg
                  viewBox="0 0 450 320"
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Enhanced Definitions */}
                  <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="3" dy="6" stdDeviation="6" floodOpacity="0.35" />
                    </filter>
                    
                    <linearGradient id="coverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a1a" />
                      <stop offset="100%" stopColor="#383838" />
                    </linearGradient>
                    
                    <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f8f8f8" />
                    </linearGradient>
                    
                    <linearGradient id="spineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#dedede" />
                      <stop offset="50%" stopColor="#f0f0f0" />
                      <stop offset="100%" stopColor="#dedede" />
                    </linearGradient>
                    
                    <filter id="pageEdge">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                      <feOffset dx="0" dy="1" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.2" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Book Cover */}
                  <g filter="url(#shadow)">
                    {/* Outer edge of book (subtle 3D effect) */}
                    <path
                      d="M35 55 
                          L35 245
                          C 35 250, 40 255, 45 255
                          L 405 255
                          C 410 255, 415 250, 415 245
                          L 415 55
                          C 415 50, 410 45, 405 45
                          L 45 45
                          C 40 45, 35 50, 35 55
                          Z"
                      fill="#2a2a2a"
                      stroke="none"
                    />
                    
                    {/* Book Cover Surface */}
                    <path
                      d="M40 57 
                          L40 243
                          C 40 246, 43 249, 46 249
                          L 404 249
                          C 407 249, 410 246, 410 243
                          L 410 57
                          C 410 54, 407 51, 404 51
                          L 46 51
                          C 43 51, 40 54, 40 57
                          Z"
                      fill="url(#coverGradient)"
                      stroke="none"
                    />
                  </g>

                  {/* Book Pages */}
                  <path
                    d="M50 65 
                        C 110 55, 180 50, 200 50
                        L 200 240
                        C 180 235, 110 230, 50 210
                        Z"
                    fill="url(#pageGradient)"
                    stroke="#e0e0e0"
                    strokeWidth="0.5"
                    filter="url(#pageEdge)"
                  />

                  <path
                    d="M200 50
                        C 220 50, 290 55, 400 65
                        L 400 210
                        C 290 230, 220 235, 200 240
                        Z"
                    fill="url(#pageGradient)"
                    stroke="#e0e0e0"
                    strokeWidth="0.5"
                    filter="url(#pageEdge)"
                  />

                  {/* Book Spine with Subtle Shading */}
                  <path
                    d="M199 50 
                       L199 240
                       C 199 240, 201 240, 201 240
                       L 201 50
                       C 201 50, 199 50, 199 50"
                    fill="url(#spineGradient)"
                    stroke="none"
                  />

                  {/* Lines on Left Page - More subtle lines */}
                  {[85, 120, 155, 190].map((y, i) => (
                    <line
                      key={`left-${i}`}
                      x1="65"
                      y1={y}
                      x2="185"
                      y2={y}
                      stroke="#dedede"
                      strokeWidth="0.5"
                    />
                  ))}

                  {/* Lines on Right Page - More subtle lines */}
                  {[85, 120, 155, 190].map((y, i) => (
                    <line
                      key={`right-${i}`}
                      x1="215"
                      y1={y}
                      x2="385"
                      y2={y}
                      stroke="#dedede"
                      strokeWidth="0.5"
                    />
                  ))}

                  {/* LOGPEERS Text - Centered in the book page with infinite typewriter effect */}
                  <text 
                    x="225" 
                    y="145" 
                    textAnchor="middle" 
                    className="text-3xl font-bold" 
                    style={{ 
                      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                      fill: '#000000'
                    }}
                  >
                    <tspan className="text-logpeers-char animate-typewriter-loop">L</tspan>
                    <tspan className="text-logpeers-char animate-typewriter-loop" dx="0.5em" style={{ animationDelay: "0.1s" }}>O</tspan>
                    <tspan className="text-logpeers-char animate-typewriter-loop" dx="0.5em" style={{ animationDelay: "0.2s" }}>G</tspan>
                    <tspan className="text-logpeers-char animate-typewriter-loop" dx="0.5em" style={{ animationDelay: "0.3s" }}>P</tspan>
                    <tspan className="text-logpeers-char animate-typewriter-loop" dx="0.5em" style={{ animationDelay: "0.4s" }}>E</tspan>
                    <tspan className="text-logpeers-char animate-typewriter-loop" dx="0.5em" style={{ animationDelay: "0.5s" }}>E</tspan>
                    <tspan className="text-logpeers-char animate-typewriter-loop" dx="0.5em" style={{ animationDelay: "0.6s" }}>R</tspan>
                    <tspan className="text-logpeers-char animate-typewriter-loop" dx="0.5em" style={{ animationDelay: "0.7s" }}>S</tspan>
                  </text>
                  
                  {/* Horizontal line under the heading - centered below text */}
                  <path
                    d="M135 160 L315 160"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeDasharray="180"
                    strokeDashoffset="180"
                    transform="translate(0, 0)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="180"
                      to="0"
                      dur="1.5s"
                      begin="0.8s"
                      fill="freeze"
                    />
                  </path>
                </svg>
              </div>
            </div>

            {/* Who We Are Content - Now centered */}
            <div className="w-full md:w-3/5 text-center mx-auto mb-8">
              <h1 className="crazyfont text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6 text-center">Who We Are</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 text-center dark:opacity-70">
                LogPeers was born out of a shared frustration with the fragmented nature of educational resources. 
                As students navigating through a sea of learning materials, we envisioned a platform that could bring 
                structure, clarity, and focus to the learning journey.
            
                Our mission is to transform how students access and interact with educational content, 
                creating a streamlined experience that prioritizes quality over quantity and 
                organization over chaos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {/* What We Are Building Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-gray-100/80 dark:bg-[#0F172A] backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      What We Are Building
                    </h3>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/70 dark:bg-gray-800/70 group-hover:bg-gray-300/70 dark:group-hover:bg-gray-700/70 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <line
                          x1="12"
                          y1="22"
                          x2="12"
                          y2="12"
                        ></line>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow dark:opacity-70">
                    LogPeers is not just a content
                    repository but an organized, curated
                    learning ecosystem. We're creating a
                    space where quality trumps quantity,
                    where every resource serves a clear
                    educational purpose, and where the
                    learning experience is as important as
                    the content itself.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Our Aim Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-gray-100/80 dark:bg-[#0F172A] backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      Our Aim
                    </h3>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/70 dark:bg-gray-800/70 group-hover:bg-gray-300/70 dark:group-hover:bg-gray-700/70 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                        ></circle>
                        <circle
                          cx="12"
                          cy="12"
                          r="6"
                        ></circle>
                        <circle
                          cx="12"
                          cy="12"
                          r="2"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow dark:opacity-70">
                    We're democratizing access to
                    high-quality, structured notes and study
                    materials that would otherwise remain
                    siloed. By making these resources
                    universally accessible, we're leveling
                    the playing field and ensuring that
                    every student has the tools needed to
                    excel.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Our Approach Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-gray-100/80 dark:bg-[#0F172A] backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      Our Approach
                    </h3>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/70 dark:bg-gray-800/70 group-hover:bg-gray-300/70 dark:group-hover:bg-gray-700/70 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow dark:opacity-70">
                    We put students first by designing an
                    experience that minimizes distractions
                    and maximizes learning effectiveness.
                    Our focus is on quality, clarity, and
                    relevance, ensuring that every feature
                    and piece of content serves the
                    student's learning journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="crazyfont text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-12 text-center">Meet the <span className="text-blue-700">Team Behind LogPeers</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-gray-100/80 dark:bg-[#0F172A] border border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                        {member.photo ? (
                          <img 
                            src={member.photo} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold">
                          {member.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground mb-4 dark:opacity-70">
                          {member.description}
                        </p>
                        <div className="flex space-x-4 justify-center md:justify-start">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                          >
                            <LinkedInIcon className="h-5 w-5" />
                            <span className="sr-only">
                              LinkedIn
                            </span>
                          </a>
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                          >
                            <GitHubIcon className="h-5 w-5" />
                            <span className="sr-only">
                              GitHub
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Comparison Table Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="crazyfont text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-12 text-center">Why Choose LogPeers?</h2>
          
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-[#0F172A]">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider"
                    >
                      LogPeers
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider"
                    >
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-[#0F172A] divide-y divide-gray-200 dark:divide-gray-800">
                  {comparisonData.map((item, index) => (
                    <motion.tr
                      key={item.feature}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                      }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="flex justify-center">
                          <CheckIcon className="h-5 w-5 text-green-500" />
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="flex justify-center">
                          <XIcon className="h-5 w-5 text-red-500" />
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
