from google.cloud import language

def get_sentiment_score_text(message):
    client = language.LanguageServiceClient.from_service_account_json('./cred.json')
    
    document = {"content": message, "type_": language.Document.Type.PLAIN_TEXT}
    sentiment_score = client\
                      .analyze_sentiment(document=document)\
                      .document_sentiment\
                      .score
    return sentiment_score

def analyze_entire_page(page):
    score = 0
    counter = 0
    for sentence in page:
        counter += 1
        sentiment_score = get_sentiment_score_text(sentence)
        score += sentiment_score
        #print('Score: {}\n'.format(sentiment_score))
    final_score = round((score / float(counter)),2)
    return final_score

if __name__ == '__main__':
    message = ""
    sentiment_score = get_sentiment_score_text(message)
    print(sentiment_score)