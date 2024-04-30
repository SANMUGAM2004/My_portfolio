import React from "react";
import SessionTitle from "../../components/sessionTitle";

function Contact() {
    const user = {
        Name  : "Sanmugam H M",
        Dob   : "19 - May - 2004",
        Gender: "Male",
        Email : "hmsanmugam@gmail.com",
        Mobile: "9361936913",
        Location:"Chennai",
        Country: "INDIA",
    };
    return (
        <div>
            <SessionTitle title='Say Hello' />
            <div className="flex sm:flex-col items-center justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-white"></p>
                    {Object.keys(user).map((key) => (
                        
                    <p className="ml-5"><span className="text-tertiary">{key} :{" "}</span><sapn className="text-white">{user[key]}</sapn></p>
                    ))}
                    <p className="text-white"></p>
                </div>
                <div className = "h-[400px]">
                    <lottie-player
                    src        = "https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
                    background = "transparent"
                    speed      = "1"
                    autoplay
                    ></lottie-player>
                </div>
            </div>
        </div>
    )
}


export default Contact