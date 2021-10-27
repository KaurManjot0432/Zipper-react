import React from 'react';
import tarLogo from '../taricon.png';
import zipLogo from '../zipicon.png';
import rarLogo from '../raricon.png';
import '../App.css';

const ArchiveFormats = () => {
    return (
        <>
        {/* 1st row */}
        <div className="container ">
        <div className="row my-3">
          <div className="col-sm">
            <img className="img-size" src={tarLogo} alt="" />
          </div>
          <div className="col-10">
          <p>
          A TAR file is an archive created by tar, a Unix-based utility used to package files together for backup or distribution purposes. It contains multiple files stored in an uncompressed format along with metadata about the archive. TAR files are commonly compressed into .GZ files with GNU Zip compression.
              </p>
          </div>
        </div>
      </div>

      {/* 2nd row */}
       <div className="container ">
       <div className="row my-3">
         <div className="col-sm">
           <img className="img-size" src={zipLogo} alt="" />
         </div>
         <div className="col-10">
          <p>
          ZIP files have capability to store multiple files using different compression techniques while at the same time supports storing a file without any compression. Each file is stored/compressed individually which helps to extract them, or add new ones, without applying compression or decompression to the entire archive.
        </p>
         </div>
       </div>
     </div>

     {/* 3rd row */}
      <div className="container">
      <div className="row my-3">
        <div className="col-sm">
          <img className="img-size" src={rarLogo} alt="" />
        </div>
        <div className="col-10">
        <p>
        A RAR file is an archive that contains one or more files compressed with RAR compression. It is compressed with a higher compression ratio than typical ZIP compression and incorporates a proprietary compression algorithm utilized by other compressors, including 7-Zip for its .7Z files. Since RAR archives store files in a reduced size, they are often utilized to transfer or store files.
        </p>
        </div>
      </div>
    </div>
    </>
    )
}

export default ArchiveFormats;
