const History = () => {
    return ( 
              <div className="mobile:w-[100%] mobile:h-auto mobile:p-5 tablet:w-[100%] tablet:h-[460px] tablet:flex tablet:justify-center desktop:w-[100%] desktop:h-[460px] desktop:flex desktop:justify-center">
        <div className="mobile:[100%] mobile:h-auto mobile:flex flex-col mobile:gap-3 tablet:w-[680px] tablet:h-[330px] tablet:flex tablet:gap-3 tablet:flex-col tablet:justify-center desktop:w-[680px] desktop:h-[330px] desktop:flex desktop:flex-col desktop:justify-center desktop:gap-3">
          <h2 className="text-[#ff0000] mt-9 text-[20px] font-['Yekan'] font-bold">سابقه‌ای به قدمت یک عمر</h2>
          <p className="text-justify text-[16px] leading-9 font-['Yekan'] font-thin text-[#797979]">
            چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و
            بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین
            نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌
            حس خوب آرامش را به همراه دارد.
          </p>
          <p className="mt-8 text-justify text-[16px] leading-9 font-['Yekan'] font-thin text-[#797979]">
            برای مردمان ایران زمین نام
            <span className="text-[#FE0000] not-italic">گلستان</span>
            با چای پیوند خورده
            است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین
            دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده
            مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به
            یادماندنی آن است.
          
          </p>
          <div className="w-[100%] h-[112px] flex flex-row gap-2 flex-wrap mb-4 pb-5 pt-2">
            <button className="cursor-pointer mobile:mt-4 mobile:w-[137px] mobile:h-[40px] mobile:rounded-[8px] mobile:text-[#7C7D7E] mobile:bg-white mobile:border-solid	mobile:border-[#C8C8C8] mobile:border-[1px] mobile:text-[15px] mobile:font-['Yekan'] mobile:hover:bg-[#dc3545] mobile:hover:text-white  transition-all duration-300 ease-linear desktop:mt-4 desktop:w-[137px] desktop:h-[40px] desktop:rounded-[8px] desktop:text-[#7C7D7E] desktop:bg-white desktop:border-solid	desktop:border-[#C8C8C8] desktop:border-[1px] desktop:text-[15px] desktop:font-['Yekan'] desktop:hover:bg-[#dc3545] desktop:hover:text-white">محصولات چای</button>
          </div>
        </div>
      </div>
     );
}
 
export default History;