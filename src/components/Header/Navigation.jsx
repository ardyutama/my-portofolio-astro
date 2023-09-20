export default function Navigation(){
    return(
        <>
            <a href="#" className={`
                ${window.location.pathname==='/'? 'font-bold':'font-normal'}
            `}>Work /</a>
            <a href="#" className={
                `${window.location.pathname==='about'? 'font-bold':'font-normal'}`
            }>About /</a>
        </>
    )
}