import React from 'react'

function ShoeCard({ imgURL, changeBigImage, bigShoeImg }) {
    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl sm:flex sm:justify-center sm:items-center
    ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
    cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} alt="shoe-collections" width={127} height={103} />
      </div>
    </div>
  )
}

export default ShoeCard
