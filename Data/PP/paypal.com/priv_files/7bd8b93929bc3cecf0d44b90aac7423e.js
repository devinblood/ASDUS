Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var isBaseTagReady=Bootstrapper.propertyWatcher.create(function(){return window._gabt});var getMenuButton=function(target){var menuButton,dataHighlight;var currentTarget=target;if(currentTarget.tagName.toLowerCase()==="em")currentTarget=target.parentNode;menuButton=currentTarget.innerHTML.replace(/<(?:.|\n)*?>/gm,"");dataHighlight=currentTarget.getAttribute("data-highlight");
if(dataHighlight!==null){var label=dataHighlight.split("-")[1];menuButton=label+" \x3e "+menuButton}return menuButton.toLowerCase()};isBaseTagReady.change=function(props,isReady){if(isReady){var ga=window.ga;if(!ga)console.error("analytics.js is undefined.");Bootstrapper.on("click","#main-menu a",function(event){var menuName="main menu";var menuButton=getMenuButton(event.target);window.dataLayer.pageType="mpp";ga(function(tracker){ga("PayPal.set","contentGroup1",window.dataLayer.pageType);ga("PayPal.send",
"event","navigation tracking",menuName,menuButton)})});Bootstrapper.on("click","footer a",function(event){var menuName="footer menu";var menuButton=getMenuButton(event.target);window.dataLayer.pageType="mpp";ga(function(tracker){ga("PayPal.set","contentGroup1",window.dataLayer.pageType);ga("PayPal.send","event","navigation tracking",menuName,menuButton)})})}}},2020169,475655);