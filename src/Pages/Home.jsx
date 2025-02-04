import React from "react";
import comp from "../assets/compy.png"

function Home() {
  return (
    <div className="">
      <div className="bg-gradient-to-r pt-30 px-5 text-white  from-[#262743] to-[#121212]">
        <div className="container flex justify-between pb-20 pt-10 flex-wrap items-center ">
          <div className="w-[50%]">
            <h2 className="font-bold text-3xl mb-5">
              Сизнинг бизнесингизни ривожлантириш учун мукаммал 'IT' ечимлар!
            </h2>
            <p className=" mb-4">
              Лойиҳангизни 10 йилдан ортиқ тажрибага эга мутахассисларга ишониб
              топширинг ва қисқа вақт ичида юқори муваффақиятларга эришинг.
            </p>
            <a href="#" className=" text-xl  px-4 py-1 bg-[#6C2DBA] border-2 border-[#6C2DBA] hover:bg-transparent rounded-md">
              Алоқа
            </a>
          </div>
          <img  src={comp} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}

export default Home;
