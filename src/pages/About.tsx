import FlickeringGrid from "@/components/ui/flickering-grid";
import { motion } from 'framer-motion'
import { Link as LinkIcon } from 'lucide-react'

export function About() {

    const teamMembers = [
        {
            name: 'Jashanjot Singh',
            image: "https://avatars.githubusercontent.com/u/161365081?v=4",
            year: '2nd Year BCA Student',
            description: 'Jashanjot Singh is a full stack web developer with a passion for creating seamless user experiences. Skilled in both front-end and back-end technologies, he is dedicated to building innovative web solutions.',
            linkedin: 'https://www.linkedin.com/in/jashanjotsingh01/'
        },
        {
            name: 'Gursimran Singh',
            image: 'https://avatars.githubusercontent.com/u/135122793?v=4',
            year: '2nd Year BCA Student',
            description: 'Gursimran Singh is a .NET developer proficient in data structures and algorithms. With a keen eye for detail, he excels at creating efficient and scalable software solutions."',
            linkedin: 'https://www.linkedin.com/in/gursimrxnsingh/'
        }
    ]
    return (
        <section className="mb-20 md:pb-16 pt-16 relative overflow-hidden">
            <FlickeringGrid className="-z-10" />
            <div className="container">
                <h1 className="crazyfont text-center pb-12 text-4xl font-bold leading-tight md:text-6xl tracking-tighter">
                    About Us
                </h1>

                <div className="flex flex-col py-16 lg:flex-row items-center justify-center gap-12">
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
                                className="bg-background bg-opacity-5 rounded-lg shadow-lg overflow-hidden flex justify-center items-center p-3 flex-col max-w-md mx-auto" // Adjust max-w-xs to control card size
                                whileHover={{ scale: 1.05 }}

                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-32 object-cover opacity-100 rounded-full" // Adjust height to control image size
                                />
                                <div className="p-4"> {/* Adjust padding to control spacing */}
                                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
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
