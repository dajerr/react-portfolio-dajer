
export function AsideArticles({title, text}){
    

    return(
        <article className="h-[103px] border-b-2 pt-4 last:border-none">
            <div className="flex items-center gap-2">
            <span>
                -
            </span>
            <h2 className="text-[20px] text-[#efffa9] mb-1 font-semibold">{title}</h2>
            </div>
            <p className="text-sm text-gray-300">{text}</p>
        </article>
    )
}