import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { FormLabel, Chip, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import './Fileupload.css'
import { useEffect } from 'react';
export default function FileUpload(props) {

  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const { name,  onChange } = props;
  const handleDrop = useCallback((acceptedFiles) => {
    setAcceptedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);
  const handleDelete = useCallback((fileToDelete) => {
    setAcceptedFiles(prevFiles => prevFiles.filter(file => file !== fileToDelete));
  }, []);

  function handleFileChanged() {
    const updatedFile = {
      file: acceptedFiles
    }
    onChange(name, updatedFile);
  }
  useEffect(() => {
    handleFileChanged();
  }, [acceptedFiles]);
  
  
  return (
    <div className='fileUpload' >
      <h2>Medical Files</h2>
      <Dropzone onDrop={handleDrop}  >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone', style: { padding: '10px', border: '2px dashed gray', borderRadius: '1rem', cursor:'pointer' } })}>
            <input {...getInputProps()} />
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