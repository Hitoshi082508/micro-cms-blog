import sgMail from '@sendgrid/mail'

export default function handler(req, res) {
  if (req.method === 'POST') {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: 'hitoshi082508@gmail.com',
      from: 'hitoshi082508@gmail.com',
      subject: 'お問合せありがとうございました。',
      text: 'お問合せありがとうございました。ご返信致しますのでしばらくお待ちください。',
      html: `<p>名前:${req.body.name}</p><br /><p>電話:${req.body.tel}</p><br /><p>メールアドレス:${req.body.email}</p><br /><p>内容:${req.body.text}</p>`,
    }

    ;(async () => {
      try {
        await sgMail.send(msg)
      } catch (error) {
        alert(error)
        if (error.response) {
          alert(error.response.body)
        }
      }
    })()
  }

  res.status(200)
}
