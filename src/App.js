
import './App.css';

function App() {

  const handlePrint =()=>{

  }

  const handleDownload =()=>{
    
  }
  return (
    <>

    <main className=' m-5 p-5 xl: max-w-4xl xl:mx-auto bg-white rounded shadow'>

      <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
        <div>
          <h1 className='font-bold tracking-wide text-4xl mb-3'>INVOICER</h1>
        </div>

        <div>
          <ul className='flex items-center justify-between flex-wrap'>
           <li> 
            <button className='btn btn-print' onClick={handlePrint}>Print</button>


           </li>
           <li>
           <button  className='btn btn-Download' onClick={handleDownload}>Download</button>


           </li>
           <li>

            <button className='btn btn-send'>Send</button>


           </li>

          </ul>
        </div>
      </header>

      

     { /* end of header*/}

      <section className='flex flex-col items-end justify-end'>

      <h2 className='text-xl uppercase'>Kiprop Hezron</h2>
      <p>Address</p>
      

      </section>


      <section>

      <h2 className='text-xl uppercase'>Client Name</h2>
      <p>Client Address</p>
      

      </section>



      <article className='flex items-end justify-end my-7'>
        <ul>
          <li> <span className='font-bold'>Invoice number:</span></li>
          <li> <span className='font-bold'>Invoice date:</span></li>
          <li> <span className='font-bold'>Due date:</span></li>
        </ul>
      </article>

{/*Table */}

<div className='my-5'>
  Table section
</div>



{/*End of Table */}



{/*Notes */}

<section className='mb-5'>
  <p>Notes to the client</p>
</section>
{/*End of Notes */}

{/*footer */}

<footer>
<ul className='flex flex-wrap items-center justify-center' >
  <li> <span className='font-bold'>Account number</span> </li>
  <li> <span className='font-bold'>Your name</span> </li>
  <li><span className='font-bold'>Your email</span></li>
  <li> <span className='font-bold'> Phone number</span></li>
  <li> <span className='font-bold'>Bank</span> </li>
  <li> <span className='font-bold'>Account holder</span> </li>
  <li> <span className='font-bold'>Website</span> </li>

</ul>
</footer>


{/*End of footer */}

    </main>
    </>
  );
}

export default App;
