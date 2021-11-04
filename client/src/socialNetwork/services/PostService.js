import api from "../axios";

export class PostService {
    static zip(response) {
        if (response.status !== 200  && response.status !== 201) {
            throw new Error(response.message || 'Что-то пошло не так')
        }
        return response;
    }

    static async postUploadImage(image, token) {
        try {
            const formData = await new FormData();
            formData.append('image', image)
            const data_answer = await api.post(`/api/social_network/upload_image`, formData, {headers: {"Authorization" : token}});
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async postCreatPost(data, token) {
        try {
            const data_answer = await api.post(`/api/social_network/creat_post`, data, {headers: {"Authorization" : token}});
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async getPosts() {
        try {
            const data_answer = await api.get(`/api/social_network/posts`);
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async postLike(data, status) {
        try {
            let data_answer;
            if (status) {
                data_answer = await api.post(`/api/social_network/add_like`, data);
            } else {
                data_answer = await api.post(`/api/social_network/del_like`, data);
            }
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }
}
