import React from "react";

import img1 from "../img/blog/1.jpg";
import img2 from "../img/blog/2.jpg";
import img3 from "../img/blog/3.jpg";
/*import blog1 from "/src/img/blog/1.jpg";
import blog2 from "/src/img/blog/2.jpg";
import blog3 from "/src/img/blog/3.jpg";*/

import A from "../img/can-5.png"

import B1 from "../img/client-1.jpg"
import B2 from "../img/client-2.jpg"
import B3 from "../img/client-4.jpg"

const Top = [
    {
        title: "work process",
        h01: "how it",
        h02: "works"
    }
];

const Account_Data = [
    {
        icon: img1,
        heading: "Create An Account",
        description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.`
    },
    {
        icon: img2,
        heading: "Search Jobs",
        description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.`
    },
    {
        icon: img3,
        heading: "Save & Apply",
        description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best.`
    }
];

const kData = [
    {
        classname:"freelance-status",
        stat:"Available",
        price:"$17/hr",
        pic:A,
        nation:"Australia"
    },
    {
        classname:"freelance-status bg-warning",
        stat:"Available",
        price:"$22/hr",
        pic:A,
        nation:"United States"
    },
    {
        classname:"freelance-status",
        stat:"Available",
        price:"$19/hr",
        pic:A,
        nation:"Bangladesh"
    }
]

const MData = [
    {
        pic:B1,
        name:"Lacky Mole"
    },
    {
        pic:B2,
        name:"Karan Wessi"
    },
    {
        pic:B3,
        name:"Roul Pincha"
    },
    {
        pic:B1,
        name:"Adam Jinna"
    }

]
export { Top, Account_Data, kData, MData };
