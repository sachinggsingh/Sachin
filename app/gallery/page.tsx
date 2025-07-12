import { FocusCards } from "@/components/ui/focus-cards";

export function  Page() {
    const cards = [
        {
            title: "Energy",
            src: "https://i.pinimg.com/736x/c6/30/e2/c630e226c5598547908bc3a8c0f29fd9.jpg",
        },
        {
            title: "Eye on Earth",
            src: "https://i.pinimg.com/736x/69/de/36/69de364d0cf3c04941aae1db57490391.jpg"
        },
        {
            title:"Wallpaper of space",
            src:"https://i.pinimg.com/736x/d6/1d/fe/d61dfea97ca56afd51cb74f795b6035e.jpg"
        },
        {
            title:"Center Light",
            src:"https://i.pinimg.com/736x/bf/68/12/bf68127f5fb8460c4d424265c16c06d8.jpg"
        },{
            title:"Lights that never Stops",
            src:"https://i.pinimg.com/736x/e8/03/16/e8031651eeeac408c1b73782bdac879d.jpg"
        },
        {
            title:"Milky Galaxy",
            src:"https://i.pinimg.com/736x/b6/30/e2/b630e2dd4a3a8414306c854f03ae9a33.jpg"
        },
        {
            title:"God's Eye",
            src:"https://i.pinimg.com/736x/c0/05/3f/c0053fa4d428d1cb36ca96fe31446a41.jpg"
        },
        {
            title:"Can't be Calculated",
            src:"https://i.pinimg.com/1200x/92/5c/7e/925c7e015a3c65daf66b2115d9ce8c5e.jpg"
        },
        {
            title:"Divine Damru",
            src:"https://i.pinimg.com/1200x/46/ff/d1/46ffd1bd5dbf082554727649b60d839c.jpg"
        }
    ];

    return <FocusCards cards={cards} />;
}



export default Page;

