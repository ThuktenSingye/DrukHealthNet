import {  useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import PatientDetails from '../../components/recordComponents/PatientDetails';
import HealthDetails from '../../components/recordComponents/HealthDetails';
import Fileupload from '../../components/recordComponents/Fileupload'
import useFirestore from '../../hooks/useFirestore';
import { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
export default function Record({type}) {
  const [open, setOpen] = useState(false);
  const {user} = useAuthContext()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {addDocument, response} = useFirestore('record')
  const handleSubmit = async (event) => {
    // Handle form submission here
    event.preventDefault();
    // define the medical record data and sent use addDoucment method from the firstore to add an document
    // code to add documents
    // console.log(recordDetials)
    await addDocument(recordDetials)
    
  };
  const [recordDetials, setRecordDetials] = useState({
    patientDetails:[],
    priscription: [],
    files:[],
    doctorId: user?.uid
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

      {type==='patient'? 
        <Button variant="contained"  className='rounded-1' >
          View Records
        </Button>:
      <>
        <Button variant="contained"  onClick={handleOpen} className='rounded-1'>
          Add Record
        </Button>
        <Button variant="contained"  className='rounded-1' >
          View Records
        </Button>
      </>
      }

      <Dialog open={open} onClose={handleClose} style={{ marginTop: "5rem" }}  fullScreen className='app-wrapper'>
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