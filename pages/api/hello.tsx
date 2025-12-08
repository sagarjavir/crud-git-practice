import connectMongo from '../../src/app/components/conn';

export default function handler(req, res) {
connectMongo()
// GET, POST, PUT, DELETE
res.status(200).json({name: 'Sagar Javir'});
}