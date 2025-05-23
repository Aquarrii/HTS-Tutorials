import SyntaxHighlighter from "../../../components/SyntaxHighlighter/SyntaxHighlighter";

function Basic1() {
    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-lg-8">
                        <h1 className="display-5 fw-bold d-flex justify-content-center align-items-center gap-3">Basic 1 <img src="https://data.htscdn.org/images/missions/basic1.gif" alt="Basic 1 mission" className="bg-secondary"/></h1>
                        <a target="_blank" href="https://www.hackthissite.org/missions/basic/1/">https://www.hackthissite.org/missions/basic/1/</a>
                    </div>
                </div>

                <div className="row justify-content-center mx-2">
                    <div className="col-lg-10 col-xl-8">
                        <p className="fst-italic text-center">Basic test of your skills to see if you can do any of these missions. <strong>Requirements: HTML</strong></p>
                        <p className="fst-italic text-center"> This level is what we call <strong>"The Idiot Test"</strong>. If you can't complete it, don't give up on learning all you can — but don't go begging to someone else for the answer. That’s one way to get you hated or made fun of. Enter the password and you can continue.</p>
                    </div>
                </div>

                <div className="row mt-5 bg-light p-3 p-lg-5 mx-1 rounded">
                    <div className="col">
                        <h4><strong>Basic 1 Solution</strong></h4>
                        <hr/>
                        <p>Let's begin by viewing the source of the page by pressing <strong>CTRL</strong> + <strong>U</strong>.</p>
                        <p>Notice anything in the page source?</p>
                        <p>Someone has made a comment of the level's password!</p>
                        <SyntaxHighlighter 
                            language="html"
                            code={`<!-- the first few levels are extremely easy: password is b0891ad4 -->`}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basic1;