import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about',(req, res) => {
    res.send('test');
});

export default router;