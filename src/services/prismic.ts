import Prismic from '@prismicio/client'

export const getPrismicClient = (req?: unknown) => {
    const prismic = Prismic.client('https://blogpostsnews.prismic.io/api/v2', {
        req,
    })

    return prismic
}
