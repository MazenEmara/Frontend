import React from "react";
import axios from "axios";

//import { render } from "@testing-library/react";
const progress = document.getElementById("progress");
const circle = document.getElementById("circle");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;
const button = document.querySelector("btn-11");
const orderid = 'ASKJGJHAHGH';


function update(currentActive) {
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

    progress.style.background = "var(--line-border-fill)";
    const activeCircles = document.querySelectorAll(".active");
    progress.style.width = ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + '%';
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
        progress.style.width = ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
        progress.style.background = "red";

    }


}

async function CheckDel(orderid) {
    var url = 'http://localhost:5000/shipping/' + orderid;
    axios.get(url).then(function (result) {
        see(result.data);
    });

    async function see(data) {
        console.log(data[0].Status);
        if (data[0].Status === 'DELIVERED') {
            update(3);
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        } else if (data[0].Status === 'SHIPPED') {
            update(2);
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        } else if (data[0].Status === 'RETURNED') {
            update(4);
        } else {
            setTimeout(() => {
                CheckDel(orderid);
            }, 5000);
        }
    }
}

async function postt(orderid) {
    var url;
    await axios.post('http://localhost:5000/shipping/add', {
        orderedShipping: orderid,
    }).then(
        update(1),
    )

};
async function doall(orderid) {
    postt(orderid);
    var url = 'http://localhost:5000/shipping/up1/' + orderid;
    await axios.patch(url);


}
async function doall2(orderid) {
    var url = 'http://localhost:5000/shipping/up2/' + orderid;
    await axios.patch(url);

}

async function click(orderid) {
    doall(orderid);
    doall2(orderid);
}

//click(orderid);
CheckDel(orderid);

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




const returnShip = async () => {
    try {
        var url = 'http://localhost:5000/shipping/return/' + orderid;
        await axios.patch(url);
        // CheckDel(orderid);
    } catch (err) {
        console.log(err.message);
    }

}

const Shipping = (props) => {
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
        </>


    )

}
export default Shipping;