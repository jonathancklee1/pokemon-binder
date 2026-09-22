import { twMerge } from "tailwind-merge";

/** Pokeball drawn with divs. Inner parts use percentages so it scales with its size. */
const Pokeball = ({ styles }: { styles?: string }) => {
    return (
        // Black outer circle; the padding forms the outline
        <div
            className={twMerge(
                "size-48 shrink-0 rounded-full bg-black p-[2%] shadow-[0_10px_20px_rgba(0,0,0,0.2)]",
                styles,
            )}
        >
            <div className="relative size-full rounded-full bg-linear-to-b from-[#FF0000] from-50% to-white to-50% overflow-hidden flex items-center justify-center">
                {/* Center Black Line */}
                <div className="absolute w-full h-[9%] bg-black top-1/2 -translate-y-1/2 z-10" />

                {/* Outer Button Ring */}
                <div className="absolute w-[33%] h-[33%] bg-black rounded-full z-20 flex items-center justify-center">
                    {/* Inner Button */}
                    <div className="w-1/2 h-1/2 bg-white rounded-full" />
                </div>

                {/* Light Reflection/Highlight */}
                <div className="absolute top-[8%] left-[15%] w-[28%] h-[14%] bg-white/40 rounded-full -rotate-15 z-20" />
            </div>
        </div>
    );
};

export default Pokeball;
