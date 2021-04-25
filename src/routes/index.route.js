import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Hello from back node with es6'
    });
})

export default router;