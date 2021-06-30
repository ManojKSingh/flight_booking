import flight from './flight_result.json';

export default function handler(req, res) {
  console.log("body", req);
  const { from, to } = req.query;
  const result = flight.filter(item => {
    return item.toCity === to && item.fromCity === from;
  })

  res.status(200).json(result);
}
