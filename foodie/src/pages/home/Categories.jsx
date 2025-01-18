import React from 'react'
const categoryItems=[
  {id:1,title:'Main Dish',des:'(86 dishes)',img:'./images/home/category/img1.png'},
  {id:2,title:'Break Fast',des:'(12 break fast)',img:'./images/home/category/img2.png'},
  {id:3,title:'Dessert',des:'(48 dessert)',img:'./images/home/category/img3.png'},
  {id:4,title:'Browse All',des:'(255 Items)',img:'./images/home/category/img4.png'},
]
const Categories = () => {
  return (
    <div className='section-container py-16 '>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Catagories</h2>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap justify-around gap-8 mt-12 items-center'>{
            categoryItems.map((item,i)=>(
              <div key={i} className='shadow-lg p-5 bg-white rounded-md py-6 px-5 mx-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all'>
                  <div >
                    <img src={item.img} className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'></img>
                  </div>
                  <div>
                    <h5 className='font-semibold'>{item.title}</h5>
                    <p className='text-sm text-[#555555]'>{item.des}</p>
                    </div>
                   
              </div>
            ))}
        </div>
    </div>
  )
}

export default Categories