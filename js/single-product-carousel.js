const mainImage =document.getElementById('main-image');
const items =document.getElementsByClassName('sub-images');

for(let i = 0; i< items.length; i++){
    items[i].onclick=function () {
        let item = items[0];
        while(item){
            if(item.tagName==='IMG'){
                let item1=$(this).attr('src');
                mainImage.setAttribute('src',item1);
            }
            item=item.nextSibling;
        }
    }
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        }
    }
})