
import AboutPage from '@/components/About/AboutPage'
import { NeonGradientCard } from '@/components/ui/NeonCard'
import Particles from '@/components/ui/particles'
import { fetchData } from '@/lib/FetchData'
import React from 'react'

const page = async () => {

  const data = await fetchData("https://6zmy2apr.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22about%22%5D%5B0%5D")

  return (
    <main className="w-full p-2 justify-center items-center flex flex-col">
    <div className=" w-full max-w-[1300px] py-5 flex flex-col justify-center items-center gap-5">
          <NeonGradientCard>
          <AboutPage data={data} />
        </NeonGradientCard>
        <Particles
          className="fixed top-0 opacity-50 !h-full z-0 inset-0"
          quantity={500}
          ease={40}
          refresh
        />
    </div>
 </main>
  )
}

export default page