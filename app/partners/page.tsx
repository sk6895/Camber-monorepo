import React from 'react'

import AltairImage from "../../public/partners/Altair.png"
import AnsysImage from "../../public/partners/Ansys.png"
import AsapHardwareImage from "../../public/partners/ASAP Hardware.png"
import AuroraBearingsImage from "../../public/partners/Aurora Bearings.png"
import CalspanImage from "../../public/partners/Calspan.png"
import BiscoUltimateImage from "../../public/partners/Bisco Ultimate.png"
import EasterOffshoreImage from "../../public/partners/Eastern Offshore.png"
import ElectronicsDevicesImage from "../../public/partners/Electronics Devices.png"
import ExelusImage from "../../public/partners/Exelus 3D.png"
import GammaTechnologiesImage from "../../public/partners/Gamma Technologies.png"
import HenkelImage from "../../public/partners/Henkel.png"
import HonicelImage from "../../public/partners/Honicel.png"
import HpImage from "../../public/partners/HP.png"
import IgusImage from "../../public/partners/Igus.png"
import IpgAutomotiveImage from "../../public/partners/IPG Automotive.png"
import JcbImage from "../../public/partners/JCB.png"
import KnightWrapsImage from "../../public/partners/Knight Wraps.png"
import KrCompositesImage from "../../public/partners/KR Composites.png"
import LotusImage from "../../public/partners/Lotus.png"
import MathworksImage from "../../public/partners/Mathworks.png"
import MotulImage from "../../public/partners/Motul.png"
import MyPitCrewImage from "../../public/partners/MyPitCrew.png"
import OceanSparkleImage from "../../public/partners/Ocean Sparkle.png"
import PragatiImage from "../../public/partners/Pragati.png"
import RicardoImage from "../../public/partners/Ricardo.png"
import SadhavImage from "../../public/partners/Sadhav.png"
import SiddhgiriTubesImage from "../../public/partners/Siddhgiri.png"
import SigmaWeldImage from "../../public/partners/Sigma Weld.png"
import SolidworksImage from "../../public/partners/Solidworks.png"
import SrmistImage from "../../public/partners/SRM IST.png"
import SudarshanImage from "../../public/partners/Sudarshan.png"
import ZircotecImage from "../../public/partners/Zircotec.png"

import Image from 'next/image'

const Partners = [
    {
        name: 'Altair',
        logo: AltairImage,
        link: 'https://altair.com/'
    },
    {
        name: 'Ansys',
        logo: AnsysImage,
        link: 'https://www.ansys.com/en-in'
    },
    {
        name: 'ASAP Hardware',
        logo: AsapHardwareImage,
        link: 'https://www.asaphardwaresolutions.com/'
    },
    {
        name: 'Aurora Bearings',
        logo: AuroraBearingsImage,
        link: 'http://www.aurorabearing.com/index.html'
    },
    {
        name: 'Calspan',
        logo: CalspanImage,
        link: 'https://www.calspan.com/'
    },
    {
        name: 'Bisco Ultimate',
        logo: BiscoUltimateImage,
        link: 'http://biscoultimate.com/'
    },
    {
        name: 'Eastern Offshore',
        logo: EasterOffshoreImage,
        link: 'http://www.easternoffshore.in/'
    },
    {
        name: 'Electronics Devices',
        logo: ElectronicsDevicesImage,
        link: 'https://www.electronicsdevices.com/'
    },
    {
        name: 'Exelus 3D',
        logo: ExelusImage,
        link: 'https://www.linkedin.com/company/exelus-3d/'
    },
    {
        name: 'Gamma Technologies',
        logo: GammaTechnologiesImage,
        link: 'https://www.gtisoft.com/'
    },
    {
        name: 'Henkel',
        logo: HenkelImage,
        link: 'https://www.henkel.in/'
    },
    {
        name: 'Honicel',
        logo: HonicelImage,
        link: 'http://www.honicel.com/'
    },
    {
        name: 'HP',
        logo: HpImage,
        link: 'https://www.hindustanpetroleum.com/'
    },
    {
        name: 'Igus',
        logo: IgusImage,
        link: 'https://www.igus.in/'
    },
    {
        name: 'IPG Automotive',
        logo: IpgAutomotiveImage,
        link: 'https://ipg-automotive.com/'
    },
    {
        name: 'JCB',
        logo: JcbImage,
        link: 'https://www.jcb.com/en-in'
    },
    {
        name: 'Knight Wraps',
        logo: KnightWrapsImage,
        link: 'https://www.knightwraps.com/'
    },
    {
        name: 'KR Composites',
        logo: KrCompositesImage,
        link: 'https://www.krcomposites.com/'
    },
    {
        name: 'Lotus',
        logo: LotusImage,
        link: 'https://www.lotuscars.com/engineering-software/#:~:text=A%20market%20leading%20application%20for,changes%20to%20proposed%20geometry%20and'
    },
    {
        name: 'Mathworks',
        logo: MathworksImage,
        link: 'https://www.mathworks.com/'
    },
    {
        name: 'Motul',
        logo: MotulImage,
        link: 'https://www.motul.com/'
    },
    {
        name: 'My Pit Crew',
        logo: MyPitCrewImage,
        link: 'https://mypitcrew.in/'
    },
    {
        name: 'Ocean Sparkle',
        logo: OceanSparkleImage,
        link: 'http://www.oceansparkle.com/'
    },
    {
        name: 'Pragati',
        logo: PragatiImage,
        link: 'https://www.pragatimarine.com/'
    },
    {
        name: 'Ricardo',
        logo: RicardoImage,
        link: 'https://ricardo.com/'
    },
    {
        name: 'Sadhav',
        logo: SadhavImage,
        link: 'https://www.sadhav.com/'
    },
    {
        name: 'Siddhgiri Tubes',
        logo: SiddhgiriTubesImage,
        link: 'https://camber-racing.netlify.app/partners.html'
    },
    {
        name: 'Sigma Weld',
        logo: SigmaWeldImage,
        link: 'http://www.sigmaweld.com/'
    },
    {
        name: 'Solidworks',
        logo: SolidworksImage,
        link: 'https://www.solidworks.com/'
    },
    {
        name: 'SRM IST',
        logo: SrmistImage,
        link: 'https://www.srmist.edu.in/'
    },
    {
        name: 'Sudarshan Auto',
        logo: SudarshanImage,
        link: 'http://www.sudarshanauto.com/'
    },
    {
        name: 'Zircotec',
        logo: ZircotecImage,
        link: 'https://www.zircotec.com/'
    },
]

const page = () => {
  return (
    <main>

        <h1 className='text-8xl text-center my-16 mb-24 font-bold'>Our <span className='text-red-500'>Partners</span></h1>

        <div className='flex items-center justify-center pb-8'>
            <div className="flex flex-wrap justify-evenly gap-16 gap-y-20 w-[75%]">
                {Partners.map((partner, index) => (
                    <a key={index} href={partner.link} target="_blank" className="flex justify-center items-center transition-all duration-150 ease-in-out hover:scale-[1.05]">
                        <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={220}
                            height={220}
                            className="object-contain"
                        />
                    </a>
                ))}
            </div>
        </div>

    </main>
  )
}

export default page