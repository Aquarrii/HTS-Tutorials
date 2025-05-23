function Basic2() {
    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-lg-8">
                        <h1 className="display-5 fw-bold d-flex justify-content-center align-items-center gap-3">Basic 2 <img src="https://data.htscdn.org/images/missions/basic2.gif" alt="Basic 1 mission" className="bg-secondary"/></h1>
                        <a target="_blank" href="https://www.hackthissite.org/missions/basic/2/">https://www.hackthissite.org/missions/basic/2/</a>
                    </div>
                </div>

                <div className="row justify-content-center mx-2">
                    <div className="col-lg-10 col-xl-8">
                        <p className="fst-italic text-center">A slightly more difficult challenge, involving an incomplete password script. <strong>Requirements: Common sense</strong></p>
                        <p className="fst-italic text-center">Network Security Sam set up a password protection script. He made it load the real password from an unencrypted text file and compare it to the password the user enters. However, he neglected to upload the password file...</p>
                    </div>
                </div>

                <div className="row mt-5 bg-light p-3 p-lg-5 mx-1 rounded">
                    <div className="col">
                        <h4><strong>Basic 2 Solution</strong></h4>
                        <hr/>
                        <p>Network Security Sam neglected to upload the password file, so there is no password for the script to compare to.</p>
                        <p>Click submit without entering a password.</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basic2;