import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import 'zuck.js/zuck.js';
declare var Zuck;


/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',


})
export class IntroductionPage {



 
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log()
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionPage');
  }
  ionViewDidEnter(){
      let n ;
    var timeIndex = 0;
        var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
        var timestamp = function () {
         n= new Date();
          var shift = shifts[timeIndex++] || 0;
          var date = new Date(n - shift * 1000);

          return date.getTime() / 1000;
        };

    let stories  ;
    stories = new Zuck('stories', {
      backNative: true,
      autoFullScreen: 'false',
      skin: 'Snapgram',
      avatars: 'true',
      list: false,
      cubeEffect: 'true',
      localStorage: true,
      stories: [
        {
          id: 'vision',
          photo: 'https://cnet4.cbsistatic.com/img/QJcTT2ab-sYWwOGrxJc0MXSt3UI=/2011/10/27/a66dfbb7-fdc7-11e2-8c7c-d4ae52e62bcc/android-wallpaper5_2560x1600_1.jpg',
          name: 'Tech',
          link: '',
          lastUpdated: 1492665454,
          items: [
            this.buildItem('1', 'photo', 3, 'https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg','', '', false, 1492665454),
            this.buildItem('2', 'photo', 3, 'https://vignette4.wikia.nocookie.net/ironman/images/5/59/Robert-Downey-Jr-Tony-Stark-Iron-Man-3-Marvel-Disney.jpg/revision/latest?cb=20130611164804', '', '',false, 1492665454),
            this.buildItem('3', 'video', 0, 'https://scontent-gru2-2.cdninstagram.com/t50.2886-16/14965218_193969377722724_482497862983221248_n.mp4', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', '', false, 1492665454),
          ],
        },

         {
              id: "ramon",
              photo: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
              name: "Ramon",
              link: "https://ramon.codes",
              lastUpdated: timestamp(),
              items: [
                Zuck.buildItem("ramon-1", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '', false, false, timestamp()),
                Zuck.buildItem("ramon-2", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg", '', false, false, timestamp()),
                Zuck.buildItem("ramon-3", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", 'https://ramon.codes', 'Visit my Portfolio', false, timestamp())
              ]
            },
      
      
      ],
    })

  console.log(stories)
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  buildItem(id, type, length, src, preview, link, seen, time) {

    // Using object short-hand (id: id)
    return {id,type,length,src,preview,link,seen,time,
    };

    }
 
}
