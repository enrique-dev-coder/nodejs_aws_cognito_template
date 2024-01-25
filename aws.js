import AWS from 'aws-sdk';
import { config } from 'dotenv';
config();

AWS.config.update({
  region: 'us-east-1', // Reemplaza con la región de tu elección
  accessKeyId: process.env.ACCESS,
  secretAccessKey: process.env.ACCESS_SECRET,
});

export default AWS;
