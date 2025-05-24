import React from 'react'

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
        <section className="flex-grow w-full">
          <div className="text-blue-900 flex flex-row text-center justify-center items-center p-5 space-x-4">
            <header className="flex">
                <ul className="flex space-x-4">

            <li>services</li>
            <li>Platform</li>
            <li>FAQ</li>
            <li>About</li>
            </ul>
            </header>

          </div>
          <div className="container mx-auto px-4 py-8 space-y-8">


  <div className="flex flex-col items-center justify-center text-center space-y-15"> 
    <button className="bg-white text-blue-600 border border-blue-200 rounded-lg font-semibold px-6 py-3 mb-4 shadow-sm hover:shadow-md transition-shadow">
      Introducing sinc
    </button>
    <header className="text-blue-800 text-8xl font-poppins">
      Find or Create <br />
      events effortlessly!
    </header>
    <p className="text-sky-900 font-poppins">Whether you're searching for the perfect event or planning one<br/>from scratch, Sinc simplifies every step, making the process<br/> seamless and stress-free.</p>
    <button className="text-white bg-sky-600 hover:bg-sky-700 px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">Find Events</button>
  </div>
</div>
<section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-20 w-32 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-medium">Client {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Powerful Features</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">Discover how our platform can transform your event management experience with these powerful features</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Event Analytics",
                  description: "Track attendance, engagement, and revenue in real-time with our comprehensive analytics dashboard."
                },
                {
                  title: "Easy Registration",
                  description: "Create beautiful, customizable registration forms that work perfectly on any device."
                },
                {
                  title: "Seamless Payments",
                  description: "Accept payments from anywhere in the world with our secure payment processing."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-blue-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "This platform has completely transformed how we manage our events. The analytics are incredible!",
                  author: "Sarah Johnson",
                  role: "Event Manager"
                },
                {
                  quote: "The registration process is so smooth. Our attendees love how easy it is to sign up for events.",
                  author: "Michael Chen",
                  role: "Marketing Director"
                },
                {
                  quote: "Customer support is outstanding. They're always there to help whenever we need assistance.",
                  author: "Emily Rodriguez",
                  role: "Community Organizer"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-blue-900 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-blue-900">{testimonial.author}</p>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-blue-700 max-w-2xl mx-auto">Choose the plan that works best for your organization</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$29",
                  period: "per month",
                  description: "Perfect for small events and teams just getting started.",
                  features: ["Up to 100 attendees", "Basic analytics", "Email support", "Custom registration"]
                },
                {
                  name: "Professional",
                  price: "$99",
                  period: "per month",
                  description: "For growing teams with more advanced needs.",
                  features: ["Up to 1,000 attendees", "Advanced analytics", "Priority support", "Custom branding"]
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "",
                  description: "For large organizations with complex requirements.",
                  features: ["Unlimited attendees", "Dedicated account manager", "Custom development", "SLA & training"]
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all ${index === 1 ? 'border-2 border-blue-500 transform scale-105' : ''}`}>
                  {index === 1 && <div className="text-xs font-semibold text-blue-600 mb-2">MOST POPULAR</div>}
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-blue-600"> {plan.period}</span>}
                  </div>
                  <p className="text-blue-700 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-medium ${index === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of event organizers who trust our platform to make their events successful.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
    <button className="bg-white text-sky-600 border border-sky-200 rounded-full font-semibold px-6 py-3 mb-4 shadow-sm hover:shadow-md transition-all">
      How it works
    </button>
    <header className=" text-6xl"> </header>
    <span className="text-sky-800">Our key</span> <span className="text-sky-500">features</span>

    <div class=" grid grid-rows-2 grid-cols-3 gap-4">
  <div class="bg-white bg-opacity-80 text-sky-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"><head className="text-sky-800 font-semibold text-lg">Analytics</head>A rich dashboard with advanced analytics from any period of time in a single view.</div>
  <div class="bg-white bg-opacity-80 text-sky-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 2</div>
  <div class="bg-white bg-opacity-80 text-sky-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 3</div>
  <div class="bg-white bg-opacity-80 text-sky-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 4</div>
  <div class="bg-white bg-opacity-80 text-sky-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 5</div>
  <div class="bg-white bg-opacity-80 text-sky-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 6</div>
  <div class="bg-white bg-opacity-80 text-blue-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"><head className="text-blue-800 font-semibold text-lg">Analytics</head>A rich dashboard with advanced analytics from any period of time in a single view.</div>
  <div class="bg-white bg-opacity-80 text-blue-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 2</div>
  <div class="bg-white bg-opacity-80 text-blue-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 3</div>
  <div class="bg-white bg-opacity-80 text-blue-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 4</div>
  <div class="bg-white bg-opacity-80 text-blue-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 5</div>
  <div class="bg-white bg-opacity-80 text-blue-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">Item 6</div>
</div>  

<section className="flex flex-col items-center justify-center text-center space-y-15">

<button className="text-yellow-900 px-4 bg-gray-800 px-4 ">showcase</button>

<span className="text-blue-900 text-3xl">our</span> <span className="text-blue-600 text-3xl">platforms</span>

<div className="grid grid-rows-1 grid-cols-2 gap-6 ">
<button className="text-yellow-900 px-4 bg-gray-800 px-4 ">showcase</button>
<header className="text-blue-900 text-6xl">Dashboard Tool</header>
<p>We provide a rich dashboard with various features that help <br/> event organizers plan and deploy their events.</p>

<img img src="src/assets/image.png" alt="new"  />

<li>Deploy your events in seconds.</li>
<li>Real-time revenue tracking</li>
<li>Instant cash outs</li>


<button className="text-white px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all">Sign up now</button>
</div>
<section className="flex flex-col gap-5">
  <header className="text-5xl">
  <span className="text-blue-900">Ready to</span> <span className="text-blue-600">transform</span>  <span className="text-blue-900">your</span>  <span className="text-blue-600">event</span> <span className="text-blue-900">Business?</span>
  </header>
  <p>Join organizers who trust Sinc to organize and <br /> manage their events with ease and smart <br /> conditions.</p>
  <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">Contact us</button>
</section>




</section>






        </section>
    </div>
  )
}
export default Home;
