<template>
  <nav>
    <!-- Menu bureau -->

    <div class="bg-warm">
      <div class="mx-auto max-w-7xl">
        <div class="flex justify-between">
          <!-- Menu -->
          <div class="flex space-x-4">
            <!-- Logo -->
            <div class="flex items-center py-5 px-2">
              <RouterLink to="/"
                ><svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="30" r="24" fill="#FDBA74" />
                  <path
                    d="M40.9616 31.301L41.8006 29.7653L45.2 23.5419H48.2554L44.7855 29.7653L43.9405 31.2818L39.4601 39.3166L35.9317 40.508L40.9616 31.301Z"
                    fill="#D13E3E"
                  />
                  <path d="M48.1093 29.7654L46.0521 31.293V31.3011H43.9748L43.9405 31.2819L44.7856 29.7654H48.1093Z" fill="#FFF100" />
                  <path
                    d="M29.9843 23.5419H31.2337H33.0821H45.2001L41.8008 29.7653H38.6505L41.4922 24.7706H21.7386L21.7416 23.5419H28.3537H29.9843Z"
                    fill="#D13E3E"
                  />
                  <path
                    d="M41.8007 29.7653L40.9617 31.301H38.3076H34.7812L37.2871 26.2487V26.1942H39.1244L37.1328 29.7653H38.6504H41.8007Z"
                    fill="#FFF100"
                  />
                  <path
                    d="M41.4921 24.7706L38.6504 29.7653H37.1328L39.1244 26.1942H37.287H33.1304H31.3566H29.9842H28.3536H21.7334L21.7385 24.7706H41.4921Z"
                    fill="#D13E3E"
                  />
                  <path d="M40.9617 31.301L35.9318 40.508V40.509L33.082 41.4712L38.3076 31.301H40.9617Z" fill="#D13E3E" />
                  <path
                    d="M33.1304 26.1942V26.2487L33.1254 34.6742C33.1254 35.2447 32.5486 35.7051 31.8377 35.7051H25.044L24.2686 34.545H29.2632C30.4451 34.545 31.401 33.9806 31.401 33.2829L31.3567 26.2477V26.1942H33.1304Z"
                    fill="#41A639"
                  />
                  <path
                    d="M33.081 23.5298V23.5419H31.2336V21.5024C31.2336 20.4433 30.2716 19.5841 29.0826 19.5841H21.7546V18.6754V18.6279L29.3821 18.6724C31.4252 18.6724 33.0789 19.5982 33.0789 20.7421L33.081 23.5298Z"
                    fill="#41A639"
                  />
                  <path
                    d="M29.9841 31.301V26.1942H31.3566V26.2477L31.4009 33.2829C31.4009 33.9806 30.445 34.545 29.2631 34.545H24.2685L23.2087 32.7519H23.2178H28.9576C29.5253 32.7468 29.9841 32.1006 29.9841 31.301Z"
                    fill="#41A639"
                  />
                  <path
                    d="M31.2336 23.4883V23.5439H29.9842V21.9486C29.9842 21.0824 29.3912 20.3806 28.6591 20.3806H21.7526V19.5861H29.0806C30.2695 19.5861 31.2316 20.4432 31.2316 21.5044L31.2336 23.4883Z"
                    fill="#41A639"
                  />
                  <path
                    d="M29.9841 26.2477V31.296C29.9841 32.0956 29.5253 32.7418 28.9576 32.7418H23.2178H23.2087L22.2295 31.0849H27.2241C27.8483 31.0849 28.3536 30.6962 28.3536 30.2166V26.1942H29.9841V26.2477Z"
                    fill="#41A639"
                  />
                  <path
                    d="M28.3536 21.6043H21.7486V20.3806H28.6551C29.3872 20.3806 29.9802 21.0823 29.9802 21.9486V23.5418H28.3536V21.6043Z"
                    fill="#41A639"
                  />
                  <path d="M28.2036 21.7544V23.3919H21.8921L21.898 21.7544H28.2036Z" fill="#1D1D1B" stroke="black" stroke-width="0.3" />
                  <path
                    d="M21.7335 26.1941L21.7387 24.7705L21.7418 23.5418L21.7492 21.6043L21.7534 20.3806L21.7555 19.586L21.7586 18.6793"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path d="M21.7335 20.3807H21.7526H28.6592" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path
                    d="M21.7335 26.1942H28.3536H29.9842H31.3567H33.1304H37.2871H39.1244"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path d="M21.7335 21.6044H21.7486H28.3536H28.403" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M28.3536 21.6044V23.5419" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M29.9842 21.9486V23.5418V23.5933" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path
                    d="M21.7335 23.542H21.7415H28.3536H29.9842H31.2336H33.082H45.2H48.2555"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path d="M21.6891 24.7708H21.7385H41.4921" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M21.7062 18.632H21.7577L29.3852 18.6763" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M33.082 20.7461V23.5297" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M29.9842 26.2478V31.3011V31.5666" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M31.3566 26.2478L31.4016 33.283" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M28.3536 26.2488V30.2268" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M22.2296 31.095H27.2242" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M23.2178 32.7468H28.9577" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M24.2686 34.545H29.2632" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path
                    d="M28.3536 30.2268C28.3536 30.7064 27.8494 31.0951 27.2242 31.0951"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M31.401 33.282C31.401 33.9796 30.445 34.544 29.2632 34.544"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M29.9842 31.301C29.9842 32.1007 29.5254 32.7468 28.9576 32.7468"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path d="M22.2296 31.095L23.2087 32.7518L24.2685 34.5449" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M33.1304 26.2488L33.1254 34.6743" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path
                    d="M33.1254 34.6743C33.1254 35.2448 32.5486 35.7052 31.8377 35.7052"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path d="M31.8376 35.7051H25.044H25.0067" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M24.2686 34.545L25.044 35.7051" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M21.7335 19.5862H21.7546H29.0827" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M31.2336 21.5024V23.4864" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path
                    d="M29.9842 21.9487C29.9842 21.0824 29.3912 20.3807 28.6591 20.3807"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M31.2336 21.5024C31.2336 20.4433 30.2716 19.5841 29.0827 19.5841"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M33.081 20.7462C33.081 19.6022 31.4272 18.6764 29.3842 18.6764"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M45.2 23.542L41.8007 29.7654L40.9617 31.3011L35.9318 40.5081"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M33.082 41.4711L35.9317 40.5089V40.5079L39.4601 39.3165"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M48.2555 23.542L44.7856 29.7654L43.9405 31.2819L39.4602 39.3167"
                    stroke="#1D1D1B"
                    stroke-width="0.3"
                    stroke-miterlimit="10"
                  />
                  <path d="M39.1243 26.1942L37.1328 29.7653" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M37.287 26.2488L34.7811 31.301" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M34.7811 31.301H38.3075H40.9616H41.0594" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M37.1328 29.7654H38.6504H41.8007" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M44.7855 29.7654H48.1092" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M43.9748 31.301H46.0521H46.0904" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M48.1092 29.7654L46.0521 31.293" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M41.4921 24.7708L38.6504 29.7655" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" />
                  <path d="M33.082 41.4712L38.3075 31.301" stroke="#1D1D1B" stroke-width="0.3" stroke-miterlimit="10" /></svg
              ></RouterLink>
            </div>
            <div></div>
            <div></div>
            <!-- Menu -->

            <div class="ipad_pro:flex hidden items-center space-x-1 text-black">
              <RouterLink class="py-5 px-2 hover:text-cream" to="/">Home</RouterLink>
              <RouterLink class="py-5 px-2 hover:text-cream" to="/Programation">Programme</RouterLink>
              <RouterLink class="py-5 px-2 hover:text-cream" to="/Artistes">Inviter</RouterLink>
              <RouterLink class="py-5 px-2 hover:text-cream" to="/Festival">Festival</RouterLink>
              <RouterLink class="py-5 px-2 hover:text-cream" to="/Concert">Concert <br />F.A.Q</RouterLink>
            </div>
          </div>

          <!-- Bouton menu -->
          <div class="ipad_pro:hidden flex items-center">
            <button @click="menuVisible = !menuVisible" class="py-5 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-10 text-cream" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>


    <!-- Menu mobile -->
    <div class=" z-50 top- fixed left-0 h-screen w-screen bg-gradient-to-tr from-transparent to-black " :class="{ hidden: menuVisible }">
      <div class="ipad_pro:hidden fixed top-0  text-black">

          <div class="flex flex-col bg-cream items-center border-t-4 border-black ">
                <HomeIcon class="w-9"/>
               <RouterLink  class="block  py-2 px-4 hover:text-white" to="/">Home</RouterLink>
          </div>
          <div class="flex flex-col bg-cream items-center border-t-4 border-black">
                <ClockIcon class="w-9"/>
              <RouterLink class="block py-2 px-4 hover:text-white" to="/Programation">Programme</RouterLink>
          </div>
       
       <div class="flex flex-col bg-cream items-center border-t-4 border-black">
                <UsersIcon class="w-9"/>
            <RouterLink class="block py-2 px-4 hover:text-white" to="/Artistes">Inviter</RouterLink>
          </div>

            <div class="flex flex-col bg-cream items-center border-t-4 border-black">
               <svg
  width="101"
  height="101"
  viewBox="0 0 101 101"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="w-[51px] h-[51px]"
  preserveAspectRatio="none"
