import React from "react";
import SessionTitle from "../../components/sessionTitle";
import {projects} from "../../resources/projects";


function Projects(){
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0)
    return(
        <div>
            <SessionTitle title = "Project" />
            <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-4 border-[#135e4c] w-1/3 sm:flex-row sm:overflow-scroll-x sm:w-full">
                    {projects.map((project , index) => (
                        <div
                            onClick={() => {
                                setselectedItemIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-1 bg-[#2dbc3967]' : 'text-white'}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>
                <div className = "flex items-center justify-center gap-10  sm:flex-col">
                {/* <img src={projects[selectedItemIndex].image} alt="" className="h-60 w-72 rounded-lg"/> */}
                <div className = "flex flex-col gap-5">
                <h1  className = "text-secoundary text-xl">{projects[selectedItemIndex].title}</h1>
                    <p className="text-white">{projects[selectedItemIndex].description}</p>
                    <p className="text-white">
                        {projects[selectedItemIndex].technology + " "} 
                    </p>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;