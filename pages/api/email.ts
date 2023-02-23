// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'

type Data = {
  pass: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const send_data = req.body;
  const { to_name, to, subject, message } = send_data;
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail=.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const mailOption = {
    from: {
      name: '[어디어디]', // 보내는 사람 이름
      address: `${process.env.EMAIL_ADDRESS}` // 보내는 사람 이메일 주소
    },
    to: {
      name: to_name, // 받는 사람 아름
      address: to // 받는 사람 이메일 주소
    },
    subject, // 메일 제목
    html: message // 메일 메시지
  };
  smtpTransport.sendMail(mailOption, (email_err, emal_res) => {
    if (email_err) {
      res.status(200).json({ pass: true })
    } else {
      res.status(200).json({ pass: true })
    }
  });

}
