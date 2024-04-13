import Image from 'next/image'
import SectionTitle from './SectionTitle'

const FoodsContainer = () => {
  return (
    <div className='h-full w-full flex flex-col gap-5 mt-5 lg:mt-7 xl:mt-10'>
      <div >
        <SectionTitle
          title='best seller'
          subtitle={`Don't wait any longer and discover other related products`}
        />
      </div>
      <div className='best-products h-full w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
    {/* products will come from api */}
    <div className='lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5  eq relative  z-20'>
      <Image
        src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
        alt='hero image'
        priority
        height='720'
        width='1280'
        className='h-full w-full object-fill'
      />

      <div className='best-sell-modal flex justify-center items-center'>
        <p>Lorem ipsum dolor sit</p>
      </div>
    </div>
    <div className='lg:h-[15] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
      <Image
        src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
        alt='hero image'
        priority
        height='720'
        width='1280'
        className='h-full w-full object-fill '
      />
    </div>
    <div className='max-lg:hidden lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
      <Image
        src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
        alt='hero image'
        priority
        height='720'
        width='1280'
        className='h-full w-full object-fill'
      />
    </div>
    <div className='lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
      <Image
        src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
        alt='hero image'
        priority
        height='720'
        width='1280'
        className='h-full w-full object-fill '
      />
    </div>
    <div className='max-lg:hidden lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
      <Image
        src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
        alt='hero image'
        priority
        height='720'
        width='1280'
        className='h-full w-full object-fill'
      />
    </div>
    <div className='lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
      <Image
        src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
        alt='hero image'
        priority
        height='720'
        width='1280'
        className='h-full w-full object-fill '
      />
    </div>
    <div className='max-lg:hidden lg:h-[15rem] xl:h-[18.5rem] h-full w-full border-4 border-blue border-opacity-5 hover:scale-105 eq '>
      <Image
        src='https://t4.ftcdn.net/jpg/04/16/25/41/360_F_416254116_himOdBQepnp9VxudpqPkkEHY8WevDB7k.jpg'
        alt='hero image'
        priority
        height='720'
        width='1280'
        className='h-full w-full object-fill'
      />
    </div>
  </div>
    </div>
  
  )
}

export default FoodsContainer