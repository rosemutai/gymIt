import Link from 'next/link'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

import { Transition } from '@headlessui/react'

// interface NavBarProps extends React.ComponentProps<"div"> {
//     show: Boolean
// }

type NavBarProps = {
    show: Boolean,
    isShowing: Boolean,
    children: React.ReactNode;
}

const Navbar = () => {

    const [isShowing, setIsShowing] = useState(false)
  return (
    <div className='w-full md:px-24 md:pt-12 md:flex md:justify-between overflowhidden '>
        <div className='logo-section flex justify-between'>
            <div className="logo m-2 md:m-0 text-orangish font-roboto font-bold tracking-wider">gym
                <span className='font-comforter-brush text-xl'>I</span>t
            </div>

            {isShowing ?

            (<FontAwesomeIcon
                icon={faTimes}
                className="w-7 h-7 m-2 md:hidden text-orangish cursor-pointer"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
            />)
            :(
                <FontAwesomeIcon
                    icon={faBars}
                    className="w-7 h-7 m-2 md:hidden text-orangish cursor-pointer"
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                />
            )
            
        
            }
        </div>
        <div className='links-section hidden md:flex gap-5 flex-col md:flex-row justify-between '>
            <Link href="/"><a className='menu-link text-slate-100 border-0
                font-roboto  hover:border-b-2 hover:border-b-orangish hover:'>Home</a>
            </Link> 
            <Link href="/"><a className='menu-link text-slate-100
                font-roboto hover:border-b-2 hover:border-t-0
                    hover:border-x-0 hover:border-b-orangish hover:transition-all'>About</a>
            </Link>
            <Link href="/"><a className='menu-link text-slate-100
             font-roboto hover:border-b-2 hover:border-t-0
                    hover:border-x-0 hover:border-b-orangish hover:transition-all'>Services</a>
            </Link>
            <Link href="/"><a className='menu-link text-slate-100
                font-roboto hover:border-b-2 hover:border-t-0
                    hover:border-x-0 hover:border-b-orangish hover:transition-all'>Book</a>
            </Link>
            <Link href="/"><a className='menu-link text-slate-100 font-roboto hover:border-b-2 hover:border-t-0
                    hover:border-x-0 hover:border-b-orangish hover:transition-all'>Contact</a>
            </Link>
           
        </div>

        <Transition 
            show={isShowing}
            enter="transition-opacity duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className='md:hidden links-section flex flex-col md:flex-row justify-between items-center w-full h-44 
                relative bg-orangish'>
                    
                
                <Link href="/"><a className='menu-link  z-20
                    text-tail-blue md:mr-3 font-roboto hover:border-b-2 hover:border-t-0
                        hover:border-x-0 hover:border-b-tail-blue
                        hover:transition-opacity hover:opacity-70'>Home</a>
                </Link> 
                <Link href="/"><a className='menu-link  z-20 
                    text-tail-blue md:mr-5 font-roboto  hover:border-b-2 hover:border-t-0
                        hover:border-x-0 hover:border-b-tail-blue
                        hover:transition-opacity hover:opacity-70'>About</a>
                </Link>
                <Link href="/"><a className='menu-link z-20 
                    text-tail-blue md:mr-3 font-roboto  hover:border-b-2 hover:border-t-0
                        hover:border-x-0 hover:border-b-tail-blue
                        hover:transition-opacity hover:opacity-70'>Services</a>
                </Link>
                <Link href="/"><a className='menu-link z-20 
                    text-tail-blue md:mr-3 font-roboto  hover:border-b-2 hover:border-t-0
                        hover:border-x-0 hover:border-b-tail-blue
                        hover:transition-opacity hover:opacity-70'>Book</a>
                </Link>
                <Link href="/"><a className='menu-link z-20 
                    text-tail-blue  font-roboto  hover:border-b-2 hover:border-t-0
                        hover:border-x-0 hover:border-b-tail-blue
                        hover:transition-opacity hover:opacity-70'>Contact</a>
                </Link>
            
            </div>
        </Transition>
    </div>
  )
}

export default Navbar

/* 
function tostring(num: number) : string{
    return String(num)
}

*/