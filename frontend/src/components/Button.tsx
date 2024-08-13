interface props {
    label: string,
    onClick: (e: React.MouseEvent<HTMLElement>) => void,
}

export const Button = ({label, onClick}: props) => {
    return (
        <div className="btn w-full flex justify-center items-center mr-4">
            <button onClick={onClick} type="button" className="w-full h-[53px] bg-black text-white py-2 rounded-2xl hover:bg-customGray transition duration-200">{label}</button>
        </div>
    )
}