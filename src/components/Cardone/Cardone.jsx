import imgone from "../../../public/images/card-1/img-1.png"
import imgtwo from "../../../public/images/card-1/img-2.png"
import imgtree from "../../../public/images/card-1/img-3.png"
import imgfour from "../../../public/images/card-1/img-4.png"

const Cardone = () => {
    return ( 
        <div className="mobile:hidden tablet:w-[100%] tablet:h-[460px] tablet:flex tablet:justify-center tablet:items-center desktop:w-[100%] desktop:h-[480px] desktop:flex desktop:justify-center desktop:items-center">
            <div className="animate__animated animate__zoomIn tablet:w-[840px] tablet:h-[290px] tablet:flex tablet:flex-row tablet:gap-5 desktop:w-[840px] desktop:h-[290px] desktop:flex desktop:flex-row desktop:gap-5">
            <div className="tablet:w-[205px] tablet:h-[270px] tablet:flex tablet:flex-col tablet:flex-nowrap tablet:justify-around tablet:items-center desktop:w-[205px] desktop:h-[270px] desktop:flex desktop:flex-col desktop:flex-nowrap desktop:justify-around desktop:items-center border-solid border-[#dbdbdb] border-b-[1px]">
                <img src={imgone} alt="" className="" />
                <p className="text-[16px] text-[#7C7D7E] font-['Yekan'] font-thin leading-[21px]">سرمایه انسانی</p>
            </div>
            <div className="tablet:w-[205px] tablet:h-[270px] tablet:flex tablet:flex-col tablet:flex-nowrap tablet:justify-around tablet:items-center desktop:w-[205px] desktop:h-[270px] desktop:flex desktop:flex-col desktop:flex-nowrap desktop:justify-around desktop:items-center border-solid border-[#dbdbdb] border-b-[1px]">
                <img src={imgtwo} alt="" className="" />
                <p className="text-[16px] text-[#7C7D7E] font-['Yekan'] font-thin leading-[21px]">مراكز فروش</p>
            </div>
            <div className="tablet:w-[205px] tablet:h-[270px] tablet:flex tablet:flex-col tablet:flex-nowrap tablet:justify-around tablet:items-center desktop:w-[205px] desktop:h-[270px] desktop:flex desktop:flex-col desktop:flex-nowrap desktop:justify-around desktop:items-center border-solid border-[#dbdbdb] border-b-[1px]">
                <img src={imgtree} alt="" className="" />
                <p className="text-[16px] text-[#7C7D7E] font-['Yekan'] font-thin leading-[21px]">محصولات گلستان</p>
            </div>
            <div className="tablet:w-[205px] tablet:h-[270px] tablet:flex tablet:flex-col tablet:flex-nowrap tablet:justify-around tablet:items-center desktop:w-[205px] desktop:h-[270px] desktop:flex desktop:flex-col desktop:flex-nowrap desktop:justify-around desktop:items-center border-solid border-[#dbdbdb] border-b-[1px]">
                <img src={imgfour} alt="" className="" />
                <p className="text-[16px] text-[#7C7D7E] font-['Yekan'] font-thin leading-[21px]">مشتریان گلستان</p>
            </div>
            </div>
        </div>
     );
}

export default Cardone;