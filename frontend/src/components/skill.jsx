import { FaReact, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { BsDot, BsPersonFillCheck } from "react-icons/bs";

const Skill = ({ skillData }) => {
  return (
    <main id="skill" className="mx-6 lg:text-center lg:mx-10 md:py-10 font-gruppo md:p-10 lg:p-10 mt-10 border-b border-gray-200 md:mx-10 dark:border-gray-900 scroll-mt-28 scroll-smooth">
        <div>
            <h1 className="text-blue-950 text-3xl md:text-4xl lg:text-5xl font-bold dark:text-blue-100">Skills</h1>
        </div>
        <div className="my-16 text-black dark:text-white">
            <div className="lg:grid grid-cols-12 gap-x-10">
                {skillData.map((skill,index) => (
                    <div key={index} className="col-span-6 mb-10 border border-dotted p-5 rounded-md border-gray-500">
                        <div className="flex text-2xl md:text-3xl lg:text-4xl items-end gap-4">
                            {skill.name === 'Front-end' ? <FaReact className="animate-pulse text-blue-950 dark:text-blue-300"/> 
                            : skill.name === 'Back-end' ? <FaNodeJs className="animate-pulse text-blue-950 dark:text-blue-300"/>  
                            : skill.name === 'Database' ? <FaDatabase className="animate-pulse text-blue-950 dark:text-blue-300"/>
                            : skill.name === 'Design' ? <FaFigma className="animate-pulse text-blue-950 dark:text-blue-300"/>
                            : skill.name === 'Professional Skills' ? <BsPersonFillCheck className="animate-pulse text-blue-950 dark:text-blue-300"/>
                            : '' }
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{skill.name}</h1>
                        </div>
                        <div className="flex flex-wrap gap-5 my-5 md:text-lg lg:text-md font-semibold text-blue-950 dark:text-slate-300">
                        {skill.stack.map((stack, id) => <div className="flex items-end" key={id}><BsDot className="md:text-lg lg:text-2xl"/><h1>{stack}</h1></div>  )}
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    </main>
  )
}

export default Skill