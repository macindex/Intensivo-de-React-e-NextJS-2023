import { useState } from "react";
import Question from "./Question";

export default function Faq(){

    const [ active, setActive ] = useState<number>(0)

    function changeVisibility(indice: number){
        if(indice === active){
            setActive(-1)
        }else{
            setActive(indice)
        }
    }

    return (
        <div className="flex flex-col gap-2 w-3/4">
            {/* <Question indice={0} open={active === 1} text="O que é JavaScript?" answer="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma." 
            changeVisibility={changeVisibility} />
            <Question indice={1} open={active === 2} text="O que é React?" answer="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web." 
            changeVisibility={changeVisibility} />
            <Question indice={2} open={active === 3} text="O que é Single Page Application? " answer="Um aplicativo de página única é uma aplicação web ou site que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop."
            changeVisibility={changeVisibility} /> */}
            <Question indice={0} open={active === 0} text="O que é JavaScript?" answer="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma." changeVisibility={changeVisibility} />
            <Question indice={1} open={active === 1} text="O que é React?" answer="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web." changeVisibility={changeVisibility} />
            <Question indice={2} open={active === 2} text="O que é Single Page Application? " answer="Um aplicativo de página única é uma aplicação web ou site que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop." changeVisibility={changeVisibility} />
        </div>
    )
}