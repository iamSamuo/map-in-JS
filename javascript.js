const menu = [
    {
        name:'kimani',
        catego:"breko"
    },
    {
        name:'nanii',
        catego:"lunch"
    },
    {
        name:'konja',
        catego:"lunch"
    },
    {
        name:'sammy',
        catego:"breko"
    },
    {
        name:'john', 
        catego:"dinner"
    }, 
   
]

const categories = ['all',...new Set(menu.map((item) => item.catego))] 
console.log(categories); 

const result = document.querySelector('.results')
result.innerHTML = categories.map((cate) =>{
    return `<button>${cate}</button>`
}).join('')