import React, { useState } from 'react';
import ArchiveFormats from './ArchiveFormats';
import logo from '../upload.png';
import '../App.css';

const Decompress = (props) => {
    const [file, setfile] = useState({ selectedFile: null });


    const onFileChange = (e) => {
        setfile({ selectedFile: e.target.files[0] });
    }
    //Function to zip the uploaded file
    const unzip = () => {
        var jsZip = require('jszip')
        let FileUploaded = file.selectedFile;
        //check if the uploaded file is a zip file or not
        if (FileUploaded.type !== 'application/zip') {
            props.showAlert("Selected File is not a zip file!", "danger");
        } else {
            jsZip.loadAsync(FileUploaded).then(function (zip) {
                Object.keys(zip.files).forEach(function (filename) {
                    zip.files[filename].async('nodebuffer').then(function (fileData) {
                        // console.log(fileData) // These are your file contents  
                        console.log(zip.files[filename].name);
                        const blob = new Blob([fileData], { type: "text/plain" });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.download = zip.files[filename].name;
                        link.href = url;
                        props.showAlert("Unzipped file will be downloaded soon!", "success");
                        link.click();
                    })
                })
            })
        }
    }

    //Function to show uploaded file Name and button to convert to a zip file
    const fileData = () => {

        if (file.selectedFile) {

            return (
                <div className="container my-3">

                    <p>Selected File: {file.selectedFile.name}</p>

                    <button type="button" className="btn btn-dark" onClick={unzip}> Unzip File</button>

                </div>
            );
        }
    };

    return (
        <>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title mx-4">Unzip File Online</h5>
                    <img src={logo} alt="" />
                    <div className="btn btn-dark" >
                        Upload
                        <input type="file" id="file-input" name="file" onChange={onFileChange} />
                    </div>
                    {fileData()}
                </div>
            </div>
            <ArchiveFormats />
        </>
    )
}

export default Decompress
