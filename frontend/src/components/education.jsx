import { BsDot, BsBoxArrowUpRight } from "react-icons/bs";

const Education = ({ educationData }) => {
  return (
    <main id="education" className="lg:text-center md:py-10 font-gruppo lg:p-10 mt-10 border-b border-gray-200 md:mx-10 dark:border-gray-900 scroll-mt-28 scroll-smooth">
        <div>
            <h1 className="text-blue-950 text-3xl md:text-4xl lg:text-5xl font-bold dark:text-blue-100">Education and Training</h1>
        </div>
        <div className="my-16">
            <div className="lg:grid grid-cols-12 gap-2 dark:text-white">
                {educationData.physical.map((education, index) => (
                    <div key={index} 
                        className={`
                        col-span-4 md:text-lg lg:text-xl 
                        ${education.company === "Amalitech" ?  "bg-gray-50 dark:bg-gray-700"
                            : education.company === "Codecademy" ? "bg-gray-300 dark:bg-gray-800"
                            : education.company === "Accra Institute of Technology" ? "bg-gray-50 dark:bg-gray-500"
                            : education.company === "IPMC College of Technology" ? "bg-gray-400 dark:bg-gray-900"
                            : ""
                        } 
                        text-left p-6 md:p-10 lg:p-10 rounded-md
                        `}>
                        <div>
                            <h1 className="md:text-xl lg:text-3xl font-bold mb-4">{education.name}</h1>
                        </div>
                        <div className="leading-8 md:text-md lg:text-xl font-semibold text-blue-950 dark:text-slate-300">
                            <p>{education.company}</p>
                            <p>{education.date}</p>
                            <p>{education.country}</p>
                            <a className="flex flex-wrap items-center gap-2" href="">{education.website}<BsBoxArrowUpRight/></a>
                        </div>
                    </div>
                ))}
                <div  className="col-span-8 md:text-lg lg:text-xl bg-gray-200 dark:bg-gray-600 text-left p-6 md:p-10 lg:p-10 rounded-md">
                    <h1 className="md:text-xl lg:text-3xl font-bold mb-4">{educationData.online.name}</h1>
                    {educationData.online.content.map((education, index) => (
                        <div key={index} className="">
                            <div className=""><h1 className="md:text-lg lg:text-2xl font-bold">{education.name}</h1></div>
                            <div className="flex flex-wrap items-center gap-4 mb-5">
                                {education.items.map((education, id) => <p key={id} className="flex items-center md:text-md lg:text-xl gap-2 font-semibold text-blue-950 dark:text-slate-300"><BsDot/>{education.label}</p>)}  
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
  )
}

export default Education