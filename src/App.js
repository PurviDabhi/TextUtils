// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [data, updateData] = useState('');
  let upperBtn = () => {
    if (data === "") {
      toast.error("Text field is Empty")
    }
    else {
      updateData(data.toUpperCase())
      toast.success("Text Transform to UPPERCASE")
    }

  }

  let lowerBtn = () => {
    if (data === "") {
      toast.error("Text field is Empty")
    }
    else {
      updateData(data.toLowerCase());
      toast.success("Text Transform to lowercase")
    }
  }

  let capitalBtn = () => {
    let temp = data;
    temp = temp.charAt(0).toUpperCase() + temp.substring(1).toLowerCase();
    if (data === "") {
      toast.error("Text field is Empty")
    }
    else {
      updateData(temp)
      toast.success("Text successfully Capitalize")
    }
  }

  let clearBtn = () => {
    updateData("")
    toast.success("Clear")
  }

  let copyBtn = () => {
    if (data === "") {
      toast.error("Text field is Empty")
    }
    else {
      navigator.clipboard.writeText(data);
      toast.success("Copied to Clipboard")

    }
  }

  const handleChange = (e) => {
    updateData(e.target.value)
  }

  const [Mode, setMode] = useState('light')
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#292b2c'
      document.body.style.color = 'white'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#f7f7f7'
      document.body.style.color = 'black'
    }

  }
  return (
    <>

      <Navbar headingValue={'Textutils'} mode={Mode} toggleBtn={toggleMode} />


      <div className="container mt-5">
        <label htmlFor="text" className='form-label'>Add Text : </label>
        <textarea name="text" id="text" cols="30" rows="10" className={`form-control bg-${Mode === 'dark' ? 'dark' : 'light'} text-${Mode === 'dark' ? 'light' : 'dark'}`} onChange={handleChange} value={data} on></textarea>
        <div className="d-flex mt-3">
          <button className="btn btn-primary mx-2" onClick={upperBtn}>Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={lowerBtn}>Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={clearBtn}>Clear</button>
          <button className="btn btn-primary mx-2" onClick={copyBtn}>Copy</button>
          <button className="btn btn-primary mx-2" onClick={capitalBtn}>Capitalize</button>
        </div>
        <h2 className="mt-4">Your Text Summary :-</h2>
        <p>{data.split(" ").length} Words and {data.length} Character</p>
        <p>{0.008 * data.split("").length} Minutes</p>
        <h2>Preview :</h2>
        <p>{data}</p>


        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={Mode === 'dark' ? 'dark' : 'light'}
        />
      </div>


    </>
  );
}

export default App;
