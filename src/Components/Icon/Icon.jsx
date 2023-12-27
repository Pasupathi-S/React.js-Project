

const Icon = (props) => {
           switch (props.iconType) {
                      case "getStarted":
                                 return (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 100 100">
                                                       <g clip-path="url(#a)">
                                                                  <g clip-path="url(#b)">
                                                                             <rect width="75" height="75" x="-1.395" y="63.348" fill="#1AB8DB" fill-opacity=".43" rx="10" transform="rotate(-60 -1.395 63.348)" />
                                                                  </g>
                                                                  <g clip-path="url(#c)">
                                                                             <rect width="70" height="70" x="1" y="46" fill="#1AB8DB" fill-opacity=".75" rx="10" transform="rotate(-40 1 46)" />
                                                                  </g>
                                                                  <g clip-path="url(#d)">
                                                                             <rect width="65" height="65" x="8" y="30" fill="#1AB8DB" fill-opacity=".9" rx="10" transform="rotate(-20 8 30)" />
                                                                             <path fill="#000" fill-opacity=".6" d="M65.284 41.948a17.5 17.5 0 1 1-4.167-5.532l4.115-4.115a1.028 1.028 0 0 1 1.455 1.455l-10.64 10.64-5.82 5.819a1.029 1.029 0 0 1-1.454-1.455l5.039-5.039a7.2 7.2 0 1 0 2.877 5.355 1.028 1.028 0 1 1 2.054-.117 9.259 9.259 0 1 1-3.465-6.704l4.38-4.38a15.409 15.409 0 1 0 3.77 4.96 1.03 1.03 0 0 1 1.856-.887Z" />
                                                                  </g>
                                                       </g>
                                                       <defs>
                                                                  <clipPath id="a">
                                                                             <path fill="#fff" d="M0 0h100v100H0z" />
                                                                  </clipPath>
                                                                  <clipPath id="b">
                                                                             <path fill="#fff" d="m-1.395 63.348 37.5-64.952 64.952 37.5-37.5 64.952z" />
                                                                  </clipPath>
                                                                  <clipPath id="c">
                                                                             <path fill="#fff" d="M1 46 54.623 1.005l44.995 53.623-53.623 44.995z" />
                                                                  </clipPath>
                                                                  <clipPath id="d">
                                                                             <path fill="#fff" d="M8 30 69.08 7.77l22.231 61.08-61.08 22.231z" />
                                                                  </clipPath>
                                                       </defs>
                                            </svg>

                                 )



                      default:
                                 return null;
           }
};

export default Icon;