import Header from "../components/Header";
import Bots from "../components/Bots";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <div className='no-underline text-black'>
            <div className='bg-gray-50'>
                <Header />
                <div className='flex mx-auto p-32 sm:p-60 sm:pl-96 gap-10 sm:ml-40'>
                    <h1 className='font-black text-xs leading-3 sm:text-6xl sm:leading-normal'>당신의 디스코드에<br />유니크한 재미를 더.</h1>
                    <div className='sm:mt-10'>
                        <FontAwesomeIcon  icon={["fab", "discord"]} className='text-9xl' color='#738ADB' />
                    </div>
                </div>
            </div>
        </div>
    )
}