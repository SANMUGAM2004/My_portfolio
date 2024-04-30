import React from "react";

function LeftSider() {
    return (
        <div className="fixed left-0 bottom-0 px-10">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMjJBRNSsSZNMksWrtQbKSCMltZLNjdMwpZhLVvlbwjVhjKjKGDlJDmznWZnwbFGGZWsBHG"><i class="ri-mail-line text-gray-400 text-xl"></i></a>
                        {/* <a href="https://www.instagram.com/hariraj__official_?igsh=MTdidGU4cmtjdHpqeA=="><i class="ri-instagram-line text-gray-400 text-xl"></i></a> */}
                        <a href="www.linkedin.com/in/sanmugam-hm"><i class="ri-linkedin-box-line text-gray-400 text-xl"></i></a>
                        <a href="https://github.com/SANMUGAM2004"><i class="ri-github-line text-gray-400 text-xl"></i></a>
                </div>
                <div className="w-[1px] h-52 bg-[#a09e9e68]">

                </div>
            </div>
        </div>
    )
}

export default LeftSider