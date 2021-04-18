import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <div>
            <nav className='fixed w-full no-underline'>
                <div className='flex items-center flex-grow float-left px-0 sm:px-20 sm:p-2'>
                    <img src='/UniqueCode.png' height={80} width={80} className='opacity-100'  alt='UniqueCode'/>
                    <h1 className='font-black sm:text-3xl'>UniqueCode</h1>
                </div>
                <div className='flex float-right font-black p-7 px-5 gap-4 sm:text-3xl sm:px-20 sm:p-8'>
                    <a href='./'>프로젝트</a>
                    <a href='./'>멤버</a>
                    <a href='./'>채용</a>
                </div>
            </nav>
            <div className='flex mx-auto p-32 sm:p-60 sm:pl-96 gap-10 sm:ml-40'>
                <h1 className='font-black sm:text-6xl sm:leading-normal'>당신의 디스코드에<br />유니크한 재미를 더.</h1>
                <div className='sm:mt-10'>
                    <FontAwesomeIcon  icon={["fab", "discord"]} className='text-9xl' color='#738ADB' />
                </div>
            </div>
        </div>
    )
}