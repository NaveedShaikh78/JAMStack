export default (req, res) => {
    console.log(req.body)
    res.json(req.body);
}