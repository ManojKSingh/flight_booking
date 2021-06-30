import flight from './flight_result.json';

export default function handler(req, res) {
  res.status(200).json(flight);
}
