import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-maored',
  templateUrl: './new-maored.component.html',
  styleUrls: ['./new-maored.component.css'],
})

export class NewMaoredComponent {
  lang:any;
  deafualImg:string="../../assets/images/default-img.png";
  imgLink:any;
  hasImg:boolean=false;
  isDay:boolean=true;
  active:boolean=true;
  multyBooking:boolean=true;
  fixedTiming:boolean=true;
  timing:number=1;

  constructor(private translate:TranslateService){
    if ('lang' in localStorage){
      this.lang = localStorage.getItem('lang');
    }
    else{
      this.lang = this.translate.defaultLang;
      localStorage.setItem('lang',this.lang);
    }
    this.changeDirPage(this.lang);
    this.translate.use(this.lang);

    if ('img' in localStorage ){
      this.hasImg=true;
      this.imgLink = localStorage.getItem('img');
    }
  }

  onChangeImg(e:any){
    this.readImage(e.target.files[0])
      .then(link => {
        if (link) {
          this.hasImg=true;
          this.imgLink = link;
          localStorage.setItem('img',this.imgLink);
        }
      })
      .catch(err=>{
        console.log(err);
      })
  }

  useLanguage(language: string): void {
    if (language!=='en' && language!=='ar'){
      return;
    }
    let lang;
    if ('lang' in localStorage){
      lang = localStorage.getItem('lang');
      if (lang === language) {
        return;
      }else{
        this.lang = language;
        localStorage.setItem('lang', this.lang );
      }
    }
    else{
      this.lang = language;
      localStorage.setItem('lang',this.lang);
    }
    this.changeDirPage(this.lang);
    this.translate.use(language);
  }

  changeDirPage(language:string):void{
    if (language === 'ar') {
      document.dir = 'rtl';
    }
    else{
      document.dir = 'ltr';
    }
  }

  readImage = async (image: Blob) => {
    return new Promise<string | null>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
        fileReader.onload = () => {
            resolve(fileReader.result as string);
        };
        fileReader.onerror = () => {
            reject(fileReader.error);
        };
    });
  }
}
