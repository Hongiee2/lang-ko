const baseUrl = `${document.location.origin}`;
const emotionApiUrl = text => `${baseUrl}/gcp-lang/emotion?text=${text}`;
const entityApiUrl = text => `${baseUrl}/gcp-lang/entity?text=${text}`;
