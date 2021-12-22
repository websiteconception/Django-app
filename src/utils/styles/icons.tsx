import { createGlobalStyle } from "styled-components"


const Icons = createGlobalStyle`
@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?raov4q');
  src:  url('fonts/icomoon.eot?raov4q#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?raov4q') format('truetype'),
    url('fonts/icomoon.woff?raov4q') format('woff'),
    url('fonts/icomoon.svg?raov4q#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-prev .path1:before {
  content: "\\e95b";
  opacity: 0.912;
}
.icon-prev .path2:before {
  content: "\\e95c";
  margin-left: -1em;
}
.icon-next .path1:before {
  content: "\\e95d";
  opacity: 0.912;
}
.icon-next .path2:before {
  content: "\\e95f";
  margin-left: -1em;
}
.icon-map-collapse .path1:before {
  content: "\\e960";
  opacity: 0.947;
}
.icon-map-collapse .path2:before {
  content: "\\e961";
  margin-left: -1em;
}
.icon-map-collapse .path3:before {
  content: "\\e962";
  margin-left: -1em;
}
.icon-zoom-in .path1:before {
  content: "\\e964";
  opacity: 0.952;
}
.icon-zoom-in .path2:before {
  content: "\\e965";
  margin-left: -1em;
}
.icon-zoom-out .path1:before {
  content: "\\e966";
  opacity: 0.952;
}
.icon-zoom-out .path2:before {
  content: "\\e967";
  margin-left: -1em;
}
.icon-email-transparent:before {
  content: "\\e95a";
}
.icon-facebook-transparent:before {
  content: "\\e95b";
}
.icon-google-fill:before {
  content: "\\e95e";
}
.icon-linkedin-transparent:before {
  content: "\\e95d";
}
.icon-close:before {
  content: "\\e959";
}
.icon-circle-right-arrow:before {
  content: "\\e958";
}
.icon-add:before {
  content: "\\e953";
}
.icon-less:before {
  content: "\\e954";
}
.icon-location:before {
  content: "\\e955";
}
.icon-pax:before {
  content: "\\e956";
}
.icon-pin:before {
  content: "\\e957";
}
.icon-right-arrow:before {
  content: "\\e952";
}
.icon-search:before {
  content: "\\e951";
}
.icon-appstore .path1:before {
  content: "\\e916";
}
.icon-appstore .path2:before {
  content: "\\e917";
  margin-left: -3.056640625em;
}
.icon-appstore .path3:before {
  content: "\\e918";
  margin-left: -3.056640625em;
}
.icon-appstore .path4:before {
  content: "\\e919";
  margin-left: -3.056640625em;
}
.icon-appstore .path5:before {
  content: "\\e91a";
  margin-left: -3.056640625em;
}
.icon-appstore .path6:before {
  content: "\\e91b";
  margin-left: -3.056640625em;
}
.icon-appstore .path7:before {
  content: "\\e91c";
  margin-left: -3.056640625em;
}
.icon-appstore .path8:before {
  content: "\\e91d";
  margin-left: -3.056640625em;
}
.icon-appstore .path9:before {
  content: "\\e91e";
  margin-left: -3.056640625em;
}
.icon-appstore .path10:before {
  content: "\\e91f";
  margin-left: -3.056640625em;
}
.icon-appstore .path11:before {
  content: "\\e920";
  margin-left: -3.056640625em;
}
.icon-appstore .path12:before {
  content: "\\e921";
  margin-left: -3.056640625em;
}
.icon-appstore .path13:before {
  content: "\\e922";
  margin-left: -3.056640625em;
}
.icon-appstore .path14:before {
  content: "\\e923";
  margin-left: -3.056640625em;
}
.icon-appstore .path15:before {
  content: "\\e924";
  margin-left: -3.056640625em;
}
.icon-appstore .path16:before {
  content: "\\e925";
  margin-left: -3.056640625em;
}
.icon-appstore .path17:before {
  content: "\\e926";
  margin-left: -3.056640625em;
}
.icon-appstore .path18:before {
  content: "\\e927";
  margin-left: -3.056640625em;
}
.icon-appstore .path19:before {
  content: "\\e928";
  margin-left: -3.056640625em;
}
.icon-appstore .path20:before {
  content: "\\e929";
  margin-left: -3.056640625em;
}
.icon-appstore .path21:before {
  content: "\\e92a";
  margin-left: -3.056640625em;
}
.icon-appstore .path22:before {
  content: "\\e92b";
  margin-left: -3.056640625em;
}
.icon-appstore .path23:before {
  content: "\\e92c";
  margin-left: -3.056640625em;
}
.icon-appstore .path24:before {
  content: "\\e92d";
  margin-left: -3.056640625em;
}
.icon-appstore .path25:before {
  content: "\\e92e";
  margin-left: -3.056640625em;
}
.icon-appstore .path26:before {
  content: "\\e92f";
  margin-left: -3.056640625em;
}
.icon-appstore .path27:before {
  content: "\\e930";
  margin-left: -3.056640625em;
}
.icon-appstore .path28:before {
  content: "\\e931";
  margin-left: -3.056640625em;
}
.icon-appstore .path29:before {
  content: "\\e932";
  margin-left: -3.056640625em;
}
.icon-appstore .path30:before {
  content: "\\e933";
  margin-left: -3.056640625em;
}
.icon-playstore .path1:before {
  content: "\\e934";
}
.icon-playstore .path2:before {
  content: "\\e935";
  margin-left: -3.056640625em;
}
.icon-playstore .path3:before {
  content: "\\e936";
  margin-left: -3.056640625em;
}
.icon-playstore .path4:before {
  content: "\\e937";
  margin-left: -3.056640625em;
}
.icon-playstore .path5:before {
  content: "\\e938";
  margin-left: -3.056640625em;
}
.icon-playstore .path6:before {
  content: "\\e939";
  margin-left: -3.056640625em;
}
.icon-playstore .path7:before {
  content: "\\e93a";
  margin-left: -3.056640625em;
}
.icon-playstore .path8:before {
  content: "\\e93b";
  margin-left: -3.056640625em;
}
.icon-playstore .path9:before {
  content: "\\e93c";
  margin-left: -3.056640625em;
}
.icon-playstore .path10:before {
  content: "\\e93d";
  margin-left: -3.056640625em;
}
.icon-playstore .path11:before {
  content: "\\e93e";
  margin-left: -3.056640625em;
}
.icon-playstore .path12:before {
  content: "\\e93f";
  margin-left: -3.056640625em;
}
.icon-playstore .path13:before {
  content: "\\e940";
  margin-left: -3.056640625em;
}
.icon-playstore .path14:before {
  content: "\\e941";
  margin-left: -3.056640625em;
}
.icon-playstore .path15:before {
  content: "\\e942";
  margin-left: -3.056640625em;
}
.icon-playstore .path16:before {
  content: "\\e943";
  margin-left: -3.056640625em;
}
.icon-playstore .path17:before {
  content: "\\e944";
  margin-left: -3.056640625em;
}
.icon-playstore .path18:before {
  content: "\\e945";
  margin-left: -3.056640625em;
}
.icon-playstore .path19:before {
  content: "\\e946";
  margin-left: -3.056640625em;
}
.icon-playstore .path20:before {
  content: "\\e947";
  margin-left: -3.056640625em;
}
.icon-playstore .path21:before {
  content: "\\e948";
  margin-left: -3.056640625em;
  color: rgb(26, 26, 26);
}
.icon-playstore .path22:before {
  content: "\\e949";
  margin-left: -3.056640625em;
}
.icon-playstore .path23:before {
  content: "\\e94a";
  margin-left: -3.056640625em;
}
.icon-playstore .path24:before {
  content: "\\e94b";
  margin-left: -3.056640625em;
}
.icon-playstore .path25:before {
  content: "\\e94c";
  margin-left: -3.056640625em;
}
.icon-playstore .path26:before {
  content: "\\e94d";
  margin-left: -3.056640625em;
}
.icon-playstore .path27:before {
  content: "\\e94e";
  margin-left: -3.056640625em;
}
.icon-playstore .path28:before {
  content: "\\e94f";
  margin-left: -3.056640625em;
}
.icon-playstore .path29:before {
  content: "\\e950";
  margin-left: -3.056640625em;
}
.icon-briefcase:before {
  content: "\\e906";
}
.icon-flag:before {
  content: "\\e908";
}
.icon-wifi:before {
  content: "\\e909";
}
.icon-eye:before {
  content: "\\e90f";
}
.icon-bell:before {
  content: "\\e910";
}
.icon-pin:before {
  content: "\\e911";
}
.icon-clock:before {
  content: "\\e912";
}
.icon-house:before {
  content: "\\e913";
}
.icon-basket:before {
  content: "\\e914";
}
.icon-heart:before {
  content: "\\e915";
}
.icon-dropdown-arrow:before {
  content: "\\e90d";
}
.icon-checkmark:before {
  content: "\\e90e";
}
.icon-casai-logo-white:before {
  content: "\\e90b";
}
.icon-i18n-globe:before {
  content: "\\e90c";
}
.icon-medium:before {
  content: "\\e90a";
}
.icon-location:before {
  content: "\\e901";
}
.icon-datepicker:before {
  content: "\\e902";
}
.icon-user:before {
  content: "\\e903";
}
.icon-apple:before {
  content: "\\e904";
}
.icon-googleplay:before {
  content: "\\e905";
}
.icon-instagram:before {
  content: "\\e907";
}
.icon-facebook:before {
  content: "\\f09a";
}
.icon-linkedin:before {
  content: "\\f0e1";
}
.icon-remove_red_eyevisibility:before {
  content: "\\e900";
}
`

export default Icons