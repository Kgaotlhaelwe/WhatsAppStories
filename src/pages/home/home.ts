import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import domtoimage from 'dom-to-image';
import { Storage } from '@ionic/storage';

import { IntroductionPage } from '../introduction/introduction'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chosentemplate;
  chosentitle;
  newchosenTemplate: boolean = false;
  multitemplate: boolean = true;

  template = [{
    title: "HAPPY BIRTHDAYu ", background: {
      'display': 'flex',
      'height': '280px',
      'width': '200px;',
      'background-color': '#17141d',
      ' border-radius': '10px',
      ' box-shadow': '-1rem 0 3rem #000',
      'transition': '0.4s ease-out' ,
      'position': 'relative',
      'left': '0px' ,

      head:{
      
        'color': 'white' ,
        'font-weight': '300',
        'position': 'absolute',
        'left': '20px' ,
        'top': '15px'
      }

    },

   
    } ,
  



  {
    title: "HAPPY ANNIVERSARY k", background: {
      'display': 'flex',
      'height': '280px',
      'width': '200px;',
      'background-color': '#17141d',
      ' border-radius': '10px',
      ' box-shadow': '-1rem 0 3rem #000',
      'transition': '0.4s ease-out' ,
      'position': 'relative',
      'left': '0px'
    },

    

  }

  ]

  color = [{
    myStyles: {
      'background-color': '#79AC30',
    }

  },
  {
    myStyles: {
      'background-color': '#6E798B',
    },
  },
  {
    myStyles: {
      'background-color': '#C8C6B7',
    },

  },
  {
    myStyles: {
      'background-color': '#202E1D',
    },

  },
  {
    myStyles: {
      'background-color': '#B2C1DF',
    },

  }




  ]



  title: {
    textAlign: 'center',
    backgroundColor: '#E0E0E0',
    '&:hover': {
      backgroundColor: '#BDBDBD'
    }
  }

  showBtnbackGroundColor: boolean;


  showContent = false ;

  program ;
  showContentSecond  = false ;
  constructor(public navCtrl: NavController, public storage: Storage) {
 this.showBtnbackGroundColor = false;

    this.ionViewDidLoad()

  }

 btnColor(i) {
   console.log(i);
    console.log(this.color[i].myStyles["background-color"]);

   // let s = this.template[i].background.[background]

   // console.log(this.template[i].background.background);
   // console.log("nnn");
   // console.log(s.indexOf('rgba'))
   //console.log(s.indexOf(')'))




    this.chosentemplate = {
      'background': this.color[i].myStyles["background-color"] ,
      'height': '300px',
    }

  }
  

 chooseTemplate(index) {
    console.log(index);
    console.log(this.template[index].background["background"]);


    this.chosentemplate = {
      'background': this.template[index].background["background"],
      'height': '300px',
    }



    this.chosentitle = this.template[index].title;
    this.newchosenTemplate = true;
    this.multitemplate = false;
    this.showBtnbackGroundColor = true;


  }

  share() {
    var imgz = document.getElementById("img");

    domtoimage.toPng(imgz)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);

        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

  }


  ionViewDidLoad() {
    this.storage.get('intro-done').then(done => {
      if (!done) {
        console.log(done);

        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(IntroductionPage);
      }
    });
  }

  

}


