const ungdungphanmemBtn = document.querySelector('.udpmBtn');
const udpmSect = document.querySelector('.ung-dung-phan-mem');
const thietkewebBtn = document.querySelector('.tkwBtn');
const thietkeweb = document.querySelector('.tkw');



const initFunc = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    setTimeout(async ()=>{
        await ungdungphanmemBtn.classList.add('active');
        await thietkewebBtn.classList.add('active');
        await ungdungphanmemBtn.classList.add('after');
        await thietkewebBtn.classList.add('after');
    },500)
    handleUdpmClick();
    handleTkwClick();
};



const handleUdpmClick = () => {
    ungdungphanmemBtn.addEventListener('click',()=>{
        const height = udpmSect.offsetTop;
        window.scrollTo(0,height);
    })
}

const handleTkwClick = () => {
    thietkewebBtn.addEventListener('click',()=>{
            const height = thietkeweb.offsetTop;
            window.scrollTo(0,height);
    })

}

initFunc();