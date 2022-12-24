const productContainers = [...document.querySelectorAll('.image')]
const nxtbtn = [...document.querySelectorAll('.next-btn')]
const prebtn = [...document.querySelectorAll('.pre-btn')]

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientreact()
    let containerWidth = containerDimensions.width;

    nxtbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prebtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})