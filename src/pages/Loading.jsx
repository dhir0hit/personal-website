import '/public/styles/Loading.css';
import React, {Suspense} from "react";

/**
 * Loading Screen with three spinner
 * */
 function Loading(props) {
     return (
         <div id={'Loading-container'}>
             <div className={'circle'}></div>
             <div className={'circle'}></div>
             <div className={'circle'}></div>
         </div>
     )
}


export default Loading;