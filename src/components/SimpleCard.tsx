interface ISimpleCard {
    imgUrl: string,
    title: string,
    description: string,
    tags: string[]
}

const SimpleCard: React.FC<ISimpleCard> = ({ imgUrl, title, description, tags }) => {
    return (
        <>
            <div className="flex flex-col w-[350px] rounded-3xl bg-white overflow-hidden">
                {/* Image */}
                <div className="w-full h-64 relative">
                    <img src={imgUrl} className="absolute object-cover w-full h-full" />
                </div>
                {/* Body */}
                <div className="p-6 pb-8 flex flex-col flex-1">
                    <div className="text-lg mb-2 font-medium">{title}</div>
                    <div className="text-sm">{description}</div>
                    <div className="flex-grow" />
                    <div className="pt-4 flex flex-wrap justify-items-start gap-2">
                        {tags.map((tag, i) => (
                            <div key={i} className=" rounded border border-indigo-400 bg-indigo-100 px-2.5 py-0.5 text-center text-xs font-medium text-indigo-800 dark:bg-gray-700 dark:text-indigo-400"> {tag} </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}


export default SimpleCard;