// Imports the Google Cloud client library
const language = require("@google-cloud/language");

module.exports = {
    async parseGcpLang(req, res, next) {
        // Instantiates a client
        const client = new language.LanguageServiceClient();

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
    }
};
