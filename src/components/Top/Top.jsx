import second from '../../../public/images/page/up-arrow.svg'

const Top = () => {
    return ( 
        <a href="#goToTop" class="text-[18px] w-[40px] h-[40px] opacity-[0.4] bg-[#2b2b2b] fixed left-5 bottom-5 flex justify-center items-center z-[99] rounded-[2px] border-[1px] border-solid border-white hover:opacity-100 transition-all duration-300 ease-linear">
        <img src={second} alt="" className="w-[30px] h-[30px]" />
      </a>
     );
}
 
export default Top;