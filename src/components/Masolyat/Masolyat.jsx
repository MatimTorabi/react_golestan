const Masolyat = () => {
    return ( 
        <div className="mobile:w-[100%] mobile:h-auto mobile:mt-[95px] mobile:p-5 tablet:w-[100%] tablet:h-[600px] tablet:flex tablet:justify-center tablet:items-center tablet:mt-0 desktop:w-[100%] desktop:h-[600px] desktop:flex desktop:justify-center desktop:items-center desktop:mt-0">
        <div className="mobile:[100%] mobile:h-auto mobile:flex flex-col mobile:gap-3 tablet:w-[680px] tablet:h-[330px] tablet:flex tablet:gap-3 tablet:flex-col tablet:justify-center desktop:w-[680px] desktop:h-[330px] desktop:flex desktop:flex-col desktop:justify-center desktop:gap-3">
          <h2 className="text-[#ff0000] mt-4 text-[20px] font-['Yekan'] font-bold">مسئوليت‌های اجتماعی گلستان
          </h2>
          <p className="text-justify text-[16px] leading-9 font-['Yekan'] font-thin text-[#797979]">
            كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. 
            <span className="text-[#FE0000] not-italic">گلستان</span>
            در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.
          </p>
          <div className="w-[100%] h-[112px] flex flex-row gap-2 flex-wrap mb-4 pb-5 pt-2">
            <button className="cursor-pointer mobile:mt-4 mobile:w-[133px] mobile:h-[40px] mobile:rounded-[8px] mobile:text-[#7C7D7E] mobile:bg-white mobile:border-solid	mobile:border-[#C8C8C8] mobile:border-[1px] mobile:text-[15px] mobile:font-['Yekan'] mobile:hover:bg-[#dc3545] mobile:hover:text-white  transition-all duration-300 ease-linear desktop:mt-4 desktop:w-[133px] desktop:h-[40px] desktop:rounded-[8px] desktop:text-[#7C7D7E] desktop:bg-white desktop:border-solid	desktop:border-[#C8C8C8] desktop:border-[1px] desktop:text-[15px] desktop:font-['Yekan'] desktop:hover:bg-[#dc3545] desktop:hover:text-white"> اطلاعات بيشتر</button>
          </div>
        </div>
      </div>
     );
}
 
export default Masolyat;