const PinsList = async () => {
    const fetchPin = await fetch("http://localhost:3000/api/pin", {
        cache: "no-cache",
    });

    const pins = await fetchPin?.json();

    return (
        <>
            {
                pins?.map(pin => (
                    <li
                        key={pin?.id}
                        className="bg-white border border-gray-200 shadow-none px-2 py-1 mr-2 mb-3 rounded-lg md:flex md:items-center md:justify-between   "
                    >{pin?.title}</li>
                ))
            }
        </>
    );
};

export default PinsList;