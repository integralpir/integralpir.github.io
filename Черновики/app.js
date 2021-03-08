const historyBtnUp = document.querySelector(".historyBtnUp"); // Кнопка переключения
historyBtnUp.addEventListener("click", historyBtnUpClick);       // первой страницы

function historyBtnUpClick() {
    document.querySelector(".history").classList.toggle("hidden");
    document.querySelector(".WWW").classList.toggle("hidden");
    document.querySelector(".background").classList.toggle("dark")
}

const WWWBtnUp = document.querySelector(".WWWBtnUp");                 // Кнопки переключения
WWWBtnUp.addEventListener("click", WWWBtnUpClick);                    // второй страницы
const WWWBtnDown = document.querySelector(".WWWBtnDown");
WWWBtnDown.addEventListener("click", WWWBtnDownClick);
const WWWBtnIn1 = document.querySelector(".WWWBtnIn1");
WWWBtnIn1.addEventListener("click", WWWBtnIn1Click);

function WWWBtnUpClick() {                                            // Вперед
    document.querySelector(".WWW").classList.toggle("hidden");
    document.querySelector(".JS").classList.toggle("hidden");
}

function WWWBtnDownClick() {                                          // Назад
    document.querySelector(".history").classList.toggle("hidden");
    document.querySelector(".WWW").classList.toggle("hidden");
    document.querySelector(".background").classList.toggle("dark")
}

function WWWBtnIn1Click() {                                           // Внутренняя кнопка
    document.querySelector(".BeforeTim").classList.toggle("hidden");
    document.querySelector(".Tim").classList.toggle("hidden");
}

const JSBtnUp = document.querySelector(".JSBtnUp");                   // Кнопки переключения
JSBtnUp.addEventListener("click", JSBtnUpClick);                      // третей страницы
const JSBtnDown = document.querySelector(".JSBtnDown");
JSBtnDown.addEventListener("click", JSBtnDownClick);

function JSBtnUpClick() {                                             // Вперед
    document.querySelector(".JS").classList.toggle("hidden");
    document.querySelector(".CSS").classList.toggle("hidden");
}

function JSBtnDownClick() {                                           // Назад
    document.querySelector(".WWW").classList.toggle("hidden");
    document.querySelector(".JS").classList.toggle("hidden");
}

const CSSBtnUp = document.querySelector(".CSSBtnUp");                 // Кнопки переключения
CSSBtnUp.addEventListener("click", CSSBtnUpClick);                    // четвертой страницы
const CSSBtnDown = document.querySelector(".CSSBtnDown");
CSSBtnDown.addEventListener("click", CSSBtnDownClick);

function CSSBtnUpClick() {
    document.querySelector(".CSS").classList.toggle("hidden");
    document.querySelector(".HTML4").classList.toggle("hidden");
}

function CSSBtnDownClick() {
    document.querySelector(".JS").classList.toggle("hidden");
    document.querySelector(".CSS").classList.toggle("hidden");
}

const HTML4BtnDown = document.querySelector(".HTML4BtnDown");
HTML4BtnDown.addEventListener("click", HTML4BtnDownClick);

function HTML4BtnDownClick() {
    document.querySelector(".CSS").classList.toggle("hidden");
    document.querySelector(".HTML4").classList.toggle("hidden");
}