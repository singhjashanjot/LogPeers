import FlickeringGrid from "@/components/ui/flickering-grid";
import { Image } from "@nextui-org/image";
import { motion } from 'framer-motion'
import { Link as LinkIcon } from 'lucide-react'

export function About() {

    const teamMembers = [
        {
            name: 'Jashanjot Singh',
            image: "jashan.jpeg",
            devname: 'Jashanjot Singh',
            year: '2nd Year BCA Student',
            description: 'Jashanjot Singh is a full stack web developer with a passion for creating seamless user experiences. Skilled in both front-end and back-end technologies, he is dedicated to building innovative web solutions.',
            linkedin: 'https://www.linkedin.com/in/jashanjotsingh01/'
        },
        {
            name: 'Gursimran Singh',
            image: '/placeholder.svg?height=300&width=300',
            devname: 'Gursimran Singh',
            year: '2nd Year BCA Student',
            description: 'Gursimran Singh is a .NET developer proficient in data structures and algorithms. With a keen eye for detail, he excels at creating efficient and scalable software solutions."',
            linkedin: 'https://www.linkedin.com/in/gursimrxnsingh/'
        }
    ]
    return (


        <section className="relative w-full min-h-screen">
            <FlickeringGrid
                className="z-0"
                squareSize={2}
                gridGap={5}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
            />
            <div className="relative z-10 flex flex-col items-center top-14 text-center p-8">
                <h1 className="pointer-events-none font-bold whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Here's What You Need to Know About LogPeers!
                </h1>
                <div className="flex items-center justify-center gap-20 mt-8">
                    <img
                        src="book.png"
                        alt="Description of Image"
                        className="max-w-md rounded-lg"
                    />
                    <p className="text-lg font-semibold w-1/3 text-gray-500 dark:text-gray-400 text-justify">
                        LogPeers is a team of passionate educators and technologists dedicated to making learning more accessible and enjoyable for students.
                        Our mission is to gather all the necessary resources in one place, empowering students to focus on their studies rather than searching for materials.
                        We believe that learning should be a seamless and stress-free experience,
                        enabling students to achieve their full potential.
                    </p>
                </div>

                <section>
                    <h2 className=" text-left m-10 text-3xl md:text-4xl lg:text-7xl font-bold bg-gradient-to-b from-black to-gray-300/80  bg-clip-text  leading-none text-transparent dark:from-white dark:to-slate-900/10 ">Meet the LogPeers Team</h2>
                    <div className=" m-11 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden  max-w-md mx-auto" // Adjust max-w-xs to control card size
                                whileHover={{ scale: 1.05 }}

                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-32 object-cover" // Adjust height to control image size
                                />
                                <div className="p-4"> {/* Adjust padding to control spacing */}
                                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                                    <p className="text-gray-600 mb-2">{member.devname}</p>
                                    <p className="text-gray-500 mb-4">{member.year}</p>
                                    <p className="text-gray-600 mb-4">{member.description}</p>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                                    >
                                        <LinkIcon className="mr-2 h-5 w-5" />
                                        Connect on LinkedIn
                                    </a>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </section>



                {/* New Section for Table */}
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80  bg-clip-text  leading-none text-transparent dark:from-white dark:to-slate-900/10">LogPeers vs Others</h2>
                                <p className="text-muted-foreground text-lg md:text-xl">
                                    LogPeers stands out from other learning platforms by offering a comprehensive and well-organized
                                    collection of resources, along with unique features that simplify the learning process.
                                </p>
                            </div>
                            <div className="overflow-x-auto shadow-lg rounded-lg">
                                <table className="w-full text-left border-collapse bg-white dark:bg-slate-200/40  bg-opacity-90">
                                    <thead className="bg-muted">
                                        <tr>
                                            <th className="px-4 py-3 font-semibold">Feature</th>
                                            <th className="px-4 py-3 font-semibold">LogPeers</th>
                                            <th className="px-4 py-3 font-semibold">Others</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-4 py-3">Course Coverage</td>
                                            <td className="px-4 py-3">
                                                {/* <CheckIcon className="h-5 w-5 text-green-500" /> */}
                                            </td>
                                            <td className="px-4 py-3">
                                                {/* <XIcon className="h-5 w-5 text-red-500" /> */}
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3">Resource Quality</td>
                                            <td className="px-4 py-3">
                                                {/* <CheckIcon className="h-5 w-5 text-green-500" /> */}
                                            </td>
                                            <td className="px-4 py-3">
                                                {/* <XIcon className="h-5 w-5 text-red-500" /> */}
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3">Resource Organization</td>
                                            <td className="px-4 py-3">
                                                {/* <CheckIcon className="h-5 w-5 text-green-500" /> */}
                                            </td>
                                            <td className="px-4 py-3">
                                                {/* <XIcon className="h-5 w-5 text-red-500" /> */}
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3">Ease of Use</td>
                                            <td className="px-4 py-3">
                                                {/* <CheckIcon className="h-5 w-5 text-green-500" /> */}
                                            </td>
                                            <td className="px-4 py-3">
                                                {/* <XIcon className="h-5 w-5 text-red-500" /> */}
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3">Unique Features</td>
                                            <td className="px-4 py-3">
                                                {/* <CheckIcon className="h-5 w-5 text-green-500" /> */}
                                            </td>
                                            <td className="px-4 py-3">
                                                {/* <XIcon className="h-5 w-5 text-red-500" /> */}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default About;
