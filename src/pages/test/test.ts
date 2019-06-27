import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  templates = [{
    title:"HAPPY BIRTH DAY"  ,
    card:{
      'display': 'flex' ,
      'height': '280px' ,
      'width': '200px',
      'background-color': '#f3c1c6' ,
      'border-radius': '10px' ,
     ' box-shadow':' -1rem 0 3rem #000' ,
     'transition':' 0.4s ease-out' ,
      'position': 'relative ' ,
      'left':'0px'

    },
    head:{
      'color': 'white' ,
      'font-weight': '300' ,
      'font-family':'Frederick' ,
      'position': 'absolute' ,
      'left': '20px' ,
      'top': '15px'

    } ,
    bar:{
      'position': 'absolute' ,
      'top': '100px' ,
      'left': '20px',
      'height': '5px',
      'width': '150px'
    },

    emptybar:{
     
      'background': 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)' ,
      
        'width': '100%' ,
        'height': '100%' 
    } ,


    message:"You’re older today than yesterday but younger than tomorrow, happy birthday!"
  },

  
{title:"HAPPY ANNIVERSARY"  ,
card:{
  'display': 'flex' ,
  'height': '280px' ,
  'width': '200px',
  'background-color': '#a9eec2' ,
  'border-radius': '10px' ,
 ' box-shadow':' -1rem 0 3rem #000' ,
 'transition':' 0.4s ease-out' ,
  'position': 'relative ' ,
  'left':'0px'

},
head:{
  'color': 'white' ,
  'font-weight': '300' ,
  'font-family': 'italian' , 
  'position': 'absolute' ,
  'left': '20px' ,
  'top': '15px'

} ,
bar:{
  'position': 'absolute' ,
  'top': '100px' ,
  'left': '20px',
  'height': '5px',
  'width': '150px'
} ,
emptybar:{
     
  'background-color': 'linear-gradient(to right, #108dc7, #ef8e38)' ,
  
    'width': '100%' ,
    'height': '100%' 
} ,


},
{
  title:"HAPPY ANNIVESARY"  ,
    card:{
      'display': 'flex' ,
      'height': '280px' ,
      'width': '200px',
      'background-color': '#ffbea3' ,
      'border-radius': '10px' ,
     ' box-shadow':' -1rem 0 3rem #000' ,
     'transition':' 0.4s ease-out' ,
      'position': 'relative ' ,
      'left':'5px'

    } ,
    head:{
      'color': 'white' ,
      'font-weight': '100' ,
      'font-family': 'cursive' ,
      'position': 'absolute' ,
      'left': '20px' ,
      'top': '15px'

    },
    bar:{
      'position': 'absolute' ,
      'top': '100px' ,
      'left': '20px',
      'height': '5px',
      'width': '150px'
    } ,
    emptybar:{
      'background': 'linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%)' ,
        'width': '100%' ,
        'height': '100%' 
    } ,
    filledbar:{
      'position': 'absolute',
      'top': '0px' ,
      'z-index': '3' ,
      'width': '0px' ,
      'height': '100%' ,
      'background-color': '#ffbea3' ,
      'background': 'linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%)' ,
      'transition': '0.6s ease-out'
    }
  }


]

newTemplate ;

 changeBackGroundColor =[{card:{
  'display': 'flex' ,
  'height': '50px' ,
  'width': '50px',
  'background-color': '#a9eec2' ,
  'border-radius': '10px' ,
 ' box-shadow':' -1rem 0 3rem #000' ,
 'transition':' 0.4s ease-out' ,
  'position': 'relative ' ,
  'left':'0px'

},


},
{card:{
  'display': 'flex' ,
  'height': '50px' ,
  'width': '50px',
  'background-color': '#ff7a8a' ,
  'border-radius': '10px' ,
 ' box-shadow':' -1rem 0 3rem #000' ,
 'transition':' 0.4s ease-out' ,
  'position': 'relative ' ,
  'left':'0px'

},


} ,

{card:{
  'display': 'flex' ,
  'height': '50px' ,
  'width': '50px',
  'background-color': '#ff7a8a' ,
  'border-radius': '10px' ,
 ' box-shadow':' -1rem 0 3rem #000' ,
 'transition':' 0.4s ease-out' ,
  'position': 'relative ' ,
  'left':'0px'

},


},

{card:{
  'display': 'flex' ,
  'height': '50px' ,
  'width': '50px',
  'background-color': '#ff7a8a' ,
  'border-radius': '10px' ,
 ' box-shadow':' -1rem 0 3rem #000' ,
 'transition':' 0.4s ease-out' ,
  'position': 'relative ' ,
  'left':'0px'

},


}


]



showAllTemplate :boolean =true ;
showChoosenTemplate:boolean=false ;
hideBgColor :boolean = false ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.templates.length);
    console.log(this.changeBackGroundColor[0].card)
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
temhead ;
tememptybar ;
temtitle ;
tembar ;
temfilledbar ;


  chosenTemplate(card ,head , emptybar , title, bar, filledbar ){
    this.showChoosenTemplate=true
    this.hideBgColor =true ;

    this.temhead =head ;
    this.tememptybar =emptybar ,
    this.temtitle =title ;
    this.tembar =bar ;
    this.temfilledbar = filledbar

    this.newTemplate = {
     
     
      head:head ,
      emptybar:emptybar ,
      card:card,
      title:title  ,
      bar:bar ,
      filledbar: filledbar
     


    }

  
      
      
      console.log(this.newTemplate. emptybar);
    
    
    this.showAllTemplate = false ;
     ;
  }


  changeBgColor(i){
console.log(i);
let index = i
    this.showChoosenTemplate=true

   let temc = [{}]
    this.newTemplate = {
     
     
      head: this.temhead ,
      emptybar:this.tememptybar ,
      card:this.changeBackGroundColor[index].card,
      title:this.temtitle ,
      bar:this.tembar ,
      filledbar: this.temfilledbar
     


    }

    console.log(this.newTemplate);
    

  }

}
