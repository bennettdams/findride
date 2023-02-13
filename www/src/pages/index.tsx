import { LogoFindRide } from '@/components/LogoFindRide'

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="grid text-dtertiary bg-gradient-to-br from-dprimary to-dsecondary h-full text-center place-items-center">
        <h2 className="text-7xl">
          <LogoFindRide />
        </h2>
        <div className="bg-dtertiary mx-10 shadow-md p-10 rounded-lg">
          <h2 className="text-4xl text-dsecondary">
            Hier entsteht bald eine Webpräsenz.
          </h2>
        </div>
      </div>
    </div>
  )
}
