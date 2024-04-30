import React from "react";
import SessionTitle from "../../components/sessionTitle";
import { experiences } from "../../resources/experience";


function Experiences() {
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0)
    return (
        <div>
            <SessionTitle title="Education" />
            <div className="flex py-10 gap-20 sm:flex-col">
                <div className="flex flex-col gap-10 border-l-4 border-[#135e4c] w-1/3 sm:flex-row sm:overflow-scroll-x sm:w-full">
                    {experiences.map((experience, index) => (
                        <div
                            onClick={() => {
                                setselectedItemIndex(index);
                            }}
                            className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-1 bg-[#2dbc3967]     ' : 'text-white'}`}>{experience.period}</h1>
                        </div>

                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-secoundary text-xl">{experiences[selectedItemIndex].title}</h1>
                    <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
                    <p className="text-white">
                        {experiences[selectedItemIndex].description}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Experiences