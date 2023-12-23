const MusicModel = require('../Models/MusicModel');

// Welcome Meassage
module.exports.welcomeMessage = (req, res) => {
    res.send('Welcome to the Music API!'); // shows a welcome message in the default route
  };
  

//Get all the tracks

module.exports.getAllTracks = async (req, res) => {
    try {
        const tracks = await MusicModel.find({}); 
        res.json(tracks); 
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


//For gettin a track by its Id

module.exports.getTrackById = async (req, res) => {
    const { trackId } = req.params; 
    try {
        const track = await MusicModel.findById(trackId);
        if (!track) {
            return res.status(404).json({ error: 'Track not found' });
        }
        res.json(track);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//For posting a new track

module.exports.postTrack = async (req, res) => {
    const { title, artist, album, year } = req.body;
    try {
        const newTrack = await MusicModel.create({ title, artist, album, year });
        res.status(201).json(newTrack);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

//For updating an existing track

module.exports.updateTrack = async (req, res) => {
    const { trackId } = req.params;
    const { title, artist, album, year } = req.body;
    try {
        const track = await MusicModel.findByIdAndUpdate(
            trackId,
            { title, artist, album, year },
            { new: true }
        );
        if (!track) {
            return res.status(404).json({ error: 'Track not found' });
        }
        res.json(track);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

//For deleting an existing track

module.exports.deleteTrack = async (req, res) => {
    const { trackId } = req.params;
    try {
        const track = await MusicModel.findByIdAndDelete(trackId);
        if (!track) {
            return res.status(404).json({ error: 'Track not found' });
        }
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Search a track by title, album, artist 

module.exports.searchTracks = async (req, res) => {
    try {
        const { track, artist, album } = req.query;
        let query = {};

        if (track) {
            query.title = { $regex: track, $options: 'i' };
        }
        if (artist) {
            query.artist = { $regex: artist, $options: 'i' };
        }
        if (album) {
            query.album = { $regex: album, $options: 'i' };
        }

        const results = await MusicModel.find(query);
        res.json(results);
    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

