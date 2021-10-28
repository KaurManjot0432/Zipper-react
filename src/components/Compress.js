import React, { useState } from 'react';
import ArchiveFormats from './ArchiveFormats';
import { saveAs } from 'file-saver';
import logo from '../upload.png';
import '../App.css';

const Compress = (props) => {
    const [file, setfile] = useState({ selectedFile: null });


    const onFileChange = (e) => {
        setfile({ selectedFile: e.target.files[0] });
    }

    //Function to zip the uploaded file
    const ZipMeUp =  () => {

        const zip = require('jszip')();

        let FileUploaded = file.selectedFile;

        zip.file(FileUploaded.name, FileUploaded);
        zip
            .generateAsync({
                type: "blob",
                compression: "DEFLATE",
                streamFiles: true,
                compressionOptions: {
                    level: 6,
                },
            })
            .then(content => {
                //Shows alert message
                props.showAlert("Zipped file will be downloaded soon!","success");
                //Downloads the zipped file
                saveAs(content, 'file.zip');
            });

    }

    //Function to show uploaded file Name and button to convert to a zip file
    const fileData = () => {

        if (file.selectedFile) {

            return (
                <div className="container my-3">

                    <p>Selected File: {file.selectedFile.name}</p>

                    <button type="button" className="btn btn-dark" onClick={ZipMeUp}>Convert to Zip File</button>

                </div>
            );
        }
    };

    return (
        <>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title mx-4">Zip File Online</h5>
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

export default Compress;
