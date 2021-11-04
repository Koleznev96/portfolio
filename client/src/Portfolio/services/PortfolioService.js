import api from "../axios";

export class PortfolioService {
    static zip(response) {
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(response.message || 'Что-то пошло не так')
        }
        return response;
    }

    static async postSendMessage(data) {
        try {
            const data_answer = await api.post(`/api/portfolio/message`, data);
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }
}
