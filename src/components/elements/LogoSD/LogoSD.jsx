import logo from '../../../assets/img/icono.png'

export default function LogoSD() {
  return (
    <div className='flex flex-row place-content-center gap-2'>
    <img src={logo} className=' w-8 h-8' />
    <div className='flex flex-row place-items-center gap-1'>
        <h1 className="text-sm font-nourd text-bluesd">
            SINFONÍA
        </h1>
        <h1 className="text-sm font-nourd text-yellowsd">
            DIGITAL
        </h1>
    </div>
</div>
  )
}
