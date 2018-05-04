import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MusicPage } from '../pages/music/music';
import { VideoPage } from '../pages/video/video';
import { NewsPage } from '../pages/news/news';
import { IntroPage } from '../pages/intro/intro'
import { LoginPage } from '../pages/login/login'
import { TabsPage } from '../pages/tabs/tabs';

import { VimeoVideo } from '../pages/videos/vimeo'
import { YoutubeVideo } from '../pages/videos/youtube'

import { Popover } from '../components/popover/popover'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';

@NgModule({
  declarations: [
    MyApp,
    MusicPage,
    VideoPage,
    NewsPage,
    TabsPage,
    IntroPage,
    LoginPage,
    VimeoVideo,
    YoutubeVideo,
    Popover,
    ParallaxHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage,
    VideoPage,
    NewsPage,
    TabsPage,
    IntroPage,
    LoginPage,
    VimeoVideo,
    YoutubeVideo,
    Popover
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
