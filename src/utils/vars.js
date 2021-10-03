import { keyframes } from "styled-components";
export const gray           = '#212121';
export const purple         = '#a21676';
export const yellow         = '#FFCB47';
export const orange         = '#FF9900'; 
export const blue           = 'blue'; 
export const green          = '#66E1B4';
export const white          = '#f6f2f2';
export const shadow         = `3px 5px 5px ${gray}`;
export const transition     = 'all 0.4s';
export const space_top      = '30px';
export const font_size1     = '1rem';
export const font_size2     = '1.6rem';
export const font_size3     = '2.3rem';
export const font_title     = '3.5rem';
export const scale          = 'scale(1.09)';

/* MEDIA QUERYS BREAKPOINTS */
export const media          = { 
                                small: "@media(min-width: 500px)", 
                                phones: "@media(min-width: 600px)", 
                                tablet: "@media(min-width: 760px)",
                                screen: "@media(min-width: 1000px)"                                
                              };

export const rotate                = keyframes`
                              from {
                                -ms-transform: rotate(0deg);
                                -moz-transform: rotate(0deg);
                                -webkit-transform: rotate(0deg);
                                -o-transform: rotate(0deg);
                                transform: rotate(0deg);
                              }
                              to {
                                -ms-transform: rotate(360deg);
                                -moz-transform: rotate(360deg);
                                -webkit-transform: rotate(360deg);
                                -o-transform: rotate(360deg);
                                transform: rotate(360deg);
                                }
                                `;

// @-webkit-keyframes rotating /* Safari and Chrome */ {
//   from {
//     -webkit-transform: rotate(0deg);
//     -o-transform: rotate(0deg);
//     transform: rotate(0deg);
//   }
//   to {
//     -webkit-transform: rotate(360deg);
//     -o-transform: rotate(360deg);
//     transform: rotate(360deg);
//   }
// }
// @keyframes rotating {
//   from {
//     -ms-transform: rotate(0deg);
//     -moz-transform: rotate(0deg);
//     -webkit-transform: rotate(0deg);
//     -o-transform: rotate(0deg);
//     transform: rotate(0deg);
//   }
//   to {
//     -ms-transform: rotate(360deg);
//     -moz-transform: rotate(360deg);
//     -webkit-transform: rotate(360deg);
//     -o-transform: rotate(360deg);
//     transform: rotate(360deg);
//   }
// }
