import api from "../axios";

export class AdminPanelService {
    static zip(response) {
        if (response.status !== 200  && response.status !== 201) {
            throw new Error(response.message || 'Что-то пошло не так')
        }
        return response;
    }

    static async getAllData() {
        try {
            const data_answer = await api.get(`/api/admin_panel/sites`);
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }
}
