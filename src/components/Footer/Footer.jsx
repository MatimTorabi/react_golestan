import imgone from '../../../footer/img-13.png'
import imgtwo from '../../../footer/img-14.png'
import imgtree from '../../../footer/img-15.png'
import imgfor from '../../../footer/img-16.png'


const Footer = () => {
    return ( 
      <section class="flex flex-col mobile:w-[100%] mobile:h-[580px] tablet:w-[100%] tablet:h-[580px] desktop:w-[100%] desktop:h-[580px] ">
        <div class="bg-[#eeefef] flex flex-row justify-center items-center mobile:w-[100%] mobile:h-[95px] tablet:w-[100%] tablet:h-[95px] desktop:w-[100%] desktop:h-[95px]">
          <a href="#" class="f w-[55px] h-[55px] transition-all duration-300 ease-linear"></a>
          <a href="#" class="l w-[55px] h-[55px] transition-all duration-300 ease-linear"></a>
          <a href="#" class="i w-[55px] h-[55px] transition-all duration-300 ease-linear"></a>
          <a href="#" class="t w-[55px] h-[55px] transition-all duration-300 ease-linear"></a>
          <a href="#" class="a w-[55px] h-[55px] transition-all duration-300 ease-linear"></a>
          <a href="#" class="g w-[55px] h-[55px] transition-all duration-300 ease-linear"></a>
        </div>
        <div class="bg-[#ed1c24] w-[100%] h-[25px]"></div>
        <div class="bg-img-dark mobile:w-[100%] mobile:h-auto mobile:flex mobile:justify-center mobile:item-center tablet:w-[100%] tablet:h-[345px] tablet:flex tablet:justify-center tablet:item-center desktop:w-[100%] desktop:h-[345px] desktop:flex">
          <div class="mobile:w-[100%] mobile:h-auto mobile:mx-5 mobile:flex mobile:flex-col tablet:w-[700px] tablet:h-[345px] tablet:flex tablet:flex-row tablet:gap-5 desktop:w-[700px] desktop:h-[345px] desktop:flex desktop:flex-row desktop:gap-5">
            <div class="mobile:w-[100%] w-[170px] h-[345px] flex flex-col justify-between items-center">
              <div class="">
                <img src={imgone} alt="" />
              </div>
              <div class="w-[100%] h-[50px] border-y-solid border-y-[1px] border-y-[#eeefef] flex justify-center items-center text-white text-[16px] font-['Yekan'] font-thin">چای گلستان</div>
              <div class="w-[150px] h-[140px] flex flex-col mobile:text-center tablet:text-start desktop:text-start">
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">چای ممتاز هندوستان​</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">چای ممتاز ارل گری​</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">چای سيلان عطری​</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">چای ممتاز سيلان​</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">چای صبحانه گلستان​</a>
              </div>
            </div>
            <div class="mobile:w-[100%] w-[170px] h-[345px] flex flex-col justify-between items-center">
              <div class="">
                <img src={imgtwo} alt="" />
              </div>
              <div class="w-[100%] h-[50px] border-y-solid border-y-[1px] border-y-[#eeefef] flex justify-center items-center text-white text-[16px] font-['Yekan'] font-thin">تی بگ گلستان</div>
              <div class="w-[150px] h-[140px] flex flex-col mobile:text-center tablet:text-start desktop:text-start">
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">تی بگ بلک لاين</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">تی بگ ارل گری</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">دمنوش نعناع</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">دمنوش بابونه</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">منوش چای سبز</a>
              </div>
            </div>
            <div class="mobile:w-[100%] w-[170px] h-[345px] flex flex-col justify-between items-center">
              <div class="">
                <img src={imgtree} alt="" />
              </div>
              <div class="w-[100%] h-[50px] border-y-solid border-y-[1px] border-y-[#eeefef] flex justify-center items-center text-white text-[16px] font-['Yekan'] font-thin">ادويه گلستان</div>
              <div class="w-[150px] h-[140px] flex flex-col mobile:text-center tablet:text-start desktop:text-start">
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">زعفران ممتاز خراسان</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">ادویه کاری</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">ادویه ماست و خیار</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">فلفل سياه خالص</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">زردچوبه ممتاز</a>
              </div>
            </div>
            <div class="mobile:w-[100%] w-[170px] h-[345px] flex flex-col justify-between items-center">
              <div class="">
                <img src={imgfor} alt="" />
              </div>
              <div class="w-[100%] h-[50px] border-y-solid border-y-[1px] border-y-[#eeefef] flex justify-center items-center text-white text-[16px] font-['Yekan'] font-thin">حبوبات گلستان</div>
              <div class="w-[150px] h-[140px] flex flex-col mobile:text-center tablet:text-start desktop:text-start">
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">لوبيا قرمز ممتاز</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">لوبيا چيتی گلستان</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">عدس كانادايی</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">نخود زودپز كرمانشاه</a>
                <a href="#" class="text-[#BCBEC0] text-[13px] font-['Yekan'] font-thin leading-7 hover:text-white transition-all duration-300 ease-linear">لوبيا سفيد گلستان</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-img-dark mobile:w-[100%] mobile:h-[125px] tablet:w-[100%] tablet:h-[125px] desktop:w-[100%] desktop:h-[125px] flex flex-col justify-center items-center gap-2">
          <span class="text-[#9f9f9f] text-[15px] font-normal font-['Yekan'] leading-[15px]">All Right Reserved Golestan Company 2022-2025</span>
          <span class="text-[#7b7b7b] text-[14px] font-normal font-['Yekan'] leading-[14px]">Designed By: AMIN Khodajoo</span>
        </div>
      </section>
    );
}
 
export default Footer;