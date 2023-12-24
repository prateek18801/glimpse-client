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

export const sampleConfig: ConfigDataType = {
    services: [
        {
            title: "",
            image: "",
            description: ""
        }
    ],
    about: [
        {
            title: "",
            image: "",
            description: ""
        }
    ],
    printing: [
        {
            title: "",
            image: "",
            description: ""
        }
    ],
    partners: [
        "",
        ""
    ],
    reviews: [
        {
            description: "",
            author: "",
            institute: "",
            rating: 5
        }
    ],
    socials: {
        instagram: "",
        email: "",
        whatsapp: "",
        linkedin: ""
    },
    carousel: [
        "",
        ""
    ],
    loginUrl: ""
}

export default ConfigDataType;
