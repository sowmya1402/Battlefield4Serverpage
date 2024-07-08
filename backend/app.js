require('dotenv').config();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;


const mongoURI = process.env.MONGODB_URI;


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error('MongoDB Atlas connection error:', err));


app.use(cors());


app.use(bodyParser.json());


const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  numPlayers: { type: Number, required: true },
  ping: { type: Number, required: true },
  tickrate: { type: Number, required: true },
  settingsLabel: { type: Array, required: true },
  advancedLabel: { type: Array, required: true },
  rulesLabel: { type: Array, required: true },
});

const Session = mongoose.model('Session', sessionSchema);


app.post('/api/sessions', async (req, res) => {
  const { sessionId, numPlayers, ping, tickrate, settingsLabel, advancedLabel, rulesLabel } = req.body;
  try {
    const newSession = new Session({ sessionId, numPlayers, ping, tickrate, settingsLabel, advancedLabel, rulesLabel });
    await newSession.save();
    res.json({ message: 'Session created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating session' });
  }
});


app.get('/api/sessions/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;
  try {
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.json(session);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving session' });
  }
});

const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "./battlefield4/build");
app.use(express.static(buildpath));


app.listen(port, () => console.log(`Server listening on port ${port}`));
