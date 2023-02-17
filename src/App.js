
import './App.css';

function App() {

  const handlePrint =()=>{

  }

  const handleDownload =()=>{
    
  }
  return (
    <>

    <main className=' m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow'>

      <header className='flex flex-col items-center justify-center mb-5'>
        <div>
          <h2 className='font-bold tracking-wide text-4xl mb-3'>INVOICER</h2>
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

      <h2>Kiprop Hezron</h2>
      <p>Address</p>
      

      </section>


      <section>

      <h2>Client Name</h2>
      <p>Client Address</p>
      

      </section>



      <article>
        <ul>
          <li>Invoice number</li>
          <li>Invoice date</li>
          <li>Due date</li>
        </ul>
      </article>

{/*Table */}



{/*End of Table */}



{/*Notes */}

<section>
  <p>Notes to the client</p>
</section>
{/*End of Notes */}

{/*footer */}

<ul>
  <li>Your name</li>
  <li>Your email</li>
  <li>Phone number</li>
  <li>Bank</li>
  <li>Account holder</li>
  <li>Account number</li>
  <li>Website</li>

</ul>


{/*End of footer */}

    </main>
    </>
  );
}

export default App;
