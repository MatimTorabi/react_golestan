import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
              <header className="z-[10000] bg-img-dark sticky left-0 top-0 w-full mobile:h-[180px] tablet:h-[170px] desktop:h-[100px] ">
                <nav  className="w-full h-full flex mobile:flex-col tablet:flex-col desktop:flex-row">
                <div className="mobile:w-full mobile:h-[130px] tablet:w-full tablet:h-[120px] desktop:w-[26%] desktop:h-full">
                    <div className="mobile:w-[100%] mobile:h-[120px] mobile:bg-img-dark mobile:flex mobile:items-center mobile:justify-center desktop:flex desktop:items-end desktop:w-[266px] desktop:h-[75px]">
                    <a href="#">
                        <img className="desktop:absolute desktop:right-[110px] desktop:top-[50px]" src="./public/images/header/logo-fr.png" alt="" />
                    </a>
                    </div>
                </div>
                <div className="mobile:w-full  mobile:h-[50px] tablet:w-full tablet:h-[50px] desktop:w-[74%] desktop:h-full desktop:flex desktop:items-center pt-3.5">
                    <div className="desktop:w-[1060px] desktop:h-full tablet:w-full tablet:h-full desktop:flex desktop:items-end">
                    <ul className="mobile:hidden tablet:flex tablet:flex-row tablet:justify-center tablet:gap-[30px] desktop:flex desktop:flex-row desktop:gap-0 desktop:justify-start">
                        <li className="desktop:flex desktop:items-center desktop:text-center desktop:w-[117px] desktop:h-[75px] ">
                        <a href="#" className="w-[117px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray] font-['Yekan']">صفحه اصلی</a>
                        </li>
                        <li className="desktop:flex relative group desktop:items-center desktop:w-[128px] desktop:h-[75px]">
                        <div className="desktop:flex desktop:items-center text-center">
                            <a href="#" className="w-[128px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray] font-['Yekan']">شرکت گلستان</a>
                            <div className="mobile:hidden absolute tablet:top-[30px] desktop:top-[50px] tablet:h-[300px] tablet:w-[194px] bg-img-dark tablet:hidden tablet:group-hover:block">
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">معرفی شرکت</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">تاریخچه گلستان</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">اخبار و اطلاعیه ها</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">مسئولیت های اجتماعی</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">سازمان فروش</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">سازمان توزیع</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">برندها</a>
                            </div>
                        </div>
                        </li>
                        <li className="desktop:flex relative group desktop:items-center desktop:w-[103px] desktop:h-[75px]">
                        <div className="desktop:flex desktop:items-center text-center">
                            <a href="#" className="font-['Yekan'] w-[103px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">محصولات</a>
                            <div className="mobile:hidden absolute tablet:top-[30px] desktop:top-[50px] tablet:h-[470px] tablet:w-[194px] bg-img-dark tablet:hidden tablet:group-hover:block">
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">چای</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">ناتس</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">ادویه و چاشنی</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">برنج</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">زعفران و زرشک</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">حبوبات و غلات</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">عصاره‌های گیاهی</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">قند و شکر</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">هاتی نودل</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">سایر محصولات</a>
                            <a href="#" className="font-['Yekan'] tablet:flex tablet:pr-[35px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">گل کیس</a>
                            </div>
                        </div>
                        </li>
                        <li className="desktop:flex relative group desktop:items-center desktop:w-[77px] desktop:h-[75px]">
                        <div className="desktop:flex desktop:items-center text-center">
                            <a href="#" className="font-['Yekan'] w-[77px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">وبلاگ</a>
                            <div className="mobile:hidden absolute tablet:top-[30px] desktop:top-[50px] tablet:h-[46px] tablet:w-[194px] bg-img-dark tablet:hidden tablet:group-hover:block">
                            <a href="#" className="tablet:flex pr-[13px] tablet:pt-[13px] text-[#aeb0b4] desktop:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear font-['Yekan']">مجله گلستان</a>
                            </div>
                        </div>
                        </li>
                        <li className="desktop:flex relative group desktop:items-center text-center desktop:w-[103px] desktop:h-[75px]">
                        <a href="#" className="font-['Yekan'] w-[103px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">قرعه کشی</a>
                        </li>
                        <li className="desktop:flex relative group desktop:items-center text-center desktop:w-[93px] desktop:h-[75px]">
                        <a href="#" className="font-['Yekan'] w-[93px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">استخدام</a>
                        </li>
                        <li className="desktop:flex relative group desktop:items-center desktop:w-[106px] desktop:h-[75px]">
                        <div className="desktop:flex desktop:items-center text-center">
                            <a href="#" className="font-['Yekan'] w-[106px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">تماس با ما</a>
                            <div className="mobile:hidden absolute tablet:top-[30px] desktop:top-[50px] tablet:h-[138px] tablet:w-[194px] bg-img-dark tablet:hidden tablet:group-hover:block">
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">دفتر مرکزی</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">صدای مصرف کنندگان</a>
                            <a href="#" className="font-['Yekan'] tablet:flex pr-[13px] tablet:pt-[20px] text-[#aeb0b4] tablet:text-start leading-[20px] no-underline text-[16px] hover:text-white transition-all duration-300 ease-linear">ارتباط با مشترکین</a>
                            </div>
                        </div>
                        </li>
                        <li className="desktop:flex relative group desktop:items-center text-center desktop:w-[62px] desktop:h-[75px]">
                        <a href="#" className="font-['Yekan'] w-[62px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear">EN</a>
                        </li>
                    </ul>
                    </div>  
                </div>
                </nav>
                <div className="flex tablet:hidden items-center  absolute top-[145px]">
                <button onClick={toggleMenu} id="menu-toggle" className="desktop:hidden mobile:w-[100%] mobile:h-[20px] mobile:flex mobile:items-center mobile:pr-[25px] focus:outline-none">
                    <div className="mobile:w-[30px] mobile:h-[30px] mobile:flex mobile:justify-center mobile:items-center mobile:flex-col mobile:gap-[4px] mobile:cursor-pointer">
                    <div className="mobile:w-[30px] mobile:h-[4px] mobile:bg-[#AFB2B4] rounded-[5px]"></div>
                    <div className="mobile:w-[30px] mobile:h-[4px] mobile:bg-[#AFB2B4] rounded-[5px]"></div>
                    <div className="mobile:w-[30px] mobile:h-[4px] mobile:bg-[#AFB2B4] rounded-[5px]"></div>
                    </div>
                </button>
                </div>
                <div id="mobile-menu"   className={`tablet:hidden bg-img-dark ${isMenuOpen ? '' : 'hidden'}`}>
                <div className=" mobile:pr-[25px] box-border space-y-1 flex flex-col gap-2.5">
                    <a href="#" className="block w-[117px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray] font-['Yekan']">صفحه اصلی</a>
                    <a href="#" className="block w-[128px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray] font-['Yekan']">شرکت گلستان</a>
                    <a href="#" className="block font-['Yekan'] w-[103px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">محصولات</a>
                    <a href="#" className="block font-['Yekan'] w-[77px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">وبلاگ</a>
                    <a href="#" className="block font-['Yekan'] w-[103px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">قرعه کشی</a>
                    <a href="#" className="block font-['Yekan'] w-[93px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">استخدام</a>
                    <a href="#" className="block font-['Yekan'] w-[106px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear desktop:border-solid desktop:border-l desktop:border-l-[gray]">تماس با ما</a>
                    <a href="#" className="block font-['Yekan'] w-[62px] h-[30px] text-[#aeb0b4] text-[16px] hover:text-white transition-all duration-300 ease-linear">EN</a>
                </div>
                
                </div>
            </header>
    )

}
 
export default Header;