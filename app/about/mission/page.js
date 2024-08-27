

import Button from "@/app/components/Button";
import img from '@/public/image/profile.jpg.jpg'
import Image from "next/image";

function Mission() {
  return (
    <main className='mt-10 '>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut totam sunt nesciunt consectetur. Placeat nemo, fugiat saepe iure atque eum, aut consequuntur officiis ratione rerum, voluptatum eos aliquam culpa. Eos.

      </div>

      <div className="w-[400px]">
        <Image placeholder="blur" src={img} alt="profile image" />
      </div>

      <Button />
    </main>
  )
}

export default Mission;