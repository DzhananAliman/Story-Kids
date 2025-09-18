import {Router} from 'express';

const router = Router();

const advice = [
   {
    name: 'Fuer-Kinder',
    imageUrl: '/img/fuer-kinder.jpg',
   } 
];

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about',(req, res) => {
    res.render('home/about');
});

export default router;