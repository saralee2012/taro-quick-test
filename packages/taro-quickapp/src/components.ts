import { singleQuote } from '@tarojs/shared'


const IS_HUAWEI_QUICK = process.env.TYPE === 'huawei'
export const components = {
  View: IS_HUAWEI_QUICK ? {
    enablevideofullscreencontainer: 'false',
  } : {
    enablevideofullscreencontainer: 'false',
    show: 'true'
  },
  List: IS_HUAWEI_QUICK ?  {
    scrollpage: 'false',
    layoutType: 'grid',
    outclass: singleQuote(''),
  } : {
    scrollpage: 'false',
    layoutType: 'list',
    bindScroll: '',
    bindScrollBottom: '',
    bindScrollTop: '',
    bindScrollEnd: '',
    bindScrollTouchUp: '',
    outclass: singleQuote(''),
  },
  ListItem: {
    type: singleQuote(''),
    disallowintercept: 'false',
    tid: singleQuote('')
  },
  ScrollView: IS_HUAWEI_QUICK ?  {
    scrollpage: 'false',
    layoutType: singleQuote('grid'),
  } : {
    scrollpage: 'false',
    layoutType: singleQuote('list'),
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
  Swiper: IS_HUAWEI_QUICK ?  {
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
    // bindChange: ''
  } : {
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
  QkTabs: IS_HUAWEI_QUICK ? {
    index: '0',
    // bindChange: ''
  } : {
    index: '0',
    bindChange: ''
  },
  QkTabBar: {
    mode: singleQuote('fixed')
  },
  QkTabContent: {
    scrollable: 'true'
  },
  A: {
    href: singleQuote('')
  },
  Image: IS_HUAWEI_QUICK ?  {
    src: singleQuote(''),
    alt: singleQuote(''),
    autoplay: 'true',
  } : {
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
  Input: IS_HUAWEI_QUICK ? {
    type: singleQuote('text'),
    checked: 'false',
    name: singleQuote(''),
    value: singleQuote(''),
    placeholder: singleQuote(''),
    maxlength: '100',
    enterkeytype: singleQuote('default'),
    autocomplete: singleQuote('on'),
    // bindChange: '',
  } : {
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
  Switch: {
    checked: 'false',
    bindChange: ''
  },
  Textarea: IS_HUAWEI_QUICK ? {
    placeholder: singleQuote(''),
    autofocus: 'false',
    maxlength: '100',
    // bindChange: '',
    // bindSelectionChange: '',
    // bindLineChange: '',
    bindFocus: '',
    bindBlur: '',
  } : {
    placeholder: singleQuote(''),
    autofocus: 'false',
    maxlength: '100',
    bindChange: '',
    bindSelectionChange: '',
    bindLineChange: '',
    bindFocus: '',
    bindBlur: '',
  },
  Video: IS_HUAWEI_QUICK ? {
    src: singleQuote(''),
    autoplay: 'false',
    poster: singleQuote(''),
    controls: 'true',
    muted: 'false',
    orientation: singleQuote('landscape'),
    titlebar: 'true',
    title: singleQuote(''),
    playcount: '1',
    initialtime: singleQuote(''),
    playspeed: '1',
    enablevideofullscreencontainer: 'false',
    // bindPrepared: '',
    // bindStart: '',
    // bindPause: '',
    // bindFinish: '',
    // bindSeeking: '',
    // bindSeeked: '',
    // bindTimeUpdate: '',
    // bindFullScreenChange: ''
  } : {
    src: singleQuote(''),
    autoplay: 'false',
    poster: singleQuote(''),
    controls: 'true',
    muted: 'false',
    orientation: singleQuote('landscape'),
    titlebar: 'true',
    title: singleQuote(''),
    playcount: '1',
    initialtime: singleQuote(''),
    playspeed: '1',
    enablevideofullscreencontainer: 'false',
    bindPrepared: '',
    bindStart: '',
    bindPause: '',
    bindFinish: '',
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



