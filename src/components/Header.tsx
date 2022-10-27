import rocketLogo from '../assets/rocket.svg';

export function Header() {
    return (
        <header className='bg-gray7 flex justify-center items-center gap-2 p-12'>
            <img className="h-9" src={rocketLogo} alt="Rocket" />
            <strong className='text-2xl bg-clip-text bg-gradient-to-r text-transparent from-blue to-purpleDark leading-2 font-black'>todo</strong>
        </header>
    )
}