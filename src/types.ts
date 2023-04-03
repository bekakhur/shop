export type Itemsp = {
    itemsprops: {
        title: string 
        category: string 
        price: number
        id: number 
        image: string 
    }[]
}


export type Strapi = {
    strap: {
        id: number 
        attributes: {
            title: string 
            price: number 
            desc: string
            type: string
            img: {
                data: {
                    attributes: {
                        url: string 
                    }
                }
            }
            img2: {
                data: {
                    attributes: {
                        url: string 
                    }
                }
            }
            sub_categories: {
                data: {
                    attributes: {
                        title: string 
                    }
                }[]
            }
        }
    }[]
}