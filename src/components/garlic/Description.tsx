import React from 'react'
// import img from ''

const Description = () => {
    return (
        <div className='bg-[url("../images/fresh-raw.png")] bg-center bg-cover bg-norepeat py-[3rem] md:px-[6rem] lg:px-[15rem]'>
            <div className='md:backgroundColor grid md:grid-cols-2 p-2'>
                <div className='p-8 backgroundColor'>
                    <h2 className='text-3xl font-bold text-white pb-2'>Directions</h2>
                    <ul className=''>
                        <li className='text-base list-disc text-white'>Preheat oven to 450 degrees F</li>
                        <li className='text-base list-disc text-white '>For every pound of salmon, mix the zest of one orange, two tablespoons of ginger, 1 tablespoon of olive oil, and salt and pepper to taste. Rub evenly on the salmon before baking.</li>
                        <li className='text-base list-disc text-white  '>Place the salmon, skin side down, on a non-stick baking sheet or in a non-stick pan with an oven-proof handle. Bake until the salmon is cooked through, about 12 to 15 minutes.</li>
                    </ul>
                </div>
                <div className='p-8  backgroundColor  mt-2 md:mt-0'>
                    <h2 className='text-3xl font-bold text-white'>Ingredients</h2>
                    <ul>
                        <li className='text-base list-disc text-white'>1 pound of salmon filet</li>
                        <li className='text-base list-disc text-white'>½ cup orange zest</li>
                        <li className='text-base list-disc text-white'>Spice World Ginger</li>
                        <li className='text-base list-disc text-white'>2 Tbsp Spice World Squeezable Ginger or 2 Tbsp Ready-to-Use Jar Ginger</li>
                        <li className='text-base list-disc text-white'>1 tsp salt, or to taste</li>
                        <li className='text-base list-disc text-white'>Pepper, to taste</li>
                        <li className='text-base list-disc text-white'>1 Tbsp olive oil</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Description

