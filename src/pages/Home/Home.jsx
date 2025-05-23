import React from "react";

function Home() {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold"><i class="fa-solid fa-terminal"></i> HTS Tutorials</h1>
                <div className="col-lg-6 mx-auto w-75">
                    <p className="lead mb-4">Hello and welcome! These tutorials are primarily a way for me to document my progress as I work through the challenges on <a href="https://hackthissite.org/" target="_blank">HackThisSite.com</a> and continue learning about cybersecurity. If you're interested in taking on these challenges yourself, I highly encourage you to try solving them on your own before looking at my solutions — that's what learning is all about. Either way, thanks for stopping by.</p>
                </div>
            </div>
        </>
    )
}

export default Home;