import React from 'react'

function Home() {
  return (
    <div space-y-9>
        <section className="bg-black h-full w-screen">
          <div className="text-white flex flex-row text-center justify-center items-center p-5 space-x-4">
            <header className="flex">
                <ul className="flex space-x-4">

            <li>services</li>
            <li>Platform</li>
            <li>FAQ</li>
            <li>About</li>
            </ul>
            </header>

          </div>
          <div className="bg-black space-y-4 p-4">


  <div className="flex flex-col items-center justify-center text-center space-y-15"> 
    <button className="bg-gray-800 text-yellow-500 rounded-lg text-bold px-6 py-3 mb-4">
      Introducing sinc
    </button>
    <header className="text-yellow-300 text-8xl font-poppins">
      Find or Create <br />
      events effortlessly!
    </header>
    <p className="text-white font-poppins">Whether you're searching for the perfect event or planning one<br/>from scratch, Sinc simplifies every step, making the process<br/> seamless and stress-free.</p>
    <button className="text-white bg-orange-700 px-8 rounded-lg">Find Events</button>
  </div>
</div>
<section>Our clients</section>
<section></section>
<button className="bg-gray-800 text-yellow-500 rounded-full text-bold px-6 py-3 mb-4">
      How it works
    </button>
    <header className=" text-6xl"> </header>
    <span className="text-white">Our key</span> <span className="text-yellow-400">features</span>

    <div class=" grid grid-rows-2 grid-cols-3 gap-4">
  <div class="bg-gray-900 text-white p-4 flex px-5 py-8 "><head className="text-white">Analytics</head>A rich dashboard with advanced analytics from any period of time in a single view.</div>
  <div class="bg-gray-900 text-white p-4">Item 2</div>
  <div class="bg-gray-900 text-white p-4">Item 3</div>
  <div class="bg-gray-900 text-white p-4">Item 4</div>
  <div class="bg-gray-900 text-white p-4">Item 5</div>
  <div class="bg-gray-900 text-white p-4">Item 6</div>
</div>  

<section className="flex flex-col items-center justify-center text-center space-y-15">

<button className="text-yellow-900 px-4 bg-gray-800 px-4 ">showcase</button>

<span className="text-white text-3xl">our</span> <span className="text-yellow-800 text-3xl">platforms</span>

<div className="grid grid-rows-1 grid-cols-2 gap-6 ">
<button className="text-yellow-900 px-4 bg-gray-800 px-4 ">showcase</button>
<header className="text-white text-6xl">Dashboard Tool</header>
<p>We provide a rich dashboard with various features that help <br/> event organizers plan and deploy their events.</p>

<img img src="src/assets/image.png" alt="new"  />

<li>Deploy your events in seconds.</li>
<li>Real-time revenue tracking</li>
<li>Instant cash outs</li>


<button className="text-orange-100 px-4 bg-yellow-900">Sign up now</button>
</div>
<section className="flex flex-col gap-5">
  <header className="text-5xl">
  <span className="text-white">Ready to</span> <span className="text-orange-900">transform</span>  <span className="text-white">your</span>  <span className="text-orange-900">event</span> <span className="text-white">Business?</span>
  </header>
  <p>Join organizers who trust Sinc to organize and <br /> manage their events with ease and smart <br /> conditions.</p>
  <button className="text-yellow-900 bg-orange-600 px-3  rounded-lg">Contact us</button>
</section>




</section>






        </section>
    </div>
  )
}
export default Home;
