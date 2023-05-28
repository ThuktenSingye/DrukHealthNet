import {  useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import PatientDetails from '../../components/recordComponents/PatientDetails';
import HealthDetails from '../../components/recordComponents/HealthDetails';
import Fileupload from '../../components/recordComponents/Fileupload'
import useFirestore from '../../hooks/useFirestore';
import { useEffect } from 'react';

export default function Record() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {addDocument, response} = useFirestore('record')
  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    // define the medical record data and sent use addDoucment method from the firstore to add an document
    // code to add documents
    addDocument(recordDetials)
    
  };
  const [recordDetials, setRecordDetials] = useState({
    patientDetails:[],
    priscription: [],
    files:[]
  })
  const handleRecordForm = (fieldName, value)=>{
    setRecordDetials(prevState => {
      return {
        ...prevState,
        [fieldName]: value,
      }
    });
  }
  useEffect(()=>{
    // console.log(response.success)
    if (response.success){
        setRecordDetials('')
    }
}, [response.success])
  
  return (
    <div style={{zIndex: 6000}} className='record'>
      <Button variant="contained" color="primary" onClick={handleOpen} className='rounded-1'>
        Add Record
      </Button>
      <Button variant="contained" color="secondary" className='rounded-0'>
        View Records
      </Button>
      <Dialog open={open} onClose={handleClose} style={{ marginTop: "5rem" }}  fullScreen>
        <form onSubmit={handleSubmit} className='record_form' style={{margin: '60px auto', Width: '1920px', backgroundColor:'#F4F7FC',  borderRadius: '1rem'}}>
          <DialogActions>
              <Button onClick={handleClose} color="primary" className='rounded-1'>
                Cancel
              </Button>
          </DialogActions>
          <DialogTitle>Add Record</DialogTitle>
          <DialogContent className=' d-flex flex-column gap-3'>
            <PatientDetails name='patientDetails' onChange={handleRecordForm}/>
            <HealthDetails name='priscription' onChange={handleRecordForm}/>
            <Fileupload name='files' onChange={handleRecordForm}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" className='rounded-1'>
              Cancel
            </Button>
            <Button type="submit" color="primary" className='rounded-1'>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}