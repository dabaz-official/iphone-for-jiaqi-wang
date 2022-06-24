import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='px-10 min-h-screen bg-purple-50 flex justify-center items-center'>
      <Head>
        <title>iPhone designed by DabAZ</title>
        <meta name="description" content="Designed by DabAZ" />
        <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" />
      </Head>

      <div className='relative h-[712px] w-[350px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[12px] border-black'>
        <img src='https://9to5mac.com/?attachment_id=811133' className='absolute inset-0 h-full w-full object-cover' alt='wallpaper' />
        <div className='absolute top-0 inset-x-0'>
          <div className='h-7 w-[8.75rem] mx-auto bg-black rounded-b-[1.25rem]'></div>
        </div>
        <div className='relative'>
          <div className='mt-4 mr-5 flex justify-end space-x-1'>
            <svg width="56" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#a)">
                <path opacity=".35" d="M38.77.359h12.204a2.513 2.513 0 0 1 2.513 2.513v3.59a2.513 2.513 0 0 1-2.513 2.512H38.77a2.513 2.513 0 0 1-2.513-2.513v-3.59A2.513 2.513 0 0 1 38.77.36Z" stroke="#fff"/>
                <path opacity=".4" d="M54.564 3.59v3.03a1.644 1.644 0 0 0 0-3.03Z" fill="#fff"/>
                <path d="M37.334 2.872c0-.793.642-1.436 1.435-1.436h12.206c.793 0 1.435.643 1.435 1.436v3.59c0 .793-.642 1.436-1.435 1.436H38.769a1.436 1.436 0 0 1-1.435-1.436v-3.59Z" fill="#fff"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.77 2.575a6.83 6.83 0 0 1 4.757 1.94.243.243 0 0 0 .346-.002l.924-.952a.265.265 0 0 0-.002-.372 8.581 8.581 0 0 0-12.052 0 .265.265 0 0 0-.002.372l.924.952c.095.098.25.099.346.003a6.831 6.831 0 0 1 4.758-1.94Zm.025 2.874c.973 0 1.911.369 2.632 1.035a.244.244 0 0 0 .347-.004l.922-.952a.266.266 0 0 0-.003-.374 5.637 5.637 0 0 0-7.794 0 .265.265 0 0 0-.004.374l.923.952c.095.097.249.099.346.004a3.877 3.877 0 0 1 2.63-1.035Zm1.876 1.857a.259.259 0 0 1-.075.188L25 9.14a.247.247 0 0 1-.354 0l-1.597-1.645a.259.259 0 0 1 .008-.373 2.692 2.692 0 0 1 3.532 0 .258.258 0 0 1 .082.185Z" fill="#fff"/>
                <path d="M7.18 2.872c0-.397.321-.718.718-.718h.718c.396 0 .718.321.718.718v5.743a.718.718 0 0 1-.718.718h-.718a.718.718 0 0 1-.718-.718V2.872ZM10.769 1.436c0-.397.322-.718.718-.718h.718c.396 0 .718.321.718.718v7.18a.718.718 0 0 1-.718.717h-.718a.718.718 0 0 1-.718-.718v-7.18ZM3.59 5.384c0-.396.321-.718.718-.718h.718c.396 0 .718.322.718.718v3.231a.718.718 0 0 1-.718.718h-.718a.718.718 0 0 1-.718-.718v-3.23ZM0 7.18c0-.397.321-.719.718-.719h.718c.396 0 .718.322.718.718v1.436a.718.718 0 0 1-.718.718H.718A.718.718 0 0 1 0 8.615V7.18Z" fill="#fff"/>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h56v9.333H0z"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='mt-1.5 h-0.5 w-10 bg-white mr-7 ml-auto rounded'></div>
          <div className='mt-3 flex flex-col items-center'>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.755 18.959h7.3c1.01 0 1.506-.498 1.506-1.598V11.72c0-.964-.384-1.47-1.182-1.575V8.14c0-1.755 1.122-2.72 2.463-2.72 1.348 0 2.463.965 2.463 2.72v1.59c0 .535.317.814.731.814.4 0 .716-.264.716-.814V8.276c0-2.863-1.906-4.241-3.91-4.241-2.004 0-3.91 1.378-3.91 4.241v1.846l-6.057.015c-1.017 0-1.635.497-1.635 1.582v5.642c0 1.1.498 1.598 1.515 1.598Z" fill="#fff"/>
            </svg>
            <p className='mt-1 text-white text-lg font-regular'>Sat 25</p>
            <p className='mt-[0.075rem] text-white text-6xl font-medium'>9:41</p>
          </div>
          <div className='mt-4 mx-2 relative'>
            <div className='absolute -bottom-4 inset-x-0 h-full bg-white/10 backdrop-blur-md rounded-2xl scale-[0.85] origin-bottom'></div>
            <div className='absolute -bottom-2 inset-x-0 h-full bg-white/30 backdrop-blur-md rounded-3xl scale-95 origin-bottom shadow-sm'></div>
            <div className='h-70 p-4 bg-white/50 backdrop-blur-md rounded-3xl shadow-sm'>
              <div className='flex justify-between'>
                <div>
                  <p className='text-xs font-bold'>9:30 AM</p>
                  <h2 className='text-lg font-bold'>Your Morning Summary</h2>
                </div>
                <span className='bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center'>11</span>
              </div>
              <div className='mt-2 grid grid-cols-2 gap-2'>
                <div>
                  <img src='http://dabazofficial.com/wjq-1.jpg' className='rounded-lg' alt='wjq' />
                  <h3 className='mt-2 text-xs font-bold leading-tight'>I don't know which pic to put here.</h3>
                  <p className='mt-1 text-xs'>This picture belongs to 王嘉琪. I only used this picture to build this.</p>
                </div>
                <div>
                  <img src='http://dabazofficial.com/wjq-2.jpg' className='rounded-lg' alt='wjq' />
                  <h3 className='mt-2 text-xs font-bold leading-tight'>An iPhone dedicated to 王嘉琪.</h3>
                  <p className='mt-1 text-xs'>She kills my anxiety and numbs my pain. Appreciate a lot.</p>
                </div>
              </div>
              <hr className='mt-4 border-black/20' />
              <div className='mt-3 grid grid-cols-3 gap-1 items-end'>
                <div className='col-span-2'>
                  <h3 className='text-sm font-bold'>More Updates</h3>
                  <p className='mt-0.5 text-xs'>DabAZ, Instagram, and Reddit</p>
                </div>
                <ul className='flex flex-row-reverse -space-x-4 space-x-reverse'>
                  <li><img className='h-8 w-8 object-cover rounded-lg' src='http://dabazofficial.com/images/reddit.png' alt='DabAZ' /></li>
                  <li><img className='h-8 w-8 object-cover rounded-lg' src='http://dabazofficial.com/instagram.png' alt='DabAZ' /></li>
                  <li><img className='h-8 w-8 object-cover rounded-lg' src='http://dabazofficial.com/dabaz.jpg' alt='DabAZ' /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 inset-x-0 h-20'>
          <div className='flex justify-between px-10'>
            <button className='bg-gray-800/40 backdrop-blur-md rounded-full p-2'>
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.698 4.247h6.604v-.364c0-.86-.446-1.3-1.274-1.3H7.972c-.829 0-1.274.44-1.274 1.3v.364Zm2.555 12.638h1.494c.829 0 1.268-.433 1.268-1.3V9.088c0-.634.144-1.093.383-1.45l.396-.597c.313-.483.508-.923.508-1.469V5.07H6.698v.502c0 .546.188.986.502 1.47l.402.595c.232.358.376.817.376 1.45v6.498c0 .867.446 1.3 1.275 1.3ZM10 12.126c-.54 0-.892-.39-.892-.948V9.445c0-.558.352-.935.892-.929.54.007.891.383.891.93v1.732c0 .559-.351.948-.891.948Zm0-.47a.55.55 0 0 0 .546-.54.555.555 0 0 0-.546-.547.555.555 0 0 0-.546.546c0 .296.25.54.546.54Z" fill="#fff"/>
              </svg>
            </button>
            <button className='bg-gray-800/40 backdrop-blur-md rounded-full p-2'>
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.3 15.63h11.388c1.356 0 2.071-.704 2.071-2.048V6.991c0-1.344-.715-2.047-2.071-2.047h-1.67c-.49 0-.647-.082-.955-.402l-.495-.533c-.327-.346-.66-.515-1.3-.515h-2.58c-.64 0-.973.17-1.3.515l-.496.533c-.301.314-.464.402-.954.402H4.3c-1.356 0-2.066.703-2.066 2.047v6.591c0 1.344.71 2.047 2.066 2.047Zm5.694-1.972a3.375 3.375 0 0 1-3.384-3.39A3.376 3.376 0 0 1 9.994 6.87a3.377 3.377 0 0 1 3.39 3.397 3.376 3.376 0 0 1-3.39 3.39Zm3.792-5.7c0-.446.382-.835.84-.835.453 0 .836.389.836.834a.843.843 0 0 1-.835.835.836.836 0 0 1-.841-.835ZM9.994 12.52a2.248 2.248 0 0 0 2.253-2.253 2.25 2.25 0 0 0-2.253-2.26 2.248 2.248 0 0 0-2.248 2.26 2.25 2.25 0 0 0 2.248 2.253Z" fill="#fff"/>
              </svg>
            </button>
          </div>
        </div>
        <div className='absolute bottom-1 inset-x-0'>
          <div className='mx-auto h-1 w-28 bg-white rounded'></div>
        </div>
      </div>
    </div>
  )
}
