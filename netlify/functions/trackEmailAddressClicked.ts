import Airtable from 'airtable';

// Watch the data at https://airtable.com/invite/l?inviteId=invzCfGkI9UTBRhiL&inviteToken=58b6a62a8bd8b03245d6c286c43199fdc0ba67f5db1be4f208e776863a97ef1e
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base('appMqQ4vZMxQrUeXT');

export const handler = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  return base('EmailAddressClicked')
    .create({})
    .then((createdRecord) => ({
      statusCode: 200,
      body: JSON.stringify({ msg: { id: createdRecord.id } }),
    }))
    .catch((error) => {
      console.log(error);

      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    });
};
