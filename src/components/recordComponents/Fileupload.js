import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { FormLabel, Chip, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import './Fileupload.css'
export default function FileUpload({file, setFile}) {
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const handleDrop = useCallback((acceptedFiles) => {
    setAcceptedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);

  const handleDelete = useCallback((fileToDelete) => {
    setAcceptedFiles(prevFiles => prevFiles.filter(file => file !== fileToDelete));
  }, []);

  return (
    <div className='fileUpload' >
      <h2>Medical Files</h2>
      <Dropzone onDrop={handleDrop} >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone', style: { padding: '10px', border: '2px dashed gray', borderRadius: '1rem', cursor:'pointer' } })}>
            <input {...getInputProps()} value={file} onChange={(e)=>setFile(e.target.value)}/>
            <FormLabel style={{cursor: 'pointer'}}>Drag or Click to add files</FormLabel>
          </div>
        )}
      </Dropzone>
      <div style={{padding:'5px', marginTop: '0.8rem'}}>
        {acceptedFiles.map(file => (
          <Chip
            key={file.name}
            label={file.name}
            onDelete={() => handleDelete(file)}
            deleteIcon={<IconButton><Delete /></IconButton>}
            style={{ margin: '5px',backgroundColor: 'white'}}

          />
        ))}
      </div>
    </div>
  );
}