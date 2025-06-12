
import moduleName from '../../../public/images/company/img-1.jpg';


const Com = () => {
    return ( 
        <section className="bg-[#105153] relative w-[100%] h-[620px]">
            <div className="w-[100%] h-[600px] flex flex-nowrap flex-col justify-center items-center gap-2">
            <h2 className="font-['Yekan'] font-thin text-[18px] leading-[35px] text-[#D5ECE1]">مسئوليت‌های اجتماعی شركت گلستان</h2>
            <div className="bg-[#00d8df] h-[1px] w-[100%]"></div>
            <h2 className="font-['Yekan'] font-normal text-[20px] leading-9 text-[#00d8df]">
                <span className="font-['Num'] font-normal text-[30px] leading-9 text-[#009da2]">Golestan</span>
                Social Responsibility
            </h2>
            <h2 className="font-['Num'] font-thin text-[17px] leading-[17px] text-[#BCBEC0]">Mahdi Hospital</h2>
            </div>
            <div className="bg-[#E9D69F] w-[100%] h-[20px]"></div>
            <div className="flex justify-center">
                <div className="absolute bottom-[-15%]">
                    <img src={moduleName} alt="" className="w-[395px] object-cover" />
                </div>
            </div>
      </section>
     );
}
 
export default Com;