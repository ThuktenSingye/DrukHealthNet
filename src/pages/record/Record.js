import {  useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import PatientDetails from '../../components/recordComponents/PatientDetails';
import HealthDetails from '../../components/recordComponents/HealthDetails';
import Fileupload from '../../components/recordComponents/Fileupload'

export default function Record() {

  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

// initialize various form varaible required for medical record addition
// for patient
  const [cid, setCid] = useState('')
  const [contacNo, setContactNo] =useState('')
  const [date, setDate] = useState(null)
  // for priscription
  const [diagnosis, setDiagnosis] = useState('') // name of dignosis
  const [medication, setMedication] = useState([]) // array of medication does
  const [advices, setAdvices] = useState([]) // array of string advices
  const [file, setFile] = useState('') // array of files

  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    // define the medical record data and sent use addDoucment method from the firstore to add an document
    console.log(cid, contacNo, date, diagnosis, medication, advices, file)
    
  };
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
            <PatientDetails cid={cid} setCid={setCid} contacNo ={contacNo} setContactNo ={setContactNo} date={date} setDate={setDate}/>
            <HealthDetails diagnosis={diagnosis} medication={medication} advices={advices} setDiagnosis ={setDiagnosis} setMedication={setMedication} setAdvices = {setAdvices}/>
            <Fileupload file={file} setFile = {setFile}/>
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