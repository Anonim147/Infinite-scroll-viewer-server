import fetch from 'node-fetch';

import { API_URL, API_KEY, IMAGES_PER_PAGE } from './consts';

const resolvers = {
    Query: {
        images: async (parent, args) => {
            const page = args.page ? args.page : 1;

            if (args.query) {
                const url = `${API_URL}/search/photos?page=${page}&per_page=${IMAGES_PER_PAGE}&query=${args.query}&client_id=${API_KEY}`;
                return await fetch(url)
                    .then(res => res.json())
                    .then(res => res.results)
                }

            const url = `${API_URL}/photos?page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`;
            return await fetch(url)
                .then(res => res.json())
        },

        image: async (parent, args) => await fetch(`${API_URL}/photos/${args.id}?client_id=${API_KEY}`)
            .then(res => res.json())
    }
}

export default resolvers;