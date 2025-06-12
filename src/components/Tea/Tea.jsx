import img from '../../../public/images/products/img-2.jpg';


const Tea = () => {
    return ( 
        <section className="bg-slate-400 mobile:w-[100%] mobile:h-[300px] mobile:relative tablet:w-[100%] tablet:h-[500px] tablet:relative desktop:w-[100%] desktop:h-[500px] desktop:relative">
        <div className="">
            <img src={img} alt="" className="mobile:w-[100%] mobile:h-[280px] mobile:object-cover tablet:w-[100%] tablet:h-[480px] tablet:object-cover desktop:w-[100%] desktop:h-[480px] desktop:object-cover" />
        </div>
        <div className="bg-[#E9D69F] mobile:hidden tablet:w-[100%] tablet:h-[20px] tablet:block desktop:w-[100%] desktop:h-[20px] desktop:block"></div>
        <div className="bg-[#ed1c24] z-50 mobile:w-[100%] mobile:h-[93px] mobile:absolute tablet:right-[15%] mobile:bottom-0 tablet:w-[290px] tablet:h-[93px] tablet:absolute tablet:bottom-0 desktop:w-[290px] desktop:h-[93px] desktop:absolute desktop:right-[15%] desktop:bottom-0">
          <div className="pt-[5px] pr-5 text-white text-[29px] font-['Yekan']">چای گلستان</div>
          <div className="pt-[5px] pr-5 text-white text-[16px] font-['Yekan'] font-normal	">معرفی محصول</div>
        </div>
      </section>
     );
}
 
export default Tea;