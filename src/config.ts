type CardDataType = {
    image: string,
    title: string,
    description: string
}

type ConfigDataType = {
    services: CardDataType[],
    about: CardDataType[],
    printing: CardDataType[],
    partners: string[],
    reviews: {
        rating: number,
        author: string,
        institute: string,
        description: string
    }[],
    socials: {
        instagram: string,
        email: string,
        whatsapp: string,
        linkedin: string
    },
    carousel: string[],
    loginUrl: string
};

export const defaultConfig: ConfigDataType = {
    services: [
        {
            title: "Direct Print Mail",
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Delivering communication solutions, ensuring your messages reach the intended recipients seamlessly and with maximum impact."
        },
        {
            title: "Merchandise For Fairs",
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Creating customized merchandise that embodies your brand identity, captivates your target audience, and leaves a lasting impression."
        },
        {
            title: "Welcome Kit Programs",
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            description: "Managing exceptional welcome kits that foster a sense of belonging and appreciation among new members."
        }
    ],
    about: [
        {
            title: "Specializes",
            image: "",
            description: "Glimpse Education Private Limited specializes in providing comprehensive services in the field of direct print mail, merchandise for fairs, and welcome kits."
        },
        {
            title: "Commitment",
            image: "",
            description: "Their commitment to excellence and attention to detail has established them as a trusted partner for organizations seeking superior solutions for their promotional needs."
        },
        {
            title: "Tailored solutions",
            image: "",
            description: "We offer tailored solutions for designing, printing, and distributing promotional materials that cater to the unique requirements of each client."
        },
        {
            title: "Customized merchandise",
            image: "",
            description: "Glimpse Education Private Limited provides customized merchandise for fairs and events that embodies their clients' brand identity, captivates their target audience, and leaves a lasting impression."
        },
        {
            title: "Expertise",
            image: "",
            description: "The company has expertise in managing welcome kit programs and has successfully partnered with esteemed institutions such as Saint Louis University to create exceptional welcome kits."
        },
        {
            title: "Value",
            image: "",
            description: "We value professionalism, innovation, and client satisfaction above all else and have forged strong partnerships with globally renowned organizations such as Globally Recruit, Globalshala, and Excelerate."
        },
        {
            title: "Dedicated team",
            image: "",
            description: "Glimpse Education Private Limited's dedicated team of experts is always ready to go the extra mile to ensure that clients' expectations are exceeded."
        },
        {
            title: "Timely delivery",
            image: "",
            description: "Their commitment to excellence, tailored solutions, and timely delivery sets them apart in the industry and guarantees a remarkable experience for their clients."
        },
    ],
    printing: [
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        },
        {
            image: "https://image.made-in-china.com/202f0j00zQnoVGjBYfbp/Hot-Sale-Cheap-Colorful-Eco-Friendly-Paper-Bag-Printing-for-Clothes-Elegant-Gift-Goodies-Color-Packaging-Paper-Bag.webp",
            title: "Paper Bags",
            description: "lorem ipsum dolor sit amet"
        }
    ],
    partners: [
        "url:image",
        "url:image"
    ],
    reviews: [
        {
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            institute: "Ajay Kumar Garg Engineering College",
            rating: 4
        },
        {
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            institute: "Ajay Kumar Garg Engineering College",
            rating: 5
        },
        {
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            institute: "Ajay Kumar Garg Engineering College",
            rating: 3
        },
        {
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            institute: "Ajay Kumar Garg Engineering College",
            rating: 5
        },
        {
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt, recusandae voluptates at perspiciatis ipsam culpa eius in accusamus eveniet, vitae tempora explicabo harum quae.",
            author: "Prateek Chaurasia",
            institute: "Ajay Kumar Garg Engineering College",
            rating: 2
        }
    ],
    socials: {
        instagram: "",
        email: "",
        whatsapp: "",
        linkedin: ""
    },
    carousel: [
        "url:image",
        "url:image"
    ],
    loginUrl: "https://dashboard.glimpse.net.in"
}

export default ConfigDataType;