>
  <circle cx="50.5" cy="50.5" r="50.5" fill="#020202"></circle>
  <path
    d="M63.0445 53.1566L64.8099 49.9293L71.9626 36.8502H78.3918L71.0905 49.9293L69.3124 53.1163L59.885 70.002L52.4607 72.5058L63.0445 53.1566Z"
    fill="#626262"
  ></path>
  <path
    d="M78.084 49.9292L73.7554 53.1396V53.1565H69.3844L69.3123 53.1162L71.0904 49.9292H78.084Z"
    fill="white"
  ></path>
  <path
    d="M39.9458 36.8502H42.5748H46.4641H71.9624L64.8096 49.9293H58.181L64.1604 39.4325H22.5955L22.6018 36.8502H36.5148H39.9458Z"
    fill="#626262"
  ></path>
  <path
    d="M64.8097 49.9293L63.0444 53.1566H57.4597H50.0396L55.3123 42.5389V42.4243H59.1784L54.9877 49.9293H58.1811H64.8097Z"
    fill="white"
  ></path>
  <path
    d="M64.1605 39.4325L58.1811 49.9293H54.9877L59.1784 42.4243H55.3124H46.5661H42.8338H39.9459H36.5149H22.585L22.5956 39.4325H64.1605Z"
    fill="#626262"
  ></path>
  <path
    d="M63.0442 53.1566L52.4605 72.5058V72.5079L46.4641 74.53L57.4595 53.1566H63.0442Z"
    fill="#626262"
  ></path>
  <path
    d="M46.566 42.4243V42.5389L46.5554 60.2457C46.5554 61.4446 45.3417 62.4121 43.8458 62.4121H29.5509L27.9192 59.9741H38.4287C40.9155 59.9741 42.927 58.788 42.927 57.3218L42.8337 42.5368V42.4243H46.566Z"
    fill="white"
  ></path>
  <path
    d="M46.4622 36.8248V36.8502H42.575V32.5641C42.575 30.3383 40.5508 28.5326 38.0491 28.5326H22.6296V26.6229V26.5232L38.6793 26.6166C42.9782 26.6166 46.458 28.5623 46.458 30.9663L46.4622 36.8248Z"
    fill="white"
  ></path>
  <path
    d="M39.9457 53.1566V42.4243H42.8335V42.5368L42.9269 57.3218C42.9269 58.788 40.9153 59.9741 38.4285 59.9741H27.919L25.689 56.2057H25.7081H37.7856C38.9802 56.1951 39.9457 54.8371 39.9457 53.1566Z"
    fill="white"
  ></path>
  <path
    d="M42.5749 36.7377V36.8544H39.9459V33.5019C39.9459 31.6813 38.6982 30.2066 37.1578 30.2066H22.6252V28.5367H38.0447C40.5464 28.5367 42.5706 30.3382 42.5706 32.5683L42.5749 36.7377Z"
    fill="white"
  ></path>
  <path
    d="M39.9459 42.5368V53.146C39.9459 54.8265 38.9805 56.1845 37.7859 56.1845H25.7083H25.6892L23.6289 52.7026H34.1384C35.4518 52.7026 36.5149 51.8856 36.5149 50.8778V42.4243H39.9459V42.5368Z"
    fill="white"
  ></path>
  <path
    d="M36.5148 32.7785H22.6167V30.2068H37.1492C38.6897 30.2068 39.9374 31.6815 39.9374 33.502V36.8503H36.5148V32.7785Z"
    fill="white"
  ></path>
  <path
    d="M36.015 33.2783V36.3501H23.1039L23.1151 33.2783H36.015Z"
    fill="white"
    stroke="black"
  ></path>
  <path
    d="M22.5847 42.4243L22.5953 39.4325L22.6017 36.8502L22.6165 32.7783L22.625 30.2067L22.6293 28.5368L22.6356 26.6313"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path d="M22.5847 30.2065H22.625H37.1576" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path
    d="M22.5847 42.4242H36.5147H39.9457H42.8335H46.5658H55.3121H59.1781"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path d="M22.5847 32.7783H22.6165H36.5147H36.6186" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M36.5149 32.7783V36.8501" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M39.9458 33.5018V36.8501V36.9583" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path
    d="M22.5847 36.8502H22.6017H36.5147H39.9457H42.5747H46.464H71.9623H78.3915"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path d="M22.4915 39.4325H22.5954H64.1603" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M22.5276 26.5315H22.6358L38.6855 26.6249" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M46.4641 30.9747V36.8247" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M39.9458 42.5366V53.1565V53.7145" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M42.834 42.5366L42.9273 57.3217" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M36.5149 42.5388V50.8989" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M23.6289 52.7238H34.1384" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M25.708 56.1951H37.7856" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M27.9194 59.974H38.4289" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path
    d="M36.5149 50.8989C36.5149 51.9068 35.454 52.7237 34.1384 52.7237"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M42.927 57.3196C42.927 58.7858 40.9155 59.9719 38.4287 59.9719"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M39.9457 53.1566C39.9457 54.8371 38.9802 56.1951 37.7856 56.1951"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M23.6289 52.7238L25.6892 56.2057L27.9193 59.9741"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path d="M46.566 42.5388L46.5554 60.2456" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path
    d="M46.5555 60.2456C46.5555 61.4445 45.3419 62.412 43.8459 62.412"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path d="M43.8458 62.4121H29.5509H29.4724" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M27.9194 59.974L29.5511 62.412" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M22.5847 28.5369H22.6293H38.0488" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M42.575 32.5641V36.7335" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path
    d="M39.9458 33.5018C39.9458 31.6812 38.6982 30.2065 37.1577 30.2065"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M42.575 32.5641C42.575 30.3383 40.5507 28.5326 38.0491 28.5326"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M46.4618 30.9747C46.4618 28.5706 42.982 26.6249 38.6831 26.6249"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M71.9626 36.8502L64.8099 49.9293L63.0445 53.1566L52.4607 72.5058"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M46.4641 74.5301L52.4605 72.508V72.5059L59.8848 70.0021"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path
    d="M78.3915 36.8502L71.0902 49.9293L69.3121 53.1163L59.8848 70.002"
    stroke="#1D1D1B"
    stroke-miterlimit="10"
  ></path>
  <path d="M59.1782 42.4242L54.9875 49.9292" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M55.3123 42.5388L50.0396 53.1565" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M50.0396 53.1566H57.4597H63.0444H63.2502" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M54.9875 49.9293H58.1809H64.8096" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M71.0903 49.9293H78.0839" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M69.3845 53.1566H73.7555H73.8362" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M78.0837 49.9293L73.7551 53.1397" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M64.1605 39.4325L58.1812 49.9293" stroke="#1D1D1B" stroke-miterlimit="10"></path>
  <path d="M46.4641 74.53L57.4595 53.1566" stroke="#1D1D1B" stroke-miterlimit="10"></path>
</svg>
           <RouterLink class="block bg-cream py-2 px-4 hover:text-white" to="/Festival">Festival</RouterLink>
          </div>
        
        
       
            <div class="flex flex-col bg-cream items-center border-t-4 border-black ">
                <SparklesIcon class="w-9"/>
             <RouterLink class="block bg-cream py-2 px-4 hover:text-white" to="/Concert">Concert </RouterLink>
          </div>

       
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(true);
</script>

<script>
import { HomeIcon,ClockIcon,UsersIcon,SparklesIcon } from "@heroicons/vue/solid";
export default {
  components: { HomeIcon,ClockIcon,UsersIcon,SparklesIcon },
};
</script>
