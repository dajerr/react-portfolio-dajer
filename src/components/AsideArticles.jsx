
export function AsideArticles({title}){
    

    return(
        <article className="h-[80px] border-b-2 pt-4 last:border-none">
            <div className="flex items-center gap-2">
            <span>
                -
            </span>
            <h2 className="text-[20px] text-gray-200 mb-1 font-semibold">{title}</h2>
            </div>
        </article>
    )
}