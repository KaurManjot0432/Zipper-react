// import { useState } from 'react';
// import { saveAs } from 'file-saver';


// function App() {
//   const [file, setfile] = useState({ selectedFile: null });

//   const onFileChange = (e) => {
//     setfile({ selectedFile: e.target.files[0] });
//   }
//   const fileData = () => {

//     if (file.selectedFile) {
        
//       return (
//         <div>
//           <h2>File Details:</h2>

//           <p>File Name: {file.selectedFile.name}</p>


//           <p>File Type: {file.selectedFile.type}</p>


//           <p>
//             Last Modified:{" "}
//             {file.selectedFile.lastModifiedDate.toDateString()}
//           </p>

//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };
//   const ZipMeUp = async (event) => {
//     const zip = require('jszip')();
//     let files = event.target.files;
//     for (let file = 0; file < event.target.files.length; file++) {
//       // Zip file with the file name.
//       let fileName = files[file].name;
//       zip.file(files[file].name, files[file]);
//       zip
//         .generateAsync({
//           type: "blob",
//           compression: "DEFLATE",
//           streamFiles: true,
//           compressionOptions: {
//             level: 6,
//           },
//         })
//         .then(content => {
//           saveAs(content, 'zipped.zip');
//         });
//     }

//   }

//     const decompress = (event) => {
//     var jsZip = require('jszip')
//     let file = event.target.files[0];

//     jsZip.loadAsync(file).then(function (zip) {
//       Object.keys(zip.files).forEach(function (filename) {
//         zip.files[filename].async('nodebuffer').then(function (fileData) {
//           // console.log(fileData) // These are your file contents  
//           console.log(zip.files[filename].name);
//           const blob = new Blob([fileData], { type: "text/plain" });
//           const url = URL.createObjectURL(blob);
//           const link = document.createElement('a');
//           link.download = zip.files[filename].name;
//           link.href = url;
//           link.click();
//         })
//       })
//     })

//   }

   // <h3>
    //     File Upload using React!
    //   </h3>
    //   <div>
    //     <input multiple type="file" id="file-input" name="file" onChange={decompress} />
    //   </div>
    //   {fileData()}