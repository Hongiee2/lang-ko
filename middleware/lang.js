// Imports the Google Cloud client library
const language = require("@google-cloud/language");
// Instantiates a client
const client = new language.LanguageServiceClient();

module.exports = {
  async parseEmotions(req, res, next) {
    // The text to analyze
    const { text } = req.query;

    const document = {
      content: text,
      type: "PLAIN_TEXT"
    };

    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({ document: document });
    const sentiment = result.documentSentiment;
    const { score, magnitude } = sentiment;

    const sentences = result.sentences.map(sentence => {
      return {
        sentence: sentence.text.content,
        score: sentence.sentiment.score,
        magnitude: sentence.sentiment.magnitude
      };
    });

    const jsonResult = {
      document: { score, magnitude },
      sentences
    };

    console.log(jsonResult);
    res.json(jsonResult);
  },
  async parseEntities(req, res, next) {
    const { text } = req.query;

    // Prepares a document, representing the provided text
    const document = {
      content: text,
      type: "PLAIN_TEXT"
    };

    // Detects entities in the document
    const [result] = await client.analyzeEntities({ document });

    const entities = result.entities;

    console.log("Entities:");
    entities.forEach(entity => {
      console.log(entity.name);
      console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
      if (entity.metadata && entity.metadata.wikipedia_url) {
        console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
      }
    });

    res.json(entities);
  }
};
