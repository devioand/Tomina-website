import React from 'react'
import FeedBack from './FeedBack'

const data = [
    {
        feedback: "Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.",
        user: "Wilkins Micawber"
    },
    {
        feedback: "Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.",
        user: "Maria Micawber"
    },
    {
        feedback: "Massa placerat duis ultricies lacus sed turpis tincidunt id.Sagittis scelerisque purus semper.",
        user: "JACK Micawber"
    }
]
const FeedbackS = () => {
    return (
        <div className='bg-[#282828] w-full relative bottom-0'>
            <div className='flex flex-col justify-center items-center relative'>
                <div className='pt-20 py-3 bg-gradient-to-t from-transparent to-red-800 opacity-40 w-full absolute top-0'>
                </div>
                <div className=''>
                    <h1 className='text-5xl pt-10 font-bold text-white text-center'>Testimonials</h1>
                    <h2 className='text-sm pt-5 px-2 md:text-xl font-bold text-white text-center'>All in good taste elementum integer enim neque volutpat ac.</h2>
                    <p className='text-lg  text-white text-center px-2 md:px-32 py-10'>Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis  enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus semper.
                    </p>
                </div>
            </div>
            <div className='px-5'>
                <FeedBack User={data} />
            </div>
        </div>
    )
}

export default FeedbackS
