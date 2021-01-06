const Loading = ({message="Halaman sedang dimuat ..."}) => {
    return (
        <div className="fixed inset-0 bg-gray-50 flex flex-col items-center justify-center">
            <div className="animate-bounce">
                <img src="/logo.png" className="w-auto h-20" alt="" />
            </div>

            <div className="mt-5 text-gray-500">{message}</div>
        </div>
    )
}
export default Loading;
