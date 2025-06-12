
import img_1 from '../../../public/images/cared/img-1.jpg'
import img_2 from '../../../public/images/cared/img-2.jpg'
import img_3 from '../../../public/images/cared/img-3.jpg'


const Cardtwo = () => {
    return ( 
      <>
              <section className="mobile:w-[100%] mobile:h-auto mobile:p-12 mobile:box-border mobile:bg-[#cde4b0] desktop:w-[100%] desktop:h-[700px] desktop:bg-[#cde4b0]">
        <div className="mobile:gap-6 mobile:flex mobile:flex-col mobile:items-center tablet:flex tablet:flex-row tablet:justify-center tablet:gap-[15px] desktop:flex desktop:flex-row desktop:justify-center desktop:gap-[15px]">
          <div className="bg-white mobile:hidden mobile:w-[315px] mobile:h-[600px] tablet:hidden desktop:w-[315px] desktop:h-[600px] desktop:block border-solid border-[1px] border-gray-300 shadow-2xl">
            <div className="mobile:w-[100%] mobile:h-[310px] desktop:w-[100%] desktop:h-[310px]">
                <img src={img_1} alt="" className="" />
            </div>
            <div className="mobile:w-[275px] mobile:h-[250px] mobile:flex mobile:flex-col mobile:gap-4 mobile:mx-auto mobile:box-border mobile:mt-1 desktop:w-[275px] desktop:h-[250px] desktop:mx-auto desktop:box-border desktop:mt-1">
              <a href="#" className="mobile:text-[20px] mobile:font-['Yekan'] mobile:font-extralight	mobile:leading-[28px] mobile:text-[#FF0000]">ماکارونی با سبزیجات</a>
              <p className="mobile:h-[120px] mobile:font-['Yekan'] mobile:text-[#7C7F93] mobile:text-justify mobile:leading-[30px] mobile:font-thin mobile:text-[14px]">
                ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
                می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
                روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
              </p>
              <button className="cursor-pointer mobile:mt-4 mobile:w-[120px] mobile:h-[40px] mobile:rounded-[8px] mobile:text-[#7C7D7E] mobile:bg-white mobile:border-solid	mobile:border-[#C8C8C8] mobile:border-[1px] mobile:text-[14px] mobile:font-['Yekan'] mobile:hover:bg-[#dc3545] mobile:hover:text-white  transition-all duration-300 ease-linear desktop:mt-4 desktop:w-[120px] desktop:h-[40px] desktop:rounded-[8px] desktop:text-[#7C7D7E] desktop:bg-white desktop:border-solid	desktop:border-[#C8C8C8] desktop:border-[1px] desktop:text-[14px] desktop:font-['Yekan'] desktop:hover:bg-[#dc3545] desktop:hover:text-white">ادامه مطلب</button>
            </div>
          </div>
          <div className="bg-white mobile:w-[315px] mobile:h-[600px] desktop:w-[315px] desktop:h-[600px] border-solid border-[1px] border-gray-300 shadow-2xl">
            <div className="mobile:w-[100%] mobile:h-[310px] desktop:w-[100%] desktop:h-[310px]">
                <img src={img_2} alt="" className="" />
            </div>
            <div className="mobile:w-[275px] mobile:h-[250px] mobile:flex mobile:flex-col mobile:gap-4 mobile:mx-auto mobile:box-border mobile:mt-1 desktop:w-[275px] desktop:h-[250px] desktop:mx-auto desktop:box-border desktop:mt-1">
              <a href="#" className="mobile:text-[20px] mobile:font-['Yekan'] mobile:font-extralight	mobile:leading-[28px] mobile:text-[#FF0000]">سوپ مکزیکی</a>
              <p className="mobile:h-[120px] mobile:font-['Yekan'] mobile:text-[#7C7F93] mobile:text-justify mobile:leading-[30px] mobile:font-thin mobile:text-[14px]">
                گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
                آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
                بیرون آورده…
              
              </p>
              <button className="cursor-pointer mobile:mt-4 mobile:w-[120px] mobile:h-[40px] mobile:rounded-[8px] mobile:text-[#7C7D7E] mobile:bg-white mobile:border-solid	mobile:border-[#C8C8C8] mobile:border-[1px] mobile:text-[14px] mobile:font-['Yekan'] mobile:hover:bg-[#dc3545] mobile:hover:text-white  transition-all duration-300 ease-linear desktop:mt-4 desktop:w-[120px] desktop:h-[40px] desktop:rounded-[8px] desktop:text-[#7C7D7E] desktop:bg-white desktop:border-solid	desktop:border-[#C8C8C8] desktop:border-[1px] desktop:text-[14px] desktop:font-['Yekan'] desktop:hover:bg-[#dc3545] desktop:hover:text-white">ادامه مطلب</button>
            </div>
          </div>
          <div className="bg-white mobile:w-[315px] mobile:h-[600px] desktop:w-[315px] desktop:h-[600px] border-solid border-[1px] border-gray-300 shadow-2xl">
            <div className="mobile:w-[100%] mobile:h-[310px] desktop:w-[100%] desktop:h-[310px]">
                <img src={img_3} alt="" className="" />
            </div>
            <div className="mobile:w-[275px] mobile:h-[250px] mobile:flex mobile:flex-col mobile:gap-4 mobile:mx-auto mobile:box-border mobile:mt-1 desktop:w-[275px] desktop:h-[250px] desktop:mx-auto desktop:box-border desktop:mt-1">
              <a href="#" className="mobile:text-[20px] mobile:font-['Yekan'] mobile:font-extralight	mobile:leading-[28px] mobile:text-[#FF0000]">چیلاکیله</a>
              <p className="mobile:h-[120px] mobile:font-['Yekan'] mobile:text-[#7C7F93] mobile:text-justify mobile:leading-[30px] mobile:font-thin mobile:text-[14px]">
                احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
                فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
                فهرست
              </p>
              <button className="cursor-pointer mobile:mt-4 mobile:w-[120px] mobile:h-[40px] mobile:rounded-[8px] mobile:text-[#7C7D7E] mobile:bg-white mobile:border-solid	mobile:border-[#C8C8C8] mobile:border-[1px] mobile:text-[14px] mobile:font-['Yekan'] mobile:hover:bg-[#dc3545] mobile:hover:text-white  transition-all duration-300 ease-linear desktop:mt-4 desktop:w-[120px] desktop:h-[40px] desktop:rounded-[8px] desktop:text-[#7C7D7E] desktop:bg-white desktop:border-solid	desktop:border-[#C8C8C8] desktop:border-[1px] desktop:text-[14px] desktop:font-['Yekan'] desktop:hover:bg-[#dc3545] desktop:hover:text-white">ادامه مطلب</button>
            </div>
          </div>
        </div>
              </section>
      </>
     );
}
 
export default Cardtwo;