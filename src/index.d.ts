type TGenericCard = {
    image: string,
    title: string,
    description: string
}

type TConfig = {
    services: TGenericCard[],
    about: TGenericCard[],
    printCategories: TGenericCard[],
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
    loginRedirectUrl: string
};
