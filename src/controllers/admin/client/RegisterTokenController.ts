import { Request, Response } from 'express';
import { RegisterTokenService } from '../../../services/admin/client/RegisterTokenService';

class RegisterTokenController {
    async handle(req: Request, res: Response) {
        const { expoPushToken } = req.body;
        const { userId } = req.params; // Agora usamos userId

        const registerTokenService = new RegisterTokenService();

        try {
            const user = await registerTokenService.execute({
                userId,
                expoPushToken,
            });
            return res.json({ message: 'Token salvo com sucesso!', user });
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export { RegisterTokenController };
