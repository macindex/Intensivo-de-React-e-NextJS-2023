import Question from "./Question";

export default function Faq(){
    return (
        <div className="flex flex-col gap-2 w-3/4">
            <Question text="O que é JavaScript?" answer="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma." />
            <Question text="O que é React?" answer="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web." />
            <Question text="O que é Single Page Application? " answer="Um aplicativo de página única é uma aplicação web ou site que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop." />
        </div>
    )
}