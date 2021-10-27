import React from 'react';

const About = () => {

    return (
        <div className="container">
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is zipper?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Zipper is a free zip and unzip online file compression tool that lets you zip files into an archive. It also supports unzip, allowing you to uncompress archived zip files. 

                            Unlike other zip and unzip online utilities, Zipper DOES NOT have file size restrictions or require you to upload / download files to a server. It runs locally as a browser app, thus making it much quicker than other similar zip and unzip online tools. This also ensures your privacy will be protected as no file data will leave your browser.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo" >
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How do I unzip files?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>To select the zip file</strong> Click "Decompress" on Navbar and then click on upload button to open the file chooser.It will start the file extraction and list the contents of the zip file once complete.Then click on unzip the file and unzipped file be downloaded automatically.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How can I zip files?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                       To select the file, which you want to zip,  Click "Compress" on Navbar and then click on upload button to open the file chooser.It will start the file extraction and list the contents of the selected file once complete.Then click on zip the file  button and zipped file be downloaded automatically.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
