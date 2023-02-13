import Image from 'next/image'
import logo from '../../public/assets/findride-logo.png'

export function LogoFindRide(): JSX.Element {
  return <Image src={logo} alt="FindRide logo" width="500" height="500" />
}
