import Image from "next/image"

export default function DownloadFeaturesSection() {

  return (
    <section className="bg-gradient flex flex-col items-center justify-start w-full">
      <div
        className="bg-cover bg-no-repeat flex flex-col h-auto sm:h-[549px] items-center justify-center py-80 px-8 sm:p-[110px] sm:px-10 w-full"
        style={{ backgroundImage: "url('images/stroke.svg')" }}
        >
        <div className="flex flex-col items-center justify-center gap-10 w-full sm:w-1/2">
          <h5 className="font-bold text-base text-amber_A400 text-left">Download</h5>
          <h2 className="font-medium leading-[60.00px] md:max-w-full max-w-screen-sm  md:text-[46px] text-5xl text-white text-center sm:text-left">
            Master Your Mind With Edge</h2>
          <div className="flex flex-row items-center justify-center gap-5 sm:gap-2">
            <Image height={104} width={163} src="/images/googleplay.svg" alt="googleplay_One" />
            <Image height={104} width={163} src="/images/appstore.svg" alt="appstore_One" />
          </div>
        </div>
      </div>
    </section>
  )
}
