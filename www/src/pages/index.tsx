import { LogoFindRide } from '@/components/LogoFindRide'

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="text-dtertiary bg-gradient-to-br from-dprimary to-dsecondary h-full text-center grid grid-rows-3">
        <div className="row-span-2 grid place-items-center">
          <h2 className="text-7xl">
            <LogoFindRide />
          </h2>
        </div>

        <div className="row-span-1 grid place-items-center items-start">
          <div className="bg-dtertiary mx-10 shadow-md p-10 rounded-lg hover:bg-red-100">
            <h2 className="text-4xl text-dsecondary">
              Hier entsteht eine Webpräsenz.
            </h2>
          </div>

          <a
            className="underline text-xl hover:text-dprimary"
            href="mailto:hi@findride.de"
          >
            hi@findride.de
          </a>
        </div>
      </div>
    </div>
  )
}
