import { Request, Response } from 'express';
import { ClearTokenService } from '../../../services/admin/client/ClearTokenService';

class ClearTokenController {
    async handle(req: Request, res: Response) {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ error: 'ID do usuário não informado.' });
        }

        const clearTokenService = new ClearTokenService();

        try {
            const updatedUser = await clearTokenService.execute({ id: userId });
            return res.json({ message: 'Token removido com sucesso!', user: updatedUser });
        } catch (err: any) {
            return res.status(400).json({ error: err.message });
        }
    }
}

export { ClearTokenController };
