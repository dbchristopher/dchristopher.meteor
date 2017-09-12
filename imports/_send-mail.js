import sparkpostApiKey from './_settings-sparkpost';

const sendMail = `curl -X POST \
https://api.sparkpost.com/api/v1/transmissions \
-H "Authorization: ${sparkpostApiKey}" \
-H "Content-Type: application/json" \
-d '{
  "options": {
    "sandbox": true
  },
  "content": {
    "from": "sandbox@sparkpostbox.com",
    "subject": "Thundercats are GO!!!",
    "text": "Sword of Omens, give me sight BEYOND sight"
  },
  "recipients": [{ "address": "dbchristopher@gmail.com" }]
}`;