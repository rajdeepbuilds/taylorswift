import Image from 'next/image';

const EventBox = ({events}) => {
  return (
    <div className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
        <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4 ">
            { }
            <div className='hidden xl:flex w-[400px]'>
                <Image src={'/assets/events/singer.png'} 
                width={358}
                height={489}
                priority
                quality={100}
                alt=''/>
            </div>
            { }
            <div className='flex-1 bg-purple-400/10 h-[500px] flex flex-col'>
                {events.map(event=>{
                    return
                })}
            </div>
        </div>
    </div>
  )
}

export default EventBox