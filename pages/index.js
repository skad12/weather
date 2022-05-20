import Head from "next/Head"

function weather() {
  return ( 

<div>

<Head>
<title>Weather</title>
<link rel="icon" href="/favicon.ico" />
</Head>


<div className="grid min-h-screen antialiased bg-cover text-white place-items-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

  {/* box content */}
  <div className="box-content grid w-2/6 grid-cols-2 bg-black rounded-md h-72">
    <div className="p-4 space-y-4 bg-cover rounded-md" style={{ backgroundImage: `url('https://images.pexels.com/photos/3825179/pexels-photo-3825179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <div className="">Thursday, April 08, 2021</div>
      <div>20:21:34</div>
      <div className="text-2xl">Abuja</div>
      <div className="text-3xl font-semibold tracking-tighter">35&#176; c</div>
    </div>

    <div className="px-6 space-y-2 bg-black rounded-lg w-72 pt-7">
      <div className="flex justify-between text-xs">
        <div>PRECIPITATION</div>
        <div>0%</div>
      </div>

      <div className="flex justify-between text-xs">
        <div>HUMIDITY</div>
        <div>18</div>
      </div>

      <div className="flex justify-between text-xs">
        <div>WIND</div>
        <div>0%</div>
      </div>

      <div className="grid h-36 place-items-center">
        <input type="text" className="w-full h-12 pl-4 rounded-lg focus:ring-none bg-gradient-to-r from-cyan-500 to-blue-700 focus:outline-none" placeholder="Search city here " />
      </div>
    </div>
  </div>
</div>
</div>
   );
}

export default weather;





