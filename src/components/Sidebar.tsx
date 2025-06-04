import dribble from '../assets/Dribble.svg'
import githubLogo from '../assets/Github.svg'

export default function Sidebar() {
  return (
    <div className='fixed top-0 left-7 flex flex-col justify-center gap-0.5'>
        <div className='ml-3.5 w-0.5 h-[150px] border-1 bg-[#ABB2BF] border-red-200'></div>
       <button> <img src={githubLogo}/></button>
       <button><img src={dribble}/></button>
    </div>
        
  )
}
