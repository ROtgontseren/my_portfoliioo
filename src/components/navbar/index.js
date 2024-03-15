import React from 'react'
import Link from "next/link";

const navbar = () => {
  return (
    <div class="p-12 flex justify-between">
      <div className='w-12 h-12 z-10 rounded-3xl'>
        <img src='logo.png' className='w-[100%] h-[100%]'/>
      </div>
      <nav class="flex justify-start gap-10 flex-wrap z-10 px-12">
        <div className="text-2xl font-bold text-white">
          <Link className="hover:text-violet-700" href={"/"}>
            Нүүр хуудас
          </Link>
        </div>
        <div className="text-2xl font-bold text-white">
          <Link className="hover:text-violet-700" href={"/about"}>
            Хийсэн төслүүд
          </Link>
        </div>
        <div className="text-2xl font-bold text-white">
          <Link className="hover:text-violet-700 skew-y-12" href={"/Contact"}>
            Холбогдох
          </Link>
        </div>
        <div className="text-2xl font-bold text-white">
          <Link className="hover:text-violet-700" href={"/works"}>
          Миний тухай
          </Link>
        </div>
        <div className="text-2xl font-bold text-white">
          <Link className="hover:text-violet-700 " href={"/download"}>
            Нэвтрэх
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default navbar;
