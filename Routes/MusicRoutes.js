const {Router} = require('express');
const { postTrack, updateTrack, getTrackById, deleteTrack, searchTracks, getAllTracks, welcomeMessage } = require('../Controllers/MusicController');


const router = Router();

router.get('/', welcomeMessage);
router.get('/Tracks', getAllTracks);
router.get('/Tracks/:trackId', getTrackById);
router.get('/search', searchTracks);
router.post('/Tracks', postTrack);
router.put('/Tracks/:trackId', updateTrack);
router.delete('/Tracks/:trackId', deleteTrack)


module.exports = router;