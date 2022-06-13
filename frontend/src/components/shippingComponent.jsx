
import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const axios = require('axios');

const circle = document.getElementById("circle");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;
const button = document.querySelector("btn-11");




const update = function (currentActive) {
    stepCircles.forEach((circle, i) => {
        circle.classList.remove("de");

    });





    stepCircles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // progress.style.background = "var(--line-border-fill)";
    const activeCircles = document.querySelectorAll(".active");
    //progress.style.width = ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + '%';
    if (currentActive === 4) {
        stepCircles.forEach((circle, i) => {
            if (i < currentActive) {
                circle.classList.remove("active");
            }
        });
        stepCircles.forEach((circle, i) => {
            if (i < currentActive) {
                circle.classList.add("de");
            }
        });


        const activeCircles = document.querySelectorAll(".active");
        // progress.style.width = ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
        // progress.style.background = "red";

    }


}



async function CheckDel(orderid) {
    var url = 'http://localhost:3000/shipping/' + orderid;
    const result = await axios.get(url).then(function (result) {
        see(result.data);
    });

    async function see(data) {
        console.log(data[0].Status);
        if (data[0].Status === 'DELIVERED') {
            setTimeout(() => {
                update(3);
            }, 1000);

            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        } else if (data[0].Status === 'SHIPPED') {
            update(2);
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        } else if (data[0].Status === 'RETURNED') {
            setTimeout(() => {
                update(4);
            }, 1000);


        } else {
            update(1);
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        }
    }
}



const getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var orderid = "";
const checkk = async () => {
    try {
        orderid = getUrlParameter('id');
        CheckDel(orderid);
    } catch (err) {
        console.log(err.message);
    }

}





const returnShip = async () => {
    try {
        let url = 'http://localhost:3000/shipping/return/' + orderid;
        await axios.patch(url);
        // CheckDel(orderid);
    } catch (err) {
        console.log(err.message);
    }

}
const Shipping = () => {

    return (
        <>
            <div className="container">
                <div className="progress-container">
                    <div className="progress" id="progress"> </div>
                    <div className="circle">Created</div>
                    <div className="circle">Shipped</div>
                    <div className="circle">Delivered</div>
                    <div className="circle">Returned</div>
                </div>
            </div>
            <button className="button-88" onClick={returnShip}>return</button>
            <div>
                .
            </div>
            <button className="button-88" onClick={checkk}>check</button>
        </>


    )

}
export default Shipping;





// async function postt(orderid) {
//     var url;
//     await axios.post('http://localhost:3000/shipping/add', {
//         orderedShipping: orderid,
//     }).then(
//         update(1),
//     )

// };
// async function doall(orderid) {
//     postt(orderid);
    // var url = 'http://localhost:3000/shipping/up1/' + orderid;
    // await axios.patch(url);


// }
// async function doall2(orderid) {
    // var url = 'http://localhost:3000/shipping/up2/' + orderid;
    // await axios.patch(url);

// }

// async function click(orderid) {
//     doall(orderid);
//     doall2(orderid);
// }

//click(orderid);



//update(4);
// async function CheckRet(orderid) {
//   var url = 'http://localhost:5000/shipping/' + orderid;
//   axios.get(url).then(function (result) {
//     see(result.data);
//   });

//   async function see(data) {
//     console.log(data[0].Status);
//     if (data[0].Status === 'RETURNED') {
//       update(4);
//     }  else {
//       setTimeout(() => {
//         CheckRet(orderid);
//       }, 5000);
//     }
//   }
// }


