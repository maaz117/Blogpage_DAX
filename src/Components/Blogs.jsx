import React from 'react'
import blog1 from './../assets/Images/blog1.png'
import blog2 from './../assets/Images/blog2.png'
import blog3 from './../assets/Images/blog3.png'
import blog4 from './../assets/Images/blog4.png'
import blog5 from './../assets/Images/blog5.png'
import blog6 from './../assets/Images/blog6.png'

function Blogs() {
    const blogs = [
        {
            id: 1,
            image: blog1,
            title: 'Paris',
            description: `Paris, the capital of France, is known as the "City of Light" and a global hub for art, fashion, and culture. Iconic landmarks include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Its charming streets, exquisite cuisine, and romantic ambiance attract millions of visitors annually.`,
        },
        {
            id: 2,
            image: blog2,
            title: 'Amsterdam',
            description: `Amsterdam, the Netherlands’ capital, is famous for its picturesque canals, historic buildings, and vibrant nightlife. Renowned attractions include the Anne Frank House, Van Gogh Museum, and colorful tulip gardens. Its cycling culture and welcoming atmosphere make it unforgettable.`,
        },
        {
            id: 3,
            image: blog3,
            title: 'Switzerland',
            description: `Switzerland is a stunning Alpine nation known for its breathtaking landscapes, luxury watches, and chocolates. Popular destinations include the Matterhorn, Lake Geneva, and Interlaken. It’s a haven for skiing, hiking, and serene getaways amidst pristine nature.`,
        },
        {
            id: 4,
            image: blog4,
            title: 'New York',
            description: `New York City, the "Big Apple," is a bustling metropolis known for iconic landmarks like Times Square, Central Park, and the Statue of Liberty. Its dynamic culture, diverse neighborhoods, and entertainment make it a global destination.`,
        },
        {
            id: 5,
            image: blog5,
            title: 'Dubai',
            description: `Dubai, in the UAE, is synonymous with luxury and futuristic architecture. Attractions like the Burj Khalifa, Palm Jumeirah, and world-class shopping malls make it a magnet for tourists. Its desert safaris and innovative skyline captivate visitors.`,
        },
        {
            id: 6,
            image: blog6,
            title: 'London',
            description: `London, the UK’s capital, is steeped in history and modernity. Iconic sites include the Tower of London, Buckingham Palace, and the British Museum. With world-class theater, vibrant markets, and royal traditions, it’s a city of endless exploration.`,
        },
    ]
  return (
    <div className='mt-8 container mx-auto p-4 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-center mb-6'>Our Blogs</h1>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl'>
            {blogs.map((blog)=>(
                <div
                        key={blog.id}
                        className='bg-white shadow-xl rounded-lg overflow-hidden'>
                    <img 
                        src={blog.image}
                        alt={blog.title}
                        className='w-[500px] h-[300px] object-cover mx-auto'
                    />
                    <div className='p-4'>
                        <h2 className='text-lg font-semibold mb-2 text-center'>{blog.title}</h2>
                        <p className='text-gray-600 text-sm text-center'>{blog.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs