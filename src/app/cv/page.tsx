import { Separator } from "@/src/components/ui/separator";
import { GithubIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CV() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-4xl mx-auto p-20 space-y-10">
      <div className="flex items-center justify-between w-full">
        <div className="w-2/3 flex flex-col space-y-4">
          <h1 className="font-bold text-xl">Daniel Madeley</h1>
          <div>
            <p className="text-zinc-700">
              Experienced engineer working in tech and construction. Skilled in
              FEA/FEM, automation and full stack web development.
            </p>
            {/* <p className="text-zinc-700">
              Click{" "}
              <Link href="#" className="text-zinc-950">
                here
              </Link>{" "}
              to find out why I believe it is integral to understand both
              industries.
            </p> */}
          </div>

          <div className="space-y-2 flex flex-col">
            <p className="flex items-center space-x-2 text-zinc-700">
              <MapPinIcon size={16} />
              <h3>Current City: Cardiff</h3>
            </p>
            <div className="flex justify-start w-full space-x-4 mt-4">
              <Link href={"https://read.cv/mxdeley"}>
                <Image
                  src={"/readcv.svg"}
                  height={20}
                  width={20}
                  alt="readcv"
                  className="transform transition duration-500 hover:scale-125"
                />
              </Link>
              <Link href={"https://twitter.com/mxdeley"}>
                <Image
                  src={"/xcom.svg"}
                  height={20}
                  width={20}
                  alt="xcom"
                  className="transform transition duration-500 hover:scale-125"
                />
              </Link>
              <Link href={"https://bento.me/mxdeley"}>
                <Image
                  src={"/bento.svg"}
                  height={20}
                  width={20}
                  alt="xcom"
                  className="transform transition duration-500 hover:scale-125"
                />
              </Link>
              <Link href={"https://github.com/mxdeley"}>
                <GithubIcon
                  size={20}
                  className="transform transition duration-500 hover:scale-125 text-[#a8a29e]"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-end">
          <Image
            src={
              "https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
            }
            width={200}
            height={200}
            alt="Logo"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex justify-start w-full text-zinc-700">
        <div>
          <h2 className="text-lg font-bold text-zinc-950">About</h2>
          <p className="text-sm">
            With more than four years of experience as a freelance web
            developer, I&apos;ve honed my skills at my own design studio{" "}
            <Link href="#" className="text-zinc-950 font-bold">
              madeleydesignstudio
            </Link>
            . You can find my preferred tech stack{" "}
            <Link href="./cv/web-stack" className="text-zinc-950 font-bold">
              here
            </Link>
            . Additionally, I hold a BEng in civil engineering and have spent
            two years working as a Structural Engineer. I leverage my
            programming capabilities to automate the design process using Python
            scripts. Feel free to check out my preferred libraries{" "}
            <Link href="#" className="text-zinc-950 font-bold">
              here.
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-start space-x-10 w-full text-zinc-700">
        <div>
          <h2 className="text-md font-bold text-zinc-950">Skills</h2>
          <div className="grid grid-cols-3 gap-x-4">
            <p className="text-sm">• Structural Design & Analysis</p>
            <p className="text-sm">• Material Science</p>
            <p className="text-sm">• FEA/FEM</p>
            <p className="text-sm">• Automation</p>
            <p className="text-sm">• Web Dev</p>
            <p className="text-sm">• AI</p>
            <p className="text-sm">• Design</p>
            <p className="text-sm">• Marketing</p>
          </div>
        </div>
        <div>
          <h2 className="text-md font-bold text-zinc-950">Hobbies</h2>
          <p className="text-sm">• MMA</p>
          <p className="text-sm">• Football</p>
          <p className="text-sm">• Fishing</p>
        </div>
      </div>
      <Separator />
      <div className="flex justify-start w-full">
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Work Experience</h2>
          <div>
            <h3 className="font-bold">Austin Partnership</h3>
            <h4 className="text-zinc-700 text-sm">2022-Current</h4>
            <p className="text-zinc-700 text-sm mt-1">
              I design steel, concrete, masonry, timber and aluminium structures
              to the Eurocodes. I am experienced in Tekla Tedds, Structural
              Designer, Portal Frame Designer, StaTiCa, Fisher Fixperience and
              Hilti. I can write traditional hand calculations and also utilise
              pythons scripting capabilities to automate design calculations.
              FEA/FEM modelling with OpenSeesPy and Gmesh. Parametric modelling
              with Rhino, grasshopper and KiWi3d.
            </p>
          </div>

          <div>
            <h3 className="font-bold">madeleydesignstudio (Freelancing)</h3>
            <h4 className="text-zinc-700 text-sm">2021-Current</h4>
            <p className="text-zinc-700 text-sm mt-1">
              I work on a diverse range of web development projects. My primary
              focus has been leveraging the power of Next.js as a full-stack
              framework. I have also dabbled in marketing, design, and sales.
              This multifaceted experience has allowed me to gain valuable
              insights and offer holistic solutions to my clients.
            </p>
          </div>
          <div className="max-w-2xl flex flex-col justify-end space-y-2 ">
            <div className="ml-2">
              <h5 className="text-sm font-semibold"> - Infinitim</h5>
              <h4 className="text-zinc-700 text-sm">2021-2023</h4>
              <p className="text-zinc-700 text-sm mt-1">
                As a result of my experience with the Fungible Cabin, I was
                inspired to establish my own digital marketing agency. I took
                pleasure in crafting marketing websites (Landing Pages) for
                clients based in Derby. My tenure at Infinitim provided me with
                an opportunity to expand my expertise in various areas such as
                digital marketing, web development, sales, and design.
                Additionally, I gained proficiency in utilizing tools like
                Figma, Midjourney, and various analytical tools.
              </p>
            </div>
            <div className="ml-2">
              <h5 className="text-sm font-semibold">- The Fungible Cabin</h5>
              <h4 className="text-zinc-700 text-sm">2021-2022</h4>
              <p className="text-zinc-700 text-sm mt-1">
                During the NFT boom in 2021, two friends and I co-created
                &apos;The Fungible Cabin&apos;. My role initially involved
                working as a designer with Adobe Illustrator and Photoshop.
                Subsequently, I ventured into solidity development, which
                introduced me to the realm of web development and quickly made
                me realise I had a lot to learn. This experience marked the
                beginning of my journey as a web developer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex justify-start w-full">
        <div>
          <h2 className="text-lg font-bold">Education</h2>
          <div>
            <h3>Leeds Beckett</h3>
            <h4 className="text-zinc-700">2019-2022</h4>
            <p className="text-zinc-700">
              I achieved a 2:1 in civil engineering.
            </p>
            <h5>Courses</h5>
            <p>Material Science</p>
            <p>Structural Analysis (Advanced)</p>
            <p>Thermodynamics</p>
          </div>
          <div>
            <h3>Self-Taught Programmer</h3>
            <h4 className="text-zinc-700">2019-Onwards</h4>
            <h5>Courses</h5>
            <p>Boot.dev</p>
            <p>Papareact</p>
            <p>Codeacademy</p>
          </div>
        </div>
      </div>
    </main>
  );
}
