const Nav =()=>{
    return(
        <>
          <nav className=' items-center flex gap-10 px-4 text-center justify-between font-[Gilroy] capitalize'>


          

<img className='object-fit px-8 py-2 rounded-lg' src="/images/brand_logo.png" alt="" srcset="" />


<ul class='flex gap-10 items-center'>
  <li class="hover:font-semibold  hover:border-b-2 hover:border-black"> <a href="#">Menu</a> </li>
  <li class="hover:font-semibold  hover:border-b-2 hover:border-black"> <a href="#">Location</a> </li>
  <li class="hover:font-semibold  hover:border-b-2 hover:border-black"> <a href="#">About</a> </li>
  <li class="hover:font-semibold  hover:border-b-2 hover:border-black"> <a href="#">Contact</a> </li>
</ul>


  <button className=' h-8 font-semibold px-12 rounded  bg-green-500 hover:shadow-xl  hover:bg-red-500 text-black'>Login</button>

</nav>

        
        
        </>
    )
}
export default Nav;
