import { singleQuote } from '@tarojs/shared'

export const components = {
  View: {
    enablevideofullscreencontainer: 'false',
    show: 'true'
  },
  List: {
    scrollpage: 'false',
    layoutType: 'grid',
    bindScroll: '',
    bindScrollBottom: '',
    bindScrollTop: '',
    bindScrollEnd: '',
    bindScrollTouchUp: '',
    
  },
  ListItem: {
    type: singleQuote(''),
    disallowintercept: 'false',
    tid: singleQuote('')
  },
  ScrollView: {
    scrollpage: 'false',
    layoutType: singleQuote('grid'),
    bindScroll: '',
    bindScrollBottom: '',
    bindScrollTop: '',
    bindScrollEnd: '',
    bindScrollTouchUp: '',
  },
  // QkPopup: {
  //   target: singleQuote(''),
  //   placement: singleQuote('bottom'),
  //   bindVisibilityChange: ''
  // },
  // QkRefresh: {
  //   offset: '132',
  //   refreshing: 'false',
  //   type: singleQuote('auto'),
  //   enableRefresh: 'true',
  //   bindRefresh: ''
  // },
  // QkRichText: {
  //   type: singleQuote('html'),
  //   bindStart: '',
  //   bindComplete: ''
  // },
  // QkStack: {
  //   bindFullScreenChange: ''
  // },
  Swiper: {
    index: '0',
    autoplay: 'false',
    interval: '3000',
    indicator: 'true',
    loop: 'false',
    duration: '0',
    vertical: 'false',
    previousMargin: singleQuote(''),
    nextMargin: singleQuote(''),
    enableSwipe: 'true',
    bindChange: ''
  },
  QkTabs: {
    index: '0',
    bindChange: ''
  },
  QkTabBar: {
    mode: singleQuote('fixed')
  },
  QkTabContent: {
    scrollable: 'true'
  },
  // QkA: {
  //   href: singleQuote('')
  // },
  Image: {
    src: singleQuote(''),
    alt: singleQuote(''),
    autoplay: 'true',
    bindComplete: '',
    bindError: ''
  },
  // QkProgress: {
  //   percent: '0',
  //   type: singleQuote('horizontal')
  // },
  // QkRating: {
  //   numstars: '5',
  //   rating: '0',
  //   stepsize: '0.5',
  //   indicator: 'false',
  //   bindChange: ''
  // },
  QkSpan: {},
  QkText: {},
  // QkMarquee: {
  //   scrollamount: '6',
  //   loop: '-1',
  //   direction: singleQuote('left'),
  //   bindBounce: '',
  //   bindFinish: '',
  //   bindStart: ''
  // },
  Input: {
    type: singleQuote('text'),
    checked: 'false',
    name: singleQuote(''),
    value: singleQuote(''),
    placeholder: singleQuote(''),
    maxlength: '100',
    enterkeytype: singleQuote('default'),
    autocomplete: singleQuote('on'),
    bindChange: '',
    bindEnterkeyClick: '',
    bindSelectionChange: ''
  },
  // QkLabel: {
  //   target: singleQuote('')
  // },
  // QkOption: {
  //   selected: 'false',
  //   value: singleQuote('')
  // },
  // QkPicker: {
  //   type: singleQuote('text'),
  //   range: '[]',
  //   selected: '0',
  //   value: singleQuote(''),
  //   start: singleQuote(''),
  //   end: singleQuote('')
  // },
  // QkSelect: {
  //   bindChange: ''
  // },
  // QkSwitch: {
  //   checked: 'false',
  //   bindChange: ''
  // },
  Textarea: {
    placeholder: singleQuote(''),
    autofocus: 'false',
    maxlength: '100',
    bindChange: '',
    bindSelectionChange: '',
    bindLineChange: '',
    bindFocus: '',
    bindBlur: '',
  },
  Video: {
    src: singleQuote(''),
    autoplay: 'false',
    poster: singleQuote(''),
    controls: 'true',
    muted: 'false',
    orientation: singleQuote('landscape'),
    titlebar: 'true',
    title: singleQuote(''),
    playcount: '1',
    enablevideofullscreencontainer: 'false',
    bindPrepared: '',
    bindStart: '',
    bindPause: '',
    bindFinish: '',
    bindError: '',
    bindSeeking: '',
    bindSeeked: '',
    bindTimeUpdate: '',
    bindFullScreenChange: ''
  },
  // QkCamera: {
  //   deviceposition: singleQuote('front'),
  //   flash: singleQuote('auto'),
  //   framesize: singleQuote('normal'),
  //   autoexposurelock: 'false',
  //   autowhitebalancelock: 'false',
  //   bindError: '',
  //   bindCameraFrame: '',
  //   bindCameraInitDone: ''
  // },
  QkCanvas: {},
  // QkWeb: {
  //   src: singleQuote(''),
  //   trustedurl: '[]',
  //   allowthirdpartycookies: 'false',
  //   showloadingdialog: 'false',
  //   supportzoom: 'true',
  //   useragent: singleQuote(''),
  //   bindPageStart: '',
  //   bindPageFinish: '',
  //   bindTitleReceive: '',
  //   bindError: '',
  //   bindMessage: '',
  //   bindProgress: ''
  // }
}


