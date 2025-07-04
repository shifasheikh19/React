import React from 'react'

function Card({username,text}) {
    console.log(username);
  return (
    
    <div>      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

<section className="flex justify-center items-center min-h-screen bg-white font-lato">
  <div className="py-20 md:py-8 w-[90%] max-w-[76.5rem] mx-auto text-[#111]">
    <h2 className="capitalize tracking-[0.025em] text-[clamp(2rem,1.8125rem+0.75vw,2.6rem)]">leading companies<br />have trusted us</h2>
    
    <div className="container mt-10 grid gap-8 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
      <div className="card">
        <div className="card-inner relative w-full h-[18.75rem] bg-white rounded-2xl overflow-hidden">
          <div className="box w-full h-full bg-white rounded-2xl overflow-hidden">
            <div className="imgBox absolute inset-0">
              <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/lake-with-lots-green-trees-reflected-water-chisinau-moldova_1268-16592.jpg?t=st=1730201653~exp=1730205253~hmac=235d8c2d9698a5f50dda6a870703d3c4d3a9c360f97c4a688f1abe2bfb509152&w=1380" alt="Trust & Co." />
            </div>
            <div className="icon absolute bottom-[-0.375rem] right-[-0.375rem] w-24 h-24 bg-[#d3b19a] rounded-tl-full flex justify-center items-center transition-transform hover:scale-110">
              <a href="#" className="iconBox w-full h-full flex justify-center items-center text-white text-2xl rounded-full">
                <span className="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
        <div className="content py-4 px-2.5">
          <h3 className="capitalize text-[clamp(1.5rem,1.3909rem+0.4364vw,1.8rem)]">{username}</h3>
          <p className="my-4 text-[#565656]">{text}</p>
          <ul className="flex flex-wrap gap-2">
            <li className="uppercase font-bold text-xs text-[#282828] bg-[#d3b19a] px-2 py-1 rounded">branding</li>
            <li className="uppercase font-bold text-xs text-[#282828] bg-[#70b3b1] px-2 py-1 rounded">packaging</li>
          </ul>
        </div>
      </div>
      
      
      
    </div>
  </div>
</section></div>
  )
}

export default Card