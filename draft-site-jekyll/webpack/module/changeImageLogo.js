export default class ChangeImageLogo{
  constructor(){
    this.imageLogo = document.querySelector("div.logo")
    //console.log(this.imageLogo.nextElementSibling);
  }

  addEventElement(){ 
    this.imageLogo.addEventListener('mouseover', () =>{
      const a = [... this.imageLogo.children];
      console.log(a);
      a[1].style.color = 'white';
      a[0].src = a[0].src.replace('.svg', '-hover.svg');
    })
  }

  addEventElement2(){ 
    this.imageLogo.addEventListener('mouseleave', () =>{
      const a = [... this.imageLogo.children];
      console.log(a);
      a[1].style.color = '#cda112';
      a[0].src = a[0].src.replace('-hover.svg', '.svg');
    })
  }



  init(){
    this.addEventElement();
    this.addEventElement2();
  }

}





console.log('teste');