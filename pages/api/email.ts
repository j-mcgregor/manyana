// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';
import { hasCookie } from 'cookies-next';
import type { NextApiHandler } from 'next';
import hubspot_key from '../../hubspot_key.json';

const emailHandler: NextApiHandler = async (req, res) => {
  if (req.method !== 'POST')
    return res.status(503).send('Method not supported');

  const consent = hasCookie('manyana-consent', { req });

  try {
    const formData = {
      submittedAt: Date.now().toString(),
      fields: [
        {
          name: 'fullname',
          value: req.body?.fullName
        },
        {
          name: 'email',
          value: req.body?.email
        },
        {
          name: 'phone',
          value: req.body?.phone
        }
      ],
      context: {
        pageUri: 'manyanalabs.com#section-contact',
        pageName: 'Homepage'
      },
      legalConsentOptions: {
        // Include this object when GDPR options are enabled
        consent: {
          consentToProcess: consent,
          text: `I${
            consent && " don't"
          } agree to allow Example Company to store and process my personal data.`
        }
      }
    };

    const url = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${hubspot_key.portal_id}/${hubspot_key.form_id}`;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        // prettier-ignore
        'Authorization': `Bearer ${hubspot_key.api_key}`
      }
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ ok: false, message: 'Something went wrong' });
    }

    const data = await response.json();

    return res.status(response.status).json({ ok: true, data });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, message: 'Internal server error' });
  }
};

export default emailHandler;
