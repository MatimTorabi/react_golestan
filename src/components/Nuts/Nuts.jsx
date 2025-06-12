const Nuts = () => {
    return ( 
        <div class="mobile:w-[100%] mobile:h-auto mobile:p-5 tablet:w-[100%] tablet:h-[460px] tablet:flex tablet:justify-center desktop:w-[100%] desktop:h-[460px] desktop:flex desktop:justify-center">
        <div class="mobile:[100%] mobile:h-auto mobile:flex flex-col mobile:gap-4 tablet:w-[680px] tablet:h-[330px] tablet:flex tablet:gap-4 tablet:flex-col tablet:justify-center desktop:w-[680px] desktop:h-[330px] desktop:flex desktop:flex-col desktop:justify-center desktop:gap-4">
          <h2 class="text-[#ff0000] mt-4 text-[20px] font-['Yekan'] font-bold">آجيل‌های خوش خنده</h2>
          <p class="text-justify text-[16px] leading-9 font-['Yekan'] font-thin text-[#797979]">
            خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
          </p>
          <p class="text-justify text-[16px] leading-9 font-['Yekan'] font-thin text-[#797979]">
            <span class="text-[#FE0000] not-italic">پسته گلستان</span>
            اما حسابش از
            دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های
            پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان
            از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته
            گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.
          </p>
          <div class="w-[100%] h-[112px] flex flex-row gap-2 flex-wrap mb-4 pb-5 pt-2">
            <button class="cursor-pointer mobile:mt-4 mobile:w-[128px] mobile:h-[40px] mobile:rounded-[8px] mobile:text-[#7C7D7E] mobile:bg-white mobile:border-solid	mobile:border-[#C8C8C8] mobile:border-[1px] mobile:text-[15px] mobile:font-['Yekan'] mobile:hover:bg-[#dc3545] mobile:hover:text-white  transition-all duration-300 ease-linear desktop:mt-4 desktop:w-[128px] desktop:h-[40px] desktop:rounded-[8px] desktop:text-[#7C7D7E] desktop:bg-white desktop:border-solid	desktop:border-[#C8C8C8] desktop:border-[1px] desktop:text-[15px] desktop:font-['Yekan'] desktop:hover:bg-[#dc3545] desktop:hover:text-white">ناتس گلستان</button>
          </div>
        </div>
      </div>
     );
}
 
export default Nuts;