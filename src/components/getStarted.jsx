import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cusor-pointer p-2 hover:translate-y-1 cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins text-[18px] leading-[23px] font-medium"><span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain animate-bounce" />
            </div>
            <p className="font-poppins text-[18px] leading-[23px] font-medium"><span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
)

export default GetStarted;