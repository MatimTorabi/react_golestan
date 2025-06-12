import img from "../../../public/images/lottery/img-1.png"

const Lottory = () => {
    return ( 
            <div id="goToTop" className="mobile:w-[100%] mobile:h-[670px] mobile:bg-[#E8E8E8] mobile:flex mobile:flex-col mobile:items-center  tablet:w-[100%] tablet:h-[430px] tablet:bg-[#E8E8E8] tablet:flex tablet:flex-row tablet:justify-center desktop:w-[100%] desktop:h-[460px] desktop:bg-[#E8E8E8]  desktop:flex desktop:flex-row desktop:justify-center">
                <div className="mobile:w-[100%] mobile:h-[670px] tablet:w-[100%] tablet:h-[100%] tablet:flex desktop:w-[1000px] desktop:h-[100%] desktop:flex">
                <div className="mobile:w-[100%] mobile:h-[50%] mobile:pr-10 mobile:pt-7 mobile:box-border tablet:w-[50%] tablet:h-[100%] tablet:pr-10 tablet:box-border desktop:w-[500px] desktop:h-[100%] desktop:flex desktop:items-center desktop:justify-end">
                    <div className="mobile:w-[100%] mobile:h-[310px] mobile:flex mobile:flex-col mobile:gap-3 tablet:w-[320px] tablet:h-[100%] tablet:flex tablet:flex-col tablet:gap-3 desktop:w-[455px] desktop:h-[300px] desktop:flex desktop:flex-col desktop:gap-3">
                    <h2 className="font-['Yekan'] font-light	text-[30px] text-[#FF0000]">قرعه‌کشی مصرف‌کنندگان گلستان</h2>
                    <h2 className="font-['Yekan'] font-light	text-[20px] text-[#58595B]">قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان  </h2>
                    <p className="leading-[33px] font-['Yekan'] font-thin	text-[16px] text-[#898989] animate__animated animate__fadeInDownBig ">هر یک از مصرف‌کنندگان محصولات چای  گلستان می‌توانند با ارسال کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای سال 1403شرکت کنند. 
                        نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
                    </p>
                    <a href="#" >
                        <button className="w-[120px] cursor-pointer h-[40px] rounded-[8px] text-[#7C7D7E] bg-white border-solid	border-[#C8C8C8] border-[1px] text-[14px] mobile:font-['Yekan'] hover:bg-[#FF0000] hover:text-white transition-all duration-300 ease-linear">اطلاعات بیشتر</button>
                    </a>
                    </div>
                </div>
                <div className="mobile:w-[100%] mobile:h-[50%] tablet:w-[50%] tablet:h-[100%] desktop:w-[500px] desktop:h-[100%] desktop:flex desktop:items-center desktop:justify-end">
                    <div className="mobile:w-[100%] mobile:h-[100%] mobile:flex mobile:items-center tablet:w-[360px] tablet:h-[100%] tablet:flex tablet:items-center desktop:w-[360px] desktop:h-[460px]bg-slate-100">
                        <img src={img} className="mobile:m-[85px] animate__animated animate__fadeInDownBig" alt="" />
                    </div>
                </div>
                </div>
            </div>
    )
}
 
export default Lottory;
