import api from "../axios";

export class RootService {
    static zip(response) {
        if (response.status !== 200  && response.status !== 201) {
            throw new Error(response.message || 'Что-то пошло не так')
        }
        return response;
    }

    static async postVisit(data) {
        try {
            const data_answer = await api.post(`/api/admin_panel/visit`, data);
            return await this.zip(data_answer);
        } catch (err) {
            throw 'fff'
        }
    }
}
