import React from "react"

const Try = () => {
  return (
    <div>
      {/* <div className=' w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex flex-col items-center pb-10 pt-10'>
          <img
            class='w-24 h-24 mb-3 rounded-full shadow-lg'
            src={Graphic}
            alt='Bonnie image'
          />
          <h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            Azad Choudhury
          </h5>
          <span class='text-sm text-gray-500 dark:text-gray-400'>
            Chairman & Founder
          </span>
        </div>
      </div> */}

      <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
        <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
          <button
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600'
          >
            <span className='text-sm text-white dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              About
            </span>
          </button>

          <button
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600'
          >
            <span className='text-sm text-white dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Course
            </span>
          </button>

          <button
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Course
            </span>
          </button>

          <button
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600'
          >
            <span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'>
              Contact
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Try
