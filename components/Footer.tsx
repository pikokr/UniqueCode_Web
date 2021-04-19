import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div>
            <div className='bg-gray-100 h-44 w-full'>
                <div className='flex'>
                    <img src='/UniqueCode.png' height={52} width={52} style={{ marginTop: '5.5vh', marginLeft: '5vh' }} />
                    <h1 className='font-thin text-xl' style={{ marginTop: '6.5vh' }}>UniqueCode</h1>
                </div>
                <div className='text-center font-thin text-xl'>
                    <h1 style={{ marginTop: '-5vh' }}>2021 &copy; UniqueCode All Right Reserved.<br />대표 : 송찬우 | 사업자등록번호 : 799-60-00477</h1>
                </div>
                <div style={{ marginLeft: '170vh', marginTop: '-2.5rem' }}>
                    <a href='https://discord.gg/ARCdUzC' style={{ marginBottom: '10rem' }}>
                        <FontAwesomeIcon  icon={["fab", "discord"]} className='text-5xl' color='#000000' />
                    </a>
                    <a href='https://github.com/UniqueCodeGit' className='ml-5'>
                        <FontAwesomeIcon icon={['fab', 'github']} className='text-5xl' color='#000000' />
                    </a>
                </div>
            </div>
        </div>
    )
}