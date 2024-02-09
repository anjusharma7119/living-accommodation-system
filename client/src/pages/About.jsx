import React from 'react';

export default function About() {
  return (
    <div>
      {/* Header Section */}
      <header className="relative h-96 flex items-center justify-center bg-cover bg-center bg-opacity-80" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <nav className="navbar relative z-10 text-center text-white">
          <h2 className="text-2xl font-semibold mt-10 p-10">
            Welcome to CampusNest – a dynamic online platform revolutionizing the way individuals find and secure their ideal rental homes. Whether you're a student embarking on the academic journey of a lifetime or a discerning renter seeking comfort and convenience, CampusNest is your go-to destination for tailored housing solutions.
          </h2>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="flex flex-wrap items-center justify-around p-12">
        <div className="home-left h-96 w-full md:w-2/5">
          <img src="https://cdn.pixabay.com/photo/2020/05/24/23/44/hands-5216585_1280.jpg" alt="Random" className="h-full w-full object-cover rounded-md" />
        </div>
        <div className="home-right w-full md:w-2/5">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Modernizing Rental Living</h2>
          <p className="text-gray-700 mb-4">CampusNest is your go-to for curated rental solutions, creating a community that goes beyond traditional housing. Join us in shaping the future of sophisticated rental living. Welcome to CampusNest – where modern vibes meet vibrant community living.</p>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-Team" className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Founders</h2>
        <div className="teamContainer flex flex-wrap justify-center items-center space-x-4">
          <div className="team-item">
            {/* <img src="https://source.unsplash.com/random" alt="Random" className="w-20 h-20 object-cover rounded-full mb-4" /> */}
            <h5 className="member-name text-xl font-semibold">Gaurav Singh</h5>
            <a href="http://" className='text-blue-500'>Contact</a>
          </div>
          <div className="team-item">
            {/* <img src="https://source.unsplash.com/random" alt="Random" className="w-20 h-20 object-cover rounded-full mb-4" /> */}
            <h5 className="member-name text-xl font-semibold">Anju Sharama</h5>
            <a href="http://" className='text-blue-500'>Contact</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4 bg-gray-200">
        <p>&copy; 2023 - All rights reserved - campusNest.in</p>
      </footer>
    </div>
  );
}
