const get_sentiment_score: any = async (text: string) => {

    const language = require('@google-cloud/language');

    const client = new language.LanguageServiceClient.from_service_account_json('./cred.json');

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    const [result] = await client.analyzeSentiment({document});

    const sentiment = result.documentSentiment;
    console.log(`Score: ${sentiment.score}`);
}


export {get_sentiment_score};